import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function LoginPage(
  {
	setIsLoggedIn
  } : {
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Hardcoded credentials (replace this with a real API later)
  const correctUsername = "admin";
  const correctPassword = "password123";

  const handleLogin = (e: React.FormEvent) => {
	e.preventDefault();
	if (username === correctUsername && password === correctPassword) {
	  setIsLoggedIn(true);
	  setError("");
	  navigate("/html/circuit_details_in_effect");
	} else {
	  setError("Invalid username or password.");
	}
  };

  return (
	<div className="login-container">
		<div className="login-form" style={{ maxWidth: "400px", margin: "auto", padding: "1rem" }}>
		<h2>Login</h2>
		<form onSubmit={handleLogin}>
			<div>
			<label>
				Username: <br />
				<input
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				required
				/>
			</label>
			</div>
			<div style={{ marginTop: "0.5rem" }}>
			<label>
				Password: <br />
				<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
				/>
			</label>
			</div>
			{error && (
				<div style={{ color: "red", marginTop: "0.5rem" }}>{error}</div>
			)}
			<button type="submit" style={{ marginTop: "1rem" }}>
			Log in
			</button>
		</form>
		</div>
	</div>
  );
}