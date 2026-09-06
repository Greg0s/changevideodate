import type { Translation } from "./en";

const de: Translation = {
  seo: {
    title: "changevideodate — ExifTool-Befehlsgenerator zum Ändern des Videodatums",
    description:
      "Erzeuge mit einem Klick den exakten ExifTool-Befehl, um Datum und Uhrzeit deiner MP4/MOV-Videos zu ändern – unter Windows (PowerShell), macOS (zsh) oder Linux (bash). Kostenlos, keine Installation, 100 % im Browser.",
  },
  app: {
    subtitle:
      "ExifTool-Befehlsgenerator zum Ändern von Datum und Uhrzeit eines Videos (MP4, MOV) ohne Voraussetzungen und ohne Software zu installieren.",
    toggleTheme: "Design umschalten",
  },
  language: {
    selectorLabel: "Sprache ändern",
    searchPlaceholder: "Sprache suchen…",
    noResults: "Keine Sprachen gefunden",
  },
  os: {
    ariaLabel: "Betriebssystem",
  },
  filePath: {
    label: "Dateipfad",
    getPath: "Pfad ermitteln:",
  },
  pathTooltip: {
    windows: {
      steps: ["Rechtsklick auf die Datei", "Als Pfad kopieren"],
    },
    macos: {
      steps: ["⌥ (Option) + Rechtsklick auf die Datei", '„clip.mp4" als Pfadname kopieren'],
    },
    linux: {
      steps: ["Rechtsklick auf die Datei (Nautilus, Dolphin…)", "Ort kopieren"],
    },
  },
  date: { label: "Datum" },
  time: { label: "Uhrzeit" },
  advanced: {
    title: "Erweiterte Optionen",
    dateTagsToModify: "Zu ändernde Datums-Tags",
    forceUtc: "UTC-Zeit erzwingen (-api QuickTimeUTC)",
    forceUtcHelp: "Empfohlen für MP4/MOV-Videos: erhält den tatsächlichen Zeitstempel, den QuickTime erwartet.",
    overwrite: "Originaldatei überschreiben (keine _original-Kopie)",
    editLocation: "Standort bearbeiten",
    latitude: "Breitengrad",
    longitude: "Längengrad",
    tagMeanings: {
      createDate: "Erstellungsdatum",
      mediaCreateDate: "Medien-Erstellungsdatum",
      trackCreateDate: "Track-Erstellungsdatum",
      modifyDate: "Änderungsdatum",
    },
  },
  command: {
    copy: "Kopieren",
    copied: "Kopiert!",
  },
  footer: {
    desktopComingSoon: "Eine Desktop-App mit grafischer Oberfläche folgt in Kürze.",
  },
};

export default de;
