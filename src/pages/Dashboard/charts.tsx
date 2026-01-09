import ActiveUsers from "../../components/ui-comp/dashboard-ui/active-users";
import SalesOverview from "../../components/ui-comp/dashboard-ui/sales-overview";

function Charts() {
  return (
    <div className="mt-[30px] flex justify-between gap-x-[10px]">
      <SalesOverview />
      <ActiveUsers />
    </div>
  );
}

export default Charts;
