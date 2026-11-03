import { Languages, Sparkles } from 'lucide-react';
import { skills } from '../../data/skills';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function SkillsSection() {
  return (
    <section
      id="keahlian"
      aria-labelledby="skills-title"
      className="scroll-mt-24 bg-mist px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            titleId="skills-title"
            eyebrow="Keahlian"
            title="Keahlian untuk memahami, merancang, dan menguji solusi."
            description="Perpaduan kemampuan teknis, analitis, dan kolaboratif yang digunakan dalam pekerjaan dan proyek."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.technical.map((group, index) => (
            <Reveal key={group.category} delay={(index % 4) * 0.05}>
              <article className="h-full rounded-2xl border border-mist bg-white p-5 shadow-subtle sm:p-6">
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-mist bg-mist px-3 py-1.5 text-sm leading-5 text-navy"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-2xl bg-navy p-6 text-white sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-white">
                  <Sparkles aria-hidden="true" size={20} />
                </span>
                <h3 className="font-heading text-xl font-semibold">Personal Skill</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {skills.personal.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/30 px-3 py-1.5 text-sm text-white"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="h-full rounded-2xl border border-mist bg-white p-6 shadow-subtle sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-mist text-slate">
                  <Languages aria-hidden="true" size={20} />
                </span>
                <h3 className="font-heading text-xl font-semibold text-navy">Bahasa</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {skills.languages.map((language) => (
                  <li
                    key={language}
                    className="rounded-full border border-mist bg-mist px-3 py-1.5 text-sm text-navy"
                  >
                    {language}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
