import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <a
        href="#konten-utama"
        className="sr-only z-[60] rounded-xl bg-white px-4 py-3 font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="konten-utama">{children}</main>
      <Footer />
    </div>
  );
}
