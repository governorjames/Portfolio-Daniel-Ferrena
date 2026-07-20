"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type DocumentPage = { image: string; alt: string };

export function DocumentPreview({ pages, title, downloadHref }: { pages: DocumentPage[]; title: string; downloadHref?: string }) {
  const [open, setOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activePage = pages[pageIndex];

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowRight" && pageIndex < pages.length - 1) setPageIndex((index) => index + 1);
      if (event.key === "ArrowLeft" && pageIndex > 0) setPageIndex((index) => index - 1);
    };
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, pageIndex, pages.length]);

  return <>
    <button type="button" onClick={() => setOpen(true)} aria-label={`View full ${title}`} className="group block w-full cursor-zoom-in rounded-[2rem] border border-[#d2d2d7] bg-white p-4 text-left shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc]">
      <div className="overflow-hidden rounded-xl bg-[#f5f5f7]"><Image src={pages[0].image} alt={pages[0].alt} width={612} height={792} sizes="(min-width: 768px) 36vw, 88vw" className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]" /></div>
    </button>
    {downloadHref && <a href={downloadHref} download className="mt-4 inline-flex px-2 text-sm font-semibold text-[#0066cc] transition-colors hover:text-[#004f9e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc]">Download résumé (PDF)</a>}
    {open && <div role="dialog" aria-modal="true" aria-label={`Full ${title} viewer`} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onMouseDown={() => setOpen(false)}>
      <div className="relative flex max-h-[92vh] max-w-[96vw] flex-col items-center" onMouseDown={(event) => event.stopPropagation()}>
        <Image src={activePage.image} alt={activePage.alt} width={1224} height={1584} sizes="88vw" className="h-[88vh] w-auto max-w-[88vw] rounded-xl object-contain shadow-2xl" priority />
        <div className="mt-4 flex items-center gap-3 text-sm font-medium text-white">
          {pages.length > 1 && <button type="button" onClick={() => setPageIndex((index) => index - 1)} disabled={pageIndex === 0} className="rounded-full border border-white/60 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40">Previous</button>}
          <span>Page {pageIndex + 1} of {pages.length}</span>
          {pages.length > 1 && <button type="button" onClick={() => setPageIndex((index) => index + 1)} disabled={pageIndex === pages.length - 1} className="rounded-full border border-white/60 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40">Next</button>}
        </div>
        <button ref={closeButtonRef} type="button" onClick={() => setOpen(false)} className="absolute -right-2 -top-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-[#1d1d1f] shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Close résumé viewer">Close</button>
      </div>
    </div>}
  </>;
}
