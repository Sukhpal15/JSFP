"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { CatIllustration } from "../../utils/static-data";

export function PlaceholderPage({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-white/[0.09] bg-[#111118] p-7 sm:p-10">
      <div className="mb-5 w-16"><CatIllustration type="editor" /></div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-[#9993aa]">{description ?? `Your ${title.toLowerCase()} workspace. We&apos;ll build this section next.`}</p>
      <Link href="/practice" className="mt-6 flex items-center gap-2 text-sm text-[#c6a9ff]">Back to practice <ChevronRight size={16} /></Link>
    </div>
  );
}
