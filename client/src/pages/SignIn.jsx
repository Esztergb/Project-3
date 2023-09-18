import React from "react";
import { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { LOGIN_USER } from "../utils/mutations";
// import { loginUser } from '../utils/API';
import Auth from '../utils/auth';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

const SignIn = () => {
 const [loginUser] = useMutation(LOGIN_USER);
 const [userFormData, setUserFormData] = useState({ email: "", password: "" });
//  const [validated] = useState(false);
 const [showAlert, setShowAlert] = useState(false);

 const handleInputChange = (event) => {
   const { name, value } = event.target;
   setUserFormData({ ...userFormData, [name]: value });
 };

 const handleFormSubmit = async (event) => {
   event.preventDefault();

   // check if form has everything (as per react-bootstrap docs)
   const form = event.currentTarget;
   if (form.checkValidity() === false) {
     event.preventDefault();
     event.stopPropagation();
   }

   try {
     // const response = await loginUser(userFormData);
     const response = await loginUser({
       variables: {
         email: userFormData.email,
         password: userFormData.password,
       },
     });

     // if (!response.ok) {
     //   throw new Error('something went wrong!');
     // }

     // const { token, user } = await response.json();
     const { token, user } = response.data.login;
     console.log('this is: ' + user);
     Auth.login(token);
   } catch (err) {
     console.error(err);
     setShowAlert(true);
   }

   setUserFormData({
     username: "",
     email: "",
     password: "",
   });
 };

  return (
    <div className="flex justify-center mb-6 mt-10">
      <form noValidate className="w-full max-w-sm" onSubmit={handleFormSubmit}>
        {showAlert && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            Something went wrong with your login credentials!
          </div>
        )}
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
              placeholder=""
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
              placeholder=""
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
              disabled={!(userFormData.email && userFormData.password)}
              type='submit' 
              variant='success'> 
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
