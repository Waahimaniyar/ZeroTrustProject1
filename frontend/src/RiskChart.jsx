import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", risk: 40 },
  { day: "Tue", risk: 55 },
  { day: "Wed", risk: 30 },
  { day: "Thu", risk: 70 },
  { day: "Fri", risk: 60 },
];

function RiskChart() {
  return (
    <div
      style={{
        width: "80%",
        height: 350,
        background: "#2b2f77",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <h2>📊 Risk Analysis</h2>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="risk"
            stroke="#38bdf8"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RiskChart;