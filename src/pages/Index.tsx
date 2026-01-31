import { useRef, useCallback } from 'react';
import SeasonalBackground from '@/components/seasons/SeasonalBackground';
import IntroSection from '@/components/sections/IntroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ContactSection from '@/components/sections/ContactSection';
import useScrollProgress from '@/hooks/useScrollProgress';

const Index = () => {
  const { progress } = useScrollProgress();
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = useCallback(() => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="relative">
      {/* Fixed Seasonal Background */}
      <SeasonalBackground scrollProgress={progress} />

      {/* Content Sections */}
      <main className="relative z-10">
        {/* Winter - Intro */}
        <IntroSection onCTAClick={scrollToProjects} />

        {/* Spring - Projects */}
        <div ref={projectsRef}>
          <ProjectsSection />
        </div>

        {/* Summer - Achievements */}
        <AchievementsSection />

        {/* Autumn - Contact */}
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
