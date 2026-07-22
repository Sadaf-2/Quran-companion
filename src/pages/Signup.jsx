import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Link, useNavigate } from "react-router-dom";

const signupSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),

    email: z.string().email("Enter a valid email"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters"),

    confirmPassword: z
      .string()
      .min(6, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data) => {
    alert("✅ Account Created Successfully");

    console.log(data);

    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f4f6",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "#fff",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,.15)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#059669",
            marginBottom: "25px",
          }}
        >
          📝 Signup
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>

          <input
            {...register("name")}
            placeholder="Enter your name"
            style={inputStyle}
          />

          {errors.name && (
            <p style={errorStyle}>{errors.name.message}</p>
          )}

          <label>Email</label>

          <input
            {...register("email")}
            placeholder="Enter your email"
            style={inputStyle}
          />

          {errors.email && (
            <p style={errorStyle}>{errors.email.message}</p>
          )}

          <label>Password</label>

          <input
            type="password"
            {...register("password")}
            placeholder="Enter password"
            style={inputStyle}
          />

          {errors.password && (
            <p style={errorStyle}>{errors.password.message}</p>
          )}

          <label>Confirm Password</label>

          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm password"
            style={inputStyle}
          />

          {errors.confirmPassword && (
            <p style={errorStyle}>
              {errors.confirmPassword.message}
            </p>
          )}

          <button type="submit" style={buttonStyle}>
            Create Account
          </button>
        </form>

        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Already have an account?

          <Link
            to="/login"
            style={{
              marginLeft: "8px",
              color: "#059669",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Login
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
  fontSize: "14px",
  marginBottom: "15px",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "10px",
  background: "#059669",
  color: "white",
  fontWeight: "bold",
  fontSize: "17px",
  cursor: "pointer",
};

export default Signup;