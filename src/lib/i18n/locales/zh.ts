import type { Translation } from "./en";

const zh: Translation = {
  seo: {
    title: "changevideodate — 一键生成用于更改视频日期的 ExifTool 命令",
    description:
      "一键生成精确的 ExifTool 命令，用于更改 MP4/MOV 视频的日期和时间，支持 Windows（PowerShell）、macOS（zsh）或 Linux（bash）。免费，无需安装，100% 在浏览器中运行。",
  },
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
      steps: ["右键点击文件", "复制为路径"],
    },
    macos: {
      steps: ["⌥（Option）+ 右键点击文件", '将 "clip.mp4" 拷贝为路径名称'],
    },
    linux: {
      steps: ["右键点击文件（Nautilus、Dolphin 等）", "复制位置"],
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
    tagMeanings: {
      createDate: "创建日期",
      mediaCreateDate: "媒体创建日期",
      trackCreateDate: "轨道创建日期",
      modifyDate: "修改日期",
    },
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
