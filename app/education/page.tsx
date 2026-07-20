import { DegreeGallery, type DegreeCredential } from "@/components/degree-gallery";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const credentials: DegreeCredential[] = [
  { title: "Bachelor of Arts", detail: "University of Central Florida", image: "/portfolio-assets/College%20Degree%20Images/Bachelor%20of%20Arts.jpeg", alt: "Bachelor of Arts degree from the University of Central Florida" },
  { title: "Associate of Arts", detail: "Daytona State College", image: "/portfolio-assets/College%20Degree%20Images/Associate%20of%20Arts.jpeg", alt: "Associate of Arts degree" },
  { title: "Associate of Science", detail: "Daytona State College", image: "/portfolio-assets/College%20Degree%20Images/Associate%20of%20Science.jpeg", alt: "Associate of Science degree" },
];

export const metadata = {
  title: "Education",
  description: "Daniel Ferrena's interdisciplinary educational foundation across communication, business, technology, and the arts.",
  alternates: { canonical: "/education" },
};

export default function EducationPage() {
  return <main id="main-content"><SiteHeader />
    <section className="page-shell py-16 md:py-28"><div className="translate-y-4 md:translate-y-6"><p className="eyebrow">Education</p><h1 className="display mt-6 max-w-5xl text-5xl font-semibold md:text-8xl">A foundation for continual development.</h1><p className="mt-9 max-w-3xl text-xl leading-8 text-[#6e6e73]">Three college degrees reflect an interdisciplinary foundation spanning communication, business, technology, and the arts.</p></div></section>
    <section className="bg-white py-20 md:py-28"><div className="page-shell"><DegreeGallery credentials={credentials} /></div></section>
    <SiteFooter />
  </main>;
}
