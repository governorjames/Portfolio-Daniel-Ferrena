import { DocumentPreview, type DocumentPage } from "@/components/document-preview";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Resume",
  description: "View and download Daniel Ferrena's professional resume, including experience, education, and core capabilities.",
  alternates: { canonical: "/resume" },
};

const resumePages: DocumentPage[] = [
  { image: "/resume/daniel-ferrena-resume-2026-07-19-page-1.png", alt: "Page 1 of Daniel Ferrena's résumé" },
];

export default function ResumePage() {
  return <main id="main-content" className="flex min-h-screen flex-col"><SiteHeader />
    <section className="page-shell grid flex-1 items-start gap-10 py-16 md:grid-cols-[1.1fr_.9fr] md:py-28"><div className="translate-y-4 md:translate-y-6"><p className="eyebrow">Professional résumé</p><h1 className="display mt-6 max-w-4xl text-5xl font-semibold md:text-8xl">The complete record, in one place.</h1></div><aside><div className="mx-auto w-[93%] md:ml-0 md:mr-auto"><DocumentPreview pages={resumePages} title="Daniel Ferrena résumé" downloadHref="/resume/daniel-ferrena-resume-2026-07-19.pdf" /></div></aside></section>
    <SiteFooter />
  </main>;
}
