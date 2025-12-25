import React from "react";
import { FaUserGraduate } from "react-icons/fa6";

const Education = ({ themeMode }) => {
  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institute: "Maulana Mazharul Haque Arabic & Persian University",
      duration: "2023 – 2026",
      description:
        "Currently pursuing BCA with a strong focus on programming, web development, databases, and software engineering concepts.",
    },
    {
      degree: "Senior Secondary (12th)",
      institute: "Ray Birendra Singh College (RBS College), Hajipur",
      duration: "2019",
      description:
        "Completed higher secondary education with emphasis on mathematics and computer fundamentals.",
    },
    {
      degree: "Secondary (10th)",
      institute: "R K K Vidya Mandir, Dharhara, Vaishali, Bihar",
      duration: "2015",
      description:
        "Completed secondary education with a strong academic foundation and interest in technology.",
    },
  ];

  return (
    <section
      className={`w-full min-h-screen px-4 py-14  ${
        themeMode === "dark"
          ? "bg-linear-to-r from-[#030201] via-[#1c0f01] to-[#020101] text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
          Education
        </h1>
        <p className=" mt-4 text-lg">
          My academic journey from school education to a professional degree.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto flex flex-col gap-10 relative">
        {/* vertical line */}
        <div className="absolute left-6 top-0 h-full w-px bg-amber-500/20 " />

        {educationData.map((edu, index) => (
          <div
            key={index}
            className="
              relative
              pl-16
              group
            "
          >
            {/* Icon */}
            <div
              className="
                absolute left-0 top-6
                w-12 h-12 rounded-full
                bg-amber-500/20
                flex items-center justify-center
                text-amber-700 text-xl
                border border-amber-500/30
              "
            >
              <FaUserGraduate />
            </div>

            {/* Card */}
            <div
              className="
                p-6 md:p-8 rounded-2xl
                bg-white/5 backdrop-blur-xl
                border border-amber-500/20
                shadow-lg shadow-amber-500/10
                hover:shadow-amber-500/40
                transition-all duration-300
              "
            >
              {/* Top Row */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h2 className="text-xl md:text-2xl font-semibold">
                  {edu.degree}
                </h2>

                <span
                  className="
                  inline-block
                  px-4 py-1 rounded-full
                  text-sm
                  bg-amber-500/10
                  text-amber-700
                  border border-amber-500/20
                  w-fit
                "
                >
                  {edu.duration}
                </span>
              </div>

              {/* Institute */}
              <p className=" mb-4 text-sm md:text-base">{edu.institute}</p>

              {/* Description */}
              <p className=" leading-relaxed">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
