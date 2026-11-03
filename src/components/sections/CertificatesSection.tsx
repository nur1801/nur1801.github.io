import { useEffect, useRef, useState } from 'react';
import { Award, CalendarDays, ExternalLink, X } from 'lucide-react';
import type { Certificate, CertificateCategory } from '../../types';
import { certificates } from '../../data/certificates';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const categories: Array<'Semua' | CertificateCategory> = [
  'Semua',
  'Project Management',
  'QA',
  'Data',
  'Bahasa',
  'Kompetensi',
];

interface CertificateLightboxProps {
  certificate: Certificate | null;
  onClose: () => void;
}

function CertificateLightbox({ certificate, onClose }: CertificateLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (certificate && !dialog.open) {
      dialog.showModal();
    } else if (!certificate && dialog.open) {
      dialog.close();
    }

    return () => {
      if (dialog.open) dialog.close();
    };
  }, [certificate]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="certificate-lightbox-title"
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
      className="m-auto max-h-[min(94dvh,60rem)] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto rounded-2xl border border-mist bg-white p-0 text-navy shadow-[0_24px_80px_rgb(23_43_77/24%)] backdrop:bg-navy/70"
    >
      {certificate?.image ? (
        <div className="p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate">
                {certificate.category}
              </p>
              <h2
                id="certificate-lightbox-title"
                className="mt-1 font-heading text-xl font-semibold text-navy sm:text-2xl"
              >
                {certificate.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup lightbox sertifikat"
              className="grid size-11 shrink-0 place-items-center rounded-xl border border-mist text-navy transition hover:bg-mist"
            >
              <X aria-hidden="true" size={20} />
            </button>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(15rem,0.7fr)] lg:items-start">
            <div className="grid min-h-52 place-items-center overflow-hidden rounded-xl bg-mist p-2 sm:min-h-80 sm:p-4">
              <img
                src={certificate.image.src}
                alt={certificate.image.alt}
                className="max-h-[68dvh] w-full rounded-lg object-contain"
              />
            </div>
            <div className="rounded-xl bg-mist p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate">
                Deskripsi
              </p>
              <p className="mt-3 leading-7 text-navy">{certificate.description}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy">
                <CalendarDays aria-hidden="true" size={17} className="text-slate" />
                {certificate.issuer}
                {certificate.period ? ` · ${certificate.period}` : ''}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}

export function CertificatesSection() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('Semua');
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const filteredCertificates =
    activeCategory === 'Semua'
      ? certificates
      : certificates.filter((certificate) => certificate.category === activeCategory);

  return (
    <section
      id="sertifikat"
      aria-labelledby="certificates-title"
      className="scroll-mt-24 bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            titleId="certificates-title"
            eyebrow="Sertifikat"
            title="Pembelajaran dan kompetensi yang terus berkembang."
            description="Sertifikat pelatihan dan kompetensi di bidang project management, quality assurance, data, dan bahasa."
          />
        </Reveal>

        <div
          aria-label="Filter kategori sertifikat"
          className="mt-8 flex flex-wrap gap-2"
          role="group"
        >
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`min-h-10 rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-slate ${
                  isActive
                    ? 'border-navy bg-navy text-white'
                    : 'border-mist bg-white text-navy hover:bg-mist'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCertificates.map((certificate, index) => {
            const cardContents = (
              <>
                <div className="relative overflow-hidden bg-mist">
                  {certificate.image ? (
                    <img
                      src={certificate.image.src}
                      alt={certificate.image.alt}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="grid aspect-[16/10] place-items-center text-slate">
                      <Award aria-hidden="true" size={42} strokeWidth={1.5} />
                    </div>
                  )}
                  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy shadow-subtle">
                    {certificate.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-xl font-semibold leading-snug text-navy">
                    {certificate.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate">
                    {certificate.issuer}
                    {certificate.period ? ` · ${certificate.period}` : ''}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-6 text-navy">
                    {certificate.description}
                  </p>
                  {certificate.image ? (
                    <span className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-navy">
                      Lihat sertifikat
                      <ExternalLink aria-hidden="true" size={16} />
                    </span>
                  ) : (
                    <span className="mt-5 text-xs text-slate">
                      Gambar sertifikat tidak tersedia
                    </span>
                  )}
                </div>
              </>
            );

            return (
              <Reveal key={certificate.id} delay={(index % 3) * 0.05} className="h-full">
                {certificate.image ? (
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(certificate)}
                    aria-label={`Buka sertifikat ${certificate.title}`}
                    className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-mist bg-white text-left shadow-subtle transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgb(23_43_77/10%)] focus-visible:outline-slate"
                  >
                    {cardContents}
                  </button>
                ) : (
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-mist bg-white shadow-subtle">
                    {cardContents}
                  </article>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
      <CertificateLightbox
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}
