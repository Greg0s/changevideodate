import type { Translation } from "./en";

const hi: Translation = {
  app: {
    subtitle:
      "वीडियो (MP4, MOV) की तारीख़ और समय बदलने के लिए ExifTool कमांड जनरेटर — बिना किसी पूर्व-आवश्यकता के और बिना कोई सॉफ़्टवेयर इंस्टॉल किए।",
    toggleTheme: "थीम बदलें",
  },
  language: {
    selectorLabel: "भाषा बदलें",
    searchPlaceholder: "भाषा खोजें…",
    noResults: "कोई भाषा नहीं मिली",
  },
  os: {
    ariaLabel: "ऑपरेटिंग सिस्टम",
  },
  filePath: {
    label: "फ़ाइल पथ",
    getPath: "पथ प्राप्त करें:",
  },
  pathTooltip: {
    windows: {
      steps: ["Shift + फ़ाइल पर राइट-क्लिक करें", "पथ के रूप में कॉपी करें"],
      menu: ["इसके साथ खोलें", "कॉपी करें", "पथ के रूप में कॉपी करें"],
    },
    macos: {
      steps: ["⌥ (Option) + फ़ाइल पर राइट-क्लिक करें", '"clip.mp4" को पथ नाम के रूप में कॉपी करें'],
      menu: ["इसके साथ खोलें", "डुप्लिकेट करें", '"clip.mp4" को पथ नाम के रूप में कॉपी करें'],
    },
    linux: {
      steps: ["फ़ाइल पर राइट-क्लिक करें (Nautilus, Dolphin…)", "स्थान कॉपी करें"],
      menu: ["इसके साथ खोलें", "काटें", "स्थान कॉपी करें"],
    },
  },
  date: { label: "तारीख़" },
  time: { label: "समय" },
  advanced: {
    title: "उन्नत विकल्प",
    dateTagsToModify: "बदले जाने वाले डेट टैग",
    forceUtc: "UTC समय लागू करें (-api QuickTimeUTC)",
    forceUtcHelp: "MP4/MOV वीडियो के लिए अनुशंसित: QuickTime द्वारा अपेक्षित वास्तविक टाइमस्टैंप को सुरक्षित रखता है।",
    overwrite: "मूल फ़ाइल को अधिलेखित करें (कोई _original प्रतिलिपि नहीं)",
    editLocation: "स्थान संपादित करें",
    latitude: "अक्षांश",
    longitude: "देशांतर",
    tagMeanings: {
      createDate: "निर्माण तिथि",
      mediaCreateDate: "मीडिया निर्माण तिथि",
      trackCreateDate: "ट्रैक निर्माण तिथि",
      modifyDate: "संशोधन तिथि",
    },
  },
  command: {
    copy: "कॉपी करें",
    copied: "कॉपी हो गया!",
  },
  footer: {
    desktopComingSoon: "ग्राफ़िकल इंटरफ़ेस वाला डेस्कटॉप ऐप जल्द ही आ रहा है।",
  },
};

export default hi;
