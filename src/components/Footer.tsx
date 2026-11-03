import { ArrowUp, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="bg-navy px-6 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a
            href="#beranda"
            className="rounded-lg font-heading text-2xl font-semibold text-white"
          >
            {profile.fullName}
          </a>
          <p className="mt-2 text-sm text-white/80">
            Business Analyst · Data Analyst · System Analyst · Quality Assurance
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.contact.email}`}
            aria-label={`Email ${profile.fullName}`}
            className="grid size-11 place-items-center rounded-xl border border-white/30 text-white transition hover:bg-white/10"
          >
            <Mail aria-hidden="true" size={18} />
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`LinkedIn ${profile.fullName}`}
            className="grid size-11 place-items-center rounded-xl border border-white/30 text-white transition hover:bg-white/10"
          >
            <Linkedin aria-hidden="true" size={18} />
          </a>
          <a
            href="#beranda"
            aria-label="Kembali ke atas"
            className="grid size-11 place-items-center rounded-xl border border-white/30 text-white transition hover:bg-white/10"
          >
            <ArrowUp aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/20 pt-5 text-sm text-white/80">
        © {new Date().getFullYear()} {profile.fullName}
      </div>
    </footer>
  );
}
