import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "About",
  description: "Learn about Daniel Ferrena's field marketing, retail execution, and team development experience.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <main id="main-content">
    <SiteHeader />
    <section className="page-shell grid gap-12 py-16 md:grid-cols-[.8fr_1.2fr] md:py-28">
      <div><p className="eyebrow">About Daniel</p></div>
      <div><h1 className="display max-w-4xl text-5xl font-semibold md:text-8xl">A career built in the field.</h1><p className="mt-10 max-w-2xl text-xl leading-8 text-[#6e6e73]">Across more than a decade and approximately 30 field programs, Daniel Ferrena has built a career around the practical work of representing brands well: earning trust, making complex products accessible, supporting retail teams, and executing consistently.</p></div>
    </section>
    <section className="page-shell grid gap-8 pb-24 md:grid-cols-[1.1fr_.9fr] md:pb-32">
      <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] bg-[#e8eff8]"><Image src="/images/portfolio/daniel-ferrena-headshot.jpg" alt="Daniel Ferrena in a Samsung professional headshot" fill sizes="(min-width: 768px) 55vw, 88vw" className="object-cover" /></div>
      <div className="rounded-[2rem] bg-white p-8 md:p-12"><p className="eyebrow">Professional approach</p><h2 className="mt-5 text-3xl font-semibold tracking-[-.05em]">Practical expertise, built through experience.</h2><p className="mt-4 leading-7 text-[#6e6e73]">Daniel’s portfolio centers on the work of helping people understand products, helping teams execute, and representing brands with consistency across changing retail environments.</p></div>
    </section>
    <SiteFooter />
  </main>;
}
