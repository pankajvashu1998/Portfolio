import React from "react";
import { IoMdDownload } from "react-icons/io";
const Banner = ({ themeMode }) => {
  return (
    <section
      className={`w-full min-h-screen text-center md:text-left    flex items-center ${
        themeMode === "dark"
          ? "bg-linear-to-r from-[#100a00] via-[#160b00] to-[#120a02]  text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="   max-w-7xl mx-auto mt-20 sm:mt-0   px-6   grid grid-cols-1 md:grid-cols-2   gap-12   items-center ">
        {/* Left Content */}
        <div className="space-y-5">
          <span className=" tracking-widest text-amber-700 uppercase font-mono">
            Full Stack Web Developer
          </span>

          <h1 className="text-3xl sm:text-4xl  font-bold leading-tight">
            Hi, I’m <span className="text-amber-700">Pankaj Kumar</span>
            <br />I Build Modern Web Applications
          </h1>

          <p className=" text-base sm:text-lg max-w-xl">
            I design and develop modern, responsive, and high-performance
            websites that help businesses grow online.
          </p>

          <p className=" text-sm sm:text-base">
            Specialized in React, Next.js, Node.js, Express, MongoDB, and REST
            APIs.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4 ">
            <button className="  px-6 py-3   bg-amber-700 text-black font-semibold   rounded-lg   hover:bg-amber-600   transition">
              <a target="_blank" href="https://maicakeshop.vercel.app/"> View Projects</a>
            </button>

            <button
              className="flex justify-center items-center     px-6 py-3   border border-amber-600   text-amber-700   rounded-lg   hover:bg-amber-600 hover:text-black
                transition "
            >
              <a href="#contact"> Contact Me</a>
            </button>

            <a
              href="Resum.pdf"
              target="_blank"
              className="flex justify-center items-center    px-6 py-3   border border-amber-600   text-amber-700   rounded-lg   hover:bg-amber-600 hover:text-black
                transition "
            >
              <span className="text-xl mr-2">
                <IoMdDownload />
              </span>
              Download CV
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className=" w-56 h-56 sm:w-72 sm:h-72  rounded-full bg-linear-to-br from-amber-500/30 to-transparent flex items-center justify-center ">
            <div className="  w-44 h-44 sm:w-56 sm:h-56 overflow-hidden rounded-full  bg-[#1a0f03]  border border-amber-500/40 ">
              <img
                src="/pankaj.webp"
                alt="Pankaj"
                className="w-full h-full object-contain mt-2 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
