import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CalendarDays, Code2, X } from 'lucide-react';
import type { Project } from '../../types';
import { projects } from '../../data/projects';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const coverImage = project.gallery[0];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-mist bg-white shadow-subtle transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgb(23_43_77/10%)]">
      {coverImage ? (
        <div className="overflow-hidden bg-mist">
          <img
            src={coverImage.src}
            alt={coverImage.alt}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm font-medium text-slate">{project.period}</p>
        <h3 className="mt-2 font-heading text-xl font-semibold leading-snug text-navy sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 text-sm font-semibold text-navy">{project.role}</p>
        <p className="mt-4 flex-1 text-sm leading-6 text-navy">{project.description}</p>
        <ul aria-label="Teknologi proyek" className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-navy"
            >
              {technology}
            </li>
          ))}
          {project.technologies.length > 5 ? (
            <li className="rounded-full border border-mist px-3 py-1 text-xs font-medium text-slate">
              +{project.technologies.length - 5}
            </li>
          ) : null}
        </ul>
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 rounded-lg font-semibold text-navy underline-offset-4 transition hover:text-slate hover:underline"
          aria-label={`Lihat detail proyek ${project.title}`}
        >
          Lihat detail
          <ArrowUpRight aria-hidden="true" size={18} />
        </button>
      </div>
    </article>
  );
}

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project && !dialog.open) {
      dialog.showModal();
    } else if (!project && dialog.open) {
      dialog.close();
    }

    return () => {
      if (dialog.open) dialog.close();
    };
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-dialog-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          onClose();
        }
      }}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="m-auto max-h-[min(90dvh,56rem)] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto rounded-2xl border border-mist bg-white p-0 text-navy shadow-[0_24px_80px_rgb(23_43_77/24%)] backdrop:bg-navy/70"
    >
      {project ? (
        <div className="p-5 sm:p-8">
          <div className="flex items-start justify-between gap-5">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate">
                {project.role}
              </p>
              <h2
                id="project-dialog-title"
                className="mt-2 font-heading text-2xl font-semibold leading-snug text-navy sm:text-3xl"
              >
                {project.title}
              </h2>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-navy">
                <CalendarDays aria-hidden="true" size={17} className="text-slate" />
                {project.period}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup detail proyek"
              className="grid size-11 shrink-0 place-items-center rounded-xl border border-mist text-navy transition hover:bg-mist"
            >
              <X aria-hidden="true" size={20} />
            </button>
          </div>

          <p className="mt-6 max-w-3xl leading-7 text-navy">{project.description}</p>

          <div className="mt-8 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <section aria-labelledby="project-tasks-title">
              <h3
                id="project-tasks-title"
                className="flex items-center gap-2 font-semibold text-navy"
              >
                <Code2 aria-hidden="true" size={19} className="text-slate" />
                Tugas & kontribusi
              </h3>
              <ul className="mt-4 space-y-3">
                {project.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-3 text-sm leading-6 text-navy">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-slate"
                    />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-7 font-semibold text-navy">Teknologi</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full bg-mist px-3 py-1.5 text-sm text-navy"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="project-gallery-title">
              <h3 id="project-gallery-title" className="font-semibold text-navy">
                Galeri proyek
              </h3>
              {project.gallery.length > 0 ? (
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.gallery.map((image) => (
                    <figure
                      key={image.src}
                      className="overflow-hidden rounded-xl border border-mist bg-mist"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <figcaption className="p-3 text-xs leading-5 text-navy">
                        {image.alt}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ) : (
                <p className="mt-4 rounded-xl bg-mist p-4 text-sm text-navy">
                  Belum ada gambar untuk proyek ini.
                </p>
              )}
            </section>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="proyek"
      aria-labelledby="projects-title"
      className="scroll-mt-24 bg-mist px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            titleId="projects-title"
            eyebrow="Proyek"
            title="Proyek yang mengubah kebutuhan menjadi solusi."
            description="Beberapa pengalaman proyek dalam quality assurance, pengembangan sistem, dan analisis data."
          />
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 0.06} className="h-full">
              <ProjectCard project={project} onOpen={setSelectedProject} />
            </Reveal>
          ))}
        </div>
      </div>
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
