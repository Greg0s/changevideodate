import { Moon, Sun } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AdvancedOptions } from "./components/AdvancedOptions";
import { CommandCard } from "./components/CommandCard";
import { ExiftoolInstalledToggle } from "./components/ExiftoolInstalledToggle";
import { FilePathField } from "./components/FilePathField";
import { LanguageSelector } from "./components/LanguageSelector";
import { OsSelector } from "./components/OsSelector";
import { buildCommandSegments } from "./lib/command";
import { initialLocale, storeLocale } from "./lib/i18n/detect";
import { localeDir, type LocaleCode } from "./lib/i18n/languages";
import { getTranslation } from "./lib/i18n/translations";
import { defaultPath, detectOs, shellName } from "./lib/os";
import { loadStoredExiftoolInstalled, storeExiftoolInstalled } from "./lib/preferences";
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

const GPS_PRESETS: [string, string][] = [
  ["27.380583", "33.631839"],
  ["-4.289303", "31.396239"],
  ["50.010611", "-110.113422"],
  ["45.123853", "-123.113603"],
  ["41.303921", "-81.901693"],
  ["40.452107", "93.742118"],
  ["38.483378", "-109.681333"],
  ["-19.949156", "-69.633842"],
  ["-25.344375", "131.034401"],
  ["-20.937631", "164.658489"],
  ["44.525049", "-110.838190"],
  ["26.357896", "127.783809"],
  ["42.967504", "-0.496798"],
];

function randomGpsPreset(): [string, string] {
  return GPS_PRESETS[Math.floor(Math.random() * GPS_PRESETS.length)];
}

export default function App() {
  const [isDark, setIsDark] = useState(prefersDark);
  const [locale, setLocale] = useState<LocaleCode>(initialLocale);
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
  const [utc, setUtc] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [defaultCoords] = useState(randomGpsPreset);
  const [lat, setLat] = useState(() => defaultCoords[0]);
  const [lon, setLon] = useState(() => defaultCoords[1]);
  const [exiftoolInstalled, setExiftoolInstalled] = useState(loadStoredExiftoolInstalled);

  const theme = getTheme(isDark);
  const t = getTranslation(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = localeDir(locale);
    document.title = t.seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.seo.description);
  }, [locale, t]);

  function handleLocaleChange(next: LocaleCode) {
    setLocale(next);
    storeLocale(next);
  }

  function handleOsChange(next: OsId) {
    if (!pathTouched) setFilePath(defaultPath(next));
    setOs(next);
  }

  function handleFilePathChange(value: string) {
    setFilePath(value);
    setPathTouched(true);
  }

  function handleExiftoolInstalledChange(value: boolean) {
    setExiftoolInstalled(value);
    storeExiftoolInstalled(value);
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
        exiftoolInstalled,
      }),
    [os, filePath, date, time, tags, overwrite, utc, locationEnabled, lat, lon, exiftoolInstalled],
  );

  return (
    <div
      style={{ background: theme.bg, color: theme.text, minHeight: "100vh", fontFamily: MONO_FONT, colorScheme: isDark ? "dark" : "light" }}
    >
      <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <header className="flex items-start justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src="/favicon-32x32.png" alt="" width={20} height={20} className="rounded-sm" />
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">changevideodate</h1>
            </div>
            <p style={{ color: theme.textMuted, fontFamily: SANS_FONT }} className="text-sm max-w-md leading-relaxed">
              {t.app.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <LanguageSelector theme={theme} locale={locale} onChange={handleLocaleChange} t={t} />
            <button
              type="button"
              onClick={() => setIsDark((v) => !v)}
              aria-label={t.app.toggleTheme}
              style={{ borderColor: theme.border, color: theme.textMuted }}
              className="p-2 rounded-md border hover:opacity-80 transition-opacity cursor-pointer overflow-hidden inline-flex items-center justify-center"
            >
              <span
                key={isDark ? "sun" : "moon"}
                className="inline-flex"
                style={{ animation: "theme-icon-in 0.35s ease" }}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </span>
            </button>
          </div>
        </header>

        <div className="flex items-center justify-between gap-4 mb-4">
          <OsSelector os={os} onChange={handleOsChange} theme={theme} t={t} />
          <ExiftoolInstalledToggle checked={exiftoolInstalled} onChange={handleExiftoolInstalledChange} theme={theme} t={t} />
        </div>

        <CommandCard segments={segments} shellName={shellName(os)} theme={theme} t={t} />

        <div style={{ borderColor: theme.border, fontFamily: SANS_FONT }} className="border-t pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <FilePathField os={os} value={filePath} onChange={handleFilePathChange} theme={theme} t={t} />
          <div>
            <label style={{ color: theme.textMuted }} className="text-xs block mb-1.5">
              {t.date.label}
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
              {t.time.label}
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
          t={t}
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

        <div style={{ borderColor: theme.border, fontFamily: SANS_FONT }} className="flex items-center justify-center text-xs border-t pt-5">
          <a
            href="https://gregoiretinn.es"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: theme.textMuted }}
            className="opacity-25 transition-opacity duration-200 hover:opacity-50"
          >
            gregoiretinn.es
          </a>
        </div>
      </div>
    </div>
  );
}
