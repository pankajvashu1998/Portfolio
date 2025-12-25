"use client";
import React, { useState } from "react";
import Banner from "./Banner";
import Services from "./Services";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Navbar from "./Navbar";
import Contact from "./Contact";

const Home = () => {
  const [themeMode, setThemeMode] = useState("dark");
  return (
    <div>
      <Navbar themeMode={themeMode} setThemeMode={setThemeMode} />
      <Banner themeMode={themeMode} />
      <Services themeMode={themeMode} />
      <Skills themeMode={themeMode} />
      <Experience themeMode={themeMode} />
      <Education themeMode={themeMode} />
      <Contact themeMode={themeMode}/>
    </div>
  );
};

export default Home;
