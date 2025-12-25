import React from "react";
import { FaCode } from "react-icons/fa6";

const Services = ({ themeMode }) => {
  return (
    <section
      className={`w-full min-h-screen px-4 py-12  ${
        themeMode === "dark"
          ? "bg-linear-to-r from-[#140d01] via-[#311a01] to-[#0d0803] text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold py-3">
          What I Offer
        </h1>
        <p className="text-lg ">
          I am a Full Stack Web Developer focused on creating modern, fast, and
          secure web applications that turn ideas into impactful digital
          solutions for business growth.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div
          className="w-full  p-6 rounded-2xl 
          bg-white/5 backdrop-blur-xl
          border border-amber-500/20
          shadow-lg shadow-amber-500/10
          hover:shadow-amber-500/40
          hover:-translate-y-2 transition-all duration-300"
        >
          <div
            className="w-14 h-14 flex items-center justify-center rounded-full
            bg-amber-600/20 text-amber-700 text-2xl mb-4"
          >
            <FaCode />
          </div>

          <h2 className="text-xl font-semibold mb-2">Front-End Development</h2>

          <p className=" text-sm mb-4">
            I create visually appealing, responsive, and SEO-friendly websites
            tailored to your needs.
          </p>

          <p className="text-amber-700 font-medium mb-1">Technologies</p>
          <p className="text-sm ">
            HTML, CSS, JavaScript, Tailwind CSS, React, Next.js
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="w-full  p-6 rounded-2xl 
          bg-white/5 backdrop-blur-xl
          border border-amber-500/20
          shadow-lg shadow-amber-500/10
          hover:shadow-amber-500/40
          hover:-translate-y-2 transition-all duration-300"
        >
          <div
            className="w-14 h-14 flex items-center justify-center rounded-full
            bg-amber-600/20 text-amber-700 text-2xl mb-4"
          >
            <FaCode />
          </div>

          <h2 className="text-xl font-semibold mb-2">
            Full Stack Web Development
          </h2>

          <p className=" text-sm mb-4">
            End-to-end development covering both frontend and backend.
          </p>

          <p className="text-amber-700 font-medium mb-1">Technologies</p>
          <p className="text-sm ">
            React, Next.js, Node.js, Express.js, MongoDB
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
