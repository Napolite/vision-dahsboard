import { BsPersonFill } from "react-icons/bs";

import { IoMdSettings } from "react-icons/io";
import { FaBell, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-between w-full px-[30px] mt-[5px]">
      <div>
        <div className="text-[12px] flex items-center gap-x-[2px]">
          <p className="text-[#A0AEC0]">Pages</p>
          <p className="text-[#ffffff]">/ Dashboard</p>
        </div>
        <p className="text-white">Dashboard</p>
      </div>
      <div className="flex gap-[20px] justify-between items-center">
        <div className="w-[199px] h-[39.5px] border-[1px] border-solid border-[#e2e8f030] rounded-[15px] flex items-center justify-between">
          <div className="w-[17%] h-full flex items-center justify-center">
            <FaSearch color="grey" size={15} />
          </div>
          <input
            className="w-[83%] placeholder:text-[grey]/40"
            placeholder="Type here"
          />
        </div>
        <div className="text-[grey]/40 flex gap-x-[10px]">
          <BsPersonFill color={"rgba(128,128,128,40)"} />
          <p>sign in</p>
        </div>
        <IoMdSettings color={"rgba(128,128,128,40)"} />
        <FaBell color={"rgba(128,128,128,40)"} />
      </div>
    </div>
  );
}

export default Navbar;
