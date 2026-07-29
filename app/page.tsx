import Link from "next/link";
import Image from "next/image";
import { BrandLogoGrid } from "@/components/brand-logo-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brandsForBrandsPage } from "@/data/brands";

const proofPoints = [
  ["10+ years", "Field marketing, retail execution, brand advocacy, and team development."],
  ["~30 programs", "A durable record across changing brands, retailers, and customer needs."],
  ["20 brands", "A broad public portfolio of companies represented throughout the career."],
];

const pathways = [
  ["Brands", "The companies and clients that entrusted Daniel to represent their products in the field.", "/brands", "Explore brands"],
  ["Portfolio", "Leadership, customer engagement, documented performance, and professional recognition.", "/portfolio", "Explore the portfolio"],
  ["Résumé", "A complete professional record with an expandable preview and downloadable PDF.", "/resume", "View résumé"],
  ["Education", "Three college degrees supporting a versatile, interdisciplinary professional foundation.", "/education", "View education"],
];

export default function Home() {
  return <main id="main-content">
    <SiteHeader />

    <section className="page-shell grid min-h-[clamp(620px,72svh,880px)] items-center gap-12 py-16 md:grid-cols-[1.2fr_.8fr] md:py-24">
      <div>
        <p className="eyebrow reveal">Field marketing &amp; retail execution</p>
        <h1 className="display reveal reveal-delay mt-6 max-w-5xl text-[clamp(3.7rem,9.2vw,8.5rem)] font-semibold">Trusted.<br />Proven.<br />Experienced.</h1>
        <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-lg leading-8 text-[#6e6e73] md:text-xl">Daniel Ferrena is a field marketing and retail execution professional with more than a decade of experience representing nationally recognized brands, developing retail teams, and delivering results in the field.</p>
      </div>
      <div className="relative h-[320px] overflow-hidden rounded-[2rem] bg-[#e8eff8] md:h-[480px]">
        <Image src="/images/portfolio/daniel-ferrena-headshot.jpg" alt="Daniel Ferrena in a Samsung professional headshot" fill priority sizes="(min-width: 768px) 40vw, 88vw" className="object-cover object-center" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />
      </div>
    </section>

    <section className="bg-white py-24 md:py-32">
      <div className="page-shell">
        <p className="eyebrow">Career-wide credibility</p>
        <h2 className="display mt-6 max-w-4xl text-5xl font-semibold md:text-7xl">Built to represent brands where it matters most.</h2>
        <div className="mt-16 grid gap-10 border-t border-[#d2d2d7] pt-8 md:grid-cols-3">
          {proofPoints.map(([value, description]) => <article key={value}><p className="text-4xl font-semibold tracking-[-.05em] md:text-5xl">{value}</p><p className="mt-4 max-w-xs leading-7 text-[#6e6e73]">{description}</p></article>)}
        </div>
      </div>
    </section>

    <section className="page-shell py-24 md:py-32">
      <div className="max-w-3xl">
        <p className="eyebrow">Field leadership</p>
        <h2 className="display mt-5 text-5xl font-semibold md:text-6xl">Built alongside the people who make the brand experience real.</h2>
        <p className="mt-6 max-w-lg leading-7 text-[#6e6e73]">From multi-store training sessions to on-the-floor coaching, Daniel&apos;s work has centered on helping retail teams build product confidence, create stronger customer interactions, and execute with consistency.</p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#e8eff8]"><Image src="/portfolio-assets/Awards:Recognition:Achievements/2020%20Companies/Program%20Manager%20and%20Team%20Leader%20(me)%2C%20with%20other%20FSMs%20on%20exterior.jpeg" alt="Daniel Ferrena with a program manager and field team" fill sizes="(min-width: 768px) 29vw, 88vw" className="object-cover object-center" /></div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#e8eff8]"><Image src="/portfolio-assets/Training/Training:2020%20Companies/Sennheiser:2020%20Companies/Headshot.JPG" alt="Daniel Ferrena in a Sennheiser professional headshot" fill sizes="(min-width: 768px) 29vw, 88vw" className="object-cover object-center" /></div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#e8eff8]"><Image src="/portfolio-assets/Awards:Recognition:Achievements/Marketsource/Eero%20Team%20@%20Best%20Buy%20Headquarters.jpeg" alt="eero team at Best Buy headquarters" fill sizes="(min-width: 768px) 29vw, 88vw" className="object-cover object-center" /></div>
      </div>
    </section>

    <section className="bg-white py-24 md:py-32">
      <div className="page-shell grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-start">
        <div><p className="eyebrow">Brands represented</p><h2 className="display mt-5 text-5xl font-semibold md:text-6xl">Trusted by a broad portfolio of leading companies.</h2><p className="mt-6 max-w-md leading-7 text-[#6e6e73]">The Brands page documents the breadth of the organizations represented across field marketing, retail execution, sales, and training.</p></div>
        <BrandLogoGrid items={brandsForBrandsPage} rebalanceLogos uniform />
      </div>
    </section>

    <section className="page-shell py-24 md:py-32">
      <p className="eyebrow">Start anywhere</p>
      <h2 className="display mt-5 max-w-4xl text-5xl font-semibold md:text-7xl">The complete professional story, in four focused views.</h2>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {pathways.map(([title, description, href, action]) => <Link key={title} href={href} className="group rounded-[2rem] border border-[#d2d2d7] bg-white p-8 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc] md:p-10"><p className="eyebrow">{title}</p><h3 className="mt-5 text-3xl font-semibold tracking-[-.05em]">{title}</h3><p className="mt-4 max-w-md leading-7 text-[#6e6e73]">{description}</p><span className="mt-8 inline-block text-sm font-semibold text-[#0066cc] transition-colors group-hover:text-[#004f9e]">{action} →</span></Link>)}
      </div>
    </section>

    <SiteFooter />
  </main>;
}
