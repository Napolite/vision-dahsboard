function Circular({
  size = 240,
  progress = 0.6,
  strokeWidth = 20,
  fill1,
  fill2,
  children = <></>,
  id,
  track = true,
}: {
  size: number;
  progress: number;
  strokeWidth?: number;
  fill1: string;
  fill2: string;
  children?: any;
  id: string;
  track?: boolean;
}) {
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute"
      >
        <defs>
          <linearGradient id={id}>
            <stop offset="0%" stopColor={fill1} />
            <stop offset="100%" stopColor={fill2} />
          </linearGradient>
        </defs>

        {/* Track */}
        {track && (
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#3f3f46"
            strokeWidth={strokeWidth}
          />
        )}

        {/* Progress */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(90 ${center} ${center})`}
          className="transition-all duration-700 ease-out"
        />
      </svg>

      {/* children */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {children}
      </div>
    </div>
  );
}

export default Circular;
