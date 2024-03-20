import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = ({ isLogin }) => {
  const [text, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    console.log("Register Button Pressed!");
    console.log("Name:", text);
    console.log("Email: ", email);
    console.log("Password: ", password);
  };
  return (
    <div className="flex flex-col bg-white w-full items-center justify-center h-screen">
      <h1>{isLogin ? "Logged In" : "User need to login"}</h1>
      <div className="flex flex-col items-center rounded-lg border-2 border-black p-10">
        <h1 className="text-5xl font-semibold">Register </h1>
        <p className="my-5">Create An Account</p>

        <input
          value={text}
          onChange={(e) => setName(e.target.value)}
          className="border-b-2 focus:blue-600 border-grey-900 outline-blue-500 text-3xl p-2 mt-2"
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-b-2 focus:blue-600 border-grey-900 outline-blue-500 text-3xl p-2 mt-2"
          type="email"
          placeholder="Email"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-b-2 focus:blue-600 border-grey-900 outline-blue-500 text-3xl p-2 mt-2"
          type="password"
          placeholder="Password"
        />
        <button
          onClick={handleRegister}
          className="bg-red-600 focus:bg-green-600 text-3-xl p-2 w-full text-3xl mt-4 text-white rounded-lg py-3"
        >
          Create Account
        </button>

        {isLogin ? (
          <h1>User not logged in! Need to register.</h1>
        ) : (
          <Link to="/" className="ml-3 text my-5 flex ">
            Already have an acount?
          </Link>
        )}
      </div>
    </div>
  );
};
