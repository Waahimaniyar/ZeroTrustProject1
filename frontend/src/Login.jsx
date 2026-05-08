import { useNavigate } from "react-router-dom";
import "./App.css";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>🛡 Zero Trust Security</h1>
        <p>Secure Cybersecurity Dashboard</p>

        <input type="text" placeholder="Enter Username" />
        <input type="password" placeholder="Enter Password" />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;