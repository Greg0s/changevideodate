import { Info } from "lucide-react";
import { useState } from "react";
import { defaultPath, withFileName } from "../lib/os";
import { SANS_FONT } from "../lib/theme";
import type { Translation } from "../lib/i18n/translations";
import type { OsId, Theme } from "../lib/types";

interface FilePathFieldProps {
  os: OsId;
  value: string;
  onChange: (value: string) => void;
  theme: Theme;
  t: Translation;
}

export function FilePathField({ os, value, onChange, theme, t }: FilePathFieldProps) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const tip = t.pathTooltip[os];

  function handleDragOver(e: React.DragEvent<HTMLInputElement>) {
    if (!e.dataTransfer.types.includes("Files")) return;
    e.preventDefault();
    setIsDragOver(true);
  }

  function handleDrop(e: React.DragEvent<HTMLInputElement>) {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (!file) return;
    onChange(withFileName(os, value, file.name));
  }

  return (
    <div className="sm:col-span-3 relative">
      <label style={{ color: theme.textMuted, fontFamily: SANS_FONT }} className="text-xs flex items-center gap-1.5 mb-1.5">
        {t.filePath.label}
        <span
          onMouseEnter={() => setTooltipOpen(true)}
          onMouseLeave={() => setTooltipOpen(false)}
          onFocus={() => setTooltipOpen(true)}
          onBlur={() => setTooltipOpen(false)}
          tabIndex={0}
          className="relative inline-flex cursor-help"
        >
          <Info size={12} style={{ color: theme.textMuted }} />
          {tooltipOpen && (
            <div
              style={{ background: theme.panel, borderColor: theme.border, color: theme.text, fontFamily: SANS_FONT }}
              className="absolute left-0 top-5 z-10 w-64 rounded-lg border p-3 text-xs shadow-lg"
            >
              <p style={{ color: theme.textMuted }} className="mb-2">
                {t.filePath.getPath}
              </p>
              <ol className="list-decimal list-inside space-y-1">
                {tip.steps.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ol>
            </div>
          )}
        </span>
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={(e) => e.target.select()}
        onDragOver={handleDragOver}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={handleDrop}
        style={{
          background: theme.inputBg,
          borderColor: isDragOver ? theme.accent : theme.border,
          color: theme.text,
        }}
        className="w-full rounded-md border px-3 py-2 text-xs sm:text-sm outline-none transition-colors"
        placeholder={defaultPath(os)}
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
      />
      <p style={{ color: isDragOver ? theme.accent : theme.textMuted, fontFamily: SANS_FONT }} className="text-[11px] mt-1">
        {isDragOver ? t.filePath.dropActive : t.filePath.dragHint}
      </p>
    </div>
  );
}
