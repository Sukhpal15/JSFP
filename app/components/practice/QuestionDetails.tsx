import { questions } from "../../utils/static-data";

type Question = (typeof questions)[number];

export function QuestionDetails({ question }: { question: Question }) {
  return (
    <div className="rounded-2xl border border-white/[0.09] bg-[#111118]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] p-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold">{question.title}</h3>
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] text-emerald-300">{question.level}</span>
          </div>
          <p className="mt-1 text-xs text-[#827b94]">{question.category} · JavaScript</p>
        </div>
        <span className="text-xs text-[#827b94]">Question {question.id} · {questions.length} total</span>
      </div>
      <div className="p-4">
        <p className="text-sm leading-6 text-[#c4bfce]">{question.description}</p>
        <div className="mt-4 rounded-xl border border-white/[0.07] bg-[#17171f] p-3">
          <p className="mb-2 text-xs font-medium text-[#aaa5b8]">Your task</p>
          <p className="text-xs leading-5 text-[#c7b4e7]">Write your solution in the editor and run it when the code runner is connected.</p>
        </div>
      </div>
    </div>
  );
}
