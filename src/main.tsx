import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AboutSection } from './components/sections/AboutSection';
import { CertificatesSection } from './components/sections/CertificatesSection';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { HeroSection } from './components/sections/HeroSection';
import { OrganizationsSection } from './components/sections/OrganizationsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { MainLayout } from './components/MainLayout';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <OrganizationsSection />
      <ContactSection />
    </MainLayout>
  </StrictMode>,
);
