"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-[#0b0b10] text-[#eeeaf6]">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} pathname={pathname} mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />
      <section className={`min-w-0 transition-[margin] duration-200 ${collapsed ? "lg:ml-[76px]" : "lg:ml-[230px]"}`}>
        <Header onMenuClick={() => setMobileSidebarOpen(true)} />
        <div className="p-4 sm:p-7">{children}</div>
      </section>
    </main>
  );
}
