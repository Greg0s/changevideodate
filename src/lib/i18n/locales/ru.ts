import type { Translation } from "./en";

const ru: Translation = {
  seo: {
    title: "changevideodate — генератор команд ExifTool для изменения даты видео",
    description:
      "Сгенерируйте в один клик точную команду ExifTool для изменения даты и времени видео MP4/MOV в Windows (PowerShell), macOS (zsh) или Linux (bash). Бесплатно, без установки, полностью в браузере.",
  },
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
  install: {
    alreadyInstalled: "У меня уже установлен ExifTool",
    tooltip: "Оставьте не отмеченным, если не уверены.",
  },
  filePath: {
    label: "Путь к файлу",
    getPath: "Получить путь:",
  },
  pathTooltip: {
    howTo: "{action}, затем «{menuItem}»",
    windows: { action: "Правый клик по файлу", menuItem: "Копировать как путь" },
    macos: { action: "⌥ (Option) + правый клик по файлу", menuItem: "Скопировать \"{file}\" как путь" },
    linux: { action: "Правый клик по файлу", menuItem: "Копировать расположение" },
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
    map: {
      show: "Показать карту",
      hide: "Скрыть карту",
      loading: "Загрузка карты…",
      hint: "Щёлкните по карте или перетащите маркер, чтобы задать координаты. При открытии карты загружаются тайлы с OpenStreetMap.",
    },
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
};

export default ru;
