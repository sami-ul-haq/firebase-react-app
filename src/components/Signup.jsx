import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";

const Signup = () => {
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (signUpData.name == "") {
      alert("Enter your Name!");
      return;
    }
    if (signUpData.email == "") {
      alert("Enter your Email!");
      return;
    }
    if (signUpData.password == "") {
      alert("Enter your Pasword!");
      return;
    } else if (signUpData.password.length < 2) {
      alert("Pasword is too short");
      return;
    }

    signUpHandler();

    setSignUpData({
      name: "",
      email: "",
      password: "",
    });

    navigate("/");
  };

  const signUpHandler = async () => {
    try {
      const userReq = await createUserWithEmailAndPassword(
        auth,
        signUpData.email,
        signUpData.password
      );
      const userData = userReq.user;
      console.log(userData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleAuthHandler = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[80%] mx-auto signup-form font-mono px-6 py-8 border border-solid rounded border-white md:w-[50%]">
      <h2 className="text-3xl text-center text-white mb-3">Sign up</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="text-white text-lg font-medium block"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full border border-1 rounded py-2 px-3"
            placeholder="Enter Your Name"
            value={signUpData.name}
            onChange={inputHandler}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="text-white text-lg font-medium block"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border border-1 rounded py-2 px-3"
            placeholder="Enter Your Email"
            value={signUpData.email}
            onChange={inputHandler}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="text-white text-lg font-medium block"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full border border-1 rounded py-2 px-3"
            placeholder="Enter Your Password"
            value={signUpData.password}
            onChange={inputHandler}
          />
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="rounded bg-indigo-600 text-white py-2 px-5 hover:bg-indigo-800"
          >
            Signup
          </button>
        </div>
      </form>

      <div className="mb-3">
        <p className="text-3xl text-white text-center">OR</p>
      </div>

      <div className="mb-3 text-center">
        <button
          className="rounded bg-white text-black py-2 px-5 hover:bg-slate-200"
          onClick={googleAuthHandler}
        >
          Sign In With Google
        </button>
      </div>

      <p className="text-white text-center">
        Already have account?{" "}
        <Link className="underline" to={"/login"}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
