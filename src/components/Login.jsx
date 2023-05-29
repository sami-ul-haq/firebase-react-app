import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = async (e) => {
    e.preventDefault();
    try {
        await signInWithEmailAndPassword(auth , email, password);
        <Navigate to="/" />

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[80%] mx-auto signup-form font-mono px-6 py-8 border border-solid rounded border-white md:w-[50%]">
      <h2 className="text-3xl text-center text-white mb-3">Login</h2>
      <form onSubmit={signInHandler}>
        <div className="mb-3">
          <label htmlFor="email" className="text-white text-lg font-bold block">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full border border-1 rounded py-2 px-3"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="text-white text-lg font-bold block"
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full border border-1 rounded py-2 px-3"
          />
        </div>
        <div>
          <button
            type="submit"
            className="rounded bg-indigo-600 text-white py-2 px-5 hover:bg-indigo-800"
          >
            Login
          </button>
        </div>
        <div className="mt-5">
          <p className="text-white">
            Don't have account?{" "}
            <Link className="underline" to={"/signup"}>
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
