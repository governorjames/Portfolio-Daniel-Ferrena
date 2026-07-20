"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  const pathname = usePathname();

  return <header className="border-b border-[#d2d2d7] bg-[#fbfbfd]/90 backdrop-blur-xl" aria-label="Site header">
    <div className="page-shell flex items-center justify-center py-4 md:h-20 md:justify-start md:py-0"><Wordmark /></div>
    <nav aria-label="Primary navigation" className="page-shell grid grid-cols-3 border-t border-[#d2d2d7] text-center text-xs text-[#424245] md:absolute md:inset-x-0 md:top-0 md:mx-auto md:flex md:h-20 md:max-w-[1440px] md:items-center md:justify-center md:gap-3 md:border-0 md:text-[13px] lg:gap-5 lg:text-sm">
      {site.nav.map((item) => {
        const active = pathname === item.href;
        return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`py-3 transition-colors hover:text-[#0066cc] md:py-0 ${active ? "font-semibold text-[#1d1d1f]" : ""}`}>{item.label}</Link>;
      })}
    </nav>
  </header>;
}
