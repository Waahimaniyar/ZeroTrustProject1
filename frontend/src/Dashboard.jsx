import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const logout = () => {
    navigate("/");
  };

  const data = [
    { name: "Mon", risk: 40 },
    { name: "Tue", risk: 55 },
    { name: "Wed", risk: 30 },
    { name: "Thu", risk: 70 },
    { name: "Fri", risk: 60 },
  ];

  if (loading) {
    return (
      <div className="loader">
        Loading Security Dashboard...
      </div>
    );
  }

  return (
    <div className="dashboard-container">

      {/* SIDEBAR */}

      <div className="sidebar">

        <h2>🛡 Zero Trust</h2>

        <ul>
          <li>🏠 Dashboard</li>
          <li>💻 Devices</li>
          <li>🚨 Threat Alerts</li>
          <li>🔥 Firewall</li>
          <li>⚙ Settings</li>
        </ul>

      </div>

      {/* MAIN CONTENT */}

      <div className="main-content">

        {/* TOP BAR */}

        <div className="top-bar">

          <div>
            <h1>🛡 Zero Trust Dashboard</h1>

            <h2 className="clock">
              {new Date().toLocaleTimeString()}
            </h2>
          </div>

          <div className="top-right">

            <button className="notify-btn">🔔</button>

            <div className="admin-box">👤 Admin</div>

          </div>

        </div>

        {/* LOGOUT */}

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>

        {/* CARDS */}

        <div className="card-container">

          <div className="card">
            <h2>Risk Score</h2>
            <p>72%</p>
          </div>

          <div className="card">
            <h2>Devices</h2>
            <p>128</p>
          </div>

          <div className="card">
            <h2>Threat Alerts</h2>
            <p>5</p>
          </div>

          <div className="card">
            <h2>Firewall</h2>
            <p>Active</p>
          </div>

        </div>

        {/* THREAT TABLE */}

        <div className="table-section">

          <h2>🚨 Live Threat Alerts</h2>

          <table>

            <thead>
              <tr>
                <th>Device</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Laptop-01</td>
                <td className="safe">Safe</td>
              </tr>

              <tr>
                <td>Server-02</td>
                <td className="danger">Threat Detected</td>
              </tr>

              <tr>
                <td>Mobile-03</td>
                <td className="safe">Safe</td>
              </tr>

            </tbody>

          </table>

        </div>

        {/* CHART */}

        <div className="chart-section">

          <h2>📊 Risk Analysis</h2>

          <ResponsiveContainer width="100%" height={300}>

            <LineChart data={data}>

              <XAxis dataKey="name" stroke="#ffffff" />

              <YAxis stroke="#ffffff" />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="risk"
                stroke="#3bb7ff"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* RECENT ACTIVITY */}

        <div className="activity-section">

          <h2>⚡ Recent Activity</h2>

          <div className="activity-box">
            User admin logged in
          </div>

          <div className="activity-box danger-activity">
            Threat detected on Server-02
          </div>

          <div className="activity-box">
            Firewall protection enabled
          </div>

        </div>

        {/* STATUS SECTION */}

        <div className="status-section">

          <div className="status-box">

            <h3>🟢 System Health</h3>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <p>Security Level: Strong</p>

          </div>

          <div className="status-box warning-box">

            <h3>⚠ Threat Level</h3>

            <p className="threat-text">Medium Risk</p>

          </div>

        </div>

        {/* FOOTER */}

        <footer>
          © 2026 Zero Trust Security Dashboard
        </footer>

      </div>

    </div>
  );
}

export default Dashboard;