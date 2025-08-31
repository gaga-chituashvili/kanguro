import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../constant/route";

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("add_here", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Invalid credentials");

      const data = await response.json();
      console.log("User signed in:", data);

      alert("Sign in successful");
      navigate(routes.home);
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <section className="w-full max-w-md p-8 rounded-lg bg-white shadow-lg">
        <article className="text-center mb-6">
          <div className="flex justify-center items-center mb-2">
            <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">K</div>
            <span className="ml-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Kan-Guroo</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-sm text-gray-500">Sign in to your account to continue</p>
        </article>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <article>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </article>

          <article>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </article>

          <article className="flex justify-between items-center text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 text-orange-500" />
              Remember me
            </label>
            <a href="#" className="text-orange-500 hover:underline">Forgot password?</a>
          </article>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <span onClick={()=>navigate(routes.signup)} className="text-orange-500 font-semibold hover:underline cursor-pointer">
            Sign up here
          </span>
        </p>
      </section>
    </section>
  );
};

export default SignIn;
