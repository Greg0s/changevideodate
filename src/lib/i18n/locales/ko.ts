import type { Translation } from "./en";

const ko: Translation = {
  app: {
    subtitle:
      "비디오(MP4, MOV)의 날짜와 시간을 변경하는 ExifTool 명령어 생성기 — 별도의 준비 사항이나 소프트웨어 설치가 전혀 필요 없습니다.",
    toggleTheme: "테마 전환",
  },
  language: {
    selectorLabel: "언어 변경",
    searchPlaceholder: "언어 검색…",
    noResults: "언어를 찾을 수 없습니다",
  },
  os: {
    ariaLabel: "운영체제",
  },
  filePath: {
    label: "파일 경로",
    getPath: "경로 가져오기:",
  },
  pathTooltip: {
    windows: {
      steps: ["Shift + 파일 우클릭", "경로로 복사"],
      menu: ["연결 프로그램", "복사", "경로로 복사"],
    },
    macos: {
      steps: ["⌥ (Option) + 파일 우클릭", '"clip.mp4"를 경로 이름으로 복사'],
      menu: ["다음으로 열기", "복제", '"clip.mp4"를 경로 이름으로 복사'],
    },
    linux: {
      steps: ["파일 우클릭 (Nautilus, Dolphin 등)", "위치 복사"],
      menu: ["다음으로 열기", "잘라내기", "위치 복사"],
    },
  },
  date: { label: "날짜" },
  time: { label: "시간" },
  advanced: {
    title: "고급 옵션",
    dateTagsToModify: "수정할 날짜 태그",
    forceUtc: "UTC 시간 강제 적용 (-api QuickTimeUTC)",
    forceUtcHelp: "MP4/MOV 비디오에 권장: QuickTime이 기대하는 실제 타임스탬프를 유지합니다.",
    overwrite: "원본 파일 덮어쓰기 (_original 사본 생성 안 함)",
    editLocation: "위치 편집",
    latitude: "위도",
    longitude: "경도",
  },
  command: {
    copy: "복사",
    copied: "복사됨!",
  },
  footer: {
    desktopComingSoon: "그래픽 인터페이스를 갖춘 데스크톱 앱이 곧 출시됩니다.",
  },
};

export default ko;
