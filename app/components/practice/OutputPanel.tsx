import { Terminal } from "lucide-react";
import { CatIllustration } from "../../utils/static-data";

export function OutputPanel({ output }: { output: string }) {
  return (
    <div className="flex h-[460px] min-w-0 flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#111118]">
      <div className="flex shrink-0 items-center gap-2 border-b border-white/[0.07] px-4 py-3 text-sm"><Terminal size={16} className="text-[#b99ae8]" /><span>Output</span><span className="ml-auto text-[10px] text-[#777185]">Console</span></div>
      <div className="min-h-0 flex-1 overflow-auto whitespace-pre-wrap p-4 font-mono text-xs leading-6 text-[#b9b2c8]">
        {output || <div className="flex min-h-[180px] flex-col items-center justify-center gap-3 text-center text-[#777185]"><div className="w-56"><CatIllustration type="sleeping" /></div><span>Run your code to see the output here.</span></div>}
      </div>
      <div className="shrink-0 border-t border-white/[0.07] px-4 py-2 text-[10px] text-[#777185]">Output will appear here</div>
    </div>
  );
}
