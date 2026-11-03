import type { ExperienceEntry } from '../types';

export const experiences: ExperienceEntry[] = [
  {
    id: 'petrokimia-gresik-intern',
    title: 'Quality Assurance & IT Governance Intern',
    organization: 'PT Petrokimia Gresik',
    department: 'Project Management Office (PMO)',
    period: 'Februari 2025 – Juli 2026',
    category: 'internship',
    summary:
      'Mendukung implementasi aplikasi internal dari analisis kebutuhan hingga pengujian, pelatihan pengguna, dan dokumentasi tata kelola TI.',
    responsibilities: [
      'Menganalisis proses bisnis dan menggali kebutuhan pengguna bersama stakeholder.',
      'Menyusun Business Requirement Document (BRD) dan spesifikasi fungsional sistem.',
      'Membuat diagram Business Process Model and Notation (BPMN) dan merancang mockup aplikasi menggunakan Figma.',
      'Menyusun dan melaksanakan functional testing, regression testing, serta System Integration Testing (SIT).',
      'Menyusun lebih dari 90 test case pada aplikasi dengan proses bisnis yang kompleks.',
      'Berperan utama dalam User Acceptance Testing (UAT), memandu pengguna, dan memastikan feedback ditindaklanjuti.',
      'Menyusun user guide, user manual, dan materi End User Training (EUT).',
      'Mengelola defect dari identifikasi dan pelaporan hingga koordinasi perbaikan serta retesting.',
      'Melakukan monitoring pascaimplementasi dan menyampaikan root-cause analysis kepada tim pengembang.',
      'Menyusun project charter, blueprint, dokumen pengadaan, dokumen manajemen proyek, OLA, dan close out report.',
      'Mengelola linimasa dan prioritas pekerjaan menggunakan ClickUp.',
      'Membantu dokumentasi kepatuhan dan persiapan audit ISO 27001.',
    ],
    gallery: [
      {
        src: '/images/pengelaman-intern/BPMN.png',
        alt: 'Diagram BPMN yang dibuat selama pengalaman magang di PT Petrokimia Gresik',
      },
      {
        src: '/images/pengelaman-intern/mockup-design.png',
        alt: 'Mockup desain aplikasi internal yang dibuat menggunakan Figma',
      },
      {
        src: '/images/pengelaman-intern/uat-script.png',
        alt: 'Dokumen skrip User Acceptance Testing',
      },
    ],
  },
  {
    id: 'ramayana',
    title: 'Sales Marketing',
    organization: 'Ramayana',
    period: '2022',
    category: 'work',
    summary: 'Pengalaman di bidang pemasaran dan pelayanan pelanggan.',
    responsibilities: ['Bekerja di bidang Sales & Marketing dan pelayanan pelanggan.'],
    gallery: [
      {
        src: '/images/kerja-lainnya/sales-marketing.jpg',
        alt: 'Dokumentasi pekerjaan Sales Marketing',
      },
    ],
  },
  {
    id: 'denso',
    title: 'Machine Operator',
    organization: 'PT Denso Manufacturing Indonesia',
    department: 'Manufacturing / Production',
    period: '2019 – 2021',
    category: 'work',
    summary: 'Pengalaman operasional di lingkungan industri manufaktur.',
    responsibilities: ['Bekerja sebagai operator mesin di lingkungan produksi manufaktur.'],
    gallery: [
      {
        src: '/images/kerja-lainnya/machine-operator.jpg',
        alt: 'Dokumentasi pekerjaan sebagai operator mesin',
      },
      {
        src: '/images/kerja-lainnya/machine-operator-2.jpg',
        alt: 'Dokumentasi kegiatan operasional manufaktur',
      },
    ],
  },
];
