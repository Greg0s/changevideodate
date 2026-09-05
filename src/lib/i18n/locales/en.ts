const en = {
  app: {
    subtitle:
      "ExifTool command generator to change a video's date and time (MP4, MOV) with no prerequisites and nothing to install.",
    toggleTheme: "Toggle theme",
  },
  language: {
    selectorLabel: "Change language",
    searchPlaceholder: "Search a language…",
    noResults: "No languages found",
  },
  os: {
    ariaLabel: "Operating system",
  },
  filePath: {
    label: "File path",
    getPath: "Get the path:",
  },
  pathTooltip: {
    windows: {
      steps: ["Right-click the file", "Copy as path"],
    },
    macos: {
      steps: ["⌥ (Option) + right-click the file", 'Copy "clip.mp4" as Pathname'],
    },
    linux: {
      steps: ["Right-click the file (Nautilus, Dolphin…)", "Copy location"],
    },
  },
  date: { label: "Date" },
  time: { label: "Time" },
  advanced: {
    title: "Advanced options",
    dateTagsToModify: "Date tags to modify",
    forceUtc: "Force UTC time (-api QuickTimeUTC)",
    forceUtcHelp: "Recommended for MP4/MOV videos: preserves the real timestamp expected by QuickTime.",
    overwrite: "Overwrite the original file (no _original copy)",
    editLocation: "Edit location",
    latitude: "Latitude",
    longitude: "Longitude",
    tagMeanings: {
      createDate: "Creation date",
      mediaCreateDate: "Media creation date",
      trackCreateDate: "Track creation date",
      modifyDate: "Modification date",
    },
  },
  command: {
    copy: "Copy",
    copied: "Copied!",
  },
  footer: {
    desktopComingSoon: "A desktop app with a graphical interface is coming soon.",
  },
} satisfies Record<string, unknown>;

export type Translation = typeof en;

export default en;
