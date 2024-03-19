import React from "react";

export const Register = () => {
  return (
    <div className="flex flex-col bg-white w-full items-center justify-center h-screen">
      <div className="flex flex-col items-center border-2 border-black p-10">
        <h1 className="text-5xl font-semibold">Register </h1>
        <p className="my-5">Create An Account</p>
        
        <input
          className="border-b-2 focus:blue-600 border-grey-900 outline-blue-500 text-3xl p-2 mt-2"
          type="name"
          placeholder="Name"
        />
        <input
          className="border-b-2 focus:blue-600 border-grey-900 outline-blue-500 text-3xl p-2 mt-2"
          type="phoneNumber"
          placeholder="PhoneNo."
        />
        <input
          className="border-b-2 focus:blue-600 border-grey-900 outline-blue-500 text-3xl p-2 mt-2"
          type="email"
          placeholder="Email"
        />

        <button className="bg-red-600 focus:bg-green-600 text-3-xl p-2 w-full text-3xl mt-4 text-white rounded-lg py-3">
          Create Account
        </button>
        <p className="my-5 flex items-center justify-center">
          Already have an acount?
          <a href="http://localhost:3000/">Login</a>
        </p>
      </div>
    </div>
  );
};
