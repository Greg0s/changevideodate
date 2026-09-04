import type { Theme } from "./types";

export const MONO_FONT =
  "'JetBrains Mono','Fira Code',ui-monospace,SFMono-Regular,Menlo,monospace";
export const SANS_FONT = "Inter,ui-sans-serif,system-ui,sans-serif";

const darkTheme: Theme = {
  bg: "#0A0A0C",
  panel: "#131316",
  panelHead: "#1A1A1E",
  border: "#232326",
  text: "#ECECEE",
  textMuted: "#86868C",
  inputBg: "#0F0F12",
  cmd: "#F4F4F5",
  flag: "#5FD3C4",
  tag: "#F2A93B",
  gps: "#B39DFF",
  path: "#7FB6F2",
  preamble: "#6E6E76",
  accent: "#F2A93B",
  accentText: "#141210",
  success: "#3FC66F",
};

const lightTheme: Theme = {
  bg: "#F7F7F4",
  panel: "#FFFFFF",
  panelHead: "#F1F0EB",
  border: "#E2E0D8",
  text: "#16150F",
  textMuted: "#6E6B62",
  inputBg: "#FAFAF7",
  cmd: "#16150F",
  flag: "#0E8C7C",
  tag: "#B4720A",
  gps: "#6D4FD6",
  path: "#1D6FC4",
  preamble: "#9C988D",
  accent: "#F59E0B",
  accentText: "#1B1100",
  success: "#1E8E4F",
};

export function getTheme(isDark: boolean): Theme {
  return isDark ? darkTheme : lightTheme;
}

export function prefersDark(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return true;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
