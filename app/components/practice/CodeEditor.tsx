"use client";

import { Code2, Play, RotateCcw } from "lucide-react";
import { CatIllustration } from "../../utils/static-data";

type Props = { code: string; setCode: (value: string) => void; onRun: () => void; onReset: () => void };

export function CodeEditor({ code, setCode, onRun, onReset }: Props) {
  return (
    <div className="relative min-w-0 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#101016]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-4 py-3">
        <div className="flex items-center gap-2 text-sm"><span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#29223a] text-[#d1b6ff]"><Code2 size={14} /></span><span>solution.js</span></div>
        <div className="flex gap-2">
          <button onClick={onReset} className="flex items-center gap-1.5 rounded-lg border border-white/[0.1] px-3 py-2 text-xs text-[#aaa5b8] hover:bg-white/[0.05]"><RotateCcw size={13} /> Reset</button>
          <button onClick={onRun} className="flex items-center gap-1.5 rounded-lg bg-[#8b63c7] px-4 py-2 text-xs font-semibold text-white hover:bg-[#9b76d3]"><Play size={13} fill="currentColor" /> Run</button>
        </div>
      </div>
      <div className="flex min-h-[460px]">
        <div className="select-none border-r border-white/[0.06] px-3 py-4 text-right font-mono text-xs leading-6 text-[#575366]">{code.split("\n").map((_, index) => <div key={index}>{index + 1}</div>)}</div>
        <textarea spellCheck={false} value={code} onChange={(event) => setCode(event.target.value)} aria-label="JavaScript code editor" className="min-h-[460px] min-w-0 flex-1 resize-y bg-transparent p-4 font-mono text-sm leading-6 text-[#d8c9f2] outline-none" />
      </div>
      <div className="flex items-center gap-2 border-t border-white/[0.07] px-4 py-2 text-[10px] text-[#777185]"><span className="h-1.5 w-1.5 rounded-full bg-[#b99ae8]" /> JavaScript<span className="ml-auto">UTF-8</span></div>
      <div className="pointer-events-none absolute bottom-10 right-3 hidden w-[200px] sm:block"><CatIllustration type="editor" /></div>
    </div>
  );
}
