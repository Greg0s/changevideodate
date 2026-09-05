import type { Translation } from "./en";

const fr: Translation = {
  app: {
    subtitle:
      "Générateur de commande ExifTool pour changer la date et l'heure d'une vidéo (MP4, MOV) sans aucun prérequis ni logiciel à installer.",
    toggleTheme: "Changer de thème",
  },
  language: {
    selectorLabel: "Changer de langue",
    searchPlaceholder: "Rechercher une langue…",
    noResults: "Aucune langue trouvée",
  },
  os: {
    ariaLabel: "Système d'exploitation",
  },
  filePath: {
    label: "Chemin du fichier",
    getPath: "Obtenir le chemin :",
  },
  pathTooltip: {
    windows: {
      steps: ["Clic droit sur le fichier", "Copier en tant que chemin d'accès"],
    },
    macos: {
      steps: ["⌥ (Option) + clic droit sur le fichier", 'Copier « clip.mp4 » en tant que chemin'],
    },
    linux: {
      steps: ["Clic droit sur le fichier (Nautilus, Dolphin…)", "Copier l'emplacement"],
    },
  },
  date: { label: "Date" },
  time: { label: "Heure" },
  advanced: {
    title: "Options avancées",
    dateTagsToModify: "Tags de date à modifier",
    forceUtc: "Forcer l'heure UTC (-api QuickTimeUTC)",
    forceUtcHelp: "Recommandé pour les vidéos MP4/MOV : préserve l'horodatage réel attendu par QuickTime.",
    overwrite: "Écraser le fichier original (pas de copie _original)",
    editLocation: "Modifier la position",
    latitude: "Latitude",
    longitude: "Longitude",
    tagMeanings: {
      createDate: "Date de création",
      mediaCreateDate: "Date de création du média",
      trackCreateDate: "Date de création de la piste",
      modifyDate: "Date de modification",
    },
  },
  command: {
    copy: "Copier",
    copied: "Copié !",
  },
  footer: {
    desktopComingSoon: "Une application de bureau avec interface graphique arrive bientôt.",
  },
};

export default fr;
