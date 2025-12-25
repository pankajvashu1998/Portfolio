import React from "react";
import { FaLaptopCode } from "react-icons/fa6";

const Experience = ({themeMode}) => {
  const experiences = [
    {
      role: " Walsis eConnect India Pvt. Ltd.",
      company: "Front-End Developer",
      duration: "19-01-2025 – Present",
      description:
        "Developed modern, responsive, and user-friendly web interfaces with a strong focus on performance, accessibility, and clean UI.",
      skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Next.js"],
    },
  ];

  return (
    <section className={`w-full  px-4 py-16  ${themeMode === "dark" ? "bg-linear-to-r from-[#140d01] via-[#311a01] to-[#0d0803] text-white" : "bg-white text-black"}`}>
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold">Experience</h1>
        <p className=" mt-3">
          My professional journey as a Front-End Developer, building modern and
          responsive web experiences.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="
              group
              p-6 md:p-8 rounded-2xl
              bg-white/5 backdrop-blur-xl
              border border-amber-500/20
              shadow-lg shadow-amber-500/10
              hover:shadow-amber-500/40
              hover:-translate-y-2
              transition-all duration-300
            "
          >
            {/* Header */}
            <div className="flex items-start flex-wrap gap-4 mb-4">
              <div
                className="
                w-14 h-14 rounded-full
                
                flex items-center justify-center
                text-amber-700 text-2xl
              "
              >
                <img src="/Walsis.jpg" alt="" />
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-semibold">
                  {exp.role}
                </h2>
                <p className=" text-sm">
                  {exp.company} • {exp.duration}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className=" mb-4 ">{exp.description}</p>

            {/* Skills */}
            <div className="flex  flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1 rounded-full
                    text-sm
                    bg-amber-500/10
                    text-amber-700
                    border border-amber-500/20
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
