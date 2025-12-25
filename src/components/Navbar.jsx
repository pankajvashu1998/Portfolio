"use client";

import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa6";

import { MdLightMode, MdNightlight } from "react-icons/md";

const Navbar = ({ themeMode, setThemeMode }) => {
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 
        ${
          themeMode !== "dark"
            ? "bg-white text-gray-700"
            : "bg-linear-to-r from-[#100a00] via-[#160b00] to-[#120a02] text-white "
        }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaCode className="text-3xl text-amber-700" />
          <h1 className="text-2xl font-bold tracking-wide">PANKAJ</h1>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() =>
              setThemeMode(themeMode === "light" ? "dark" : "light")
            }
            className="
              p-2 rounded-full
              bg-[#4a2a0a]
              hover:bg-[#5c3310]
              transition
              cursor-pointer
            "
          >
            {themeMode === "light" ? (
              <MdNightlight className="text-xl text-amber-300" />
            ) : (
              <MdLightMode className="text-xl text-yellow-300" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
