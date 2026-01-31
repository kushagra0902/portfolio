import { useRef, useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern, scalable e-commerce solution with real-time inventory management and seamless payment integration.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'An intelligent content generation tool powered by GPT-4, helping creators produce high-quality articles effortlessly.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'Redis'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Real-Time Analytics Dashboard',
    description: 'A comprehensive analytics platform with live data visualization and custom reporting capabilities.',
    tags: ['TypeScript', 'D3.js', 'WebSocket', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking application with personalized workout plans and progress monitoring.',
    tags: ['React Native', 'Firebase', 'TensorFlow'],
    github: '#',
    demo: '#',
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
                <Button
                  size="sm"
                  className="bg-spring-leaf hover:bg-spring-leaf/90 text-white"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
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
