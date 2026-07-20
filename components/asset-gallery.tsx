import fs from "node:fs";
import path from "node:path";
import { PortfolioDocumentCollection } from "./portfolio-document-collection";
import { PortfolioMediaGallery } from "./portfolio-media-gallery";

const imageExtensions = new Set([".avif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);
const assetRoot = path.join(process.cwd(), "public", "portfolio-assets");

function getImages(directory: string) {
  const target = path.resolve(assetRoot, directory);
  if (!target.startsWith(assetRoot) || !fs.existsSync(target)) return [];

  const visit = (current: string): string[] => {
    const entries = fs.readdirSync(current, { withFileTypes: true }).toSorted((first, second) => first.name.localeCompare(second.name));
    const directImages = entries.flatMap((entry) => {
      const entryPath = path.join(current, entry.name);
      return !entry.isDirectory() && imageExtensions.has(path.extname(entry.name).toLowerCase()) ? [path.relative(assetRoot, entryPath)] : [];
    });
    const nestedImages = entries.filter((entry) => entry.isDirectory()).flatMap((entry) => visit(path.join(current, entry.name)));

    return [...directImages, ...nestedImages];
  };

  return visit(target).sort((a, b) => a.localeCompare(b));
}

function publicPath(asset: string) {
  return encodeURI(`/portfolio-assets/${asset}`);
}

export function PortfolioNarrativeGallery({ directories, title, variant = 0, assets: suppliedAssets = [], assetSources = {}, excludedAssets = [], assetOrder = [], trailingAssetOrder = [], layout, collapseFailedAssets = false, loadEagerly = false, collapseUntilLoaded = false, validateVisualMedia = false }: { directories: string[]; title: string; variant?: number; assets?: string[]; assetSources?: Record<string, string>; excludedAssets?: string[]; assetOrder?: string[]; trailingAssetOrder?: string[]; layout?: "masonry" | "row-grid" | "single"; collapseFailedAssets?: boolean; loadEagerly?: boolean; collapseUntilLoaded?: boolean; validateVisualMedia?: boolean }) {
  const availableAssets = [...directories.flatMap((directory) => getImages(directory)), ...suppliedAssets].filter((asset) => !excludedAssets.includes(asset));
  const prioritizedAssets = assetOrder.filter((asset) => availableAssets.includes(asset));
  const trailingAssets = trailingAssetOrder.filter((asset) => availableAssets.includes(asset) && !prioritizedAssets.includes(asset));
  const assets = [...prioritizedAssets, ...availableAssets.filter((asset) => !prioritizedAssets.includes(asset) && !trailingAssets.includes(asset)), ...trailingAssets];

  return <div className="page-shell portfolio-gallery-shell">
    <PortfolioMediaGallery assets={assets.map((asset) => ({ src: assetSources[asset] ?? publicPath(asset), alt: `${title}: ${path.basename(asset, path.extname(asset)).replaceAll("_", " ")}` }))} title={title} variant={variant} layout={layout} collapseFailedAssets={collapseFailedAssets} loadEagerly={loadEagerly} collapseUntilLoaded={collapseUntilLoaded} validateVisualMedia={validateVisualMedia} />
    <p className="mt-5 text-sm text-[#6e6e73]">Select an image to inspect it in full.</p>
  </div>;
}

export function PortfolioDocumentArchive({ directory, title, assets: suppliedAssets = [], assetSources = {}, excludedAssets = [], previewAssets }: { directory: string; title: string; assets?: string[]; assetSources?: Record<string, string>; excludedAssets?: string[]; previewAssets?: string[] }) {
  const assets = [...getImages(directory), ...suppliedAssets].filter((asset) => !excludedAssets.includes(asset));
  const toDocumentAsset = (asset: string) => ({ src: assetSources[asset] ?? publicPath(asset), alt: `${title}: ${path.basename(asset, path.extname(asset)).replaceAll("_", " ")}` });
  return <PortfolioDocumentCollection title={title} assets={assets.map(toDocumentAsset)} previewAssets={(previewAssets ?? assets).map(toDocumentAsset)} />;
}

export function PortfolioFeaturedDocument({ title, caption, src }: { title: string; caption: string; src: string }) {
  return <div className="page-shell portfolio-featured-document-shell grid gap-10 md:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] md:items-center md:gap-16"><div className="max-w-xl"><h3 className="text-3xl font-semibold tracking-[-.05em] md:text-5xl">{title}</h3><p className="mt-5 max-w-2xl leading-7 text-[#6e6e73]">{caption}</p></div><div className="w-full max-w-[38rem] md:justify-self-end"><PortfolioMediaGallery assets={[{ src, alt: `${title} from a MarketSource Program Manager` }]} title={title} layout="single" /></div></div>;
}

export function AssetGallery({ directory, title, description, className = "", variant = 0, assets: suppliedAssets }: { directory: string; title: string; description: string; className?: string; variant?: number; assets?: string[] }) {
  const assets = suppliedAssets ?? getImages(directory);

  return <section className={`py-14 md:py-20 ${className}`}>
    <div className="page-shell">
      <div className="max-w-3xl"><p className="eyebrow">Project collection</p><h3 className="mt-4 text-3xl font-semibold tracking-[-.05em] md:text-5xl">{title}</h3><p className="mt-5 max-w-2xl leading-7 text-[#6e6e73]">{description}</p></div>
      <div className="mt-10"><PortfolioMediaGallery assets={assets.map((asset) => ({ src: publicPath(asset), alt: `${title}: ${path.basename(asset, path.extname(asset)).replaceAll("_", " ")}` }))} title={title} variant={variant} /></div>
      <p className="mt-5 text-sm text-[#6e6e73]">{assets.length} visual records. Select an image to inspect it in full.</p>
    </div>
  </section>;
}
