import { ChevronDown, Map as MapIcon } from "lucide-react";
import { Suspense, lazy, useState } from "react";
import type { Translation } from "../lib/i18n/translations";
import type { Theme } from "../lib/types";

const LocationMapPanel = lazy(() => import("./LocationMapPanel").then((m) => ({ default: m.LocationMapPanel })));

interface LocationMapProps {
  theme: Theme;
  t: Translation;
  isDark: boolean;
  lat: string;
  lon: string;
  onLatChange: (value: string) => void;
  onLonChange: (value: string) => void;
}

export function LocationMap({ theme, t, isDark, lat, lon, onLatChange, onLonChange }: LocationMapProps) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderColor: theme.border }} className="border rounded-md mt-3 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-3 py-2 text-xs cursor-pointer"
        style={{ color: theme.text }}
      >
        <span className="flex items-center gap-1.5">
          <MapIcon size={13} style={{ color: theme.textMuted }} />
          {open ? t.advanced.map.hide : t.advanced.map.show}
        </span>
        <ChevronDown
          size={14}
          style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .15s", color: theme.textMuted }}
        />
      </button>
      {open && (
        <div style={{ borderColor: theme.border }} className="border-t">
          <Suspense
            fallback={
              <div
                style={{ height: 280, color: theme.textMuted }}
                className="w-full flex items-center justify-center text-xs"
              >
                {t.advanced.map.loading}
              </div>
            }
          >
            <LocationMapPanel theme={theme} isDark={isDark} lat={lat} lon={lon} onLatChange={onLatChange} onLonChange={onLonChange} />
          </Suspense>
          <p style={{ color: theme.textMuted, borderColor: theme.border }} className="text-[11px] px-3 py-2 border-t">
            {t.advanced.map.hint}
          </p>
        </div>
      )}
    </div>
  );
}
