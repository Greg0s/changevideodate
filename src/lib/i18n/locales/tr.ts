import type { Translation } from "./en";

const tr: Translation = {
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
      steps: ["Shift + dosyaya sağ tıklayın", "Yol olarak kopyala"],
      menu: ["Birlikte aç", "Kopyala", "Yol olarak kopyala"],
    },
    macos: {
      steps: ["⌥ (Option) + dosyaya sağ tıklayın", '"clip.mp4" dosyasını Yol Adı olarak kopyala'],
      menu: ["Birlikte Aç", "Çoğalt", '"clip.mp4" dosyasını Yol Adı olarak kopyala'],
    },
    linux: {
      steps: ["Dosyaya sağ tıklayın (Nautilus, Dolphin…)", "Konumu kopyala"],
      menu: ["Birlikte aç", "Kes", "Konumu kopyala"],
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
