import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/profile';

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="beranda"
      aria-labelledby="hero-title"
      className="scroll-mt-24 overflow-hidden bg-navy text-white"
    >
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:py-24">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="order-2 max-w-2xl lg:order-1"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
            Portofolio Profesional
          </p>
          <h1
            id="hero-title"
            className="mt-4 font-heading text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.fullName}
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-white sm:text-xl">
            {profile.roles.join(' · ')}
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#proyek"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-navy transition hover:bg-mist focus-visible:outline-white"
            >
              Lihat Proyek
              <ArrowDown aria-hidden="true" size={18} />
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Hubungi Saya
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Kunjungi profil LinkedIn Nurhidayah"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-medium text-white underline-offset-4 transition hover:underline"
            >
              <Linkedin aria-hidden="true" size={18} />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              aria-label={`Kirim email ke ${profile.contact.email}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-medium text-white underline-offset-4 transition hover:underline"
            >
              <Mail aria-hidden="true" size={18} />
              {profile.contact.email}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.12 }}
          className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none"
        >
          <div className="relative mx-auto aspect-[4/5] max-h-[34rem] overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-subtle">
            <img
              src={profile.heroImage.src}
              alt={profile.heroImage.alt}
              className="h-full w-full rounded-[1.4rem] object-cover object-top"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
