"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ProjectMedia = {
  title: string;
  src: string;
  preview: string;
  kind: "video" | "image";
};

const slideMedia = (directory: string, count: number, label = "Slide"): ProjectMedia[] =>
  Array.from({ length: count }, (_, index) => {
    const src = `${directory}/slide-${index + 1}.png`;
    return { title: `${label} ${index + 1}`, src, preview: src, kind: "image" };
  });

type SpecialProject = {
  title: string;
  type: string;
  summary: string;
  need: string;
  solution: string;
  value: string;
  accent: "blue" | "graphite" | "mist" | "ink";
  media?: ProjectMedia[];
};

const projects: SpecialProject[] = [
  {
    title: "Motorola Virtual Training Series",
    type: "Video Training",
    summary: "A pair of remotely produced product-training videos created to educate retail teams on Motorola’s latest smartphones during the shift to virtual learning.",
    need: "Retail teams needed accessible product education while traditional in-person training was limited.",
    solution: "I produced and presented two virtual training videos from a home studio environment, combining product knowledge, on-camera instruction, and clear visual presentation.",
    value: "The project demonstrates remote training capability, product expertise, presentation skills, and the ability to adapt field education to a virtual format.",
    accent: "blue",
    media: [
      {
        title: "Motorola One 5G",
        src: "/portfolio-assets/special-projects/motorola-sell-in-60-one-5g.mp4",
        preview: "/portfolio-assets/special-projects/motorola-one-5g-preview.png",
        kind: "video",
      },
      {
        title: "Motorola razr",
        src: "/portfolio-assets/special-projects/motorola-sell-in-60-razr.mp4",
        preview: "/portfolio-assets/special-projects/motorola-razr-preview.png",
        kind: "video",
      },
    ],
  },
  {
    title: "Samsung Expert Training Binder",
    type: "Training Resource",
    summary: "A printed reference system designed to make essential Samsung product knowledge easier for retail experts to access and use on the sales floor.",
    need: "Some retail experts benefited from a physical reference resource rather than relying exclusively on digital files and PDFs.",
    solution: "I organized key product information, selling points, and reference material into a structured printed binder designed for practical in-store use.",
    value: "The binder made training information easier to access and reflected a hands-on approach to supporting different learning preferences.",
    accent: "graphite",
    media: [
      {
        title: "Samsung Expert Training Binder walkthrough",
        src: "/portfolio-assets/special-projects/samsung-expert-training-binder.mp4",
        preview: "/portfolio-assets/special-projects/samsung-expert-training-binder-preview.png",
        kind: "video",
      },
    ],
  },
  {
    title: "BBY Corporate Orlando Office Multi District Recap",
    type: "Presentation",
    summary: "A presentation documenting a large multi-district training initiative, its execution, and the teams brought together through the event.",
    need: "A large training initiative involving multiple districts required a clear record of the event, participation, and execution.",
    solution: "I created a presentation that documented the training experience and organized the event’s key visuals and supporting details into a cohesive recap.",
    value: "The project demonstrates large-scale training support, professional communication, documentation, and the ability to present a complex initiative clearly.",
    accent: "mist",
    media: slideMedia("/portfolio-assets/special-projects/multi-district-recap", 2),
  },
  {
    title: "Custom Eero Training Deck",
    type: "Training Presentation",
    summary: "A custom-built presentation developed to translate complex technology into a clear and engaging training experience.",
    need: "Detailed product information needed to be converted into training material that retail teams could understand and apply.",
    solution: "I designed a custom presentation that organized product knowledge into a more approachable and engaging instructional format.",
    value: "The deck demonstrates instructional design, visual communication, product expertise, and the ability to create training materials from the ground up.",
    accent: "ink",
    media: slideMedia("/portfolio-assets/special-projects/eero-training-deck", 28),
  },
  {
    title: "Salesforce End-of-Shift Reporting Redesign",
    type: "Reporting System",
    summary: "A set of decision-tree flowcharts that mapped revised Salesforce end-of-shift questions and response paths to improve the accuracy and relevance of Sennheiser field reporting.",
    need: "The existing end-of-shift report left gaps in the field data being collected and did not clearly account for the follow-up questions required by different store conditions.",
    solution: "I translated the revised question set into practical flowcharts, mapping conditional answers, follow-up prompts, and the navigation required for a clearer Salesforce end-of-shift questionnaire. After review, 2020 Companies approved the redesigned process for field sales managers.",
    value: "The work improved the quality and usefulness of field reporting while demonstrating process analysis, information architecture, and a proactive approach to client-focused data accuracy.",
    accent: "blue",
    media: [
      { title: "End-of-Visit Audit", src: "/portfolio-assets/special-projects/salesforce-reporting-flowcharts/End-of-Visit-Audit-.png", preview: "/portfolio-assets/special-projects/salesforce-reporting-flowcharts/End-of-Visit-Audit-.png", kind: "image" },
      { title: "Functioning Display Questions — MDC", src: "/portfolio-assets/special-projects/salesforce-reporting-flowcharts/Functioning-Displau-Questions-MDC.png", preview: "/portfolio-assets/special-projects/salesforce-reporting-flowcharts/Functioning-Displau-Questions-MDC.png", kind: "image" },
      { title: "Functioning Display Questions — MHT", src: "/portfolio-assets/special-projects/salesforce-reporting-flowcharts/Functioning-Display-Questions-MHT.png", preview: "/portfolio-assets/special-projects/salesforce-reporting-flowcharts/Functioning-Display-Questions-MHT.png", kind: "image" },
      { title: "Functioning Display Questions — PA05", src: "/portfolio-assets/special-projects/salesforce-reporting-flowcharts/Functioning-Display-Questions-PA05.png", preview: "/portfolio-assets/special-projects/salesforce-reporting-flowcharts/Functioning-Display-Questions-PA05.png", kind: "image" },
      { title: "SKU-Related Questions — MHT", src: "/portfolio-assets/special-projects/salesforce-reporting-flowcharts/SKU-related-questionsMHT.png", preview: "/portfolio-assets/special-projects/salesforce-reporting-flowcharts/SKU-related-questionsMHT.png", kind: "image" },
      { title: "Section 3", src: "/portfolio-assets/special-projects/salesforce-reporting-flowcharts/Section-3-.png", preview: "/portfolio-assets/special-projects/salesforce-reporting-flowcharts/Section-3-.png", kind: "image" },
      { title: "Page 2 — MDC", src: "/portfolio-assets/special-projects/salesforce-reporting-flowcharts/page-2MDC.png", preview: "/portfolio-assets/special-projects/salesforce-reporting-flowcharts/page-2MDC.png", kind: "image" },
    ],
  },
];

const accentStyles = {
  blue: "from-[#eaf4ff] via-[#f7fbff] to-white before:bg-[#0066cc]",
  graphite: "from-[#f1f1f3] via-[#fafafa] to-white before:bg-[#424245]",
  mist: "from-[#eef6f5] via-[#f8fbfa] to-white before:bg-[#5b8f89]",
  ink: "from-[#f0f3f7] via-[#fafbfc] to-white before:bg-[#1d1d1f]",
};

export function SpecialProjects() {
  const [activeProject, setActiveProject] = useState<SpecialProject | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setActiveProject(null);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  };

  useEffect(() => {
    if (!activeProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeProject]);

  return <>
    <div className="mt-14 xl:mt-16">
      <div className="page-shell grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {projects.map((project, index) => <button
        key={project.title}
        ref={index === 0 ? triggerRef : undefined}
        type="button"
        onClick={(event) => {
          triggerRef.current = event.currentTarget;
          setActiveProject(project);
        }}
        aria-label={`View ${project.title} project`}
        className="group flex min-h-[17rem] flex-col rounded-3xl bg-[#f5f5f7] p-4 text-left transition duration-300 hover:-translate-y-1 hover:bg-[#ededf0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0066cc]"
      >
        {project.media ? <div className="relative min-h-28 overflow-hidden rounded-2xl bg-[#e9e9eb]">
          <Image src={project.media[0].preview} alt="" fill sizes="(min-width: 1280px) 18vw, (min-width: 640px) 42vw, 90vw" className="object-cover transition duration-300 group-hover:scale-[1.03]" />
          <span className="absolute bottom-3 left-3 rounded-full bg-black/65 px-2.5 py-1 text-[.6rem] font-bold uppercase tracking-[.12em] text-white">{project.media.length} {project.media[0].kind === "video" ? `video${project.media.length === 1 ? "" : "s"}` : `visual${project.media.length === 1 ? "" : "s"}`}</span>
        </div> : <div aria-hidden="true" className={`relative min-h-28 overflow-hidden rounded-2xl bg-gradient-to-br p-5 ${accentStyles[project.accent]}`}>
          <div className="absolute inset-x-5 top-5 h-px bg-[#1d1d1f]/10" />
          <div className="absolute inset-x-5 top-8 grid grid-cols-5 gap-1.5 opacity-60"><span className="col-span-3 h-1.5 rounded-full bg-[#1d1d1f]/20" /><span className="col-span-2 h-1.5 rounded-full bg-[#1d1d1f]/10" /><span className="col-span-2 h-1.5 rounded-full bg-[#1d1d1f]/10" /><span className="col-span-3 h-1.5 rounded-full bg-[#1d1d1f]/15" /></div>
          <span className="absolute bottom-4 left-5 text-[.64rem] font-bold uppercase tracking-[.14em] text-[#1d1d1f]/60">Project preview</span>
        </div>}
        <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
          <p className="text-[.7rem] font-bold uppercase tracking-[.12em] text-[#0066cc]">{project.type}</p>
          <h3 className="mt-3 text-[1.35rem] font-semibold leading-7 tracking-[-.045em] text-[#1d1d1f]">{project.title}</h3>
          <p className="mt-3 text-[.9rem] leading-5 text-[#6e6e73]">{project.summary}</p>
          <span className="mt-4 text-sm font-semibold text-[#0066cc] transition group-hover:translate-x-0.5">View Project <span aria-hidden="true">→</span></span>
        </div>
        </button>)}
      </div>
    </div>

    {activeProject && <div role="dialog" aria-modal="true" aria-labelledby="special-project-title" className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" onMouseDown={close}>
      <div className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl sm:p-8 md:p-10" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-5">
          <div><p className="eyebrow">{activeProject.type}</p><h3 id="special-project-title" className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-.06em] text-[#1d1d1f] sm:text-6xl">{activeProject.title}</h3></div>
          <button ref={closeButtonRef} type="button" onClick={close} aria-label={`Close ${activeProject.title}`} className="shrink-0 rounded-full bg-[#f5f5f7] px-3 py-2 text-sm font-semibold text-[#1d1d1f] transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc]">Close</button>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] md:items-start">
          <div className="space-y-6 text-[#6e6e73]">
            <p className="text-lg leading-8">{activeProject.summary}</p>
            <ProjectDetail label="Need or Challenge" copy={activeProject.need} />
            <ProjectDetail label="Solution" copy={activeProject.solution} />
            <ProjectDetail label="Value or Purpose" copy={activeProject.value} />
          </div>
          {activeProject.media ? <div className="space-y-5">
            {activeProject.media.map((media) => <div key={media.src}>
              <p className="mb-2 text-sm font-semibold text-[#1d1d1f]">{media.title}</p>
              {media.kind === "video" ? <video controls preload="metadata" poster={media.preview} className="aspect-video w-full rounded-3xl bg-[#1d1d1f] shadow-sm" aria-label={`Play ${media.title}`}>
                <source src={media.src} type="video/mp4" />
                Your browser does not support HTML video.
              </video> : <Image src={media.src} alt={`${activeProject.title}: ${media.title}`} width={1600} height={900} sizes="(min-width: 768px) 55vw, 90vw" className="h-auto w-full rounded-3xl border border-[#d2d2d7] bg-white shadow-sm" />}
            </div>)}
          </div> : <div className="flex min-h-64 items-center justify-center rounded-3xl border border-[#d2d2d7] bg-[#f5f5f7] p-8 text-center sm:min-h-80">
            <div><p className="eyebrow">Media placeholder</p><p className="mx-auto mt-4 max-w-xs text-lg leading-7 text-[#6e6e73]">Project media will be added in a future update.</p></div>
          </div>}
        </div>
      </div>
    </div>}
  </>;
}

function ProjectDetail({ label, copy }: { label: string; copy: string }) {
  return <div><h4 className="text-sm font-bold uppercase tracking-[.1em] text-[#1d1d1f]">{label}</h4><p className="mt-2 leading-7">{copy}</p></div>;
}
