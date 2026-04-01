import React from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit, watch, reset } = useForm();
  const navigate = useNavigate();

const submitLogic = (data) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.find((u) => u.email === data.email);

  if (userExists) {
    alert("User already exists with this email!");
    return;
  }

  const { confirmPassword, ...userData } = data;

  users.push(userData);

  // ✅ Save all users
  localStorage.setItem("users", JSON.stringify(users));

  // ✅ VERY IMPORTANT: Save current logged-in user
  localStorage.setItem("currentUser", JSON.stringify(userData));

  alert("Registration Successful");

  navigate("/signin"); // 👉 optional: go directly to profile

  reset();
};

  return (
    <div className="register-page">
      <div className="register-container">

        <div className="register-left">
          <h1>Join Royal Swastik</h1>
          <p>Create your account and start booking your perfect stay.</p>
        </div>

        <div className="register-right">
          <h2>Create Account</h2>

          <form onSubmit={handleSubmit(submitLogic)}>

            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: true })}
            />

            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
            />

            {/* ✅ Gender Added */}
            <select {...register("gender", { required: true })}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
            />

            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: true,
                validate: (val) =>
                  val === watch("password") || "Passwords do not match"
              })}
            />

            <button type="submit">Register</button>

          </form>

          <p>
            Already have an account?
            <span onClick={() => navigate("/signin")}> Sign In</span>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;