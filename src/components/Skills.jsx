import React from "react";

const Skills = ({themeMode}) => {
  const skills = [
    { tech: "HTML 5", icon: "/html-5.png" },
    { tech: "CSS 3", icon: "/css-3.png" },
    { tech: "Tailwind CSS", icon: "/tailwind.png" },
    { tech: "JavaScript", icon: "/js.png" },
    { tech: "ReactJS", icon: "/physics.png" },
    { tech: "NextJS", icon: "/next.jpg" },
    { tech: "NodeJS", icon: "/programing.png" },
    { tech: "ExpressJS", icon: "/express.png" },
    { tech: "MongoDB", icon: "/mongodb.png" },
    { tech: "GitHub", icon: "/github.png" },
    { tech: "Postman", icon: "/postman.png" },
    { tech: "Thunder Client", icon: "/thunder.png" },
  ];

  return (
    <section className={`w-full min-h-screen px-4 py-12  ${themeMode === "dark"? "bg-linear-to-r from-[#27241f] via-[#281a08] to-[#2c2924] text-white": "bg-gray-100 text-black"}`}>
      
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Technical <span className="text-amber-700 font-bold">Skills</span>
      </h1>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              group
              p-4 rounded-2xl
              bg-white/5 backdrop-blur-xl
              border border-amber-500/20
              shadow-lg shadow-amber-500/10
              hover:shadow-amber-500/40
              hover:-translate-y-2
              transition-all duration-300
              flex flex-col items-center text-center
            "
          >
            {/* Icon */}
            <div
              className="
                w-24 h-24 rounded-full
                bg-amber-500/10
                flex items-center justify-center
                mb-4
                group-hover:scale-110
                transition-transform duration-300
              "
            >
              <img
                src={skill.icon}
                alt={skill.tech}
                className="w-14 h-14 object-contain"
              />
            </div>

            {/* Skill Name */}
            <h2 className="text-lg font-medium ">
              {skill.tech}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
