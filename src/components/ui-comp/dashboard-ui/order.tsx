import { FaBell } from "react-icons/fa";

function Order({
  order,
}: {
  order: { title: string; time: string; icon: any };
}) {
  return (
    <div className="flex items-start gap-x-[10px]">
      {order?.icon}
      <div>
        <div className="text-[14px] font-bold text-[#ffffff]">
          {order?.title}
        </div>
        <div className="text-[12px] text-gray-400">{order?.time}</div>
      </div>
    </div>
  );
}

export default Order;
