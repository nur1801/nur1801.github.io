import { BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react';
import { experiences } from '../../data/experience';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function ExperienceSection() {
  const internship = experiences.find((experience) => experience.category === 'internship');
  const otherWork = experiences.filter((experience) => experience.category === 'work');

  return (
    <section
      id="pengalaman"
      aria-labelledby="experience-title"
      className="scroll-mt-24 bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            titleId="experience-title"
            eyebrow="Pengalaman"
            title="Pengalaman kerja dan kontribusi profesional."
            description="Perjalanan pengalaman yang mencakup tata kelola TI, quality assurance, pemasaran, dan operasional manufaktur."
          />
        </Reveal>

        {internship ? (
          <div className="relative mt-12 border-l-2 border-mist pl-6 sm:pl-10">
            <Reveal>
              <article className="relative rounded-2xl border border-mist bg-white p-5 shadow-subtle sm:p-8">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.13rem] top-7 size-4 rounded-full border-4 border-white bg-slate ring-2 ring-mist sm:-left-[3.13rem] sm:top-9"
                />
                <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate">
                      Pengalaman Utama
                    </p>
                    <h3 className="mt-2 font-heading text-2xl font-semibold leading-snug text-navy sm:text-3xl">
                      {internship.title}
                    </h3>
                    <p className="mt-2 text-lg font-medium text-navy">
                      {internship.organization}
                    </p>
                    {internship.department ? (
                      <p className="mt-1 text-sm text-slate">{internship.department}</p>
                    ) : null}
                    <p className="mt-4 max-w-2xl leading-7 text-navy">
                      {internship.summary}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col gap-2 text-sm text-navy lg:min-w-48">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays aria-hidden="true" size={17} className="text-slate" />
                      {internship.period}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin aria-hidden="true" size={17} className="text-slate" />
                      Project Management Office
                    </span>
                  </div>
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <h4 className="font-semibold text-navy">Tugas & kontribusi</h4>
                    <ul className="mt-4 space-y-3">
                      {internship.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex gap-3 text-sm leading-6 text-navy sm:text-base"
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

                  {internship.gallery?.length ? (
                    <div>
                      <h4 className="font-semibold text-navy">Dokumentasi pekerjaan</h4>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {internship.gallery.map((image, index) => (
                          <figure
                            key={image.src}
                            className={`overflow-hidden rounded-xl border border-mist bg-mist ${
                              index === 0 ? 'col-span-2' : ''
                            }`}
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              loading="lazy"
                              className={`w-full object-cover ${
                                index === 0 ? 'aspect-[16/8]' : 'aspect-[4/3]'
                              }`}
                            />
                          </figure>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>

            {otherWork.length > 0 ? (
              <div className="mt-8 space-y-4">
                <h3 className="sr-only">Pengalaman kerja lainnya</h3>
                {otherWork.map((experience, index) => (
                  <Reveal key={experience.id} delay={index * 0.06}>
                    <article className="relative rounded-2xl border border-mist bg-mist p-5 sm:p-6">
                      <span
                        aria-hidden="true"
                        className="absolute -left-[2.13rem] top-7 size-4 rounded-full border-4 border-white bg-slate ring-2 ring-mist sm:-left-[3.13rem]"
                      />
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h4 className="font-heading text-xl font-semibold text-navy">
                            {experience.title}
                          </h4>
                          <p className="mt-1 font-medium text-navy">
                            {experience.organization}
                          </p>
                          {experience.department ? (
                            <p className="mt-1 text-sm text-slate">
                              {experience.department}
                            </p>
                          ) : null}
                          <p className="mt-3 text-sm leading-6 text-navy">
                            {experience.summary}
                          </p>
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-2 text-sm text-navy">
                          <BriefcaseBusiness
                            aria-hidden="true"
                            size={17}
                            className="text-slate"
                          />
                          {experience.period}
                        </span>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
