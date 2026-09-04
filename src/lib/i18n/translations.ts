import type { LocaleCode } from "./languages";
import ar from "./locales/ar";
import de from "./locales/de";
import en, { type Translation } from "./locales/en";
import es from "./locales/es";
import fr from "./locales/fr";
import hi from "./locales/hi";
import id from "./locales/id";
import it from "./locales/it";
import ja from "./locales/ja";
import ko from "./locales/ko";
import pt from "./locales/pt";
import ru from "./locales/ru";
import tr from "./locales/tr";
import vi from "./locales/vi";
import zh from "./locales/zh";

export type { Translation };

const TRANSLATIONS: Record<LocaleCode, Translation> = {
  en,
  zh,
  es,
  ar,
  pt,
  id,
  fr,
  ja,
  ru,
  de,
  vi,
  ko,
  it,
  tr,
  hi,
};

export function getTranslation(locale: LocaleCode): Translation {
  return TRANSLATIONS[locale];
}
