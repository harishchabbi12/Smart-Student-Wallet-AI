import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { loginUser } from "../../services/authService";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginUser({
        email,
        password,
      });

      // Save JWT Token
      localStorage.setItem("token", response.data.token);

      // Save Logged-in User
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      console.log(response.data);

      // Redirect to Dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error(error.response?.data);

      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <AuthLayout>
      <div
        style={{
          background: "#ffffff",
          padding: "40px",
          borderRadius: "12px",
          width: "350px",
          boxShadow: "0px 5px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1>Smart Student Wallet AI</h1>

        <p>Login to continue</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </AuthLayout>
  );
}

export default Login;