import Table from "../../table/table";
import ProgressBar from "../../c-progress/progress";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { VscKebabVertical } from "react-icons/vsc";
import { SiAdobexd } from "react-icons/si";
import { FaAtlassian } from "react-icons/fa6";
import { FaSlack, FaSpotify, FaJira, FaInvision } from "react-icons/fa";

const comProgress = (progress: any) => {
  return (
    <div>
      <p className="text-[14px] font-bold text-[#ffffff]">{progress}</p>
      <ProgressBar width={125} progress={progress} />
    </div>
  );
};

const convertLabel = (label: string, icon: any) => {
  return (
    <div className="flex items-center gap-x-[10px]">
      {icon}
      <p>{label}</p>
    </div>
  );
};

function ProjectTable() {
  return (
    <div className="text-[white] flex flex-col justify-between py-[30px] px-[20.5px] w-[65%] h-fit relative rounded-[20px] from-[#060b26] from-[0%] to-[#0A0E2371] to-[100%] bg-gradient-to-b py-[20px] px-[20px] backdrop-blur-lg">
      <div className="flex items-center justify-between w-full">
        <div className="">
          <p className="text-[18px] text-[#ffffff] font-bold">Projects</p>
          <div className="flex gap-x-[5px] items-center">
            <p className="text-[14px] text-green-500">
              <IoIosCheckmarkCircle color="00ff0050" />
            </p>
            <p className="text-[14px] text-gray-500">30 done this month</p>
          </div>
        </div>
        <VscKebabVertical color={"rgba(128,128,128,40)"} size={20} />
      </div>
      <Table
        data={[
          [
            {
              label: convertLabel(
                "Chakra Soft UI Version",
                <SiAdobexd color={"#470137"} size={20} />
              ),
              width: "40%",
            },
            { value: 5, width: "20%" },
            { value: 14000, width: "20%" },
            {
              value: comProgress("60%"),
              width: "20%",
              progress: 60,
            },
          ],
          [
            {
              label: convertLabel(
                "Add Progress Track",
                <FaAtlassian size={20} color={"#2684FF"} />
              ),
              width: "40%",
            },
            { value: 2, width: "20%" },
            { value: 3000, width: "20%" },
            { value: comProgress("10%"), width: "20%", progress: 10 },
          ],
          [
            {
              label: convertLabel(
                "Fix Platform Error",
                <FaSlack size={20} color="yellow" />
              ),
              width: "40%",
            },
            { value: 2, width: "20%" },
            { value: "Not set", width: "20%" },
            { value: comProgress("100%"), width: "20%", progress: 100 },
          ],
          [
            {
              label: convertLabel(
                "Launch Our Mobile App",
                <FaSpotify size={20} color={"#2EBD59"} />
              ),
              width: "40%",
            },
            { value: 4, width: "20%" },
            { value: 32000, width: "20%" },
            { value: comProgress("100%"), width: "20%", progress: 100 },
          ],
          [
            {
              label: convertLabel(
                "Add New Pricing Page",
                <FaJira color={"#2684FF"} size={20} />
              ),
              width: "40%",
            },
            { value: 5, width: "20%" },
            { value: 400, width: "20%" },
            { value: comProgress("25%"), width: "20%", progress: 25 },
          ],
          [
            {
              label: convertLabel(
                "Redesign New Online Shop",
                <FaInvision color={"#DC395F"} size={20} />
              ),
              width: "40%",
            },
            { value: 2, width: "20%" },
            { value: 7600, width: "20%" },
            { value: comProgress("40%"), width: "20%", progress: 40 },
          ],
        ]}
        headers={[
          {
            label: "Companies",
            width: "40%",
          },
          {
            label: "Members",
            width: "20%",
          },
          {
            label: "Budget",
            width: "20%",
          },
          {
            label: "Completion",
            width: "20%",
          },
        ]}
      />
    </div>
  );
}

export default ProjectTable;
