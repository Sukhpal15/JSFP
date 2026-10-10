"use client";

import { BookOpen, Code2, Minus, Plus } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { categories, questions } from "../../utils/static-data";

type Question = (typeof questions)[number];
type Props = {
  questions: Question[];
  activeCategory: string;
  setActiveCategory: (value: string) => void;
  selectedId: number;
  selectQuestion: (question: Question) => void;
  questionPanelWidth: number;
  setQuestionPanelWidth: Dispatch<SetStateAction<number>>;
};

export function QuestionList({ questions: filteredQuestions, activeCategory, setActiveCategory, selectedId, selectQuestion, questionPanelWidth, setQuestionPanelWidth }: Props) {
  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#111118]">
      <div className="border-b border-white/[0.07] p-2.5">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0"><h3 className="text-xs font-semibold">Practice questions</h3><p className="mt-1 text-[9px] text-[#827b94]">{filteredQuestions.length} shown</p></div>
          <div className="flex shrink-0 items-center gap-1">
            <button type="button" onClick={() => setQuestionPanelWidth((width) => Math.max(150, width - 20))} disabled={questionPanelWidth <= 150} title="Make questions panel narrower" aria-label="Make questions panel narrower" className="rounded-md border border-white/[0.1] p-1.5 text-[#aaa5b8] transition hover:bg-white/[0.07] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"><Minus size={13} /></button>
            <button type="button" onClick={() => setQuestionPanelWidth((width) => Math.min(320, width + 20))} disabled={questionPanelWidth >= 320} title="Make questions panel wider" aria-label="Make questions panel wider" className="rounded-md border border-white/[0.1] p-1.5 text-[#aaa5b8] transition hover:bg-white/[0.07] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"><Plus size={13} /></button>
            <BookOpen size={16} className="ml-1 text-[#b99ae8]" />
          </div>
        </div>
      </div>
      <div className="border-b border-white/[0.07] p-2">
        <label htmlFor="question-category" className="mb-1.5 block text-[9px] font-semibold uppercase tracking-widest text-[#827b94]">Category</label>
        <select id="question-category" value={activeCategory} onChange={(event) => setActiveCategory(event.target.value)} className="w-full min-w-0 rounded-lg border border-white/[0.1] bg-[#17171f] px-2 py-2 text-[11px] text-[#eeeaf6] outline-none focus:border-[#8d6ac7]">
          {categories.map((category) => {
            const count = category === "All Questions" ? questions.length : questions.filter((q) => q.category === category).length;
            return <option key={category} value={category}>{category} ({count})</option>;
          })}
        </select>
      </div>
      <div className="space-y-1 overflow-y-auto p-1.5">
        <p className="px-1 pb-1 text-[9px] font-semibold uppercase tracking-widest text-[#827b94]">{activeCategory === "All Questions" ? "All challenges" : `${activeCategory} questions`}</p>
        {filteredQuestions.map((question) => (
          <button key={question.id} onClick={() => selectQuestion(question)} className={`w-full rounded-lg border p-2 text-left transition ${selectedId === question.id ? "border-[#7555a4] bg-[#261d35]" : "border-transparent bg-[#17171f] hover:border-white/[0.1]"}`}>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#25232e] text-[#c4b5fd]"><Code2 size={13} /></span>
              <div className="min-w-0 flex-1"><p className="text-[11px] font-medium leading-4">{question.title}</p><p className="mt-0.5 text-[9px] text-[#827b94]">{question.category}</p></div>
              <span className={`text-[9px] ${question.level === "Easy" ? "text-emerald-400" : "text-amber-300"}`}>{question.level}</span>
            </div>
          </button>
        ))}
        {filteredQuestions.length === 0 && <p className="p-4 text-center text-xs text-[#827b94]">No questions found.</p>}
      </div>
    </div>
  );
}
