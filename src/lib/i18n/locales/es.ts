import type { Translation } from "./en";

const es: Translation = {
  app: {
    subtitle:
      "Generador de comandos de ExifTool para cambiar la fecha y hora de un vídeo (MP4, MOV) — Windows, macOS o Linux, sin necesidad de instalar software.",
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
      steps: ["Mayús + clic derecho en el archivo", "Copiar como ruta de acceso"],
      menu: ["Abrir con", "Copiar", "Copiar como ruta de acceso"],
    },
    macos: {
      steps: ["⌥ (Opción) + clic derecho en el archivo", 'Copiar "clip.mp4" como ruta'],
      menu: ["Abrir con", "Duplicar", 'Copiar "clip.mp4" como ruta'],
    },
    linux: {
      steps: ["Clic derecho en el archivo (Nautilus, Dolphin…)", "Copiar ubicación"],
      menu: ["Abrir con", "Cortar", "Copiar ubicación"],
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
