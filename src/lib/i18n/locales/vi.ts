import type { Translation } from "./en";

const vi: Translation = {
  app: {
    subtitle:
      "Trình tạo lệnh ExifTool để thay đổi ngày giờ của video (MP4, MOV) không cần điều kiện tiên quyết nào và không cần cài đặt phần mềm.",
    toggleTheme: "Chuyển giao diện",
  },
  language: {
    selectorLabel: "Đổi ngôn ngữ",
    searchPlaceholder: "Tìm ngôn ngữ…",
    noResults: "Không tìm thấy ngôn ngữ nào",
  },
  os: {
    ariaLabel: "Hệ điều hành",
  },
  filePath: {
    label: "Đường dẫn tệp",
    getPath: "Lấy đường dẫn:",
  },
  pathTooltip: {
    windows: {
      steps: ["Nhấp chuột phải vào tệp", "Sao chép dưới dạng đường dẫn"],
    },
    macos: {
      steps: ["⌥ (Option) + nhấp chuột phải vào tệp", 'Sao chép "clip.mp4" dưới dạng đường dẫn'],
    },
    linux: {
      steps: ["Nhấp chuột phải vào tệp (Nautilus, Dolphin…)", "Sao chép vị trí"],
    },
  },
  date: { label: "Ngày" },
  time: { label: "Giờ" },
  advanced: {
    title: "Tùy chọn nâng cao",
    dateTagsToModify: "Thẻ ngày cần thay đổi",
    forceUtc: "Ép giờ UTC (-api QuickTimeUTC)",
    forceUtcHelp: "Khuyến nghị cho video MP4/MOV: giữ nguyên dấu thời gian thực mà QuickTime yêu cầu.",
    overwrite: "Ghi đè tệp gốc (không tạo bản sao _original)",
    editLocation: "Chỉnh sửa vị trí",
    latitude: "Vĩ độ",
    longitude: "Kinh độ",
    tagMeanings: {
      createDate: "Ngày tạo",
      mediaCreateDate: "Ngày tạo media",
      trackCreateDate: "Ngày tạo track",
      modifyDate: "Ngày sửa đổi",
    },
  },
  command: {
    copy: "Sao chép",
    copied: "Đã sao chép!",
  },
  footer: {
    desktopComingSoon: "Ứng dụng desktop có giao diện đồ họa sắp ra mắt.",
  },
};

export default vi;
