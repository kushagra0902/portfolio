import { useState, useEffect, useCallback, useRef } from 'react';

interface ScrollInfo {
  progress: number;          // 0-1 overall scroll progress
  currentSection: number;    // Current section index (0-3)
  sectionProgress: number;   // Progress within current section (0-1)
  scrollY: number;           // Raw scroll position
  viewportHeight: number;    // Viewport height
  documentHeight: number;    // Total document height
}

export const useScrollProgress = () => {
  const [scrollInfo, setScrollInfo] = useState<ScrollInfo>({
    progress: 0,
    currentSection: 0,
    sectionProgress: 0,
    scrollY: 0,
    viewportHeight: 0,
    documentHeight: 0,
  });

  const ticking = useRef(false);

  const updateScrollInfo = useCallback(() => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScroll = documentHeight - viewportHeight;

    // Overall progress (0-1)
    const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;

    // Calculate current section (0-3 for 4 sections)
    const numSections = 4;
    const sectionHeight = 1 / numSections;
    const currentSection = Math.min(Math.floor(progress / sectionHeight), numSections - 1);

    // Progress within current section (0-1)
    const sectionStart = currentSection * sectionHeight;
    const sectionProgress = (progress - sectionStart) / sectionHeight;

    setScrollInfo({
      progress,
      currentSection,
      sectionProgress: Math.max(0, Math.min(1, sectionProgress)),
      scrollY,
      viewportHeight,
      documentHeight,
    });

    ticking.current = false;
  }, []);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateScrollInfo);
      ticking.current = true;
    }
  }, [updateScrollInfo]);

  useEffect(() => {
    // Initial update
    updateScrollInfo();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScrollInfo, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollInfo);
    };
  }, [handleScroll, updateScrollInfo]);

  return scrollInfo;
};

export default useScrollProgress;
