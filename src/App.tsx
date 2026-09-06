import React, { useState } from 'react';
import { AmbientBackground } from '@/components/react-bits/AmbientBackground';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/AboutSection';
import { BentoGrid } from '@/components/dashboard/BentoGrid';
import { ProjectsShowcase } from '@/components/sections/ProjectsShowcase';
import { ResearchAndPatent } from '@/components/sections/ResearchAndPatent';
import { SkillsMatrix } from '@/components/sections/SkillsMatrix';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';
import { ResumeModal } from '@/components/modals/ResumeModal';
import { ResumeChatbot } from '@/components/chatbot/ResumeChatbot';

export const App: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080a0f] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Ambient Filaments Canvas */}
      <AmbientBackground />

      {/* Top Navbar with Profile Photo & Download CV */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Flow */}
      <main className="relative z-10">
        {/* 1. Cover / Hero Page (Original 2-Column Symmetric Layout Restored!) */}
        <Hero />

        {/* 2. Dedicated About Me Section */}
        <AboutSection />

        {/* 3. Command Center Bento Grid */}
        <BentoGrid />

        {/* 4. Projects Showcase (Expand on click with direct GitHub links under tiles) */}
        <ProjectsShowcase />

        {/* 5. Indian Patent Record (Clean technical spec, NO unapproved photos) */}
        <ResearchAndPatent />

        {/* 6. Skills Matrix */}
        <SkillsMatrix />

        {/* 7. Academic Track & Verified Certificates (Symmetric & Non-overlapping hover) */}
        <ExperienceTimeline />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CV Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* AI Recruiter Assistant */}
      <ResumeChatbot onOpenResume={() => setResumeOpen(true)} />
    </div>
  );
};

export default App;
