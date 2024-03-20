import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ setIsLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login Button Pressed!");
    console.log("Email: ", email);
    console.log("Password: ", password);
    setIsLogin(true);
  };
  return (
    <div className="flex flex-col bg-white w-full items-center justify-center h-screen">
      <div className="flex flex-col border-2 border-black p-10">
        <h1 className="text-5xl font-semibold">Login </h1>
        <p className="my-5">Enter your details below</p>
        {/* <input type="text" /> */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 rounded-md border-grey-900 outline-blue-500 text-3xl p-2 mt-2"
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 rounded-md border-grey-900 outline-blue-500 text-3xl p-2 mt-2"
          type="password"
          placeholder="Password"
        />
        <button
          onClick={handleLogin}
          className="bg-red-600 focus:bg-green-600 text-3-xl p-2 w-full text-3xl mt-4 text-white rounded-lg py-3"
        >
          Login
        </button>

        <Link to="/register" className="ml-3 text">
          <p className="my-5 flex items-center justify-center">
            Do not have an acount?
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
