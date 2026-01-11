import ActiveUsers from "../../components/ui-comp/dashboard-ui/active-users";
import SalesOverview from "../../components/ui-comp/dashboard-ui/sales-overview";

function Charts() {
  return (
    <div className="mt-[30px] flex justify-between gap-x-[10px] w-full">
      <div className="min-w-[60%] flex-1">
        <SalesOverview />
      </div>
      <div className="max-w-[40%]">
        <ActiveUsers />
      </div>
    </div>
  );
}

export default Charts;
