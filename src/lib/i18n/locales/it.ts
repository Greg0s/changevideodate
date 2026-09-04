import type { Translation } from "./en";

const it: Translation = {
  app: {
    subtitle:
      "Generatore di comandi ExifTool per cambiare data e ora di un video (MP4, MOV) — Windows, macOS o Linux, senza installare software.",
    toggleTheme: "Cambia tema",
  },
  language: {
    selectorLabel: "Cambia lingua",
    searchPlaceholder: "Cerca una lingua…",
    noResults: "Nessuna lingua trovata",
  },
  os: {
    ariaLabel: "Sistema operativo",
  },
  filePath: {
    label: "Percorso file",
    getPath: "Ottieni il percorso:",
  },
  pathTooltip: {
    windows: {
      steps: ["Maiusc + clic destro sul file", "Copia come percorso"],
      menu: ["Apri con", "Copia", "Copia come percorso"],
    },
    macos: {
      steps: ["⌥ (Opzione) + clic destro sul file", 'Copia "clip.mp4" come nome percorso'],
      menu: ["Apri con", "Duplica", 'Copia "clip.mp4" come nome percorso'],
    },
    linux: {
      steps: ["Clic destro sul file (Nautilus, Dolphin…)", "Copia posizione"],
      menu: ["Apri con", "Taglia", "Copia posizione"],
    },
  },
  date: { label: "Data" },
  time: { label: "Ora" },
  advanced: {
    title: "Opzioni avanzate",
    dateTagsToModify: "Tag di data da modificare",
    forceUtc: "Forza orario UTC (-api QuickTimeUTC)",
    forceUtcHelp: "Consigliato per video MP4/MOV: preserva il timestamp reale atteso da QuickTime.",
    overwrite: "Sovrascrivi il file originale (nessuna copia _original)",
    editLocation: "Modifica posizione",
    latitude: "Latitudine",
    longitude: "Longitudine",
  },
  command: {
    copy: "Copia",
    copied: "Copiato!",
  },
  footer: {
    desktopComingSoon: "Presto disponibile un'app desktop con interfaccia grafica.",
  },
};

export default it;
