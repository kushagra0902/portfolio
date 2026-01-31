interface AutumnLandscapeProps {
  className?: string;
}

const AutumnLandscape = ({ className = '' }: AutumnLandscapeProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Clouds */}
      <svg className="absolute top-8 left-[8%] w-40 h-24 opacity-95" viewBox="0 0 120 70">
        <ellipse cx="35" cy="42" rx="28" ry="18" fill="white" />
        <ellipse cx="65" cy="35" rx="35" ry="24" fill="white" />
        <ellipse cx="98" cy="45" rx="22" ry="15" fill="white" />
      </svg>
      <svg className="absolute top-16 right-[25%] w-32 h-20 opacity-90" viewBox="0 0 100 55">
        <ellipse cx="28" cy="32" rx="22" ry="14" fill="white" />
        <ellipse cx="55" cy="28" rx="28" ry="18" fill="white" />
        <ellipse cx="80" cy="35" rx="18" ry="12" fill="white" />
      </svg>
      <svg className="absolute top-24 left-[45%] w-28 h-18 opacity-85" viewBox="0 0 90 45">
        <ellipse cx="25" cy="25" rx="20" ry="12" fill="white" />
        <ellipse cx="50" cy="22" rx="25" ry="16" fill="white" />
        <ellipse cx="72" cy="28" rx="16" ry="10" fill="white" />
      </svg>

      {/* Landscape */}
      <svg
        className="absolute bottom-0 w-full h-[55%]"
        viewBox="0 0 1440 500"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        {/* Distant orange forest */}
        <path
          d="M-50 500 Q200 380 450 410 Q700 360 950 400 Q1200 350 1450 390 L1550 500 Z"
          fill="hsl(30, 60%, 55%)"
        />

        {/* Background autumn trees */}
        {[50, 150, 280, 420, 580, 750, 920, 1080, 1240, 1380].map((x, i) => {
          const treeColors = [
            'hsl(25, 85%, 50%)',  // Orange
            'hsl(35, 90%, 55%)',  // Amber
            'hsl(15, 75%, 45%)',  // Rust
            'hsl(45, 85%, 50%)',  // Gold
            'hsl(5, 70%, 40%)',   // Deep red
          ];
          return (
            <g key={`bg-tree-${i}`}>
              <rect x={x + 8} y={350 + (i % 3) * 10} width={6} height={35} fill="hsl(20, 30%, 25%)" rx="1" />
              <circle cx={x + 11} cy={335 + (i % 3) * 10} r={20 + (i % 4) * 3} fill={treeColors[i % treeColors.length]} />
            </g>
          );
        })}

        {/* Mid ground - green and orange mixed hills */}
        <path
          d="M-50 500 Q250 420 500 450 Q750 400 1000 440 Q1250 410 1550 450 L1550 500 Z"
          fill="hsl(85, 45%, 50%)"
        />

        {/* Foreground autumn trees - larger */}
        {[120, 350, 650, 900, 1150, 1350].map((x, i) => {
          const treeColors = [
            'hsl(25, 85%, 55%)',  // Orange
            'hsl(40, 90%, 50%)',  // Golden
            'hsl(15, 80%, 50%)',  // Rust-orange
            'hsl(8, 75%, 45%)',   // Red-rust
            'hsl(35, 85%, 55%)',  // Amber
            'hsl(20, 80%, 48%)',  // Deep orange
          ];
          const height = 60 + (i % 3) * 15;
          return (
            <g key={`fg-tree-${i}`}>
              {/* Trunk */}
              <rect x={x + 12} y={420 - height * 0.4} width={12} height={height} fill="hsl(20, 35%, 28%)" rx="2" />
              {/* Foliage clusters */}
              <circle cx={x + 18} cy={400 - height * 0.5} r={35 + (i % 3) * 8} fill={treeColors[i]} />
              <circle cx={x - 5} cy={415 - height * 0.4} r={28 + (i % 2) * 6} fill={treeColors[(i + 1) % treeColors.length]} opacity="0.9" />
              <circle cx={x + 40} cy={415 - height * 0.4} r={30 + (i % 2) * 5} fill={treeColors[(i + 2) % treeColors.length]} opacity="0.9" />
              {/* Highlight */}
              <circle cx={x + 10} cy={390 - height * 0.5} r={15} fill="hsl(45, 95%, 65%)" opacity="0.5" />
            </g>
          );
        })}

        {/* Front grass with fallen leaves */}
        <path
          d="M-50 500 Q400 475 800 485 Q1100 470 1400 480 L1550 500 Z"
          fill="hsl(95, 40%, 48%)"
        />

        {/* Fallen leaves on ground */}
        {Array.from({ length: 50 }).map((_, i) => {
          const x = i * 30 + Math.random() * 15;
          const y = 485 + Math.random() * 12;
          const colors = [
            'hsl(25, 85%, 55%)',
            'hsl(35, 90%, 50%)',
            'hsl(15, 75%, 45%)',
            'hsl(45, 85%, 55%)',
            'hsl(5, 70%, 40%)',
          ];
          const rotation = Math.random() * 360;
          return (
            <ellipse
              key={`fallen-leaf-${i}`}
              cx={x}
              cy={y}
              rx={5 + Math.random() * 3}
              ry={3 + Math.random() * 2}
              fill={colors[i % colors.length]}
              transform={`rotate(${rotation} ${x} ${y})`}
              opacity={0.8 + Math.random() * 0.2}
            />
          );
        })}

        {/* Grass tufts */}
        {Array.from({ length: 25 }).map((_, i) => {
          const x = i * 60;
          return (
            <path
              key={`autumn-grass-${i}`}
              d={`M${x} 492 Q${x + 4} 480 ${x + 6} 485 Q${x + 10} 475 ${x + 14} 492`}
              stroke="hsl(90, 35%, 40%)"
              strokeWidth="2"
              fill="none"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default AutumnLandscape;
