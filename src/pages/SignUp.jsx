import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../constant/route";

const SignUp = () => {

  const navigate=useNavigate()


  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <section className="w-full max-w-md p-8 rounded-lg bg-white shadow-lg">
        <article className="text-center mb-6">
          <div className="flex justify-center items-center mb-2">
            <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
              K
            </div>
            <span className="ml-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Kan-Guroo</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
          <p className="text-sm text-gray-500">Join thousands of users and start your journey</p>
        </article>

        <form className="space-y-4">
          <article className="flex space-x-3">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </article>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Create a strong password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />

          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2 text-orange-500" />
            I agree to the <a href="#" className="text-orange-500 hover:underline mx-1">Terms of Service</a> and <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a>
          </label>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <span onClick={()=>navigate(routes.signin)} className="text-orange-500 font-semibold hover:underline cursor-pointer">Sign in here</span>
        </p>
      </section>
    </section>
  );
};

export default SignUp;
