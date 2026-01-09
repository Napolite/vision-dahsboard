import StackedAreaChart from "./graph";

function SalesOverview() {
  return (
    <div className="text-[white] flex flex-col justify-between py-[30px] px-[20.5px] w-[924px] h-[445px] relative rounded-[20px] from-[#060b26] from-[0%] to-[#0A0E2371] to-[100%] bg-gradient-to-b py-[20px] px-[20px] backdrop-blur-lg">
      <div className="">
        <p className="text-[18px] text-[#ffffff] font-bold">Sales Overview</p>
        <div className="flex gap-x-[5px]">
          <p className="text-[14px] text-green-500">(+5%) more</p>
          <p className="text-[14px] text-gray-500">in 2021</p>
        </div>
      </div>
      <div>
        <StackedAreaChart />
      </div>
    </div>
  );
}

export default SalesOverview;
