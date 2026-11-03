import { CalendarDays } from 'lucide-react';
import { organizations } from '../../data/organizations';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function OrganizationsSection() {
  return (
    <section
      id="organisasi"
      aria-labelledby="organizations-title"
      className="scroll-mt-24 bg-mist px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            titleId="organizations-title"
            eyebrow="Organisasi & Kepanitiaan"
            title="Berkoordinasi dan berkontribusi dalam kegiatan."
            description="Pengalaman kepanitiaan dalam mendukung komunikasi, administrasi, dan kelancaran acara."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {organizations.map((organization, index) => (
            <Reveal key={organization.id} delay={index * 0.07} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-mist bg-white shadow-subtle">
                <div className="p-5 sm:p-7">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate">
                        {organization.role}
                      </p>
                      <h3 className="mt-2 font-heading text-xl font-semibold leading-snug text-navy sm:text-2xl">
                        {organization.title}
                      </h3>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-navy">
                      <CalendarDays aria-hidden="true" size={17} className="text-slate" />
                      {organization.period}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {organization.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-3 text-sm leading-6 text-navy"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-slate"
                        />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {organization.gallery.length > 0 ? (
                  <div
                    className={`mt-auto grid gap-2 border-t border-mist bg-mist p-3 ${
                      organization.gallery.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
                    }`}
                    aria-label={`Galeri ${organization.title}`}
                  >
                    {organization.gallery.map((image) => (
                      <figure
                        key={image.src}
                        className="overflow-hidden rounded-xl border border-mist bg-white"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className={`w-full object-cover ${
                            organization.gallery.length === 1
                              ? 'aspect-[16/8] max-h-72'
                              : 'aspect-[4/3]'
                          }`}
                        />
                      </figure>
                    ))}
                  </div>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
