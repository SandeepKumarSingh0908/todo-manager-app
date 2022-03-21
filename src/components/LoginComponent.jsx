import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationService from "../services/AuthenticationService";

const LoginComponent = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    if (e.target.name === "username") {
      setUserName(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleLogin = () => {
    if (username === "SanSingh" && password === "dummy") {
        AuthenticationService.login(username,password);
      navigate(`/welcome/${username}`);
    } else {
      navigate("*");
    }
  };

  return (
    <div className="container">
      UserName:
      <input
        type="text"
        placeholder="Enter Username"
        name="username"
        value={username}
        onChange={handleFormChange}
        
      />
      Password:
      <input
        type="text"
        placeholder="Enter Password"
        name="password"
        value={password}
        onChange={handleFormChange}
      />
      <button className="btn btn-success" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginComponent;
