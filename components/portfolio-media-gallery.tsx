"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type PortfolioMediaAsset = { src: string; alt: string };

const supportedImagePattern = /\.(?:jpe?g|png|webp|gif)$/i;

function isSupportedStillImage(src: string) {
  try {
    return Boolean(src) && supportedImagePattern.test(new URL(src, "http://portfolio.local").pathname);
  } catch {
    return false;
  }
}

function isBlankOrBlackImage(image: HTMLImageElement) {
  if (!image.naturalWidth || !image.naturalHeight) return true;

  try {
    if (new URL(image.currentSrc || image.src, window.location.origin).origin !== window.location.origin) return false;

    const sampleSize = 32;
    const canvas = document.createElement("canvas");
    canvas.width = sampleSize;
    canvas.height = sampleSize;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) return false;

    context.drawImage(image, 0, 0, sampleSize, sampleSize);
    const pixels = context.getImageData(0, 0, sampleSize, sampleSize).data;
    let nearBlack = 0;
    let transparent = 0;
    let nearWhite = 0;
    const sampleCount = pixels.length / 4;

    for (let index = 0; index < pixels.length; index += 4) {
      const [red, green, blue, alpha] = pixels.slice(index, index + 4);
      if (alpha < 10) transparent += 1;
      if (red < 10 && green < 10 && blue < 10) nearBlack += 1;
      if (red > 250 && green > 250 && blue > 250 && alpha > 245) nearWhite += 1;
    }

    return nearBlack / sampleCount >= 0.95 || transparent / sampleCount >= 0.95 || nearWhite / sampleCount >= 0.99;
  } catch {
    return false;
  }
}

export function PortfolioMediaGallery({ assets, title, variant = 0, layout = "masonry", collapseFailedAssets = false, loadEagerly = false, collapseUntilLoaded = false, validateVisualMedia = false }: { assets: PortfolioMediaAsset[]; title: string; variant?: number; layout?: "masonry" | "row-grid" | "single"; collapseFailedAssets?: boolean; loadEagerly?: boolean; collapseUntilLoaded?: boolean; validateVisualMedia?: boolean }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [invalidSources, setInvalidSources] = useState<Set<string>>(() => new Set());
  const [loadedSources, setLoadedSources] = useState<Set<string>>(() => new Set());
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const visibleAssets = assets.filter((asset) => isSupportedStillImage(asset.src) && !(collapseFailedAssets && invalidSources.has(asset.src)));
  const activeAsset = activeIndex === null ? null : visibleAssets[activeIndex];

  const invalidateSource = (src: string) => {
    if (!collapseFailedAssets) return;
    setInvalidSources((sources) => new Set(sources).add(src));
    setActiveIndex(null);
  };

  const handleImageLoad = (image: HTMLImageElement, src: string) => {
    if (validateVisualMedia && isBlankOrBlackImage(image)) {
      invalidateSource(src);
      return;
    }

    if (collapseUntilLoaded) {
    setLoadedSources((sources) => new Set(sources).add(src));
    }
  };

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((index) => index === null ? null : Math.min(index + 1, visibleAssets.length - 1));
      if (event.key === "ArrowLeft") setActiveIndex((index) => index === null ? null : Math.max(index - 1, 0));
    };
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, visibleAssets.length]);

  return <>
    <div className={layout === "single" ? "columns-1" : layout === "row-grid" ? `grid grid-cols-2 items-start gap-3 sm:grid-cols-3 lg:grid-cols-4 ${variant % 2 === 0 ? "xl:grid-cols-4" : "xl:grid-cols-5"}` : `columns-2 gap-3 sm:columns-3 lg:columns-4 ${variant % 2 === 0 ? "xl:columns-4" : "xl:columns-5"}`}>
      {visibleAssets.map((asset, index) => <button key={asset.src} type="button" data-protected-asset onClick={() => setActiveIndex(index)} aria-label={`View ${title} record ${index + 1}`} className={`group w-full break-inside-avoid overflow-hidden rounded-2xl bg-[#f5f5f7] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc] ${layout === "masonry" ? "mb-3" : ""} ${collapseUntilLoaded && !loadedSources.has(asset.src) ? "hidden" : "block"}`}>
        <Image src={asset.src} alt={asset.alt} width={1600} height={1200} sizes="(min-width: 1280px) 21vw, (min-width: 1024px) 24vw, (min-width: 640px) 31vw, 46vw" loading={loadEagerly ? "eager" : undefined} className="h-auto w-full cursor-zoom-in transition duration-300 group-hover:scale-[1.015]" onLoad={(event) => handleImageLoad(event.currentTarget, asset.src)} onError={() => invalidateSource(asset.src)} />
      </button>)}
    </div>
    {activeAsset && <div role="dialog" aria-modal="true" aria-label={`${title} image viewer`} className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" onMouseDown={() => setActiveIndex(null)}>
      <div className="relative flex max-h-[92vh] max-w-[96vw] items-center justify-center" onMouseDown={(event) => event.stopPropagation()}>
        <Image src={activeAsset.src} alt={activeAsset.alt} width={2400} height={1800} sizes="90vw" className="max-h-[88vh] w-auto max-w-[90vw] rounded-xl object-contain shadow-2xl" priority />
        <button ref={closeButtonRef} type="button" onClick={() => setActiveIndex(null)} className="absolute -right-2 -top-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-[#1d1d1f] shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Close image viewer">Close</button>
      </div>
    </div>}
  </>;
}
