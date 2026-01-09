function Tablet({
  header,
  amount,
  icon,
  percentage,
}: {
  header: string;
  icon: string | any;
  amount: string;
  percentage: string;
}) {
  return (
    <div className="flex justify-between w-full items-center px-[20px] py-[20px] rounded-[20px] from-[#060b2674] from-[0%] to-[#060b2674] to-[100%] bg-gradient-to-r backdrop-blur-lg">
      <div>
        <p className="text-[#A0AEC0] text-[12px]">{header}</p>
        <div className="flex items-baseline">
          <p className="text-[18px] text-[#ffffff]">{amount}</p>
          <p className="text-green-500 text-[14px]">{percentage}</p>
        </div>
      </div>
      <div
        className={`h-[45px] w-[45px] bg-[#0075FF] flex items-center justify-center rounded-[10px] `}
      >
        {icon}
      </div>
    </div>
  );
}

export default Tablet;
