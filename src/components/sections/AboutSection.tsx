import { GraduationCap } from 'lucide-react';
import { profile } from '../../data/profile';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function AboutSection() {
  return (
    <section
      id="tentang"
      aria-labelledby="about-title"
      className="scroll-mt-24 bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            titleId="about-title"
            eyebrow="Tentang Saya"
            title="Membangun solusi teknologi melalui analisis dan kualitas sistem."
            description={profile.about}
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch lg:gap-10">
          <Reveal className="h-full">
            <div className="h-full min-h-72 overflow-hidden rounded-2xl bg-mist p-3 shadow-subtle sm:min-h-96">
              <img
                src={profile.aboutImage.src}
                alt={profile.aboutImage.alt}
                loading="lazy"
                className="h-full max-h-[34rem] w-full rounded-xl object-cover object-top"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal>
              <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {profile.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-mist bg-white p-4 shadow-subtle sm:p-5"
                  >
                    <dt className="font-heading text-2xl font-semibold text-navy sm:text-3xl">
                      {metric.value}
                    </dt>
                    <dd className="mt-2 text-sm leading-5 text-navy">{metric.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="h-full rounded-2xl bg-mist p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white text-slate">
                    <GraduationCap aria-hidden="true" size={24} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate">
                      Pendidikan
                    </p>
                    <h3 className="mt-2 font-heading text-xl font-semibold leading-snug text-navy sm:text-2xl">
                      {profile.education.qualification}
                    </h3>
                    <p className="mt-2 leading-6 text-navy">
                      {profile.education.program}
                      <br />
                      {profile.education.institution}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-navy">
                      <span>IPK {profile.education.gpa}</span>
                      <span>{profile.education.period}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
