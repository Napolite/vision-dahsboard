import SatisfactionRate from "../../components/ui-comp/dashboard-ui/satisfaction-rate";
import UserDetail from "../../components/ui-comp/dashboard-ui/user-tab";

function UserInfo() {
  return (
    <div className="flex gap-x-[20px]">
      <UserDetail />
      <SatisfactionRate />
    </div>
  );
}

export default UserInfo;
