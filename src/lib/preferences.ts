const EXIFTOOL_INSTALLED_STORAGE_KEY = "changevideodate.exiftoolInstalled";

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
