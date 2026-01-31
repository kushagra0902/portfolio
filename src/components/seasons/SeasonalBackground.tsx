import { useEffect, useState } from 'react';
import Snowfall from './Snowfall';
import SpringPetals from './SpringPetals';
import AutumnLeaves from './AutumnLeaves';
import WinterLandscape from './WinterLandscape';
import SpringLandscape from './SpringLandscape';
import SummerLandscape from './SummerLandscape';
import AutumnLandscape from './AutumnLandscape';

interface SeasonalBackgroundProps {
  scrollProgress: number; // 0 to 1
}

const SeasonalBackground = ({ scrollProgress }: SeasonalBackgroundProps) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Calculate opacity for each season for smooth transitions
  const getSeasonOpacity = (season: string) => {
    const ranges: Record<string, [number, number]> = {
      winter: [0, 0.25],
      spring: [0.25, 0.5],
      summer: [0.5, 0.75],
      autumn: [0.75, 1],
    };

    const [start, end] = ranges[season];
    const fadeBuffer = 0.06; // Overlap for smooth transition

    if (scrollProgress < start - fadeBuffer) return 0;
    if (scrollProgress > end + fadeBuffer) return 0;

    // Fade in
    if (scrollProgress < start) {
      return (scrollProgress - (start - fadeBuffer)) / fadeBuffer;
    }
    // Fade out
    if (scrollProgress > end) {
      return 1 - (scrollProgress - end) / fadeBuffer;
    }
    // Full opacity
    return 1;
  };

  return (
    <div className="fixed inset-0 -z-10">
      {/* ===== WINTER ===== */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: getSeasonOpacity('winter'),
          background: 'linear-gradient(180deg, hsl(210, 70%, 55%) 0%, hsl(205, 75%, 65%) 40%, hsl(200, 60%, 80%) 100%)',
        }}
      >
        <WinterLandscape />
        {!prefersReducedMotion && <Snowfall intensity={50} />}
      </div>

      {/* ===== SPRING ===== */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: getSeasonOpacity('spring'),
          background: 'linear-gradient(180deg, hsl(200, 80%, 70%) 0%, hsl(195, 75%, 75%) 40%, hsl(180, 50%, 85%) 100%)',
        }}
      >
        <SpringLandscape />
        {!prefersReducedMotion && <SpringPetals intensity={30} />}
      </div>

      {/* ===== SUMMER ===== */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: getSeasonOpacity('summer'),
          background: 'linear-gradient(180deg, hsl(200, 85%, 70%) 0%, hsl(195, 80%, 80%) 30%, hsl(50, 70%, 88%) 100%)',
        }}
      >
        <SummerLandscape />
      </div>

      {/* ===== AUTUMN ===== */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: getSeasonOpacity('autumn'),
          background: 'linear-gradient(180deg, hsl(200, 75%, 70%) 0%, hsl(195, 70%, 80%) 30%, hsl(45, 60%, 85%) 100%)',
        }}
      >
        <AutumnLandscape />
        {!prefersReducedMotion && <AutumnLeaves intensity={25} />}
      </div>
    </div>
  );
};

export default SeasonalBackground;
