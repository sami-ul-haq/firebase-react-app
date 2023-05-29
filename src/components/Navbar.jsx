import { async } from "@firebase/util";
import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const Navbar = ({ user }) => {
  console.log(user);

  const signOutHandler = async () => {
    try {
      await signOut(auth);
      console.log("Sign OUt");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-white text-black flex items-center justify-between px-5 py-5 mb-5 rounded-b-lg">
      <Link to={"/"}>Welcome</Link>
      <div>
        {user ? (
          <button onClick={signOutHandler}>SignOut</button>
        ) : (
          <p className="font-bold">Sign In Please</p>
        )}
      </div>

      <div>
        <p>
          {user?.displayName
            ? user?.displayName
            : user?.email
            ? user?.email
            : "Guest"}
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
