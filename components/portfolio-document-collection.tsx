"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type DocumentAsset = { src: string; alt: string };

export function PortfolioDocumentCollection({ title, assets, previewAssets = assets }: { title: string; assets: DocumentAsset[]; previewAssets?: DocumentAsset[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeAsset = activeIndex === null ? null : assets[activeIndex];

  const close = () => {
    setIsOpen(false);
    setActiveIndex(null);
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (activeIndex !== null && event.key === "ArrowRight") setActiveIndex((index) => index === null ? null : Math.min(index + 1, assets.length - 1));
      if (activeIndex !== null && event.key === "ArrowLeft") setActiveIndex((index) => index === null ? null : Math.max(index - 1, 0));
    };
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, assets.length, isOpen]);

  return <>
    <button type="button" data-protected-asset onClick={() => setIsOpen(true)} aria-label={`Open ${title}`} className="group overflow-hidden rounded-3xl bg-[#f5f5f7] p-4 text-left transition duration-300 hover:bg-[#ebebed] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0066cc]">
      <div className="grid h-40 grid-cols-3 gap-2 overflow-hidden rounded-2xl bg-white p-2 sm:h-52">
        {previewAssets.slice(0, 3).map((asset) => <div key={asset.src} className="flex items-center justify-center overflow-hidden rounded-xl bg-[#f5f5f7]"><Image src={asset.src} alt="" width={800} height={1000} sizes="(min-width: 768px) 16vw, 28vw" draggable={false} className="max-h-full w-auto max-w-full object-contain transition duration-300 group-hover:scale-[1.02]" /></div>)}
      </div>
      <div className="flex items-end justify-between gap-4 px-1 pb-1 pt-5"><div><h3 className="text-2xl font-semibold tracking-[-.04em] text-[#1d1d1f]">{title}</h3><p className="mt-2 text-sm text-[#6e6e73]">{assets.length} documents</p></div><span className="pb-1 text-sm font-semibold text-[#0066cc]">View collection</span></div>
    </button>

    {isOpen && <div role="dialog" aria-modal="true" aria-label={`${title} collection`} className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" onMouseDown={close}>
      <div className="relative flex max-h-[92vh] w-full max-w-6xl flex-col rounded-3xl bg-white p-5 shadow-2xl sm:p-8" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-4"><div><p className="eyebrow">Document collection</p><h3 className="mt-3 text-3xl font-semibold tracking-[-.05em] text-[#1d1d1f] sm:text-5xl">{title}</h3><p className="mt-3 text-sm text-[#6e6e73]">{assets.length} documents</p></div><button ref={closeButtonRef} type="button" onClick={close} aria-label={`Close ${title}`} className="rounded-full bg-[#f5f5f7] px-3 py-2 text-sm font-semibold text-[#1d1d1f] transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc]">Close</button></div>
        {activeAsset ? <div className="mt-6 flex min-h-0 flex-1 flex-col items-center justify-center"><Image src={activeAsset.src} alt={activeAsset.alt} width={2400} height={1800} sizes="90vw" draggable={false} className="max-h-[65vh] w-auto max-w-full rounded-xl object-contain shadow-lg" priority /><div className="mt-5 flex items-center gap-4"><button type="button" onClick={() => setActiveIndex(null)} className="text-sm font-semibold text-[#0066cc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc]">All documents</button><p className="text-sm text-[#6e6e73]">{(activeIndex ?? 0) + 1} of {assets.length} · Use arrow keys to navigate</p></div></div> : <div className="mt-6 columns-2 gap-3 overflow-y-auto pr-1 sm:columns-3 lg:columns-4">{assets.map((asset, index) => <button key={asset.src} type="button" data-protected-asset onClick={() => setActiveIndex(index)} aria-label={`View ${title} document ${index + 1}`} className="mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl bg-[#f5f5f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc]"><Image src={asset.src} alt={asset.alt} width={1600} height={1200} sizes="(min-width: 1024px) 20vw, 42vw" draggable={false} className="h-auto w-full transition duration-300 hover:scale-[1.015]" /></button>)}</div>}
      </div>
    </div>}
  </>;
}
