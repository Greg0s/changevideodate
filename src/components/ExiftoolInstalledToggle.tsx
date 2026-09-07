import { Info } from "lucide-react";
import { useState } from "react";
import { SANS_FONT } from "../lib/theme";
import type { Translation } from "../lib/i18n/translations";
import type { Theme } from "../lib/types";

interface ExiftoolInstalledToggleProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  theme: Theme;
  t: Translation;
}

export function ExiftoolInstalledToggle({ checked, onChange, theme, t }: ExiftoolInstalledToggleProps) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <div style={{ fontFamily: SANS_FONT }} className="flex items-center gap-2 mb-4">
      <label className="flex items-center gap-2 text-xs sm:text-sm cursor-pointer" style={{ color: theme.text }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          style={{ accentColor: theme.accent }}
        />
        {t.install.alreadyInstalled}
      </label>
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
            style={{ background: theme.panel, borderColor: theme.border, color: theme.text }}
            className="absolute left-0 top-5 z-10 w-56 rounded-lg border p-3 text-xs shadow-lg"
          >
            {t.install.tooltip}
          </div>
        )}
      </span>
    </div>
  );
}
