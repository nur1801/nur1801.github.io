import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../../data/profile';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function ContactSection() {
  const phoneLink = profile.contact.phone.replace(/[^\d+]/g, '');

  return (
    <section
      id="kontak"
      aria-labelledby="contact-title"
      className="scroll-mt-24 bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            titleId="contact-title"
            eyebrow="Kontak"
            title="Mari terhubung dan berdiskusi."
            description="Hubungi saya melalui email atau LinkedIn untuk berdiskusi lebih lanjut mengenai pengalaman dan peluang kolaborasi."
          />
          <a
            href={`mailto:${profile.contact.email}`}
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-navy px-6 py-3 font-semibold text-white transition hover:bg-slate"
          >
            <Mail aria-hidden="true" size={18} />
            Kirim Email
          </a>
        </Reveal>

        <Reveal delay={0.08}>
          <address className="not-italic">
            <ul className="grid gap-3 sm:grid-cols-2">
              <li>
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="flex min-h-24 items-center gap-4 rounded-2xl border border-mist bg-white p-5 shadow-subtle transition hover:bg-mist"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-mist text-slate">
                    <Mail aria-hidden="true" size={21} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-slate">Email</span>
                    <span className="mt-1 block break-all font-semibold text-navy">
                      {profile.contact.email}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-24 items-center gap-4 rounded-2xl border border-mist bg-white p-5 shadow-subtle transition hover:bg-mist"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-mist text-slate">
                    <Linkedin aria-hidden="true" size={21} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-slate">LinkedIn</span>
                    <span className="mt-1 block font-semibold text-navy">
                      Profil Nurhidayah
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${phoneLink}`}
                  className="flex min-h-24 items-center gap-4 rounded-2xl border border-mist bg-white p-5 shadow-subtle transition hover:bg-mist"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-mist text-slate">
                    <Phone aria-hidden="true" size={21} />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-slate">Nomor HP</span>
                    <span className="mt-1 block font-semibold text-navy">
                      {profile.contact.phone}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <div className="flex min-h-24 items-center gap-4 rounded-2xl border border-mist bg-white p-5 shadow-subtle">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-mist text-slate">
                    <MapPin aria-hidden="true" size={21} />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-slate">Lokasi</span>
                    <span className="mt-1 block font-semibold text-navy">
                      {profile.contact.location}
                    </span>
                  </span>
                </div>
              </li>
            </ul>
          </address>
        </Reveal>
      </div>
    </section>
  );
}
