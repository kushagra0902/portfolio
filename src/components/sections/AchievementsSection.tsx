import { useRef, useEffect, useState } from 'react';
import { Award, Trophy, Star, Medal } from 'lucide-react';
const achievements = [{
  id: 1,
  year: '2025',
  title: 'Inter IIT Tech Meet 14.0 Winner',
  description: 'Achieved Gold Gedal in problem statement by Arista Networks.',
  icon: Award
}, ];
const AchievementsSection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const index = Number(entry.target.getAttribute('data-index'));
        if (entry.isIntersecting) {
          setVisibleItems(prev => new Set([...prev, index]));
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    });
    itemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);
  return <section className="relative min-h-screen py-24 lg:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-green-900 lg:text-7xl">
            Achievements
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-lime-900">
            Milestones and recognitions along the journey
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-summer-sun via-summer-gold to-summer-grass/50" />

          {/* Achievement Items */}
          <div className="space-y-12">
            {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isEven = index % 2 === 0;
            return <div key={achievement.id} ref={el => itemRefs.current[index] = el} data-index={index} className={`relative flex items-center transition-all duration-700 ${visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
              transitionDelay: `${index * 150}ms`
            }}>
                  {/* Timeline node */}
                  <div className={`absolute left-8 md:left-1/2 w-12 h-12 -translate-x-1/2 rounded-full bg-gradient-to-br from-summer-sun to-summer-gold flex items-center justify-center shadow-lg z-10`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="p-6 rounded-xl transition-transform hover:scale-[1.02]" style={{
                  background: 'hsla(0, 0%, 100%, 0.9)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 4px 20px -4px hsla(45, 95%, 40%, 0.15)'
                }}>
                      <span className="inline-block px-3 py-1 mb-3 text-sm font-semibold rounded-full bg-summer-sun/20 text-summer-grass">
                        {achievement.year}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-summer-grass mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-summer-grass/70 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default AchievementsSection;