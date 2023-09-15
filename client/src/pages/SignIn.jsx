import React from "react";
import { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { LOGIN_USER } from "../utils/mutations";
// import auth from "../utils/auth";

const SignIn = () => {
  const [userFormData, setUserFormData] = useState({ 
    email: "", 
    password: "" 
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  // const [login] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handelFormSubmit = async (event) => {
    event.preventDefault();

    console.log(userFormData);
  };

  return (
    <div className="md:flex md:justify-center mb-6">
    <form className="w-full max-w-sm" onSubmit={handelFormSubmit}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="email"
          >
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-cbrown appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cbrown"
            name="email"
            type="email"
            value={userFormData.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="password"
          >
            Password
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-cbrown appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cbrown"
            name="password"
            type="password"
            value={userFormData.password}
            placeholder="******************"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3"></div>
        <label className="md:w-2/3 block text-gray-500 font-bold">
          <input className="mr-2 leading-tight" type="checkbox" />
          <span className="text-sm">Send me your newsletter!</span>
        </label>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="text-cwhite border bg-cbrown border-cbrown hover:bg-transparent hover:text-cbrown rounded-md px-8 py-3"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default SignIn;
