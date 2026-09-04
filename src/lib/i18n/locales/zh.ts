import type { Translation } from "./en";

const zh: Translation = {
  app: {
    subtitle: "ExifTool 命令生成器，用于更改视频的日期和时间（MP4、MOV），无需任何前提条件，也无需安装任何软件。",
    toggleTheme: "切换主题",
  },
  language: {
    selectorLabel: "更改语言",
    searchPlaceholder: "搜索语言…",
    noResults: "未找到语言",
  },
  os: {
    ariaLabel: "操作系统",
  },
  filePath: {
    label: "文件路径",
    getPath: "获取路径：",
  },
  pathTooltip: {
    windows: {
      steps: ["Shift + 右键点击文件", "复制为路径"],
      menu: ["打开方式", "复制", "复制为路径"],
    },
    macos: {
      steps: ["⌥（Option）+ 右键点击文件", '将 "clip.mp4" 拷贝为路径名称'],
      menu: ["打开方式", "复制", '将 "clip.mp4" 拷贝为路径名称'],
    },
    linux: {
      steps: ["右键点击文件（Nautilus、Dolphin 等）", "复制位置"],
      menu: ["打开方式", "剪切", "复制位置"],
    },
  },
  date: { label: "日期" },
  time: { label: "时间" },
  advanced: {
    title: "高级选项",
    dateTagsToModify: "要修改的日期标签",
    forceUtc: "强制使用 UTC 时间（-api QuickTimeUTC）",
    forceUtcHelp: "推荐用于 MP4/MOV 视频：保留 QuickTime 所期望的真实时间戳。",
    overwrite: "覆盖原始文件（不生成 _original 副本）",
    editLocation: "编辑位置",
    latitude: "纬度",
    longitude: "经度",
  },
  command: {
    copy: "复制",
    copied: "已复制！",
  },
  footer: {
    desktopComingSoon: "带图形界面的桌面应用即将推出。",
  },
};

export default zh;
