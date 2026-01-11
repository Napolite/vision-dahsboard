import "./ui.css";
import { FaArrowRightLong } from "react-icons/fa6";
function UserDetail() {
  return (
    <div className="h-[344px] w-full this-bg-thing rounded-[20px]">
      <div className="flex flex-col justify-between h-full w-full p-[20px] from-[#060b26] from-[0%] to-[#1a1f3710] to-[100%] bg-gradient-to-r ">
        <div className="flex flex-col gap-[10px]">
          <div className="text-gray-400 text-[14px]">Welcome back,</div>
          <div className="text-[28px] font-bold text-[#ffffff]">
            Mark Johnson
          </div>
          <div>
            <div className="text-gray-400 text-[16px]">
              Glad to see you again!
            </div>
            <div className="text-gray-400 text-[16px]">Ask me anything</div>
          </div>
        </div>
        <div className="flex gap-x-[10px] items-center">
          <p className="text-[#ffffff]">Tap to record</p>
          <FaArrowRightLong color={"#ffffff"} />
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
