import SiteNav, { NavItem } from '@/components/SiteNav';
import Header from '@/components/Header';
import Numbers from '@/components/Numbers';
import Section from '@/components/Section';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import OtherWork from '@/components/OtherWork';
import Skills from '@/components/Skills';
import Background from '@/components/Background';
import Contact from '@/components/Contact';
import { portfolioData as data } from '@/data/portfolio';

const navItems: NavItem[] = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'background', label: 'Background' },
  { id: 'contact', label: 'Contact' },
];

export default function Home() {
  return (
    <>
      <SiteNav name={data.name} items={navItems} cvUrl={data.cvUrl} />
      <main>
        <Header
          name={data.name}
          role={data.role}
          location={data.location}
          profile={data.profile}
          email={data.email}
          socials={data.socials}
          cvUrl={data.cvUrl}
        />
        <Numbers metrics={data.metrics} />
        <Section id="experience" index="01" title="Experience">
          <Experience roles={data.experience} />
        </Section>
        <Section id="projects" index="02" title="Projects">
          <Projects projects={data.projects} />
          <OtherWork projects={data.otherWork} group={data.pluginGroup} />
        </Section>
        <Section id="skills" index="03" title="Skills">
          <Skills skills={data.skills} />
        </Section>
        <Section id="background" index="04" title="Background">
          <Background education={data.education} languages={data.languages} personal={data.personal} />
        </Section>
        <Section id="contact" index="05" title="Contact">
          <Contact name={data.name} email={data.email} socials={data.socials} cvUrl={data.cvUrl} />
        </Section>
      </main>
    </>
  );
}
