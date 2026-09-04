import type { Translation } from "./en";

const pt: Translation = {
  app: {
    subtitle:
      "Gerador de comandos ExifTool para alterar a data e hora de um vídeo (MP4, MOV) — Windows, macOS ou Linux, sem necessidade de instalar software.",
    toggleTheme: "Alternar tema",
  },
  language: {
    selectorLabel: "Alterar idioma",
    searchPlaceholder: "Pesquisar um idioma…",
    noResults: "Nenhum idioma encontrado",
  },
  os: {
    ariaLabel: "Sistema operacional",
  },
  filePath: {
    label: "Caminho do arquivo",
    getPath: "Obter o caminho:",
  },
  pathTooltip: {
    windows: {
      steps: ["Shift + clique com o botão direito no arquivo", "Copiar como caminho"],
      menu: ["Abrir com", "Copiar", "Copiar como caminho"],
    },
    macos: {
      steps: ["⌥ (Option) + clique com o botão direito no arquivo", 'Copiar "clip.mp4" como Nome do Caminho'],
      menu: ["Abrir Com", "Duplicar", 'Copiar "clip.mp4" como Nome do Caminho'],
    },
    linux: {
      steps: ["Clique com o botão direito no arquivo (Nautilus, Dolphin…)", "Copiar localização"],
      menu: ["Abrir com", "Recortar", "Copiar localização"],
    },
  },
  date: { label: "Data" },
  time: { label: "Hora" },
  advanced: {
    title: "Opções avançadas",
    dateTagsToModify: "Tags de data a modificar",
    forceUtc: "Forçar horário UTC (-api QuickTimeUTC)",
    forceUtcHelp: "Recomendado para vídeos MP4/MOV: preserva o carimbo de data/hora real esperado pelo QuickTime.",
    overwrite: "Sobrescrever o arquivo original (sem cópia _original)",
    editLocation: "Editar localização",
    latitude: "Latitude",
    longitude: "Longitude",
  },
  command: {
    copy: "Copiar",
    copied: "Copiado!",
  },
  footer: {
    desktopComingSoon: "Um aplicativo de desktop com interface gráfica está a caminho.",
  },
};

export default pt;
