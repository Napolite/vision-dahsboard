import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
} from "recharts";

// #region Sample data
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

// #endregion
const BarChartExample = ({ isAnimationActive = true }) => (
  <BarChart
    style={{
      width: "100%",
      maxWidth: "700px",
      maxHeight: "70vh",
      aspectRatio: 1.618,
    }}
    responsive
    data={data}
  >
    {/* <XAxis dataKey="name" axisLine={false} /> */}
    <YAxis width="auto" axisLine={false} />

    <Bar
      dataKey="pv"
      fill="#ffffff"
      isAnimationActive={isAnimationActive}
      barSize={7}
      radius={10}
    />
  </BarChart>
);

export default BarChartExample;
