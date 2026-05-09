import {
  Server,
  ShieldAlert,
  Activity,
  Database,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "10AM", cpu: 30 },
  { time: "11AM", cpu: 45 },
  { time: "12PM", cpu: 80 },
  { time: "1PM", cpu: 55 },
  { time: "2PM", cpu: 35 },
];

function Card({ title, value, icon }) {
  return (
    <div
      style={{
        background: "#161b22",
        padding: "20px",
        borderRadius: "16px",
        flex: 1,
        minWidth: "220px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h3>{title}</h3>
          <h1>{value}</h1>
        </div>

        {icon}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div
      style={{
        background: "#0d1117",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1>AWS Production Monitoring Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <Card
          title="Running Instances"
          value="2"
          icon={<Server size={40} />}
        />

        <Card
          title="CPU Usage"
          value="55%"
          icon={<Activity size={40} />}
        />

        <Card
          title="Alerts Triggered"
          value="3"
          icon={<ShieldAlert size={40} />}
        />

        <Card
          title="Database Status"
          value="Healthy"
          icon={<Database size={40} />}
        />
      </div>

      <div
        style={{
          background: "#161b22",
          marginTop: "40px",
          padding: "20px",
          borderRadius: "16px",
          width: "100%",
          height: "400px",
        }}
      >
        <h2>CPU Monitoring</h2>

        <div style={{ width: "100%", height: "300px" }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <XAxis dataKey="time" stroke="#ffffff" />
              <YAxis stroke="#ffffff" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="cpu"
                stroke="#00ff99"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 