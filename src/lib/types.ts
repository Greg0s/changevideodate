export type OsId = "windows" | "macos" | "linux";

export interface DateTagOptions {
  createDate: boolean;
  mediaCreateDate: boolean;
  trackCreateDate: boolean;
  modifyDate: boolean;
}

export type SegmentKind =
  | "preamble"
  | "cmd"
  | "tag"
  | "flag"
  | "gps"
  | "path";

export interface CommandSegment {
  text: string;
  kind: SegmentKind;
}

export interface Theme {
  bg: string;
  panel: string;
  panelHead: string;
  border: string;
  text: string;
  textMuted: string;
  inputBg: string;
  cmd: string;
  flag: string;
  tag: string;
  gps: string;
  path: string;
  preamble: string;
  accent: string;
  accentText: string;
  success: string;
}
