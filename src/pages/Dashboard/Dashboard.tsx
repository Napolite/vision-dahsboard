import Tablet from "../../components/ui-comp/dashboard-ui/tab";
import { FaWallet, FaUsers, FaUserPlus, FaShoppingCart } from "react-icons/fa";
import UserInfo from "./userInfo";
import Charts from "./charts";
import Tables from "./tables";

export const stats = [
  {
    header: "Today's Money",
    amount: "$53,000",
    percent: "+55%",
    icon: <FaWallet color={"#ffffff"} size={18} />,
  },
  {
    header: "Today's Users",
    amount: "2,300",
    percent: "+5%",
    icon: <FaUsers color={"#ffffff"} size={18} />,
  },
  {
    header: "New Clients",
    amount: "3,052",
    percent: "+14%",
    icon: <FaUserPlus color={"#ffffff"} size={18} />,
  },
  {
    header: "Today's Sales",
    amount: "$173,000",
    percent: "+8%",
    icon: <FaShoppingCart color={"#ffffff"} size={18} />,
  },
];

function Dashboard() {
  return (
    <div className="pt-[30px] px-[30px]">
      <div className="grid grid-cols-4 w-full gap-x-[24px]">
        {stats.map((stat) => (
          <Tablet
            header={stat?.header}
            icon={stat?.icon}
            amount={stat?.amount}
            percentage={stat?.percent}
          />
        ))}
      </div>
      <div className="mt-[40px]">
        <UserInfo />
        <Charts />
        <Tables />
      </div>
    </div>
  );
}

export default Dashboard;
