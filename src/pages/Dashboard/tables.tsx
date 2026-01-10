import Orders from "../../components/ui-comp/dashboard-ui/orders";
import ProjectTable from "../../components/ui-comp/dashboard-ui/project-table";

function Tables() {
  return (
    <div className="mt-[30px] flex gap-x-[10px] min-h-auto bg-red-900">
      <ProjectTable />
      <Orders />
    </div>
  );
}

export default Tables;
