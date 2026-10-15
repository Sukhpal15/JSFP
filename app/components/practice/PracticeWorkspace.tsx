"use client";

import type { CSSProperties, Dispatch, RefObject, SetStateAction } from "react";
import type { questions as questionData } from "../../utils/static-data";
import { QuestionList } from "./QuestionList";
import { QuestionDetails } from "./QuestionDetails";
import { CodeEditor } from "./CodeEditor";
import { OutputPanel } from "./OutputPanel";
import { HintPanel } from "./HintPanel";
import CallPets from "../cool/CallPets";

type Question = (typeof questionData)[number];
type Props = {
  currentQuestion: Question;
  filteredQuestions: Question[];
  activeCategory: string;
  setActiveCategory: (value: string) => void;
  selectQuestion: (question: Question) => void;
  code: string;
  setCode: (value: string) => void;
  output: string;
  catVoiceEnabled: boolean;
  setCatVoiceEnabled: (enabled: boolean) => void;
  runCode: () => void;
  resetCode: () => void;
  showHint: boolean;
  setShowHint: (value: boolean) => void;
  questionPanelWidth: number;
  setQuestionPanelWidth: Dispatch<SetStateAction<number>>;
  isResizingQuestions: boolean;
  setIsResizingQuestions: (value: boolean) => void;
  practiceLayoutRef: RefObject<HTMLDivElement | null>;
};

export function PracticeWorkspace(props: Props) {
  const { currentQuestion, filteredQuestions, activeCategory, setActiveCategory, selectQuestion, code, setCode, output, catVoiceEnabled, setCatVoiceEnabled, runCode, resetCode, showHint, setShowHint, questionPanelWidth, setQuestionPanelWidth, isResizingQuestions, setIsResizingQuestions, practiceLayoutRef } = props;
  return (
    <>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[.18em] text-[#a88add]">Your learning space</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Let&apos;s write some code.</h2>
          <p className="mt-2 text-sm text-[#9993aa]">Learn by doing, one question at a time.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/[0.08] bg-[#14141c] px-3 py-2.5 text-xs text-[#aaa5b8]">
            <input type="checkbox" checked={catVoiceEnabled} onChange={(event) => setCatVoiceEnabled(event.target.checked)} className="accent-[#a88add]" />
            Cat voice {catVoiceEnabled ? "on" : "off"}
          </label>
          <CallPets />
          <div className="flex gap-3 rounded-xl border border-white/[0.08] bg-[#14141c] px-4 py-3 text-sm text-[#aaa5b8]"><span className="text-[#c6a9ff]">●</span>Practice mode</div>
        </div>
      </div>

      <div ref={practiceLayoutRef} className="grid grid-cols-1 gap-3 xl:grid-cols-[var(--question-panel-width)_10px_minmax(0,1fr)]" style={{ "--question-panel-width": `${questionPanelWidth}px` } as CSSProperties}>
        <QuestionList questions={filteredQuestions} activeCategory={activeCategory} setActiveCategory={setActiveCategory} selectedId={currentQuestion.id} selectQuestion={selectQuestion} questionPanelWidth={questionPanelWidth} setQuestionPanelWidth={setQuestionPanelWidth} />
        <div role="separator" aria-orientation="vertical" aria-label="Resize practice questions panel" title="Drag to resize questions panel" className="group hidden cursor-col-resize items-center justify-center rounded-full outline-none xl:flex" onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); setIsResizingQuestions(true); }} onPointerMove={(event) => { if (!isResizingQuestions || !practiceLayoutRef.current) return; const bounds = practiceLayoutRef.current.getBoundingClientRect(); setQuestionPanelWidth(() => Math.min(320, Math.max(150, event.clientX - bounds.left))); }} onPointerUp={() => setIsResizingQuestions(false)} onPointerCancel={() => setIsResizingQuestions(false)} tabIndex={0} onKeyDown={(event) => { if (event.key === "ArrowLeft") setQuestionPanelWidth((width) => Math.max(150, width - 10)); if (event.key === "ArrowRight") setQuestionPanelWidth((width) => Math.min(320, width + 10)); }}>
          <span className={`h-14 w-1 rounded-full transition-colors ${isResizingQuestions ? "bg-[#c6a9ff]" : "bg-white/10 group-hover:bg-[#8b63c7]"}`} />
        </div>
        <div className="flex min-w-0 flex-col gap-5">
          <QuestionDetails question={currentQuestion} />
          <div className="grid min-w-0 grid-cols-1 items-stretch gap-4 lg:grid-cols-2">
            <CodeEditor code={code} setCode={setCode} onRun={runCode} onReset={resetCode} />
            <OutputPanel output={output} />
          </div>
          <HintPanel showHint={showHint} setShowHint={setShowHint} />
        </div>
      </div>
    </>
  );
}
