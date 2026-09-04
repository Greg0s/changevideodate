import { Moon, Sparkles, Sun } from "lucide-react";
import { useMemo, useState } from "react";
import { AdvancedOptions } from "./components/AdvancedOptions";
import { CommandCard } from "./components/CommandCard";
import { FilePathField } from "./components/FilePathField";
import { OsSelector } from "./components/OsSelector";
import { buildCommandSegments } from "./lib/command";
import { defaultPath, detectOs, shellName } from "./lib/os";
import { MONO_FONT, SANS_FONT, getTheme, prefersDark } from "./lib/theme";
import type { DateTagOptions, OsId } from "./lib/types";

function todayISO(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function nowHHMM(): string {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:00`;
}

export default function App() {
  const [isDark, setIsDark] = useState(prefersDark);
  const [os, setOs] = useState<OsId>(detectOs);
  const [filePath, setFilePath] = useState(() => defaultPath(detectOs()));
  const [pathTouched, setPathTouched] = useState(false);
  const [date, setDate] = useState(todayISO);
  const [time, setTime] = useState(nowHHMM);
  const [tags, setTags] = useState<DateTagOptions>({
    createDate: true,
    mediaCreateDate: true,
    trackCreateDate: true,
    modifyDate: true,
  });
  const [overwrite, setOverwrite] = useState(true);
  const [utc, setUtc] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [lat, setLat] = useState("48.8566");
  const [lon, setLon] = useState("2.3522");

  const theme = getTheme(isDark);

  function handleOsChange(next: OsId) {
    if (!pathTouched) setFilePath(defaultPath(next));
    setOs(next);
  }

  function handleFilePathChange(value: string) {
    setFilePath(value);
    setPathTouched(true);
  }

  const segments = useMemo(
    () =>
      buildCommandSegments({
        os,
        filePath,
        date,
        time,
        tags,
        overwriteOriginal: overwrite,
        utc,
        locationEnabled,
        lat,
        lon,
      }),
    [os, filePath, date, time, tags, overwrite, utc, locationEnabled, lat, lon],
  );

  return (
    <div
      style={{ background: theme.bg, color: theme.text, minHeight: "100vh", fontFamily: MONO_FONT, colorScheme: isDark ? "dark" : "light" }}
    >
      <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <header className="flex items-start justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span style={{ color: theme.accent }} className="text-sm">
                $
              </span>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">changevideodate</h1>
            </div>
            <p style={{ color: theme.textMuted, fontFamily: SANS_FONT }} className="text-sm max-w-md leading-relaxed">
              ExifTool command generator to change a video's date and time (MP4, MOV) —
              Windows, macOS or Linux, no software to install.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsDark((v) => !v)}
            aria-label="Toggle theme"
            style={{ borderColor: theme.border, color: theme.textMuted }}
            className="shrink-0 p-2 rounded-md border hover:opacity-80 transition-opacity cursor-pointer"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </header>

        <OsSelector os={os} onChange={handleOsChange} theme={theme} />

        <CommandCard segments={segments} shellName={shellName(os)} theme={theme} />

        <div style={{ borderColor: theme.border, fontFamily: SANS_FONT }} className="border-t pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <FilePathField os={os} value={filePath} onChange={handleFilePathChange} theme={theme} />
          <div>
            <label style={{ color: theme.textMuted }} className="text-xs block mb-1.5">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{ background: theme.inputBg, borderColor: theme.border, color: theme.text, colorScheme: isDark ? "dark" : "light" }}
              className="w-full rounded-md border px-3 py-2 text-xs sm:text-sm outline-none"
            />
          </div>
          <div className="sm:col-span-2">
            <label style={{ color: theme.textMuted }} className="text-xs block mb-1.5">
              Time
            </label>
            <input
              type="time"
              step={1}
              value={time}
              onChange={(e) => setTime(e.target.value)}
              style={{ background: theme.inputBg, borderColor: theme.border, color: theme.text, colorScheme: isDark ? "dark" : "light" }}
              className="w-full rounded-md border px-3 py-2 text-xs sm:text-sm outline-none"
            />
          </div>
        </div>

        <AdvancedOptions
          theme={theme}
          tags={tags}
          onTagsChange={setTags}
          overwrite={overwrite}
          onOverwriteChange={setOverwrite}
          utc={utc}
          onUtcChange={setUtc}
          locationEnabled={locationEnabled}
          onLocationEnabledChange={setLocationEnabled}
          lat={lat}
          onLatChange={setLat}
          lon={lon}
          onLonChange={setLon}
        />

        <div style={{ borderColor: theme.border, color: theme.textMuted, fontFamily: SANS_FONT }} className="flex items-center gap-2 text-xs border-t pt-5">
          <Sparkles size={13} style={{ color: theme.accent }} />
          A desktop app with a graphical interface is coming soon.
        </div>
      </div>
    </div>
  );
}
