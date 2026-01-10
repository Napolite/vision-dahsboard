import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Order from "./order";

import { FaBell, FaCss3Alt, FaShoppingCart } from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import { SiAdobexd } from "react-icons/si";

const notifications = [
  {
    title: "$2400, Design Changes this month",
    time: "22 Dec, 7:20 PM",
    icon: <FaBell color="blue" />,
  },
  {
    title: "New order #4219423",
    time: "21 Dec, 11:21 PM",
    icon: <FaShoppingCart />,
  },
  {
    title: "Server Payments for April",
    time: "21 Dec, 3:52 PM",
    icon: <FaCss3Alt />,
  },
  {
    title: "New Card added for order #3210145",
    time: "20 Dec, 3:52 PM",
    icon: <IoCard />,
  },
  {
    title: "Unlock packages for Development",
    time: "19 Dec, 11:35 PM",
    icon: <SiAdobexd />,
  },
  {
    title: "New Order #9851258",
    time: "18 Dec, 4:41 PM",
    icon: <FaShoppingCart />,
  },
];

function Orders() {
  return (
    <div className="text-[white] flex-1 flex flex-col justify-between py-[30px] px-[20.5px] w-[35%] h-full relative rounded-[20px] from-[#060b26] from-[0%] to-[#0A0E2371] to-[100%] bg-gradient-to-b py-[20px] px-[20px] backdrop-blur-lg">
      <div className="">
        <p className="text-[18px] text-[#ffffff] font-bold">orders Overview</p>
        <div className="flex gap-x-[5px] items-center">
          <p className="text-[14px] text-green-500">
            <IoIosCheckmarkCircle color="00ff0050" />
          </p>
          <p className="text-[14px] text-gray-500">+30% this month</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-[20px]">
        {notifications.map((notif) => (
          <Order order={notif} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
