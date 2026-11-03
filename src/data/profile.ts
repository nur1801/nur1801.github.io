import type { Profile } from '../types';

export const profile: Profile = {
  fullName: 'Nurhidayah',
  roles: ['Business Analyst', 'Data Analyst', 'System Analyst', 'Quality Assurance'],
  summary:
    'Lulusan Sistem Informasi Bisnis dengan pengalaman 1,5 tahun di Project Management Office PT Petrokimia Gresik.',
  about:
    'Berpengalaman mendukung implementasi aplikasi internal perusahaan melalui analisis proses bisnis, penggalian kebutuhan pengguna, dokumentasi sistem, pengujian, dan pelatihan pengguna. Terbiasa bekerja mandiri maupun dalam tim serta menjembatani pengguna dan tim teknis. Memiliki minat pada Business Analyst, Data Analyst, System Analyst, Quality Assurance, dan pengembangan User Interface. Mengutamakan komunikasi, berpikir kritis, pemecahan masalah, ketelitian, serta tanggung jawab.',
  contact: {
    linkedin: 'https://www.linkedin.com/in/nurhidayah1807/',
    email: 'nurhid180701@gmail.com',
    phone: '089662703416',
    location: 'Malang, Jawa Timur',
  },
  education: {
    qualification: 'Sarjana Terapan (D-IV) Teknologi Informasi',
    program: 'Program Studi Sistem Informasi Bisnis',
    institution: 'Politeknik Negeri Malang',
    gpa: '3,82/4,00',
    period: 'September 2022 – Juli 2026',
  },
  metrics: [
    { value: '3,82', label: 'IPK / 4,00' },
    { value: '1,5 tahun', label: 'Pengalaman PMO' },
    { value: '90+', label: 'Test case disusun' },
    { value: '660', label: 'Skor TOEIC' },
  ],
  heroImage: {
    src: '/images/foto-diri/Foto-Fullbody-1.png',
    alt: 'Foto Nurhidayah untuk profil portofolio',
  },
  aboutImage: {
    src: '/images/foto-diri/Foto-Fullbody-3.png',
    alt: 'Foto Nurhidayah dalam busana formal',
  },
};
