"use client";

import { ChevronRight, Lightbulb } from "lucide-react";

type Props = { showHint: boolean; setShowHint: (value: boolean) => void };

export function HintPanel({ showHint, setShowHint }: Props) {
  return (
    <div className="rounded-2xl border border-[#31263f] bg-[#15111d] p-4">
      <button onClick={() => setShowHint(!showHint)} className="flex items-center gap-2 text-sm font-medium text-[#d5c0f5]">
        <Lightbulb size={17} /> Need a little hint? <ChevronRight size={15} className={`transition-transform ${showHint ? "rotate-90" : ""}`} />
      </button>
      {showHint && <p className="mt-3 text-xs leading-5 text-[#aaa0bc]">Break the problem into small steps. Think about the input, the expected output, and which JavaScript concept can help you solve it.</p>}
    </div>
  );
}
