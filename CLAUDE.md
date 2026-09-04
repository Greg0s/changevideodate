# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`changevideodate` is a client-only web app that generates an [ExifTool](https://exiftool.org/) command
for changing the date/time metadata of a video file (MP4/MOV). The user picks an OS (Windows/macOS/Linux),
a file path, a date/time, and a few options; the app builds the equivalent shell command live in the
browser. Nothing is uploaded — there is no backend, and no video file is ever read or processed by the app
itself. The generated command is meant to be copy-pasted into the user's own terminal.

## Commands

```bash
npm run dev      # start the Vite dev server
npm run build     # type-check (tsc -b) then production build (vite build)
npm run lint      # oxlint
npm run preview   # preview the production build locally
```

There is no test suite configured in this repo.

Package manager: both `package-lock.json` and `pnpm-lock.yaml` are present. Prefer whichever matches the
lockfile you're about to touch; don't introduce a third one.

## Architecture

The app is a single-page, single-view React component tree with no routing and no external/server state —
all state lives in `App.tsx` via `useState`.

- **`src/App.tsx`** — owns all form state (OS, file path, date/time, tag toggles, overwrite/UTC/GPS
  options) and composes the page from the components below. On every state change it recomputes the
  command via `buildCommandSegments` (memoized with `useMemo`).
- **`src/lib/command.ts`** — pure function `buildCommandSegments()` that turns the current form state into
  an ordered list of `CommandSegment` (`{ text, kind }`). This is the core logic of the app: it decides
  which ExifTool flags to emit (`-CreateDate`, `-MediaCreateDate`, `-TrackCreateDate`, `-ModifyDate`,
  `-api QuickTimeUTC`, GPS tags, `-overwrite_original`) and delegates OS-specific concerns (install
  preamble, quoting) to `src/lib/os.ts`. `kind` drives the per-token syntax-highlighting color in
  `CommandCard`.
- **`src/lib/os.ts`** — all OS-specific logic: detecting the visitor's OS from `navigator` (with fallback
  order Windows → macOS → Linux, per product spec), default file paths, the tooltip content explaining how
  to copy a file path per OS, shell name, the auto-install one-liner for ExifTool (winget/apt/brew), and
  `quoteForOs` (double quotes on Windows/PowerShell, single quotes on macOS/Linux shells).
- **`src/lib/theme.ts`** — two hardcoded `Theme` objects (dark/light) consumed as inline styles; no
  Tailwind dark-mode class strategy is used for themed colors (Tailwind utility classes are used only for
  layout/spacing). `getTheme(isDark)` selects one; `prefersDark()` reads `prefers-color-scheme`.
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
  - `CommandCard` — renders the generated command with per-segment coloring and a copy-to-clipboard button.
  - `FilePathField` — file path input plus an OS-specific tooltip (from `t.pathTooltip[os]`) on how to
    obtain the path.
  - `AdvancedOptions` — collapsible panel for tag toggles, UTC/overwrite checkboxes, and GPS lat/lon.
  - `LanguageSelector` — icon button (next to the theme toggle) opening a searchable dropdown of the 15
    languages in `LANGUAGES`; selecting one calls back up to `App.tsx`.

Data flow is one-directional and synchronous: form state in `App.tsx` → `buildCommandSegments` → segments
passed down to `CommandCard` for display. Adding a new ExifTool flag/option means: extend `types.ts` if new
state is needed, add the corresponding UI in `AdvancedOptions.tsx` (or elsewhere), and emit the new
segment(s) in `command.ts`.

## Internationalization

The UI is multilingual. `App.tsx` holds `locale` state (initialized from `initialLocale()`), derives
`t = getTranslation(locale)`, and passes `t` down to every component instead of hardcoding strings. On
locale change it also sets `document.documentElement.lang`/`dir` (Arabic renders right-to-left) and persists
the choice via `storeLocale()`. ExifTool tag names (`CreateDate`, etc.), shell names, and the app name
itself are not translated — they're technical identifiers, not prose.
