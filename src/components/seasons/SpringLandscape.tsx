interface SpringLandscapeProps {
  className?: string;
}

const SpringLandscape = ({ className = '' }: SpringLandscapeProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Clouds */}
      <svg className="absolute top-10 left-[10%] w-32 h-20 opacity-90" viewBox="0 0 100 60">
        <ellipse cx="30" cy="35" rx="25" ry="15" fill="white" />
        <ellipse cx="55" cy="30" rx="30" ry="20" fill="white" />
        <ellipse cx="75" cy="38" rx="20" ry="12" fill="white" />
      </svg>
      <svg className="absolute top-20 right-[20%] w-40 h-24 opacity-85" viewBox="0 0 100 60">
        <ellipse cx="25" cy="35" rx="20" ry="12" fill="white" />
        <ellipse cx="50" cy="28" rx="28" ry="18" fill="white" />
        <ellipse cx="78" cy="35" rx="22" ry="14" fill="white" />
      </svg>

      {/* Landscape */}
      <svg
        className="absolute bottom-0 w-full h-[55%]"
        viewBox="0 0 1440 500"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        {/* Far hills */}
        <path
          d="M-50 500 Q200 300 400 380 Q600 280 800 350 Q1000 250 1200 330 Q1400 280 1550 350 L1550 500 Z"
          fill="hsl(120, 35%, 55%)"
        />

        {/* Mid hills with trees */}
        <path
          d="M-50 500 Q150 380 350 420 Q550 350 750 400 Q950 320 1150 380 Q1350 330 1550 400 L1550 500 Z"
          fill="hsl(130, 40%, 50%)"
        />

        {/* Flowering trees on hills */}
        {[100, 280, 500, 720, 950, 1150, 1350].map((x, i) => (
          <g key={`spring-tree-${i}`}>
            {/* Trunk */}
            <rect x={x + 12} y={350 + (i % 3) * 15} width={8} height={40} fill="hsl(25, 35%, 35%)" rx="2" />
            {/* Foliage with blossoms */}
            <circle cx={x + 16} cy={335 + (i % 3) * 15} r={25 + (i % 2) * 8} fill="hsl(340, 60%, 82%)" />
            <circle cx={x + 5} cy={345 + (i % 3) * 15} r={18 + (i % 2) * 5} fill="hsl(350, 65%, 85%)" />
            <circle cx={x + 28} cy={345 + (i % 3) * 15} r={20 + (i % 2) * 6} fill="hsl(345, 55%, 80%)" />
          </g>
        ))}

        {/* Front grass hill */}
        <path
          d="M-50 500 Q300 440 600 460 Q900 420 1200 450 Q1400 430 1550 460 L1550 500 Z"
          fill="hsl(115, 45%, 45%)"
        />

        {/* Grass tufts */}
        {Array.from({ length: 30 }).map((_, i) => {
          const x = i * 50 + Math.random() * 20;
          return (
            <g key={`grass-${i}`}>
              <path
                d={`M${x} 480 Q${x + 3} 465 ${x + 5} 470 Q${x + 7} 460 ${x + 10} 480`}
                stroke="hsl(120, 50%, 35%)"
                strokeWidth="2"
                fill="none"
              />
            </g>
          );
        })}

        {/* Small flowers */}
        {Array.from({ length: 20 }).map((_, i) => {
          const x = i * 75 + 20;
          const y = 470 + Math.random() * 15;
          const colors = ['hsl(50, 90%, 60%)', 'hsl(300, 60%, 70%)', 'hsl(0, 70%, 65%)', 'hsl(200, 70%, 60%)'];
          return (
            <circle
              key={`flower-${i}`}
              cx={x}
              cy={y}
              r={4}
              fill={colors[i % colors.length]}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default SpringLandscape;
