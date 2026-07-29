import Image from "next/image";
import { brands, type Brand } from "@/data/brands";

function assetPath(asset: string) { return encodeURI(`/portfolio-assets/${asset}`); }

const homeLogoScale: Record<string, string> = {
  Microsoft: "scale-[1.15]",
  Intel: "scale-[.8]",
  Qualcomm: "scale-[1.1]",
  eero: "scale-[.8]",
  Alexa: "scale-[.8]",
  Samsung: "scale-[1.05]",
  "Google TV": "scale-[1.15]",
  Sennheiser: "scale-[1.2]",
  JBL: "scale-[.95]",
  Motorola: "scale-[1.1]",
  Nespresso: "scale-[.95]",
  "Empire Today": "scale-[1.4]",
  "Re-Bath": "scale-[.9]",
  Mazda: "scale-[.9]",
};

export function BrandLogoGrid({ limit, rebalanceLogos = false, items = brands, linkToOfficialSites = false, uniform = false }: { limit?: number; rebalanceLogos?: boolean; items?: readonly Brand[]; linkToOfficialSites?: boolean; uniform?: boolean }) {
  const displayedBrands = limit ? items.slice(0, limit) : items;
  return <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    {displayedBrands.map((brand) => {
      const scale = rebalanceLogos ? (uniform ? homeLogoScale[brand.name] ?? "" : brand.logoClassName ?? "") : "";
      const logo = <Image src={assetPath(brand.asset)} alt={`${brand.name} logo`} width={180} height={80} sizes="(min-width: 1024px) 15vw, (min-width: 640px) 25vw, 44vw" className={`max-h-12 w-auto max-w-full object-contain transition-opacity duration-200 group-hover:opacity-75 ${scale}`} />;
      return <div key={brand.name} className={`flex w-full items-center justify-center overflow-hidden rounded-2xl border border-[#d2d2d7] bg-white p-6 ${uniform ? "aspect-[3/2]" : "aspect-[1.5/1]"}`}>{linkToOfficialSites ? <a href={brand.website} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${brand.name}'s official website`} className="group flex h-full w-full cursor-pointer items-center justify-center rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc]" >{logo}</a> : logo}</div>;
    })}
  </div>;
}
