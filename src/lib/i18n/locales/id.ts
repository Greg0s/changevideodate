import type { Translation } from "./en";

const id: Translation = {
  app: {
    subtitle:
      "Generator perintah ExifTool untuk mengubah tanggal dan waktu video (MP4, MOV) — Windows, macOS, atau Linux, tanpa perlu menginstal perangkat lunak.",
    toggleTheme: "Ganti tema",
  },
  language: {
    selectorLabel: "Ganti bahasa",
    searchPlaceholder: "Cari bahasa…",
    noResults: "Bahasa tidak ditemukan",
  },
  os: {
    ariaLabel: "Sistem operasi",
  },
  filePath: {
    label: "Jalur berkas",
    getPath: "Dapatkan jalurnya:",
  },
  pathTooltip: {
    windows: {
      steps: ["Shift + klik kanan pada berkas", "Salin sebagai jalur"],
      menu: ["Buka dengan", "Salin", "Salin sebagai jalur"],
    },
    macos: {
      steps: ["⌥ (Option) + klik kanan pada berkas", 'Salin "clip.mp4" sebagai Nama Jalur'],
      menu: ["Buka Dengan", "Duplikat", 'Salin "clip.mp4" sebagai Nama Jalur'],
    },
    linux: {
      steps: ["Klik kanan pada berkas (Nautilus, Dolphin…)", "Salin lokasi"],
      menu: ["Buka dengan", "Potong", "Salin lokasi"],
    },
  },
  date: { label: "Tanggal" },
  time: { label: "Waktu" },
  advanced: {
    title: "Opsi lanjutan",
    dateTagsToModify: "Tag tanggal yang akan diubah",
    forceUtc: "Paksa waktu UTC (-api QuickTimeUTC)",
    forceUtcHelp: "Direkomendasikan untuk video MP4/MOV: mempertahankan stempel waktu asli yang diharapkan QuickTime.",
    overwrite: "Timpa berkas asli (tanpa salinan _original)",
    editLocation: "Edit lokasi",
    latitude: "Lintang",
    longitude: "Bujur",
  },
  command: {
    copy: "Salin",
    copied: "Disalin!",
  },
  footer: {
    desktopComingSoon: "Aplikasi desktop dengan antarmuka grafis akan segera hadir.",
  },
};

export default id;
