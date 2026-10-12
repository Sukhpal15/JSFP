"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileCode2, Settings, PanelLeftClose, PanelLeftOpen, X } from "lucide-react";
import { navigation, CatIllustration } from "../../utils/static-data";

type Props = {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  pathname?: string;
  mobileOpen: boolean;
  setMobileOpen: (value: boolean) => void;
};

const routeByLabel: Record<string, string> = {
  Practice: "/practice",
  Questions: "/questions",
  "Bug Tracker": "/bug-tracker",
  "Need Help?": "/help",
  Notes: "/notes",
  Settings: "/settings",
};

export function Sidebar({ collapsed, setCollapsed, pathname: providedPathname, mobileOpen, setMobileOpen }: Props) {
  const currentPathname = usePathname();
  const pathname = providedPathname ?? currentPathname;
  const extraNavigation = [{ label: "Notes", icon: FileCode2 }, { label: "Settings", icon: Settings }];

  function navLink(label: string) {
    const href = routeByLabel[label] ?? "/practice";
    const active = pathname === href || (href !== "/practice" && pathname.startsWith(`${href}/`));
    return { href, active };
  }

  return (
    <>
      {mobileOpen && <button type="button" aria-label="Close navigation menu" onClick={() => setMobileOpen(false)} className="fixed inset-0 z-40 bg-black/60 lg:hidden" />}
      <aside className={`fixed inset-y-0 left-0 z-50 flex-col overflow-y-auto border-r border-white/[0.07] bg-[#0e0e14] p-4 transition-[width,transform] duration-200 ${mobileOpen ? "flex w-[250px] translate-x-0" : "hidden -translate-x-full"} lg:flex lg:translate-x-0 ${collapsed ? "lg:w-[76px]" : "lg:w-[230px]"}`}>
      <div className={`mb-5 flex items-center ${collapsed ? "flex-col gap-3" : "justify-between gap-2"}`}>
        {!collapsed && <div className="pl-8 flex min-w-0 flex-col items-center">
          <div className="w-24 shrink-0"><CatIllustration type="logo" /></div>
          <h1 className="text-2xl font-bold tracking-wide">JSP</h1>
        </div>}
        <button onClick={() => setCollapsed(!collapsed)} title={collapsed ? "Expand sidebar" : "Collapse sidebar"} aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"} className="hidden rounded-lg p-2 text-[#aaa5b8] hover:bg-white/[0.08] lg:block">
          {collapsed ? <PanelLeftOpen size={19} /> : <PanelLeftClose size={19} />}
        </button>
        <button onClick={() => setMobileOpen(false)} aria-label="Close navigation menu" className="rounded-lg p-2 text-[#aaa5b8] hover:bg-white/[0.08] lg:hidden"><X size={19} /></button>
      </div>
      {!collapsed && <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[.2em] text-[#716b80]">Workspace</p>}
      <nav className="space-y-2">
        {navigation.map(({ label, icon: Icon }) => {
          const { href, active } = navLink(label);
          return (
            <Link key={label} href={href} onClick={() => setMobileOpen(false)} title={collapsed ? label : undefined} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${active ? "bg-[#29203b] text-[#d3b9ff]" : "text-[#aaa5b8] hover:bg-white/[0.05] hover:text-white"} ${collapsed ? "justify-center" : ""}`}>
              <Icon size={19} />{!collapsed && <span>{label}</span>}
            </Link>
          );
        })}
      </nav>
      <div className="mt-3 space-y-2 border-t border-white/[0.07] pt-4">
        {extraNavigation.map(({ label, icon: Icon }) => {
          const { href, active } = navLink(label);
          return (
            <Link key={label} href={href} onClick={() => setMobileOpen(false)} title={collapsed ? label : undefined} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm ${active ? "bg-[#29203b] text-white" : "text-[#aaa5b8] hover:bg-white/[0.05]"} ${collapsed ? "justify-center" : ""}`}>
              <Icon size={19} />{!collapsed && <span>{label}</span>}
            </Link>
          );
        })}
      </div>
      <div className={`mt-auto border-t border-[#31263f] pt-5 ${collapsed ? "text-center" : ""}`}>
        <div className={`mx-auto ${collapsed ? "w-10" : "max-w-[155px]"}`}><CatIllustration type="goodCode" /></div>
        {!collapsed && <div className="text-center">
          <p className="font-semibold text-[#d6c1fa]">Good Code, Better You</p>
          <p className="mt-2 text-xs leading-5 text-[#9993aa]">Every bug is a chance to learn something new.</p>
        </div>}
      </div>
      </aside>
    </>
  );
}
