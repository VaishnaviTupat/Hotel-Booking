import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import { useForm } from "react-hook-form";

function SignIn() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const submitLogin = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (user) =>
        user.email === data.email &&
        user.password === data.password
    );

    if (validUser) {
      alert("Login Successful");
      localStorage.setItem("currentUser", JSON.stringify(validUser));
      navigate("/Profile");
    } else {
      alert("Invalid Email or Password");
    }

    reset();
  };

  return (
    <div className="signin-page">

      <div className="signin-container">

        {/* LEFT SIDE */}
        <div className="signin-left">
          <h1>Welcome Back</h1>
          <p>
            Login to continue your luxury experience with Royal Swastik.
            Your comfort journey starts here.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="signin-right">
          <h2>Sign In</h2>

          <form onSubmit={handleSubmit(submitLogin)}>

            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
            />

            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />

            <button type="submit">Sign In</button>

          </form>

          <p className="register-text">
            Don’t have an account?
            <span onClick={() => navigate("/register")}> Register</span>
          </p>
        </div>

      </div>

    </div>
  );
}

export default SignIn;