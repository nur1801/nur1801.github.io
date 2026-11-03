import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'hris-sdm-jti',
    title: 'Pengembangan Website & Aplikasi Mobile Sistem Pengelolaan SDM (HRIS)',
    period: 'Juli 2024 – Desember 2024',
    role: 'Quality Assurance & Document Control',
    description:
      'Memvalidasi alur HRIS berbasis web dan mobile terhadap kebutuhan pengguna, menguji fungsionalitas, serta mengelola dokumentasi dan defect.',
    technologies: ['Web', 'Mobile'],
    responsibilities: [
      'Menganalisis dan memvalidasi kesesuaian alur aplikasi HRIS dengan kebutuhan pengguna.',
      'Melakukan pengujian terhadap fungsionalitas aplikasi berbasis web dan mobile.',
      'Menyusun dan mengelola dokumentasi requirement serta test case.',
      'Mengidentifikasi dan mendokumentasikan defect.',
      'Melakukan retesting untuk memastikan perbaikan dari tim pengembang telah sesuai.',
    ],
    gallery: [
      {
        src: '/images/projek-sdm-jti/mockup.png',
        alt: 'Mockup website dan aplikasi mobile Sistem Pengelolaan SDM',
      },
      {
        src: '/images/projek-sdm-jti/result.png',
        alt: 'Tampilan hasil proyek Sistem Pengelolaan SDM',
      },
    ],
  },
  {
    id: 'sistem-pendukung-keputusan-beasiswa',
    title: 'Sistem Pendukung Keputusan Penerima Beasiswa Berbasis Kecerdasan Buatan',
    period: 'Januari 2026 – Juli 2026',
    role: 'System Developer / Researcher',
    description:
      'Mengembangkan sistem pendukung keputusan dengan ekstraksi data KTP berbasis OCR-CRNN dan pemeringkatan kelayakan menggunakan MARCOS.',
    technologies: [
      'PHP',
      'Laravel',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'OCR-CRNN',
      'MARCOS',
      'Artificial Intelligence',
      'OCR',
      'Decision Support System',
    ],
    responsibilities: [
      'Mengembangkan sistem ekstraksi informasi KTP menggunakan metode OCR-CRNN.',
      'Membangun dataset untuk mendukung proses pelatihan model OCR.',
      'Mengimplementasikan metode MARCOS untuk menentukan peringkat kelayakan calon penerima beasiswa.',
      'Menentukan kriteria dan bobot penilaian dalam sistem pendukung keputusan.',
      'Mengintegrasikan hasil ekstraksi data OCR dengan proses perhitungan dan perangkingan.',
      'Melakukan evaluasi terhadap hasil perankingan sistem.',
    ],
    gallery: [
      {
        src: '/images/projek-skripsi/hasil-skripsi.png',
        alt: 'Tampilan hasil sistem pendukung keputusan penerima beasiswa',
      },
      {
        src: '/images/projek-skripsi/database.jpg',
        alt: 'Database sistem pendukung keputusan penerima beasiswa',
      },
    ],
  },
  {
    id: 'website-survei-kepuasan',
    title: 'Pengembangan Website Survei Kepuasan Pelanggan Politeknik Negeri Malang',
    period: 'Februari 2024 – Juli 2024',
    role: 'Data Analyst',
    description:
      'Merancang struktur database survei kepuasan pelanggan agar sesuai dengan kebutuhan pelaporan dan analisis data.',
    technologies: ['Database', 'MySQL'],
    responsibilities: [
      'Merancang struktur database untuk kebutuhan penyimpanan data survei kepuasan pelanggan.',
      'Menentukan tabel, relasi, dan atribut database.',
      'Berkoordinasi dengan tim pengembang agar struktur database sesuai kebutuhan pelaporan dan analisis data.',
    ],
    gallery: [
      {
        src: '/images/projek-website-survey/result.png',
        alt: 'Tampilan hasil website survei kepuasan pelanggan',
      },
      {
        src: '/images/projek-website-survey/database.png',
        alt: 'Struktur database website survei kepuasan pelanggan',
      },
    ],
  },
];
