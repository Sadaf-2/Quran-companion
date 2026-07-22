import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

import { useNavigate, Link } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    dispatch(
      login({
        user: {
          name: "Sadaf",
          email: data.email,
        },
        token: "jwt-demo-token",
      })
    );

    alert("✅ Login Successful");

    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          background: "white",
          padding: "35px",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,.15)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "35px",
            marginBottom: "30px",
            color: "#059669",
          }}
        >
          🔐 Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            style={inputStyle}
          />

          {errors.email && (
            <p style={errorStyle}>{errors.email.message}</p>
          )}

          {/* Password */}

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            {...register("password")}
            style={inputStyle}
          />

          {errors.password && (
            <p style={errorStyle}>{errors.password.message}</p>
          )}

          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>

        <p
          style={{
            marginTop: "25px",
            textAlign: "center",
          }}
        >
          Don't have an account?

          <Link
            to="/signup"
            style={{
              color: "#059669",
              fontWeight: "bold",
              marginLeft: "8px",
              textDecoration: "none",
            }}
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "10px",
  marginBottom: "18px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  fontSize: "16px",
};

const errorStyle = {
  color: "red",
  marginBottom: "15px",
  fontSize: "14px",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "10px",
  background: "#059669",
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Login;