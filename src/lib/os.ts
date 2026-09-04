import type { OsId, PathTooltipContent } from "./types";

export const OS_OPTIONS: { id: OsId; label: string }[] = [
  { id: "windows", label: "Windows" },
  { id: "macos", label: "macOS" },
  { id: "linux", label: "Linux" },
];

/**
 * Detects the visitor's OS from the browser. Falls back to windows, then
 * macOS, then linux when detection is ambiguous, per product spec.
 */
export function detectOs(): OsId {
  if (typeof navigator === "undefined") return "windows";

  const uaData = (navigator as Navigator & { userAgentData?: { platform?: string } })
    .userAgentData;
  const haystack = `${uaData?.platform ?? ""} ${navigator.platform ?? ""} ${navigator.userAgent ?? ""}`.toLowerCase();

  if (haystack.includes("win")) return "windows";
  if (haystack.includes("mac") || haystack.includes("iphone") || haystack.includes("ipad")) {
    return "macos";
  }
  if (haystack.includes("linux") || haystack.includes("x11") || haystack.includes("android")) {
    return "linux";
  }

  return "windows";
}

export function defaultPath(os: OsId): string {
  if (os === "windows") return "C:\\Users\\Alex\\Videos\\clip.mp4";
  if (os === "linux") return "/home/alex/Videos/clip.mp4";
  return "/Users/alex/Movies/clip.mp4";
}

export function pathTooltip(os: OsId): PathTooltipContent {
  if (os === "windows") {
    return {
      steps: ["Maj + clic droit sur le fichier", "Copier en tant que chemin d'accès"],
      menu: ["Ouvrir avec", "Copier", "Copier en tant que chemin d'accès"],
      highlight: 2,
    };
  }
  if (os === "macos") {
    return {
      steps: ["⌥ (Option) + clic droit sur le fichier", "Copier « clip.mp4 » comme chemin d'accès"],
      menu: ["Ouvrir avec", "Dupliquer", "Copier « clip.mp4 » comme chemin d'accès"],
      highlight: 2,
    };
  }
  return {
    steps: ["Clic droit sur le fichier (Nautilus, Dolphin…)", "Copier l'emplacement"],
    menu: ["Ouvrir avec", "Couper", "Copier l'emplacement"],
    highlight: 2,
  };
}

export function shellName(os: OsId): string {
  if (os === "windows") return "PowerShell";
  if (os === "linux") return "bash";
  return "zsh";
}

/** One-liner that installs ExifTool when it isn't already on the PATH. */
export function installPreamble(os: OsId): string {
  if (os === "windows") {
    return "if (-not (Get-Command exiftool -ErrorAction SilentlyContinue)) { winget install -e --id OliverBetz.ExifTool } ;";
  }
  if (os === "linux") {
    return "command -v exiftool >/dev/null 2>&1 || (sudo apt-get update && sudo apt-get install -y libimage-exiftool-perl) &&";
  }
  return "command -v exiftool >/dev/null 2>&1 || brew install exiftool &&";
}

/** Wraps a value the way each shell expects a "flag=value with spaces" token to be quoted. */
export function quoteForOs(os: OsId, value: string): string {
  return os === "windows" ? `"${value}"` : `'${value}'`;
}
