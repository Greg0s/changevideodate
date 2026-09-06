import type { Translation } from "./en";

const it: Translation = {
  seo: {
    title: "changevideodate — Generatore di comandi ExifTool per cambiare la data di un video",
    description:
      "Genera con un clic il comando ExifTool esatto per cambiare data e ora dei tuoi video MP4/MOV, su Windows (PowerShell), macOS (zsh) o Linux (bash). Gratuito, senza installazione, 100% nel browser.",
  },
  app: {
    subtitle:
      "Generatore di comandi ExifTool per cambiare data e ora di un video (MP4, MOV) senza alcun prerequisito né software da installare.",
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
      steps: ["Clic destro sul file", "Copia come percorso"],
    },
    macos: {
      steps: ["⌥ (Opzione) + clic destro sul file", 'Copia "clip.mp4" come nome percorso'],
    },
    linux: {
      steps: ["Clic destro sul file (Nautilus, Dolphin…)", "Copia posizione"],
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
    tagMeanings: {
      createDate: "Data di creazione",
      mediaCreateDate: "Data di creazione del media",
      trackCreateDate: "Data di creazione della traccia",
      modifyDate: "Data di modifica",
    },
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
