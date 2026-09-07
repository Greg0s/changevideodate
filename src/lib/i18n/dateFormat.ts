import type { LocaleCode } from "./languages";

/** Formats an ISO "yyyy-mm-dd" date using the most common date format for the given language (e.g. dd/mm/yyyy for French). */
export function formatDateForLocale(isoDate: string, locale: LocaleCode): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  if (!year || !month || !day) return "";
  // Built from local year/month/day (not parsed from the ISO string directly) to avoid a UTC-vs-local off-by-one shift.
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat(locale, { year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
}
