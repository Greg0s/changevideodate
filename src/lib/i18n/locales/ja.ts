import type { Translation } from "./en";

const ja: Translation = {
  app: {
    subtitle:
      "動画の日時（MP4、MOV）を変更するための ExifTool コマンドジェネレーター。前提条件なし、ソフトウェアのインストール不要。",
    toggleTheme: "テーマを切り替え",
  },
  language: {
    selectorLabel: "言語を変更",
    searchPlaceholder: "言語を検索…",
    noResults: "言語が見つかりません",
  },
  os: {
    ariaLabel: "オペレーティングシステム",
  },
  filePath: {
    label: "ファイルパス",
    getPath: "パスを取得：",
  },
  pathTooltip: {
    windows: {
      steps: ["Shift + ファイルを右クリック", "パスとしてコピー"],
      menu: ["プログラムから開く", "コピー", "パスとしてコピー"],
    },
    macos: {
      steps: ["⌥（Option）+ ファイルを右クリック", "「clip.mp4」をパス名としてコピー"],
      menu: ["このアプリケーションで開く", "複製", "「clip.mp4」をパス名としてコピー"],
    },
    linux: {
      steps: ["ファイルを右クリック（Nautilus、Dolphin など）", "場所をコピー"],
      menu: ["アプリケーションで開く", "切り取り", "場所をコピー"],
    },
  },
  date: { label: "日付" },
  time: { label: "時刻" },
  advanced: {
    title: "詳細オプション",
    dateTagsToModify: "変更する日付タグ",
    forceUtc: "UTC時刻を強制（-api QuickTimeUTC）",
    forceUtcHelp: "MP4/MOV動画に推奨：QuickTimeが期待する実際のタイムスタンプを保持します。",
    overwrite: "元のファイルを上書き（_originalコピーを作成しない）",
    editLocation: "位置情報を編集",
    latitude: "緯度",
    longitude: "経度",
    tagMeanings: {
      createDate: "作成日",
      mediaCreateDate: "メディア作成日",
      trackCreateDate: "トラック作成日",
      modifyDate: "変更日",
    },
  },
  command: {
    copy: "コピー",
    copied: "コピーしました！",
  },
  footer: {
    desktopComingSoon: "グラフィカルインターフェースを備えたデスクトップアプリを近日公開予定です。",
  },
};

export default ja;
