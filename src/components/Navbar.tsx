import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

interface NavigationLink {
  label: string;
  href: string;
}

const navigationLinks: NavigationLink[] = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Sertifikat', href: '#sertifikat' },
  { label: 'Organisasi', href: '#organisasi' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-mist bg-white">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-6 sm:px-8 lg:px-12"
      >
        <a
          href="#beranda"
          onClick={closeMenu}
          className="shrink-0 rounded-lg font-heading text-xl font-semibold text-navy sm:text-2xl"
        >
          {profile.fullName}
        </a>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="inline-grid size-11 place-items-center rounded-xl text-navy transition hover:bg-mist focus-visible:outline-slate lg:hidden"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" size={22} />
          ) : (
            <Menu aria-hidden="true" size={22} />
          )}
        </button>

        <div
          id="primary-navigation"
          className={`absolute inset-x-0 top-full border-b border-mist bg-white px-6 pb-5 pt-2 shadow-subtle lg:static lg:flex lg:items-center lg:gap-5 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
            isMenuOpen ? 'block' : 'hidden lg:flex'
          }`}
        >
          <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-1">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-navy transition hover:bg-mist"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#kontak"
            onClick={closeMenu}
            className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate lg:mt-0 lg:w-auto"
          >
            Hubungi Saya
          </a>
        </div>
      </nav>
    </header>
  );
}
