import Reftracking from "../../components/ui-comp/dashboard-ui/ref-tracking";
import SatisfactionRate from "../../components/ui-comp/dashboard-ui/satisfaction-rate";
import UserDetail from "../../components/ui-comp/dashboard-ui/user-tab";

function UserInfo() {
  return (
    <div className="flex justify-between w-full gap-x-[10px]">
      <div className="w-[40%]">
        <UserDetail />
      </div>
      <div className="w-[20%]">
        <SatisfactionRate />
      </div>
      <div className="w-[40%]">
        <Reftracking />
      </div>
    </div>
  );
}

export default UserInfo;
