import type { OsId } from "./types";

const EXIFTOOL_INSTALLED_STORAGE_KEY = "changevideodate.exiftoolInstalled";
const OS_STORAGE_KEY = "changevideodate.os";

export function loadStoredExiftoolInstalled(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(EXIFTOOL_INSTALLED_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

export function storeExiftoolInstalled(value: boolean): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(EXIFTOOL_INSTALLED_STORAGE_KEY, String(value));
  } catch {
    // localStorage unavailable (private mode, disabled, etc.)
  }
}

export function loadStoredOs(): OsId | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(OS_STORAGE_KEY);
    return stored === "windows" || stored === "macos" || stored === "linux" ? stored : null;
  } catch {
    return null;
  }
}

export function storeOs(value: OsId): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(OS_STORAGE_KEY, value);
  } catch {
    // localStorage unavailable (private mode, disabled, etc.)
  }
}
