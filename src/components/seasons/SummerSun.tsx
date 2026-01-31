interface SummerSunProps {
  className?: string;
}

const SummerSun = ({ className = '' }: SummerSunProps) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {/* Outer glow layers */}
      <div className="absolute -inset-32 rounded-full bg-gradient-radial from-summer-glow/40 via-summer-warmth/20 to-transparent animate-sun-pulse" />
      <div className="absolute -inset-20 rounded-full bg-gradient-radial from-summer-gold/50 via-summer-sun/30 to-transparent animate-sun-pulse delay-500" />
      
      {/* Sun core */}
      <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-summer-sun via-summer-gold to-summer-warmth shadow-[0_0_60px_20px_hsl(45,95%,60%,0.5)]">
        {/* Inner highlight */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/60 via-summer-warmth/40 to-transparent" />
      </div>

      {/* Sun rays */}
      <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 h-1 bg-gradient-to-r from-summer-sun/60 to-transparent origin-left"
            style={{
              width: `${80 + Math.random() * 40}px`,
              transform: `rotate(${i * 30}deg)`,
              opacity: 0.6 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SummerSun;
