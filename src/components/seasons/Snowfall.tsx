import { useMemo } from 'react';

interface SnowflakeProps {
  style: React.CSSProperties;
}

const Snowflake = ({ style }: SnowflakeProps) => (
  <div
    className="absolute rounded-full bg-white opacity-80 animate-snowfall"
    style={style}
  />
);

interface SnowfallProps {
  intensity?: number;
}

const Snowfall = ({ intensity = 50 }: SnowfallProps) => {
  const snowflakes = useMemo(() => {
    return Array.from({ length: intensity }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 6 + 2}px`,
        height: `${Math.random() * 6 + 2}px`,
        animationDuration: `${Math.random() * 8 + 6}s`,
        animationDelay: `${Math.random() * 10}s`,
        filter: `blur(${Math.random() * 1}px)`,
      },
    }));
  }, [intensity]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {snowflakes.map(({ id, style }) => (
        <Snowflake key={id} style={style} />
      ))}
    </div>
  );
};

export default Snowfall;
