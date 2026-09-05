import { useLayoutEffect, useRef, useState } from "react";
import { OS_OPTIONS } from "../lib/os";
import type { Translation } from "../lib/i18n/translations";
import type { OsId, Theme } from "../lib/types";

interface OsSelectorProps {
  os: OsId;
  onChange: (os: OsId) => void;
  theme: Theme;
  t: Translation;
}

export function OsSelector({ os, onChange, theme, t }: OsSelectorProps) {
  const buttonRefs = useRef<Partial<Record<OsId, HTMLButtonElement | null>>>({});
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  useLayoutEffect(() => {
    function update() {
      const el = buttonRefs.current[os];
      if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [os, t]);

  return (
    <div
      role="tablist"
      aria-label={t.os.ariaLabel}
      style={{ borderColor: theme.border, background: theme.panelHead }}
      className="relative inline-flex p-1 rounded-lg border mb-4 gap-1"
    >
      {indicator && (
        <div
          aria-hidden
          style={{
            left: indicator.left,
            width: indicator.width,
            background: theme.accent,
            transition: "left 0.25s ease, width 0.25s ease, background-color 0.25s ease",
          }}
          className="absolute top-1 bottom-1 rounded-md"
        />
      )}
      {OS_OPTIONS.map((opt) => (
        <button
          key={opt.id}
          ref={(el) => {
            buttonRefs.current[opt.id] = el;
          }}
          type="button"
          role="tab"
          aria-selected={os === opt.id}
          onClick={() => onChange(opt.id)}
          style={{ color: os === opt.id ? theme.accentText : theme.textMuted }}
          className="relative z-10 px-3 py-1.5 rounded-md text-xs sm:text-sm transition-colors cursor-pointer"
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
