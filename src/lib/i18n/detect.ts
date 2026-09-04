import { DEFAULT_LOCALE, isSupportedLocale, type LocaleCode } from "./languages";

const STORAGE_KEY = "changevideodate.locale";

/** Detects the visitor's preferred language from the browser, falling back to English. */
export function detectLocale(): LocaleCode {
  if (typeof navigator === "undefined") return DEFAULT_LOCALE;

  const candidates = navigator.languages && navigator.languages.length > 0 ? navigator.languages : [navigator.language];

  for (const candidate of candidates) {
    if (!candidate) continue;
    const primary = candidate.toLowerCase().split("-")[0];
    if (isSupportedLocale(primary)) return primary;
  }

  return DEFAULT_LOCALE;
}

export function loadStoredLocale(): LocaleCode | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored && isSupportedLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

export function storeLocale(locale: LocaleCode): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // localStorage unavailable (private mode, disabled, etc.)
  }
}

export function initialLocale(): LocaleCode {
  return loadStoredLocale() ?? detectLocale();
}
