interface SummerLandscapeProps {
  className?: string;
}

const SummerLandscape = ({ className = '' }: SummerLandscapeProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Sun with rays */}
      <div className="absolute top-8 right-[15%] md:top-12 md:right-[20%]">
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute -inset-16 rounded-full bg-gradient-radial from-yellow-200/50 via-yellow-100/20 to-transparent animate-pulse" />
          {/* Sun body */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 shadow-[0_0_80px_20px_rgba(251,191,36,0.6)]">
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-300 to-transparent opacity-80" />
          </div>
          {/* Sun rays */}
          <svg className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)]" viewBox="0 0 200 200">
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={100 + Math.cos((i * 30 * Math.PI) / 180) * 90}
                y2={100 + Math.sin((i * 30 * Math.PI) / 180) * 90}
                stroke="rgba(251, 191, 36, 0.4)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Fluffy clouds */}
      <svg className="absolute top-[15%] left-[5%] w-36 h-24 opacity-95" viewBox="0 0 120 70">
        <ellipse cx="35" cy="45" rx="28" ry="18" fill="white" />
        <ellipse cx="65" cy="38" rx="35" ry="24" fill="white" />
        <ellipse cx="95" cy="48" rx="25" ry="16" fill="white" />
      </svg>
      <svg className="absolute top-[25%] left-[55%] w-28 h-18 opacity-90" viewBox="0 0 100 50">
        <ellipse cx="30" cy="30" rx="22" ry="14" fill="white" />
        <ellipse cx="55" cy="25" rx="28" ry="18" fill="white" />
        <ellipse cx="78" cy="32" rx="18" ry="12" fill="white" />
      </svg>

      {/* Landscape */}
      <svg
        className="absolute bottom-0 w-full h-[50%]"
        viewBox="0 0 1440 450"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        {/* Distant meadow */}
        <path
          d="M-50 450 Q200 350 500 380 Q800 320 1100 360 Q1350 330 1550 370 L1550 450 Z"
          fill="hsl(95, 50%, 50%)"
        />

        {/* Green trees on hills */}
        {[80, 200, 350, 550, 780, 1000, 1200, 1380].map((x, i) => (
          <g key={`summer-tree-${i}`}>
            <rect x={x + 10} y={320 + (i % 3) * 20} width={10} height={50} fill="hsl(25, 40%, 30%)" rx="2" />
            <circle cx={x + 15} cy={300 + (i % 3) * 20} r={30 + (i % 3) * 5} fill="hsl(120, 45%, 40%)" />
            <circle cx={x + 2} cy={315 + (i % 3) * 20} r={22 + (i % 2) * 5} fill="hsl(115, 50%, 45%)" />
            <circle cx={x + 28} cy={315 + (i % 3) * 20} r={24 + (i % 2) * 4} fill="hsl(125, 45%, 42%)" />
          </g>
        ))}

        {/* Front meadow */}
        <path
          d="M-50 450 Q300 400 650 415 Q1000 385 1300 410 Q1450 395 1550 420 L1550 450 Z"
          fill="hsl(100, 55%, 45%)"
        />

        {/* Wildflowers and grass */}
        {Array.from({ length: 40 }).map((_, i) => {
          const x = i * 38;
          const colors = ['hsl(50, 95%, 55%)', 'hsl(0, 75%, 60%)', 'hsl(280, 60%, 65%)', 'hsl(35, 90%, 55%)'];
          return (
            <g key={`wildflower-${i}`}>
              <circle cx={x + 10} cy={435 + Math.random() * 10} r={3 + Math.random() * 2} fill={colors[i % colors.length]} />
            </g>
          );
        })}

        {/* Butterflies (simple) */}
        <g className="animate-bounce" style={{ animationDuration: '3s' }}>
          <ellipse cx="300" cy="350" rx="8" ry="5" fill="hsl(45, 90%, 60%)" transform="rotate(-20 300 350)" />
          <ellipse cx="312" cy="350" rx="8" ry="5" fill="hsl(45, 90%, 60%)" transform="rotate(20 312 350)" />
          <ellipse cx="306" cy="350" rx="2" ry="6" fill="hsl(30, 60%, 30%)" />
        </g>
        <g className="animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <ellipse cx="1100" cy="320" rx="6" ry="4" fill="hsl(300, 70%, 70%)" transform="rotate(-25 1100 320)" />
          <ellipse cx="1110" cy="320" rx="6" ry="4" fill="hsl(300, 70%, 70%)" transform="rotate(25 1110 320)" />
          <ellipse cx="1105" cy="320" rx="1.5" ry="5" fill="hsl(0, 0%, 20%)" />
        </g>
      </svg>
    </div>
  );
};

export default SummerLandscape;
