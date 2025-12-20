import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import { portfolioData } from '@/data/portfolio';

export default function Home() {
  return (
    <main className="relative" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero name={portfolioData.name} title={portfolioData.title} />

      {/* Projects Section */}
      <Projects projects={portfolioData.projects} />

      {/* Skills Section */}
      <Skills skills={portfolioData.skills} />

      {/* Resume Section */}
      <Resume resumeUrl={portfolioData.resumeUrl} />

      {/* Contact Section */}
      <Contact email={portfolioData.email} socials={portfolioData.socials} />
    </main>
  );
}
