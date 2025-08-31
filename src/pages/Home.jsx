import React from "react";
import {
  FiZap,
  FiTarget,
  FiUsers,
  FiCheckCircle,
  FiShield,
  FiGlobe,
} from "react-icons/fi";

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">

      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-6 py-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Jump Into the <span className="text-pink-500">Future</span>
          <br />
          with Kan-Guroo
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Revolutionize your workflow with our cutting-edge platform designed to
          make your business leap forward.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#contact">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90">
              Get Started Today →
            </button>
          </a>
          <a href="#about">
            <button className="px-6 py-3 rounded-full border hover:bg-gray-100">
              Learn More
            </button>
          </a>
        </div>
      </section>

      <section
        id="features"
        className="grid md:grid-cols-3 gap-6 px-6 md:px-20 py-12"
      >
        <div className="shadow-md rounded-2xl bg-white p-6 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-xl inline-block mb-4">
            <FiZap className="text-white w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold">Lightning Fast</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Experience blazing fast performance with our optimized platform.
          </p>
        </div>

        <div className="shadow-md rounded-2xl bg-white p-6 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-xl inline-block mb-4">
            <FiTarget className="text-white w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold">Precision Focused</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Every feature is designed with your success in mind.
          </p>
        </div>

        <div className="shadow-md rounded-2xl bg-white p-6 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-xl inline-block mb-4">
            <FiUsers className="text-white w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold">Team Oriented</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Built for collaboration and seamless teamwork.
          </p>
        </div>
      </section>

      
      <section id="about" className="px-6 md:px-20 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <p className="text-gray-600 leading-relaxed">
            Founded in 2020, Kan-Guroo emerged from a simple idea: business
            solutions should be as agile and powerful as nature's most efficient
            jumpers. Just like kangaroos cover vast distances with remarkable
            efficiency, we help businesses leap forward in their digital
            transformation journey.
            <br />
            <br />
            Today, we serve thousands of companies worldwide, providing them
            with the tools and expertise they need to stay ahead in an
            ever-evolving digital landscape.
          </p>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold mb-4">Key Achievements</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <FiCheckCircle className="text-orange-500" /> 10,000+ Happy
                Customers
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="text-orange-500" /> 99.9% Uptime
                Guarantee
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="text-orange-500" /> 24/7 Premium
                Support
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="text-orange-500" /> Enterprise-Grade
                Security
              </li>
            </ul>
          </div>
        </div>

       
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            The principles that guide everything we do and drive our commitment
            to excellence.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-xl inline-block mb-4">
                <FiZap className="text-white w-6 h-6" />
              </div>
              <h3 className="font-semibold">Innovation First</h3>
              <p className="text-gray-600 text-sm mt-2">
                We push the boundaries of what's possible, constantly innovating
                to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-xl inline-block mb-4">
                <FiShield className="text-white w-6 h-6" />
              </div>
              <h3 className="font-semibold">Trust & Security</h3>
              <p className="text-gray-600 text-sm mt-2">
                Your data and privacy are our top priorities. We maintain the
                highest security standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-xl inline-block mb-4">
                <FiGlobe className="text-white w-6 h-6" />
              </div>
              <h3 className="font-semibold">Global Impact</h3>
              <p className="text-gray-600 text-sm mt-2">
                Connecting businesses worldwide and making a positive impact on
                the global economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section id="contact" className="px-6 md:px-20 py-20">
        <h2 className="text-4xl font-bold text-center mb-6">
          Get in <span className="text-pink-500">Touch</span>
        </h2>
        <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-gray-600 mb-6">
              Whether you have a question about features, pricing, or anything
              else, our team is ready to answer all your questions.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-semibold text-orange-500">Email Us:</span>{" "}
                hello@kan-guroo.com
              </li>
              <li>
                <span className="font-semibold text-orange-500">Call Us:</span>{" "}
                +995 599 19 19 19
              </li>
              <li>
                <span className="font-semibold text-orange-500">Visit Us:</span>{" "}
                Tbilisi,saburtalo
              </li>
            </ul>
          </div>

          <form className="bg-white p-6 rounded-2xl shadow-md space-y-4">
            <article className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-lg px-4 py-2 w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border rounded-lg px-4 py-2 w-full"
              />
            </article>
            <input
              type="text"
              placeholder="Subject"
              className="border rounded-lg px-4 py-2 w-full"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="border rounded-lg px-4 py-2 w-full resize-none"
            ></textarea>
            <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-100 py-6 text-center text-gray-600">
         {new Date().getFullYear()} Kan-Guroo. All rights reserved.
      </footer>
    </main>
  );
};

export default Home;
