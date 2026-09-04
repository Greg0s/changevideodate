/** The 15 most used languages on the internet, in descending order of usage. */
export const LANGUAGES = [
  { code: "en", englishName: "English", nativeName: "English" },
  { code: "zh", englishName: "Chinese", nativeName: "中文" },
  { code: "es", englishName: "Spanish", nativeName: "Español" },
  { code: "ar", englishName: "Arabic", nativeName: "العربية", dir: "rtl" },
  { code: "pt", englishName: "Portuguese", nativeName: "Português" },
  { code: "id", englishName: "Indonesian", nativeName: "Bahasa Indonesia" },
  { code: "fr", englishName: "French", nativeName: "Français" },
  { code: "ja", englishName: "Japanese", nativeName: "日本語" },
  { code: "ru", englishName: "Russian", nativeName: "Русский" },
  { code: "de", englishName: "German", nativeName: "Deutsch" },
  { code: "vi", englishName: "Vietnamese", nativeName: "Tiếng Việt" },
  { code: "ko", englishName: "Korean", nativeName: "한국어" },
  { code: "it", englishName: "Italian", nativeName: "Italiano" },
  { code: "tr", englishName: "Turkish", nativeName: "Türkçe" },
  { code: "hi", englishName: "Hindi", nativeName: "हिन्दी" },
] as const satisfies readonly { code: string; englishName: string; nativeName: string; dir?: "rtl" }[];

export type LocaleCode = (typeof LANGUAGES)[number]["code"];

export const DEFAULT_LOCALE: LocaleCode = "en";

export function isSupportedLocale(value: string): value is LocaleCode {
  return LANGUAGES.some((lang) => lang.code === value);
}

export function localeDir(locale: LocaleCode): "rtl" | "ltr" {
  const lang = LANGUAGES.find((l) => l.code === locale);
  return lang && "dir" in lang && lang.dir === "rtl" ? "rtl" : "ltr";
}
