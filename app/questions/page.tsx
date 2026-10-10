"use client";

import Link from "next/link";
import { categories } from "../utils/static-data";
import { Footer } from "../components/layout/Footer";

export default function QuestionsPage() {
  return (
    <>
      <div className="mb-6"><p className="mb-2 text-xs font-medium uppercase tracking-[.18em] text-[#a88add]">Your learning space</p><h2 className="text-2xl font-semibold sm:text-3xl">Browse questions</h2><p className="mt-2 text-sm text-[#9993aa]">Choose a category to start practicing.</p></div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => <Link key={category} href={`/practice?category=${encodeURIComponent(category)}`} className="rounded-xl border border-white/[0.09] bg-[#111118] p-4 text-sm text-[#decaff] transition hover:border-[#7555a4] hover:bg-[#261d35]">{category}<span className="mt-2 block text-xs text-[#827b94]">Open practice →</span></Link>)}
      </div>
      <Footer />
    </>
  );
}
