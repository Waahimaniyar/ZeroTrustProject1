import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [dashboardData, setDashboardData] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((response) => {
        setDashboardData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Zero Trust Dashboard</h1>

      <p>{message}</p>

      <div className="cards">
        <div className="card">
          <h2>Risk Score</h2>
          <p>{dashboardData.riskScore}</p>
        </div>

        <div className="card">
          <h2>Devices Monitored</h2>
          <p>{dashboardData.devices}</p>
        </div>

        <div className="card">
          <h2>Threat Alerts</h2>
          <p style={{ color: "red" }}>
           {dashboardData.alerts}
          </p>
        </div>

        <div className="card">
          <h2>Compliance Status</h2>
          <p style={{ color: "lightgreen" }}>
            {dashboardData.status}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;