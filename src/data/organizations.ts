import type { OrganizationEntry } from '../types';

export const organizations: OrganizationEntry[] = [
  {
    id: 'hut-petrokimia-ticketing',
    title: 'Panitia HUT PT Petrokimia Gresik',
    period: '2026',
    role: 'Tim Ticketing Stand UMKM',
    responsibilities: [
      'Mengelola proses persewaan lahan stand UMKM.',
      'Berkoordinasi dengan pihak UMKM terkait kebutuhan dan administrasi persewaan.',
      'Membantu penataan lokasi stand selama kegiatan berlangsung.',
    ],
    gallery: [
      {
        src: '/images/pengelaman-intern/Kegiatan-4.jpeg',
        alt: 'Dokumentasi kegiatan kepanitiaan HUT PT Petrokimia Gresik',
      },
    ],
  },
  {
    id: 'lomba-kecamatan-gresik-humas',
    title: 'Panitia Lomba se-Kecamatan Gresik dalam Rangka HUT PT Petrokimia Gresik',
    period: '2026',
    role: 'Tim Humas',
    responsibilities: [
      'Menjadi penghubung komunikasi antara panitia, peserta, dan pihak terkait.',
      'Menyampaikan informasi kegiatan kepada peserta.',
      'Mendukung kelancaran koordinasi dan pelaksanaan acara.',
    ],
    gallery: [
      {
        src: '/images/foto-volunteer/IMG_6091.JPG.jpeg',
        alt: 'Dokumentasi kegiatan dan interaksi bersama peserta',
      },
      {
        src: '/images/foto-volunteer/IMG_6092.jpg',
        alt: 'Dokumentasi kegiatan bersama tim',
      },
      {
        src: '/images/foto-volunteer/IMG_6093.JPG.jpeg',
        alt: 'Dokumentasi kegiatan kepanitiaan',
      },
    ],
  },
];
