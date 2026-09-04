import type { Translation } from "./en";

const ar: Translation = {
  app: {
    subtitle:
      "أداة لتوليد أمر ExifTool لتغيير تاريخ ووقت الفيديو (MP4, MOV) — على ويندوز أو ماك أو لينكس، دون الحاجة لتثبيت أي برنامج.",
    toggleTheme: "تبديل المظهر",
  },
  language: {
    selectorLabel: "تغيير اللغة",
    searchPlaceholder: "ابحث عن لغة…",
    noResults: "لم يتم العثور على أي لغة",
  },
  os: {
    ariaLabel: "نظام التشغيل",
  },
  filePath: {
    label: "مسار الملف",
    getPath: "الحصول على المسار:",
  },
  pathTooltip: {
    windows: {
      steps: ["Shift + النقر بزر الماوس الأيمن على الملف", "نسخ كمسار"],
      menu: ["فتح باستخدام", "نسخ", "نسخ كمسار"],
    },
    macos: {
      steps: ["⌥ (Option) + النقر بزر الماوس الأيمن على الملف", 'نسخ "clip.mp4" كمسار'],
      menu: ["فتح باستخدام", "تكرار", 'نسخ "clip.mp4" كمسار'],
    },
    linux: {
      steps: ["النقر بزر الماوس الأيمن على الملف (Nautilus، Dolphin…)", "نسخ الموقع"],
      menu: ["فتح باستخدام", "قص", "نسخ الموقع"],
    },
  },
  date: { label: "التاريخ" },
  time: { label: "الوقت" },
  advanced: {
    title: "خيارات متقدمة",
    dateTagsToModify: "وسوم التاريخ المراد تعديلها",
    forceUtc: "فرض التوقيت العالمي UTC (-api QuickTimeUTC)",
    forceUtcHelp: "موصى به لفيديوهات MP4/MOV: يحافظ على الطابع الزمني الحقيقي الذي يتوقعه QuickTime.",
    overwrite: "استبدال الملف الأصلي (بدون نسخة _original)",
    editLocation: "تعديل الموقع الجغرافي",
    latitude: "خط العرض",
    longitude: "خط الطول",
  },
  command: {
    copy: "نسخ",
    copied: "تم النسخ!",
  },
  footer: {
    desktopComingSoon: "تطبيق سطح مكتب بواجهة رسومية قادم قريبًا.",
  },
};

export default ar;
