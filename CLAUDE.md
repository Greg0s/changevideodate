# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Keep this file current.** When a change adds, removes, moves, or renames something described below — a
file, a component, a behavior, a config flag, a command — update the corresponding section(s) as part of
that same change, not as a follow-up. A CLAUDE.md that no longer matches the code is a bug in the change
that broke it, on the same footing as a failing build or lint.

## Project

`changevideodate` is a client-only web app that generates an [ExifTool](https://exiftool.org/) command
for changing the date/time metadata of a video file (MP4/MOV). The user picks an OS (Windows/macOS/Linux),
a file path, a date/time, and a few options; the app builds the equivalent shell command live in the
browser. Nothing is uploaded — there is no backend, and no video file is ever read or processed by the app
itself. The generated command is meant to be copy-pasted into the user's own terminal. The one exception to
"nothing over the network" is the optional location map (see `LocationMap` below): opening it fetches map
tiles from OpenStreetMap.

Deployed as a static site to GitHub Pages: `.github/workflows/deploy.yml` builds and publishes `dist/` on
every push to `main`, served at the custom domain in `public/CNAME` (`changevideodate.gregoiretinn.es`).

## Commands

```bash
npm run dev       # start the Vite dev server
npm run build     # type-check (tsc -b) then production build (vite build)
npm run lint      # oxlint
npm run preview   # preview the production build locally
```

There is no test suite configured in this repo — `npm run build` (type-check) and `npm run lint` are the
minimum correctness bar for any change.

Package manager: both `package-lock.json` and `pnpm-lock.yaml` are present. Prefer whichever matches the
lockfile you're about to touch; don't introduce a third one.

## Architecture

The app is a single-page, single-view React component tree with no routing and no external/server state —
all state lives in `App.tsx` via `useState`.

- **`src/App.tsx`** — owns all form state (OS, file path, date/time, tag toggles, overwrite/UTC/GPS,
  "ExifTool already installed") and composes the page from the components below. On every state change it
  recomputes the command via `buildCommandSegments` (memoized with `useMemo`). Two non-obvious behaviors
  live here: changing OS only resets the file path to that OS's default while the user hasn't hand-edited
  it (`pathTouched` tracks this); the default GPS lat/lon is drawn once per page load from a hardcoded
  `GPS_PRESETS` list (`randomGpsPreset()`), not a fixed coordinate.
- **`src/lib/command.ts`** — pure function `buildCommandSegments()` that turns the current form state into
  an ordered list of `CommandSegment` (`{ text, kind }`). This is the core logic of the app: it decides
  which ExifTool flags to emit (`-CreateDate`, `-MediaCreateDate`, `-TrackCreateDate`, `-ModifyDate`,
  `-api QuickTimeUTC`, GPS tags, `-overwrite_original`), whether to prepend the install preamble at all
  (skipped when `exiftoolInstalled` is true), and delegates OS-specific concerns (install preamble,
  quoting) to `src/lib/os.ts`. `kind` drives the per-token syntax-highlighting color in `CommandCard`.
  `-api QuickTimeUTC` is deliberately pushed as one unquoted segment (not run through `quoteForOs`, unlike
  the tag flags) — ExifTool needs it as two separate CLI words, and quoting would merge them into one.
- **`src/lib/os.ts`** — all OS-specific logic: detecting the visitor's OS from `navigator` (Android maps to
  windows, iOS to macOS, otherwise fallback order Windows → macOS → Linux, per product spec), default file
  paths, shell name, the auto-install one-liner for ExifTool (winget/apt/brew), and `quoteForOs` (double
  quotes on Windows/PowerShell, single quotes on macOS/Linux shells). The per-OS file-path tooltip *copy*
  lives in `i18n` (see below), not here.
- **`src/lib/preferences.ts`** — persists the OS choice and "ExifTool already installed" checkbox to
  `localStorage` (`changevideodate.os`, `changevideodate.exiftoolInstalled`), each read/write failing
  silently if storage is unavailable. Same pattern as `i18n/detect.ts`'s locale persistence, but a separate
  module and separate keys — check both when tracing what's remembered across visits.
- **`src/lib/theme.ts`** — two hardcoded `Theme` objects (dark/light) consumed as inline styles; no
  Tailwind dark-mode class strategy is used for themed colors (Tailwind utility classes are used only for
  layout/spacing). `getTheme(isDark)` selects one; `prefersDark()` reads `prefers-color-scheme` and
  defaults to dark if the browser can't tell.
- **`src/lib/types.ts`** — shared types (`OsId`, `DateTagOptions`, `CommandSegment`/`SegmentKind`, `Theme`).
- **`src/lib/i18n/`** — translation data and locale helpers, following the same "plain functions/data, state
  lives in `App.tsx`" pattern as `theme.ts` (no context provider):
  - `languages.ts` — the `LANGUAGES` list (15 supported locales: code, English name, native name, and an
    optional `dir: "rtl"` for Arabic) plus the derived `LocaleCode` type and `localeDir()`.
  - `detect.ts` — `detectLocale()` (matches `navigator.languages` against `LANGUAGES`, falling back to
    English), `loadStoredLocale()`/`storeLocale()` (persist the user's manual choice in `localStorage` under
    `changevideodate.locale`), and `initialLocale()` (stored choice, else browser detection).
  - `locales/<code>.ts` — one file per language, each a `Translation` object with the same shape as the
    canonical `locales/en.ts` (which defines the `Translation` type via `typeof en`). Includes the
    OS-specific file-path tooltip copy (steps + mimicked context-menu items) that used to live in `os.ts`.
  - `translations.ts` — aggregates all locale files into `getTranslation(locale)`.
  - Adding a language: add an entry to `LANGUAGES`, add `locales/<code>.ts` satisfying `Translation`, and
    register it in `translations.ts`. Adding a UI string: add the key to `locales/en.ts` first (source of
    truth for the `Translation` type), then fill in every other locale file — TypeScript will error on any
    file missing a key.
- **`src/components/`** — presentational components, each receiving `theme` and `t` (the current
  `Translation`) plus its slice of state/handlers as props from `App.tsx` (no context, no state management
  library):
  - `OsSelector` — OS tab switcher.
  - `ExiftoolInstalledToggle` — the "I already have ExifTool installed" checkbox that suppresses the
    install preamble; rendered next to `OsSelector`.
  - `CommandCard` — renders the generated command with per-segment coloring and a copy-to-clipboard button.
  - `FilePathField` — file path input plus an OS-specific tooltip (from `t.pathTooltip[os]`) on how to
    obtain the path.
  - `AdvancedOptions` — collapsible panel for tag toggles, UTC/overwrite checkboxes, and GPS lat/lon; when
    "Edit location" is on, also renders `LocationMap` below the lat/lon inputs.
  - `LocationMap` — its own collapsible panel ("Show map"/"Hide map", closed by default) nested inside
    `AdvancedOptions`'s location section. Lazy-loads `LocationMapPanel` via `React.lazy` (a separate build
    chunk — confirm with `npm run build` that `LocationMapPanel` still lists as its own `dist/assets/`
    entry) so Leaflet is only downloaded once a user actually opens the map.
  - `LocationMapPanel` — imperatively mounts a Leaflet map (OpenStreetMap raster tiles) into a ref'd div.
    Clicking the map or dragging the marker calls `onLatChange`/`onLonChange` (formatted to 6 decimals);
    typing in the lat/lon text inputs recenters the map and marker the other way (a `skipNextSyncRef` guard
    stops that second path from fighting the first when a map interaction is what triggered the lat/lon
    change). In dark mode an `invert()` CSS filter is applied to the Leaflet tile pane specifically (not the
    marker pane) since OpenStreetMap only serves one, light-mode tile style.
  - `LanguageSelector` — icon button (next to the theme toggle) opening a searchable dropdown of the 15
    languages in `LANGUAGES`; selecting one calls back up to `App.tsx`.

Data flow is one-directional and synchronous: form state in `App.tsx` → `buildCommandSegments` → segments
passed down to `CommandCard` for display. Adding a new ExifTool flag/option means: extend `types.ts` and
`CommandInput` in `command.ts` if new state is needed, add the corresponding UI (e.g. in
`AdvancedOptions.tsx`), and emit the new segment(s) in `command.ts`.

## Internationalization

The UI is multilingual. `App.tsx` holds `locale` state (initialized from `initialLocale()`), derives
`t = getTranslation(locale)`, and passes `t` down to every component instead of hardcoding strings. On
locale change it also sets `document.documentElement.lang`/`dir` (Arabic renders right-to-left),
`document.title`, and the `<meta name="description">` content, and persists the choice via `storeLocale()`.
ExifTool tag names (`CreateDate`, etc.), shell names, and the app name itself are not translated — they're
technical identifiers, not prose.

`index.html`'s Open Graph/Twitter/JSON-LD tags and `lang="en"` attribute are static English fallbacks for
crawlers and pre-hydration; they are **not** updated at runtime — only `document.title` and the description
meta tag react to locale changes (via the `App.tsx` effect above). When editing `seo.title`/`seo.description`
in `locales/en.ts`, update the matching strings in `index.html` by hand to keep them in sync.

## Conventions

- `tsconfig.app.json` enables `noUnusedLocals`/`noUnusedParameters` (an unused local or parameter fails the
  build, it's not just a lint warning) and `erasableSyntaxOnly` (no `enum`, `namespace`, or constructor
  parameter-properties — only TS syntax that erases cleanly to nothing is allowed).
- `oxlint` (`.oxlintrc.json`) runs the `react`, `typescript`, and `oxc` plugins with `react/rules-of-hooks`
  set to `error` — treat hook-rule violations as build-breaking, not advisory.
