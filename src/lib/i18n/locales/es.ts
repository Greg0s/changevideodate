import type { Translation } from "./en";

const es: Translation = {
  app: {
    subtitle:
      "Generador de comandos de ExifTool para cambiar la fecha y hora de un vídeo (MP4, MOV) sin ningún requisito previo ni software que instalar.",
    toggleTheme: "Cambiar tema",
  },
  language: {
    selectorLabel: "Cambiar idioma",
    searchPlaceholder: "Buscar un idioma…",
    noResults: "No se encontraron idiomas",
  },
  os: {
    ariaLabel: "Sistema operativo",
  },
  filePath: {
    label: "Ruta del archivo",
    getPath: "Obtener la ruta:",
  },
  pathTooltip: {
    windows: {
      steps: ["Clic derecho en el archivo", "Copiar como ruta de acceso"],
    },
    macos: {
      steps: ["⌥ (Opción) + clic derecho en el archivo", 'Copiar "clip.mp4" como ruta'],
    },
    linux: {
      steps: ["Clic derecho en el archivo (Nautilus, Dolphin…)", "Copiar ubicación"],
    },
  },
  date: { label: "Fecha" },
  time: { label: "Hora" },
  advanced: {
    title: "Opciones avanzadas",
    dateTagsToModify: "Etiquetas de fecha a modificar",
    forceUtc: "Forzar hora UTC (-api QuickTimeUTC)",
    forceUtcHelp: "Recomendado para vídeos MP4/MOV: conserva la marca de tiempo real que espera QuickTime.",
    overwrite: "Sobrescribir el archivo original (sin copia _original)",
    editLocation: "Editar ubicación",
    latitude: "Latitud",
    longitude: "Longitud",
    tagMeanings: {
      createDate: "Fecha de creación",
      mediaCreateDate: "Fecha de creación del medio",
      trackCreateDate: "Fecha de creación de la pista",
      modifyDate: "Fecha de modificación",
    },
  },
  command: {
    copy: "Copiar",
    copied: "¡Copiado!",
  },
  footer: {
    desktopComingSoon: "Próximamente: una aplicación de escritorio con interfaz gráfica.",
  },
};

export default es;
