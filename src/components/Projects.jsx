import React from "react";

const projects = [
  {
    id: 1,
    title: "Tic Tac Toe Game",
    description:
      "A fun and interactive Tic Tac Toe game built using Next Js. Includes win detection and reset functionality.",
    tech: ["Next JS", "JavaScript", "Talwind CSS"],
    liveLink: "https://tic-tac-toe-game-omega-nine.vercel.app/en",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Cake Shop Website",
    description:
      "A responsive cake shop website with modern UI, product sections and contact details.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    liveLink: "https://maicakeshop.vercel.app",
    githubLink: "#",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen py-20 px-4 bg-linear-to-r from-[#100a00] via-[#160b00] to-[#120a02] text-amber-100">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My Projects
          </h2>
          <p className="text-white mt-3 max-w-xl mx-auto">
            A collection of games and web applications crafted with modern
            technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex justify-center flex-wrap gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full sm:w-[320px] bg-white/5 backdrop-blur-md border border-amber-500/20 rounded-2xl shadow-lg hover:shadow-amber-500/30 hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Card Content */}
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold text-amber-700">
                  {project.title}
                </h3>

                <p className="text-white mt-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((item, index) => (
                    <span
                      key={index}
                      className="text-xs bg-amber-500/10 text-amber-700 px-3 py-1 rounded-full border border-amber-500/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="p-6 border-t border-amber-500/20 flex gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center bg-amber-700 text-white py-2 rounded-lg text-sm font-medium hover:bg-amber-400 transition"
                >
                  Live Demo
                </a>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
