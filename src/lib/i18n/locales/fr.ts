import type { Translation } from "./en";

const fr: Translation = {
  seo: {
    title: "changevideodate — Générateur de commande ExifTool pour changer la date d'une vidéo",
    description:
      "Générez en un clic la commande ExifTool exacte pour changer la date et l'heure de vos vidéos MP4/MOV, sur Windows (PowerShell), macOS (zsh) ou Linux (bash). Gratuit, sans installation, 100 % dans votre navigateur.",
  },
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
  install: {
    alreadyInstalled: "J'ai déjà exiftool d'installé",
    tooltip: "Laissez décoché si vous ne savez pas.",
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
    map: {
      show: "Afficher la carte",
      hide: "Masquer la carte",
      loading: "Chargement de la carte…",
      hint: "Cliquez sur la carte ou faites glisser le repère pour définir les coordonnées. L'affichage de la carte charge des tuiles depuis OpenStreetMap.",
    },
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
};

export default fr;
