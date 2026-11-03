export interface ImageAsset {
  src: string;
  alt: string;
}

export interface ContactInfo {
  linkedin: string;
  email: string;
  phone: string;
  location: string;
}

export interface Education {
  qualification: string;
  program: string;
  institution: string;
  gpa: string;
  period: string;
}

export interface ProfileMetric {
  value: string;
  label: string;
}

export interface Profile {
  fullName: string;
  roles: string[];
  summary: string;
  about: string;
  contact: ContactInfo;
  education: Education;
  metrics: ProfileMetric[];
  heroImage: ImageAsset;
  aboutImage: ImageAsset;
}

export interface ExperienceEntry {
  id: string;
  title: string;
  organization: string;
  department?: string;
  period: string;
  category: 'internship' | 'work';
  summary: string;
  responsibilities: string[];
  gallery?: ImageAsset[];
}

export interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
  gallery: ImageAsset[];
}

export type CertificateCategory =
  | 'Project Management'
  | 'QA'
  | 'Data'
  | 'Bahasa'
  | 'Kompetensi';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  period: string;
  category: CertificateCategory;
  description: string;
  image?: ImageAsset;
}

export interface OrganizationEntry {
  id: string;
  title: string;
  period: string;
  role: string;
  responsibilities: string[];
  gallery: ImageAsset[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Skills {
  technical: SkillGroup[];
  personal: string[];
  languages: string[];
}
