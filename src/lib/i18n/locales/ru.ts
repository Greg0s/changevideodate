import type { Translation } from "./en";

const ru: Translation = {
  app: {
    subtitle:
      "Генератор команд ExifTool для изменения даты и времени видео (MP4, MOV) без каких-либо предварительных требований и установки программ.",
    toggleTheme: "Переключить тему",
  },
  language: {
    selectorLabel: "Изменить язык",
    searchPlaceholder: "Поиск языка…",
    noResults: "Языки не найдены",
  },
  os: {
    ariaLabel: "Операционная система",
  },
  filePath: {
    label: "Путь к файлу",
    getPath: "Получить путь:",
  },
  pathTooltip: {
    windows: {
      steps: ["Shift + правый клик по файлу", "Копировать как путь"],
      menu: ["Открыть с помощью", "Копировать", "Копировать как путь"],
    },
    macos: {
      steps: ["⌥ (Option) + правый клик по файлу", 'Скопировать «clip.mp4» как путь'],
      menu: ["Открыть с помощью", "Дублировать", 'Скопировать «clip.mp4» как путь'],
    },
    linux: {
      steps: ["Правый клик по файлу (Nautilus, Dolphin…)", "Копировать расположение"],
      menu: ["Открыть с помощью", "Вырезать", "Копировать расположение"],
    },
  },
  date: { label: "Дата" },
  time: { label: "Время" },
  advanced: {
    title: "Дополнительные параметры",
    dateTagsToModify: "Теги даты для изменения",
    forceUtc: "Принудительно использовать UTC (-api QuickTimeUTC)",
    forceUtcHelp: "Рекомендуется для видео MP4/MOV: сохраняет реальную метку времени, которую ожидает QuickTime.",
    overwrite: "Перезаписать исходный файл (без копии _original)",
    editLocation: "Изменить местоположение",
    latitude: "Широта",
    longitude: "Долгота",
    tagMeanings: {
      createDate: "Дата создания",
      mediaCreateDate: "Дата создания медиа",
      trackCreateDate: "Дата создания дорожки",
      modifyDate: "Дата изменения",
    },
  },
  command: {
    copy: "Копировать",
    copied: "Скопировано!",
  },
  footer: {
    desktopComingSoon: "Настольное приложение с графическим интерфейсом скоро появится.",
  },
};

export default ru;
