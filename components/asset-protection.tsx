"use client";

import type { DragEvent, MouseEvent, ReactNode } from "react";

function isVisualAsset(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest("img, [data-protected-asset]"));
}

export function AssetProtection({ children }: { children: ReactNode }) {
  const preventAssetMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (isVisualAsset(event.target)) event.preventDefault();
  };

  const preventAssetDrag = (event: DragEvent<HTMLDivElement>) => {
    if (isVisualAsset(event.target)) event.preventDefault();
  };

  return <div onContextMenuCapture={preventAssetMenu} onDragStartCapture={preventAssetDrag}>{children}</div>;
}
