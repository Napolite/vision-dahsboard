import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

function Orders() {
  return (
    <div className="text-[white] flex flex-col justify-between py-[30px] px-[20.5px] w-[35%] h-full relative rounded-[20px] from-[#060b26] from-[0%] to-[#0A0E2371] to-[100%] bg-gradient-to-b py-[20px] px-[20px] backdrop-blur-lg">
      <div className="">
        <p className="text-[18px] text-[#ffffff] font-bold">orders Overview</p>
        <div className="flex gap-x-[5px] items-center">
          <p className="text-[14px] text-green-500">
            <IoIosCheckmarkCircle color="00ff0050" />
          </p>
          <p className="text-[14px] text-gray-500">+30% this month</p>
        </div>
      </div>
    </div>
  );
}

export default Orders;
