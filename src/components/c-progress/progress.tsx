function ProgressBar({
  width,
  progress,
}: {
  width: number;
  progress: number | string;
}) {
  return (
    <div className="h-[2px] bg-[#2D2E5F] rounded-lg" style={{ width: width }}>
      <div
        className="h-full bg-[#0075FF] rounded-lg"
        style={{ width: progress }}
      ></div>
    </div>
  );
}

export default ProgressBar;
