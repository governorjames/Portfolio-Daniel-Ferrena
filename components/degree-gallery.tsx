"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type DegreeCredential = {
  title: string;
  detail: string;
  image: string;
  alt: string;
};

export function DegreeGallery({ credentials }: { credentials: DegreeCredential[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeCredential = activeIndex === null ? null : credentials[activeIndex];

  useEffect(() => {
    if (!activeCredential) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setActiveIndex(null); };
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeCredential]);

  return <>
    <div className="grid gap-8 md:grid-cols-3">{credentials.map((credential, index) => <figure key={credential.title} className="overflow-hidden rounded-2xl border border-[#d2d2d7] bg-[#fbfbfd] p-3">
      <button type="button" onClick={() => setActiveIndex(index)} aria-label={`View full-size ${credential.title} degree`} className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc]">
        <Image src={credential.image} alt={credential.alt} width={1104} height={849} sizes="(min-width: 768px) 29vw, 88vw" className="h-auto w-full rounded-xl transition-transform duration-300 group-hover:scale-[1.015]" />
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-4 pb-3 pt-8 text-left text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">View full size</span>
      </button>
      <figcaption className="px-2 pb-2 pt-5"><h2 className="text-xl font-semibold tracking-[-.04em]">{credential.title}</h2><p className="mt-1 text-sm text-[#6e6e73]">{credential.detail}</p></figcaption>
    </figure>)}</div>
    {activeCredential && <div role="dialog" aria-modal="true" aria-label={`Full-size ${activeCredential.title} degree`} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onMouseDown={() => setActiveIndex(null)}>
      <div className="relative flex max-h-[92vh] max-w-[96vw] items-center justify-center" onMouseDown={(event) => event.stopPropagation()}>
        <Image src={activeCredential.image} alt={activeCredential.alt} width={2208} height={1698} sizes="96vw" className="max-h-[82vh] w-auto max-w-[92vw] rounded-xl object-contain shadow-2xl" priority />
        <button ref={closeButtonRef} type="button" onClick={() => setActiveIndex(null)} className="absolute -right-2 -top-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-[#1d1d1f] shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Close full-size degree view">Close</button>
      </div>
    </div>}
  </>;
}
