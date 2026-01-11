import { FaWallet } from "react-icons/fa";
import BarChartExample from "./barchart";
import ProgressBar from "../../c-progress/progress";
import { FaRocket, FaShoppingCart, FaWrench } from "react-icons/fa";

const stats = [
  {
    header: "Users",
    amount: 32984,
    percent: "50%",
    icon: <FaWallet color={"#ffffff"} size={8} />,
  },
  {
    header: "Clicks",
    amount: "2,42m",
    percent: "100%",
    icon: <FaRocket color={"#ffffff"} size={8} />,
  }, // 2.42m → 2420000
  {
    header: "Sales",
    amount: 2400,
    percent: "30%",
    icon: <FaShoppingCart color={"#ffffff"} size={8} />,
  },
  {
    header: "Items",
    amount: 320,
    percent: "60%",
    icon: <FaWrench color={"#ffffff"} size={8} />,
  },
];

function ActiveUsers() {
  return (
    <div className="text-[white] flex flex-col justify-between py-[30px] px-[20.5px] w-full h-[445px] relative rounded-[20px] from-[#060b26] from-[0%] to-[#0A0E2371] to-[100%] bg-gradient-to-br py-[20px] px-[20px] backdrop-blur-lg">
      <div className="w-full h-[222px] bg-[#060c29] rounded-[20px] py-[10px]">
        <BarChartExample />
      </div>
      <div>
        <div className="">
          <p className="text-[18px] text-[#ffffff] font-bold">Active users</p>
          <div className="flex gap-x-[5px]">
            <p className="text-[14px] text-green-500">(+23%)</p>
            <p className="text-[14px] text-gray-500">more than last week</p>
          </div>
        </div>
        <div className="grid grid-cols-4 max-w-full justify-between mt-[20px] gap-x-[8px]">
          {stats?.map((stat) => (
            <div className="flex flex-col gap-y-[8px]">
              <div className="flex space-x-[10px] items-center">
                <div
                  className={`h-[25px] w-[25px] bg-[#0075FF] flex items-center justify-center rounded-[5px] `}
                >
                  {stat?.icon}
                </div>
                <p className="text-gray-400 text-[0.729vw]">{stat?.header}</p>
              </div>
              <div className="text-[0.938vw] font-bold text-[#ffffff]">
                {stat?.amount}
              </div>
              <ProgressBar width={"5.234vw"} progress={stat?.percent} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActiveUsers;
