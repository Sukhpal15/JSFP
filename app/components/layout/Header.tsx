"use client";

import { Menu, Search } from "lucide-react";
import { CatIllustration } from "../../utils/static-data";
import { useGlobalSearch } from "./SearchContext";

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const { search, setSearch } = useGlobalSearch();

  return (
    <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between gap-3 border-b border-white/[0.07] bg-[#0b0b10]/95 px-4 backdrop-blur sm:px-7">
      <button type="button" onClick={onMenuClick} aria-label="Open navigation menu" className="rounded-lg p-2 text-[#aaa5b8] hover:bg-white/[0.08] lg:hidden"><Menu size={20} /></button>
      <div className="relative max-w-md flex-1">
        <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#827b94]" />
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search questions..." className="w-full rounded-xl border border-white/[0.09] bg-[#14141c] py-2.5 pl-10 pr-3 text-sm outline-none placeholder:text-[#777185] focus:border-[#8d6ac7]" />
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden text-xs text-[#9993aa] xl:block">A little practice goes a long way.</span>
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#6f529b] bg-[#241b32] p-1">
          <CatIllustration type="editor" />
        </div>
      </div>
    </header>
  );
}
