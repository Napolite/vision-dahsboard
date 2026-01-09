import Circular from "../../c-progress/circular-bar";

function SatisfactionRate() {
  return (
    <div className="text-[white] flex flex-col items-center relative rounded-[20px] from-[#060b26] from-[0%] to-[#0a0e2349] to-[100%] bg-gradient-to-b py-[20px] px-[20px] w-[350px] backdrop-blur-lg h-[344px]">
      <div className="self-start">
        <div className="text-[#ffffff] text-[18px] font-bold">
          Satisfaction Rate
        </div>
        <p className="text-gray-400 text-[14px] mb-[30px]">From all projects</p>
      </div>
      <div>
        <Circular
          id={"satisfactionRate"}
          progress={0.75}
          size={212}
          fill1="#0075FF"
          fill2="#0075FF00"
        />
      </div>
      <div className="flex justify-between bg-[#060B28] px-[20px] py-[10px] w-[293px] h-[82px] items-start rounded-[20px] absolute bottom-[20px]">
        <p className="text-gray-400 text-[12px]">0%</p>
        <div className="flex-1 flex justify-center flex-col items-center">
          <p className="text-[#ffffff] text-[28px] font-bold">95%</p>
          <p className="text-gray-400 text-[12px]">Based on likes</p>
        </div>
        <p className="text-gray-400 text-[12px]">100%</p>
      </div>
    </div>
  );
}

export default SatisfactionRate;
