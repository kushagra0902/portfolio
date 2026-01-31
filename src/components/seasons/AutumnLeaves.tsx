import { useMemo } from 'react';

interface LeafProps {
  style: React.CSSProperties;
  color: string;
  variant: number;
}

const Leaf = ({ style, color, variant }: LeafProps) => {
  const leafPaths = [
    // Maple-like leaf
    "M10 0 Q15 8 12 15 Q10 20 10 25 Q10 20 8 15 Q5 8 10 0",
    // Oak-like leaf
    "M10 0 Q14 5 13 10 Q16 12 14 15 Q17 18 13 22 Q10 25 10 28 Q10 25 7 22 Q3 18 6 15 Q4 12 7 10 Q6 5 10 0",
    // Simple leaf
    "M10 0 Q18 10 15 20 Q10 28 10 30 Q10 28 5 20 Q2 10 10 0",
  ];

  return (
    <div
      className="absolute animate-leaf-fall"
      style={style}
    >
      <svg
        width="24"
        height="32"
        viewBox="0 0 20 30"
        fill={color}
        className="drop-shadow-sm"
      >
        <path d={leafPaths[variant % leafPaths.length]} />
        {/* Leaf vein */}
        <line x1="10" y1="2" x2="10" y2="25" stroke="hsl(25, 35%, 25%)" strokeWidth="0.5" opacity="0.3" />
      </svg>
    </div>
  );
};

interface AutumnLeavesProps {
  intensity?: number;
}

const AutumnLeaves = ({ intensity = 25 }: AutumnLeavesProps) => {
  const leaves = useMemo(() => {
    const colors = [
      'hsl(25, 85%, 55%)',   // Orange
      'hsl(35, 90%, 50%)',   // Amber
      'hsl(15, 70%, 45%)',   // Rust
      'hsl(42, 80%, 60%)',   // Gold
      'hsl(10, 75%, 40%)',   // Deep rust
      'hsl(45, 85%, 55%)',   // Yellow-gold
    ];

    return Array.from({ length: intensity }, (_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      variant: Math.floor(Math.random() * 3),
      style: {
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 8}s`,
        animationDelay: `${Math.random() * 12}s`,
        opacity: Math.random() * 0.4 + 0.6,
      },
    }));
  }, [intensity]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {leaves.map(({ id, style, color, variant }) => (
        <Leaf key={id} style={style} color={color} variant={variant} />
      ))}
    </div>
  );
};

export default AutumnLeaves;
