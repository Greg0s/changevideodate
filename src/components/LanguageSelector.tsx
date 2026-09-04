import { Languages } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { LANGUAGES, type LocaleCode } from "../lib/i18n/languages";
import type { Translation } from "../lib/i18n/translations";
import { SANS_FONT } from "../lib/theme";
import type { Theme } from "../lib/types";

interface LanguageSelectorProps {
  theme: Theme;
  locale: LocaleCode;
  onChange: (locale: LocaleCode) => void;
  t: Translation;
}

export function LanguageSelector({ theme, locale, onChange, t }: LanguageSelectorProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  function closeMenu() {
    setOpen(false);
    setQuery("");
  }

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(e: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenu();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (open) searchRef.current?.focus();
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return LANGUAGES;
    return LANGUAGES.filter(
      (lang) =>
        lang.nativeName.toLowerCase().includes(q) ||
        lang.englishName.toLowerCase().includes(q) ||
        lang.code.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div ref={containerRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.language.selectorLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{ borderColor: theme.border, color: theme.textMuted }}
        className="p-2 rounded-md border hover:opacity-80 transition-opacity cursor-pointer"
      >
        <Languages size={16} />
      </button>
      {open && (
        <div
          role="listbox"
          aria-label={t.language.selectorLabel}
          style={{ background: theme.panel, borderColor: theme.border, fontFamily: SANS_FONT }}
          className="absolute right-0 top-11 z-20 w-56 rounded-lg border shadow-lg overflow-hidden"
        >
          <div style={{ borderColor: theme.border }} className="border-b p-2">
            <input
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.language.searchPlaceholder}
              style={{ background: theme.inputBg, borderColor: theme.border, color: theme.text }}
              className="w-full rounded-md border px-2.5 py-1.5 text-xs outline-none"
            />
          </div>
          <div className="max-h-64 overflow-y-auto py-1">
            {filtered.length === 0 && (
              <p style={{ color: theme.textMuted }} className="px-3 py-2 text-xs">
                {t.language.noResults}
              </p>
            )}
            {filtered.map((lang) => (
              <button
                key={lang.code}
                type="button"
                role="option"
                aria-selected={locale === lang.code}
                onClick={() => {
                  onChange(lang.code);
                  closeMenu();
                }}
                style={
                  locale === lang.code
                    ? { background: theme.panelHead, color: theme.text }
                    : { color: theme.textMuted }
                }
                className="w-full flex items-center justify-between gap-2 px-3 py-1.5 text-xs text-left hover:opacity-80 cursor-pointer"
              >
                <span>{lang.nativeName}</span>
                {lang.nativeName !== lang.englishName && (
                  <span className="text-[10px] opacity-70">{lang.englishName}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
