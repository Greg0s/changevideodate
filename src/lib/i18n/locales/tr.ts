import type { Translation } from "./en";

const tr: Translation = {
  seo: {
    title: "changevideodate — Video tarihini değiştirmek için ExifTool komut oluşturucu",
    description:
      "MP4/MOV videolarınızın tarih ve saatini değiştirmek için tam ExifTool komutunu tek tıkla oluşturun; Windows (PowerShell), macOS (zsh) veya Linux (bash) üzerinde. Ücretsiz, kurulum gerektirmez, tamamen tarayıcınızda çalışır.",
  },
  app: {
    subtitle:
      "Bir videonun tarih ve saatini (MP4, MOV) değiştirmek için ExifTool komut oluşturucu — hiçbir ön koşul veya yazılım kurulumu gerektirmez.",
    toggleTheme: "Temayı değiştir",
  },
  language: {
    selectorLabel: "Dili değiştir",
    searchPlaceholder: "Dil ara…",
    noResults: "Dil bulunamadı",
  },
  os: {
    ariaLabel: "İşletim sistemi",
  },
  filePath: {
    label: "Dosya yolu",
    getPath: "Yolu al:",
  },
  pathTooltip: {
    windows: {
      steps: ["Dosyaya sağ tıklayın", "Yol olarak kopyala"],
    },
    macos: {
      steps: ["⌥ (Option) + dosyaya sağ tıklayın", '"clip.mp4" dosyasını Yol Adı olarak kopyala'],
    },
    linux: {
      steps: ["Dosyaya sağ tıklayın (Nautilus, Dolphin…)", "Konumu kopyala"],
    },
  },
  date: { label: "Tarih" },
  time: { label: "Saat" },
  advanced: {
    title: "Gelişmiş seçenekler",
    dateTagsToModify: "Değiştirilecek tarih etiketleri",
    forceUtc: "UTC saatini zorla (-api QuickTimeUTC)",
    forceUtcHelp: "MP4/MOV videoları için önerilir: QuickTime'ın beklediği gerçek zaman damgasını korur.",
    overwrite: "Orijinal dosyanın üzerine yaz (_original kopyası oluşturma)",
    editLocation: "Konumu düzenle",
    latitude: "Enlem",
    longitude: "Boylam",
    tagMeanings: {
      createDate: "Oluşturulma tarihi",
      mediaCreateDate: "Medya oluşturulma tarihi",
      trackCreateDate: "Parça oluşturulma tarihi",
      modifyDate: "Değiştirilme tarihi",
    },
  },
  command: {
    copy: "Kopyala",
    copied: "Kopyalandı!",
  },
  footer: {
    desktopComingSoon: "Grafik arayüzlü bir masaüstü uygulaması yakında geliyor.",
  },
};

export default tr;
