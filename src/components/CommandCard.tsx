import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { SANS_FONT } from "../lib/theme";
import type { CommandSegment, Theme } from "../lib/types";

interface CommandCardProps {
  segments: CommandSegment[];
  shellName: string;
  theme: Theme;
}

export function CommandCard({ segments, shellName, theme }: CommandCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const command = segments.map((s) => s.text).join(" ");
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable (insecure context, permissions, etc.).
    }
  }

  return (
    <div
      style={{ background: theme.panel, borderColor: theme.border }}
      className="rounded-lg border overflow-hidden mb-8 shadow-xl"
    >
      <div style={{ background: theme.accent }} className="h-1 w-full" />
      <div
        style={{ borderColor: theme.border }}
        className="flex items-center justify-between px-4 py-2.5 border-b"
      >
        <span style={{ color: theme.textMuted, fontFamily: SANS_FONT }} className="text-xs">
          {shellName}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          style={{
            background: copied ? theme.success : theme.accent,
            color: copied ? "#0A0A0C" : theme.accentText,
            fontFamily: SANS_FONT,
          }}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer"
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className="px-4 py-5 sm:px-5 sm:py-6 overflow-x-auto">
        <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-all">
          {segments.map((seg, i) => (
            <span key={i}>
              <span style={{ color: theme[seg.kind] }}>{seg.text}</span>
              {i < segments.length - 1 ? " " : ""}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
