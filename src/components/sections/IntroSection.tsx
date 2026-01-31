import { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface IntroSectionProps {
  onCTAClick: () => void;
}
const IntroSection = ({
  onCTAClick
}: IntroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center px-6">
      {/* Frost overlay for winter feel */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-winter-frost/30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Name */}
        <h1 className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold text-winter-deep mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Kushagra Kinra</h1>

        {/* Tagline */}
        <p className={`text-xl md:text-2xl lg:text-3xl text-winter-deep/80 font-light mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>A passionate developer, constantly learning and making mistakes and learning from them!</p>

        {/* CTA Button */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button onClick={onCTAClick} size="lg" className="bg-winter-deep hover:bg-winter-deep/90 text-winter-snow px-10 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            View My Work
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center text-winter-deep/60 animate-bounce">
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>;
};
export default IntroSection;