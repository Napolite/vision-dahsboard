import Reftracking from "../../components/ui-comp/dashboard-ui/ref-tracking";
import SatisfactionRate from "../../components/ui-comp/dashboard-ui/satisfaction-rate";
import UserDetail from "../../components/ui-comp/dashboard-ui/user-tab";

function UserInfo() {
  return (
    <div className="flex gap-x-[10px]">
      <UserDetail />
      <SatisfactionRate />
      <Reftracking />
    </div>
  );
}

export default UserInfo;
