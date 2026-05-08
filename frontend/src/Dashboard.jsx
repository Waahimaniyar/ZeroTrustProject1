import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();

  return (

    <div className="dashboard-container">

      <h1>🛡️ Zero Trust Dashboard</h1>

      <button
        className="logout-btn"
        onClick={() => navigate("/")}
      >
        Logout
      </button>

      <div className="cards-container">

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

      <div className="alerts-section">

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
              <td>Safe</td>
            </tr>

            <tr>
              <td>Server-02</td>
              <td>Threat Detected</td>
            </tr>

            <tr>
              <td>Mobile-03</td>
              <td>Safe</td>
            </tr>

          </tbody>

        </table>

      </div>

      <footer className="footer">
        © 2026 Zero Trust Security Dashboard
      </footer>

    </div>
  );
}

export default Dashboard;