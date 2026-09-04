import { ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";
import { TAG_LABELS } from "../lib/command";
import { SANS_FONT } from "../lib/theme";
import type { DateTagOptions, Theme } from "../lib/types";

interface AdvancedOptionsProps {
  theme: Theme;
  tags: DateTagOptions;
  onTagsChange: (tags: DateTagOptions) => void;
  overwrite: boolean;
  onOverwriteChange: (value: boolean) => void;
  utc: boolean;
  onUtcChange: (value: boolean) => void;
  locationEnabled: boolean;
  onLocationEnabledChange: (value: boolean) => void;
  lat: string;
  onLatChange: (value: string) => void;
  lon: string;
  onLonChange: (value: string) => void;
}

const TAG_KEYS = Object.keys(TAG_LABELS) as (keyof DateTagOptions)[];

export function AdvancedOptions({
  theme,
  tags,
  onTagsChange,
  overwrite,
  onOverwriteChange,
  utc,
  onUtcChange,
  locationEnabled,
  onLocationEnabledChange,
  lat,
  onLatChange,
  lon,
  onLonChange,
}: AdvancedOptionsProps) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderColor: theme.border, fontFamily: SANS_FONT }} className="border rounded-lg mb-6 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-4 py-3 text-xs sm:text-sm cursor-pointer"
        style={{ color: theme.text }}
      >
        Options avancées
        <ChevronDown
          size={14}
          style={{
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform .15s",
            color: theme.textMuted,
          }}
        />
      </button>
      {open && (
        <div style={{ borderColor: theme.border }} className="border-t px-4 py-4 space-y-4">
          <div>
            <p style={{ color: theme.textMuted }} className="text-xs mb-2">
              Tags de date à modifier
            </p>
            <div className="space-y-2">
              {TAG_KEYS.map((key) => (
                <label key={key} className="flex items-center gap-2 text-xs sm:text-sm cursor-pointer" style={{ color: theme.text }}>
                  <input
                    type="checkbox"
                    checked={tags[key]}
                    onChange={(e) => onTagsChange({ ...tags, [key]: e.target.checked })}
                    style={{ accentColor: theme.accent }}
                  />
                  {TAG_LABELS[key]}
                </label>
              ))}
            </div>
          </div>

          <label className="flex items-center gap-2 text-xs sm:text-sm cursor-pointer" style={{ color: theme.text }}>
            <input
              type="checkbox"
              checked={utc}
              onChange={(e) => onUtcChange(e.target.checked)}
              style={{ accentColor: theme.accent }}
            />
            Forcer l'heure UTC (-api QuickTimeUTC)
          </label>
          <p style={{ color: theme.textMuted }} className="text-xs -mt-2 pl-6">
            Recommandé pour les vidéos MP4/MOV : préserve l'horodatage réel attendu par
            QuickTime.
          </p>

          <label className="flex items-center gap-2 text-xs sm:text-sm cursor-pointer" style={{ color: theme.text }}>
            <input
              type="checkbox"
              checked={overwrite}
              onChange={(e) => onOverwriteChange(e.target.checked)}
              style={{ accentColor: theme.accent }}
            />
            Écraser le fichier original (sans copie _original)
          </label>

          <div style={{ borderColor: theme.border }} className="border-t pt-4">
            <label className="flex items-center gap-2 text-xs sm:text-sm cursor-pointer mb-3" style={{ color: theme.text }}>
              <input
                type="checkbox"
                checked={locationEnabled}
                onChange={(e) => onLocationEnabledChange(e.target.checked)}
                style={{ accentColor: theme.accent }}
              />
              <MapPin size={13} style={{ color: theme.textMuted }} />
              Modifier la localisation
            </label>
            {locationEnabled && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label style={{ color: theme.textMuted }} className="text-xs block mb-1">
                    Latitude
                  </label>
                  <input
                    value={lat}
                    onChange={(e) => onLatChange(e.target.value)}
                    inputMode="decimal"
                    style={{ background: theme.inputBg, borderColor: theme.border, color: theme.text }}
                    className="w-full rounded-md border px-3 py-2 text-xs sm:text-sm outline-none"
                  />
                </div>
                <div>
                  <label style={{ color: theme.textMuted }} className="text-xs block mb-1">
                    Longitude
                  </label>
                  <input
                    value={lon}
                    onChange={(e) => onLonChange(e.target.value)}
                    inputMode="decimal"
                    style={{ background: theme.inputBg, borderColor: theme.border, color: theme.text }}
                    className="w-full rounded-md border px-3 py-2 text-xs sm:text-sm outline-none"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
