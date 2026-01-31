interface WinterLandscapeProps {
  className?: string;
}

const WinterLandscape = ({ className = '' }: WinterLandscapeProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Moon */}
      <div className="absolute top-16 right-[15%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-[0_0_60px_20px_rgba(255,255,255,0.5)]" />

      {/* Background Mountains */}
      <svg
        className="absolute bottom-0 w-full h-[60%]"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        {/* Far mountains - darker blue */}
        <path
          d="M-50 600 L200 200 L350 350 L500 150 L650 300 L800 100 L950 280 L1100 180 L1250 320 L1400 150 L1550 400 L1550 600 Z"
          fill="hsl(215, 50%, 45%)"
        />
        
        {/* Mid mountains - medium blue with snow caps */}
        <path
          d="M-50 600 L100 350 L250 450 L400 280 L550 400 L700 250 L850 380 L1000 300 L1150 420 L1300 280 L1450 450 L1550 350 L1550 600 Z"
          fill="hsl(210, 55%, 55%)"
        />
        {/* Snow caps on mid mountains */}
        <path
          d="M400 280 L450 320 L350 320 Z"
          fill="white"
          opacity="0.9"
        />
        <path
          d="M700 250 L760 300 L640 300 Z"
          fill="white"
          opacity="0.9"
        />
        <path
          d="M1000 300 L1060 350 L940 350 Z"
          fill="white"
          opacity="0.9"
        />
        <path
          d="M1300 280 L1360 330 L1240 330 Z"
          fill="white"
          opacity="0.9"
        />

        {/* Pine tree forest - dark green row */}
        <g fill="hsl(150, 40%, 25%)">
          {Array.from({ length: 20 }).map((_, i) => {
            const x = i * 80 - 40;
            const height = 80 + Math.random() * 40;
            const y = 450 - height * 0.3;
            return (
              <path
                key={`tree-dark-${i}`}
                d={`M${x} ${y + height} L${x + 25} ${y} L${x + 50} ${y + height} Z`}
              />
            );
          })}
        </g>

        {/* Pine tree forest - lighter green row in front */}
        <g fill="hsl(140, 45%, 35%)">
          {Array.from({ length: 25 }).map((_, i) => {
            const x = i * 65 - 20;
            const height = 70 + Math.random() * 35;
            const y = 480 - height * 0.2;
            return (
              <path
                key={`tree-light-${i}`}
                d={`M${x} ${y + height} L${x + 20} ${y} L${x + 40} ${y + height} Z`}
              />
            );
          })}
        </g>

        {/* Snow-covered trees in front */}
        <g>
          {Array.from({ length: 15 }).map((_, i) => {
            const x = i * 100 + 30;
            const height = 60 + Math.random() * 30;
            const y = 510;
            return (
              <g key={`snow-tree-${i}`}>
                {/* Tree body */}
                <path
                  d={`M${x} ${y + height} L${x + 15} ${y} L${x + 30} ${y + height} Z`}
                  fill="hsl(140, 45%, 35%)"
                />
                {/* Snow on tree */}
                <path
                  d={`M${x + 5} ${y + height * 0.3} L${x + 15} ${y} L${x + 25} ${y + height * 0.3} L${x + 20} ${y + height * 0.4} L${x + 10} ${y + height * 0.4} Z`}
                  fill="white"
                  opacity="0.95"
                />
              </g>
            );
          })}
        </g>

        {/* Snowy ground */}
        <ellipse cx="720" cy="650" rx="900" ry="180" fill="white" />
        
        {/* Snow hills */}
        <ellipse cx="200" cy="620" rx="300" ry="80" fill="hsl(200, 30%, 95%)" />
        <ellipse cx="900" cy="610" rx="400" ry="90" fill="hsl(200, 25%, 97%)" />
        <ellipse cx="1300" cy="630" rx="250" ry="70" fill="hsl(200, 30%, 95%)" />
      </svg>

      {/* Snowman */}
      <div className="absolute bottom-[15%] right-[12%] md:right-[18%]">
        <svg width="60" height="80" viewBox="0 0 60 80">
          {/* Body */}
          <circle cx="30" cy="65" r="15" fill="white" stroke="hsl(200, 20%, 85%)" strokeWidth="1" />
          <circle cx="30" cy="42" r="12" fill="white" stroke="hsl(200, 20%, 85%)" strokeWidth="1" />
          <circle cx="30" cy="22" r="10" fill="white" stroke="hsl(200, 20%, 85%)" strokeWidth="1" />
          {/* Hat */}
          <rect x="22" y="8" width="16" height="12" fill="hsl(0, 0%, 15%)" rx="1" />
          <rect x="18" y="18" width="24" height="4" fill="hsl(0, 0%, 15%)" rx="1" />
          {/* Eyes */}
          <circle cx="26" cy="20" r="2" fill="hsl(0, 0%, 15%)" />
          <circle cx="34" cy="20" r="2" fill="hsl(0, 0%, 15%)" />
          {/* Nose */}
          <path d="M30 24 L38 26 L30 28 Z" fill="hsl(25, 90%, 55%)" />
          {/* Buttons */}
          <circle cx="30" cy="38" r="2" fill="hsl(0, 0%, 15%)" />
          <circle cx="30" cy="46" r="2" fill="hsl(0, 0%, 15%)" />
          {/* Scarf */}
          <path d="M20 30 Q30 35 40 30" stroke="hsl(0, 70%, 50%)" strokeWidth="3" fill="none" />
          <path d="M38 30 L42 45 L38 45 L35 32" fill="hsl(0, 70%, 50%)" />
        </svg>
      </div>
    </div>
  );
};

export default WinterLandscape;
