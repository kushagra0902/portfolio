import { useMemo } from 'react';

interface PetalProps {
  style: React.CSSProperties;
  color: string;
}

const Petal = ({ style, color }: PetalProps) => (
  <div
    className="absolute animate-petal-drift"
    style={style}
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={color}
      className="drop-shadow-sm"
    >
      <ellipse cx="10" cy="10" rx="4" ry="8" />
    </svg>
  </div>
);

interface SpringPetalsProps {
  intensity?: number;
}

const SpringPetals = ({ intensity = 30 }: SpringPetalsProps) => {
  const petals = useMemo(() => {
    const colors = [
      'hsl(340, 60%, 85%)',
      'hsl(350, 80%, 92%)',
      'hsl(330, 50%, 88%)',
      'hsl(0, 60%, 90%)',
    ];

    return Array.from({ length: intensity }, (_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      style: {
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 12 + 10}s`,
        animationDelay: `${Math.random() * 15}s`,
        transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`,
        opacity: Math.random() * 0.5 + 0.5,
      },
    }));
  }, [intensity]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map(({ id, style, color }) => (
        <Petal key={id} style={style} color={color} />
      ))}
    </div>
  );
};

export default SpringPetals;
