import "./Dashboard.css";

function Dashboard() {
  const alerts = [
    { device: "Laptop-101", status: "Malware Detected" },
    { device: "Server-22", status: "Unauthorized Access" },
    { device: "Mobile-55", status: "VPN Failure" },
  ];

  return (
    <div className="main-container">

      <div className="sidebar">
        <h2>🛡 Zero Trust</h2>

        <ul>
          <li>Dashboard</li>
          <li>Threat Alerts</li>
          <li>Devices</li>
          <li>Firewall</li>
          <li>AI Security</li>
        </ul>
      </div>

      <div className="dashboard-container">

        <div className="topbar">
          <h1>Cybersecurity Dashboard</h1>
          <button>Logout</button>
        </div>

        <div className="card-grid">

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

        <div className="alerts-box">
          <h2>🚨 Live Threat Alerts</h2>

          <table>
            <thead>
              <tr>
                <th>Device</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {alerts.map((alert, index) => (
                <tr key={index}>
                  <td>{alert.device}</td>
                  <td>{alert.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;