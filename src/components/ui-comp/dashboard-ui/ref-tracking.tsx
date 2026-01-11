import Circular from "../../c-progress/circular-bar";
import { GoKebabHorizontal } from "react-icons/go";

function Reftracking() {
  return (
    <div className="text-[white] flex flex-col items-center relative rounded-[20px] from-[#060b26] from-[0%] to-[#0a0e2349] to-[100%] bg-gradient-to-b py-[20px] px-[20px] w-full h-[344px] backdrop-blur-lg">
      <div className="flex w-full justify-between mb-[40px]">
        <p className="text-[18px] text-[#ffffff] font-bold">
          Referrral Tracking
        </p>
        <div className="w-[37px] h-[37px] flex items-center justify-center rounded-lg bg-[#0000ff20] p-0">
          <GoKebabHorizontal color="purple/400" size={16} />
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col h-full justify-between">
          <div className="w-[217px] h-[93px] bg-[#060c29] rounded-lg flex flex-col px-[20px] justify-center space-y-[5px]">
            <p className="text-[14px] text-gray-400">Invited </p>
            <p className="text-[#ffffff] font-bold text-[18px]">145 people</p>
          </div>
          <div className="w-[217px] h-[93px] bg-[#060c29] rounded-lg flex flex-col px-[20px] justify-center space-y-[5px]">
            <p className="text-[14px] text-gray-400">Bonus</p>
            <p className="text-[#ffffff] font-bold text-[18px]">1,465</p>
          </div>
        </div>
        <div>
          <Circular
            id="refTrack"
            size={206}
            fill1="#05CD99"
            fill2="#05CD9900"
            progress={0.63}
            strokeWidth={10}
            track={false}
          >
            <div className="flex flex-col items-center space-y-[10px]">
              <p className="text-[14px] text-gray-400">Safety</p>
              <p className="text-[50px] text-[#ffffff] font-bold">9.3</p>
              <p className="text-[14px] text-gray-400">Total Score</p>
            </div>
          </Circular>
        </div>
      </div>
    </div>
  );
}

export default Reftracking;
