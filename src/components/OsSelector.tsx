import { OS_OPTIONS } from "../lib/os";
import type { OsId, Theme } from "../lib/types";

interface OsSelectorProps {
  os: OsId;
  onChange: (os: OsId) => void;
  theme: Theme;
}

export function OsSelector({ os, onChange, theme }: OsSelectorProps) {
  return (
    <div
      role="tablist"
      aria-label="Système d'exploitation"
      style={{ borderColor: theme.border, background: theme.panelHead }}
      className="inline-flex p-1 rounded-lg border mb-4 gap-1"
    >
      {OS_OPTIONS.map((opt) => (
        <button
          key={opt.id}
          type="button"
          role="tab"
          aria-selected={os === opt.id}
          onClick={() => onChange(opt.id)}
          style={
            os === opt.id
              ? { background: theme.accent, color: theme.accentText }
              : { color: theme.textMuted }
          }
          className="px-3 py-1.5 rounded-md text-xs sm:text-sm transition-colors cursor-pointer"
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
