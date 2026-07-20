import { BrandLogoGrid } from "@/components/brand-logo-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brandsForBrandsPage } from "@/data/brands";

export const metadata = {
  title: "Brands & Clients",
  description: "A broad record of nationally recognized brands and clients supported through field marketing, retail execution, sales, and training.",
  alternates: { canonical: "/brands" },
};

export default function BrandsPage() {
  return <main id="main-content"><SiteHeader /><section className="page-shell py-16 md:py-28"><div className="translate-y-4 md:translate-y-6"><p className="eyebrow">Brands & Clients</p><h1 className="display mt-6 max-w-5xl text-5xl font-semibold md:text-8xl">A Broad Record of Trusted Representation.</h1><p className="mt-9 max-w-3xl text-xl leading-8 text-[#6e6e73]">Throughout more than a decade in field marketing, retail execution, sales, and training, I&apos;ve represented a diverse portfolio of nationally recognized brands, including many Fortune 500 companies.</p></div></section><section className="bg-white py-20 md:py-28"><div className="page-shell"><p className="eyebrow">Brands I&apos;ve Worked With</p><div className="mt-12"><BrandLogoGrid items={brandsForBrandsPage} rebalanceLogos linkToOfficialSites /></div><h2 className="mt-14 max-w-4xl text-3xl font-semibold tracking-[-.05em] md:text-5xl">Each logo represents a company I supported through brand advocacy, customer engagement, retail execution, and the training of retail sales teams.</h2></div></section><SiteFooter /></main>;
}
