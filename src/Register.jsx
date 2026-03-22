import React from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const submitLogic = (data) => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(data);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful");

    navigate("/signin");

    reset();
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit(submitLogic)}>

          <input
            type="text"
            placeholder="Full Name"
            {...register("name", {required: true})}
          />

          <input
            type="email"
            placeholder="Email Address"
            {...register("email", {required: true})}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            {...register("phone", {required: true})}
          />

          <input
            type="password"
            placeholder="Password"
            {...register("password", {required: true})}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {required: true})}
          />

          <button type="submit">Register</button>

        </form>

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/signin")}>SignIn</span>
        </p>

      </div>

    </div>
  );
}

export default Register;