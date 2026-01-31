import { useEffect, useState, useRef } from 'react';
import Snowfall from './Snowfall';
import SpringPetals from './SpringPetals';
import SummerSun from './SummerSun';
import AutumnLeaves from './AutumnLeaves';

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

  // Calculate which season we're in based on scroll progress
  // 0-0.25: Winter, 0.25-0.5: Spring, 0.5-0.75: Summer, 0.75-1: Autumn
  const getSeason = () => {
    if (scrollProgress < 0.25) return 'winter';
    if (scrollProgress < 0.5) return 'spring';
    if (scrollProgress < 0.75) return 'summer';
    return 'autumn';
  };

  // Calculate opacity for each season for smooth transitions
  const getSeasonOpacity = (season: string) => {
    const ranges: Record<string, [number, number]> = {
      winter: [0, 0.25],
      spring: [0.25, 0.5],
      summer: [0.5, 0.75],
      autumn: [0.75, 1],
    };

    const [start, end] = ranges[season];
    const fadeBuffer = 0.08; // Overlap for smooth transition

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

  const intensity = prefersReducedMotion ? 0 : undefined;

  return (
    <div className="fixed inset-0 -z-10">
      {/* Winter Background */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: getSeasonOpacity('winter'),
          background: 'linear-gradient(180deg, hsl(210 60% 92%) 0%, hsl(205 70% 85%) 40%, hsl(200 40% 96%) 100%)',
        }}
      >
        {/* Winter mist layers */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white/30 to-transparent" />
        {!prefersReducedMotion && <Snowfall intensity={intensity ?? 40} />}
      </div>

      {/* Spring Background */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: getSeasonOpacity('spring'),
          background: 'linear-gradient(180deg, hsl(195 80% 85%) 0%, hsl(150 45% 75%) 50%, hsl(120 35% 80%) 100%)',
        }}
      >
        {/* Rolling hills */}
        <div className="absolute inset-x-0 bottom-0 h-2/5">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
            <path
              fill="hsl(120, 35%, 65%)"
              d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
            <path
              fill="hsl(140, 45%, 55%)"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        {!prefersReducedMotion && <SpringPetals intensity={intensity ?? 25} />}
      </div>

      {/* Summer Background */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: getSeasonOpacity('summer'),
          background: 'linear-gradient(180deg, hsl(200 85% 80%) 0%, hsl(55 90% 85%) 40%, hsl(100 50% 70%) 100%)',
        }}
      >
        {/* Sun positioned in corner */}
        <SummerSun className="top-10 right-10 lg:top-16 lg:right-16" />
        {/* Meadow gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-summer-grass/40 to-transparent" />
      </div>

      {/* Autumn Background */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: getSeasonOpacity('autumn'),
          background: 'linear-gradient(180deg, hsl(35 60% 80%) 0%, hsl(25 70% 65%) 50%, hsl(15 60% 45%) 100%)',
        }}
      >
        {/* Autumn hills */}
        <div className="absolute inset-x-0 bottom-0 h-2/5">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
            <path
              fill="hsl(25, 35%, 35%)"
              d="M0,192L60,197.3C120,203,240,213,360,202.7C480,192,600,160,720,165.3C840,171,960,213,1080,213.3C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>
        {!prefersReducedMotion && <AutumnLeaves intensity={intensity ?? 20} />}
      </div>

      {/* Global overlay for content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5" />
    </div>
  );
};

export default SeasonalBackground;
