import { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { AiFillTool } from "react-icons/ai";
function SideBar() {
  const [selected, setSelected] = useState("dash");
  return (
    <div className="from-[#060b26] from-[0%] to-[#1a1f37] to-[100%] bg-gradient-to-r max-h-[100vh] w-[264px] rounded-t-[30px] text-white flex flex-col items-center ml-[5px] mt-[5px]">
      <div className="h-[50px] mb-[70px] text-center flex place-items-center w-full justify-center">
        Vision UI Free
      </div>
      <div
        className="w-full px-[16px] flex flex-col gap-y-[20px]"
        style={{ padding: "0 16px" }}
      >
        <div
          className={`flex gap-x-[20px] w-[219.5px]  px-[15px] items-center h-[54px] rounded-[10px] ${
            selected === "dash" ? "bg-[#1a1f37]" : "bg-none"
          }`}
          onClick={() => setSelected("dash")}
        >
          <div
            className={`h-[32px] w-[32px] ${
              selected === "dash" ? "bg-[#0075FF]" : "bg-[#1a1f37]"
            } flex items-center justify-center rounded-[10px] `}
          >
            <IoHomeSharp
              color={selected === "dash" ? "#ffffff" : "#0075FF"}
              size={15}
            />
          </div>
          <p>Dashboard</p>
        </div>
        <div
          className={`flex gap-x-[20px] w-[219.5px]  px-[15px] items-center h-[54px] rounded-[10px] ${
            selected === "tab" ? "bg-[#1a1f37]" : "bg-none"
          }`}
          onClick={() => setSelected("tab")}
        >
          <div
            className={`h-[32px] w-[32px] ${
              selected === "tab" ? "bg-[#0075FF]" : "bg-[#1a1f37]"
            } flex items-center justify-center rounded-[10px] `}
          >
            <IoStatsChart
              color={selected === "tab" ? "#ffffff" : "#0075FF"}
              size={15}
            />
          </div>
          <p>Tables</p>
        </div>
        <div
          className={`flex gap-x-[20px] w-[219.5px]  px-[15px] items-center h-[54px] rounded-[10px] ${
            selected === "bill" ? "bg-[#1a1f37]" : "bg-none"
          }`}
          onClick={() => setSelected("bill")}
        >
          <div
            className={`h-[32px] w-[32px] ${
              selected === "bill" ? "bg-[#0075FF]" : "bg-[#1a1f37]"
            } flex items-center justify-center rounded-[10px] `}
          >
            <FaWallet
              color={selected === "bill" ? "#ffffff" : "#0075FF"}
              size={15}
            />
          </div>
          <p>Billing</p>
        </div>
        <div
          className={`flex gap-x-[20px] w-[219.5px]  px-[15px] items-center h-[54px] rounded-[10px] ${
            selected === "rtl" ? "bg-[#1a1f37]" : "bg-none"
          }`}
          onClick={() => setSelected("rtl")}
        >
          <div
            className={`h-[32px] w-[32px] ${
              selected === "rtl" ? "bg-[#0075FF]" : "bg-[#1a1f37]"
            } flex items-center justify-center rounded-[10px] `}
          >
            <AiFillTool
              color={selected === "rtl" ? "#ffffff" : "#0075FF"}
              size={15}
            />
          </div>
          <p>RTL</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
