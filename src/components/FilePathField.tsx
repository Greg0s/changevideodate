import { Info } from "lucide-react";
import { useState } from "react";
import { defaultPath, pathTooltip } from "../lib/os";
import { SANS_FONT } from "../lib/theme";
import type { OsId, Theme } from "../lib/types";

interface FilePathFieldProps {
  os: OsId;
  value: string;
  onChange: (value: string) => void;
  theme: Theme;
}

export function FilePathField({ os, value, onChange, theme }: FilePathFieldProps) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const tip = pathTooltip(os);

  return (
    <div className="sm:col-span-3 relative">
      <label style={{ color: theme.textMuted, fontFamily: SANS_FONT }} className="text-xs flex items-center gap-1.5 mb-1.5">
        Chemin du fichier
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
                Récupérer le chemin :
              </p>
              <ol className="list-decimal list-inside space-y-1 mb-3">
                {tip.steps.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ol>
              <div
                style={{ background: theme.inputBg, borderColor: theme.border, color: theme.textMuted }}
                className="border rounded px-2.5 py-2 text-xs space-y-1"
              >
                {tip.menu.map((m, idx) => (
                  <div key={idx} style={idx === tip.highlight ? { color: theme.accent } : {}}>
                    {m}
                  </div>
                ))}
              </div>
            </div>
          )}
        </span>
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ background: theme.inputBg, borderColor: theme.border, color: theme.text }}
        className="w-full rounded-md border px-3 py-2 text-xs sm:text-sm outline-none"
        placeholder={defaultPath(os)}
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
      />
    </div>
  );
}
