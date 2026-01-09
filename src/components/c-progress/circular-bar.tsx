function Circular({ progress = 0.85 }) {
  const radius = 185;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference * (1 - progress);

  return (
    <div className="w-[400px] h-[400px] flex items-center justify-center relative">
      <svg width="400" height="400" className="absolute">
        <defs>
          <linearGradient id="linearg">
            <stop offset="0%" stopColor="darkorange" />
            <stop offset="100%" stopColor="yellow" />
          </linearGradient>
        </defs>

        <circle
          cx="200"
          cy="200"
          r={radius}
          fill="none"
          stroke="url(#linearg)"
          strokeWidth="30"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(90 200 200)"
          className="transition-all duration-700 ease-out"
        />
      </svg>
    </div>
  );
}

export default Circular;
