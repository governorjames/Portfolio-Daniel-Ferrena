"use client";

import { useEffect, useRef, useState } from "react";

type SpecialProject = {
  title: string;
  type: string;
  summary: string;
  need: string;
  solution: string;
  value: string;
  accent: "blue" | "graphite" | "mist" | "ink";
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
  },
  {
    title: "Samsung Expert Training Binder",
    type: "Training Resource",
    summary: "A printed reference system designed to make essential Samsung product knowledge easier for retail experts to access and use on the sales floor.",
    need: "Some retail experts benefited from a physical reference resource rather than relying exclusively on digital files and PDFs.",
    solution: "I organized key product information, selling points, and reference material into a structured printed binder designed for practical in-store use.",
    value: "The binder made training information easier to access and reflected a hands-on approach to supporting different learning preferences.",
    accent: "graphite",
  },
  {
    title: "Multi-District Training Recap",
    type: "Presentation",
    summary: "A presentation documenting a large multi-district training initiative, its execution, and the teams brought together through the event.",
    need: "A large training initiative involving multiple districts required a clear record of the event, participation, and execution.",
    solution: "I created a presentation that documented the training experience and organized the event’s key visuals and supporting details into a cohesive recap.",
    value: "The project demonstrates large-scale training support, professional communication, documentation, and the ability to present a complex initiative clearly.",
    accent: "mist",
  },
  {
    title: "Custom Eero Training Deck",
    type: "Training Presentation",
    summary: "A custom-built presentation developed to translate complex technology into a clear and engaging training experience.",
    need: "Detailed product information needed to be converted into training material that retail teams could understand and apply.",
    solution: "I designed a custom presentation that organized product knowledge into a more approachable and engaging instructional format.",
    value: "The deck demonstrates instructional design, visual communication, product expertise, and the ability to create training materials from the ground up.",
    accent: "ink",
  },
  {
    title: "Salesforce End-of-Shift Reporting Redesign",
    type: "Reporting System",
    summary: "A redesigned Salesforce end-of-shift questionnaire and reporting flow that improved the accuracy and usefulness of field data shared with the Sennheiser client.",
    need: "The existing end-of-shift report left important gaps in the field data being collected, limiting the accuracy and relevance of client reporting.",
    solution: "I created the flowcharts, reporting foundation, and navigation for a revamped Salesforce end-of-shift questionnaire. After review, 2020 Companies approved it as the new reporting process for field sales managers.",
    value: "The redesign improved the quality of information captured from the field and demonstrates process improvement, Salesforce reporting design, and a proactive approach to client-focused data accuracy.",
    accent: "blue",
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
        <div aria-hidden="true" className={`relative min-h-28 overflow-hidden rounded-2xl bg-gradient-to-br p-5 ${accentStyles[project.accent]}`}>
          <div className="absolute inset-x-5 top-5 h-px bg-[#1d1d1f]/10" />
          <div className="absolute inset-x-5 top-8 grid grid-cols-5 gap-1.5 opacity-60"><span className="col-span-3 h-1.5 rounded-full bg-[#1d1d1f]/20" /><span className="col-span-2 h-1.5 rounded-full bg-[#1d1d1f]/10" /><span className="col-span-2 h-1.5 rounded-full bg-[#1d1d1f]/10" /><span className="col-span-3 h-1.5 rounded-full bg-[#1d1d1f]/15" /></div>
          <span className="absolute bottom-4 left-5 text-[.64rem] font-bold uppercase tracking-[.14em] text-[#1d1d1f]/60">Project preview</span>
        </div>
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
          <div className="flex min-h-64 items-center justify-center rounded-3xl border border-[#d2d2d7] bg-[#f5f5f7] p-8 text-center sm:min-h-80">
            <div><p className="eyebrow">Media placeholder</p><p className="mx-auto mt-4 max-w-xs text-lg leading-7 text-[#6e6e73]">Project media will be added in a future update.</p></div>
          </div>
        </div>
      </div>
    </div>}
  </>;
}

function ProjectDetail({ label, copy }: { label: string; copy: string }) {
  return <div><h4 className="text-sm font-bold uppercase tracking-[.1em] text-[#1d1d1f]">{label}</h4><p className="mt-2 leading-7">{copy}</p></div>;
}
