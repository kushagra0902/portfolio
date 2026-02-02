import { useRef, useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'LIBR',
    description: 'A p2p distributed censorship resilient forum',
    tags: ['GoLang', 'libp2p', 'Computer Networks', 'Distributed Systems'],
    github: 'https://github.com/libr-forum/libr',
  },
  {
    id: 2,
    title: 'LightUp',
    description: 'A highly optimized content lookup system for windows',
    tags: ['CPP', 'BM25', 'Inverted Indexing'],
    github: 'https://github.com/1amKhush/DSA_project_spotlight',
  },
  {
    id: 3,
    title: 'Obscure',
    description: 'A smart gallery allowing natural language queries',
    tags: ['Python', 'Vector Databases', 'Deep Learning', 'Backend'],
    
  },
  
];

const ProjectsSection = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen py-24 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-spring-bark mb-4">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-spring-bark/70 max-w-2xl mx-auto">
            A collection of my recent work, from concept to deployment
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`glass-card p-8 transition-all duration-700 ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                background: 'hsla(0, 0%, 100%, 0.85)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Project Title */}
              <h3 className="font-display text-2xl font-semibold text-spring-bark mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-spring-bark/70 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-spring-leaf/20 text-spring-leaf border border-spring-leaf/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-spring-bark/30 text-spring-bark hover:bg-spring-bark/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
