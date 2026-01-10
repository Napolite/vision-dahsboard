import Orders from "../../components/ui-comp/dashboard-ui/orders";
import ProjectTable from "../../components/ui-comp/dashboard-ui/project-table";

function Tables() {
  return (
    <div className="mt-[30px] w-full flex gap-x-[10px] min-h-auto ">
      <div className="w-[65%]">
        <ProjectTable />
      </div>
      <div className="w-[35%]">
        <Orders />
      </div>
    </div>
  );
}

export default Tables;
