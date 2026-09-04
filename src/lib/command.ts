import { installPreamble, quoteForOs } from "./os";
import type { CommandSegment, DateTagOptions, OsId } from "./types";

export interface CommandInput {
  os: OsId;
  filePath: string;
  date: string;
  time: string;
  tags: DateTagOptions;
  overwriteOriginal: boolean;
  utc: boolean;
  locationEnabled: boolean;
  lat: string;
  lon: string;
}

const TAG_FLAGS: Record<keyof DateTagOptions, string> = {
  createDate: "-CreateDate",
  mediaCreateDate: "-MediaCreateDate",
  trackCreateDate: "-TrackCreateDate",
  modifyDate: "-ModifyDate",
};

export const TAG_LABELS: Record<keyof DateTagOptions, string> = {
  createDate: "CreateDate",
  mediaCreateDate: "MediaCreateDate",
  trackCreateDate: "TrackCreateDate",
  modifyDate: "ModifyDate",
};

/** Converts native date/time input values into ExifTool's "YYYY:MM:DD HH:MM:SS" format. */
export function formatExifDateTime(date: string, time: string): string {
  const datePart = date.split("-").join(":");
  const timePart = time.length === 5 ? `${time}:00` : time;
  return `${datePart} ${timePart}`;
}

export function buildCommandSegments(input: CommandInput): CommandSegment[] {
  const { os, filePath, date, time, tags, overwriteOriginal, utc, locationEnabled, lat, lon } = input;
  const dateTime = formatExifDateTime(date, time);

  const segments: CommandSegment[] = [
    { text: installPreamble(os), kind: "preamble" },
    { text: "exiftool", kind: "cmd" },
  ];

  // -api takes two separate CLI words (option name, then value); quoting them
  // together would turn it into a single argument and break ExifTool's parser.
  if (utc) {
    segments.push({ text: "-api QuickTimeUTC", kind: "flag" });
  }

  (Object.keys(TAG_FLAGS) as (keyof DateTagOptions)[]).forEach((key) => {
    if (tags[key]) {
      segments.push({ text: quoteForOs(os, `${TAG_FLAGS[key]}=${dateTime}`), kind: "tag" });
    }
  });

  if (locationEnabled && lat !== "" && lon !== "") {
    const latNum = parseFloat(lat);
    const lonNum = parseFloat(lon);
    if (!Number.isNaN(latNum) && !Number.isNaN(lonNum)) {
      segments.push({ text: quoteForOs(os, `-GPSLatitude=${Math.abs(latNum)}`), kind: "gps" });
      segments.push({ text: quoteForOs(os, `-GPSLatitudeRef=${latNum < 0 ? "S" : "N"}`), kind: "gps" });
      segments.push({ text: quoteForOs(os, `-GPSLongitude=${Math.abs(lonNum)}`), kind: "gps" });
      segments.push({ text: quoteForOs(os, `-GPSLongitudeRef=${lonNum < 0 ? "W" : "E"}`), kind: "gps" });
    }
  }

  if (overwriteOriginal) {
    segments.push({ text: "-overwrite_original", kind: "flag" });
  }

  segments.push({ text: quoteForOs(os, filePath || "video.mp4"), kind: "path" });

  return segments;
}
