import React from "react";
import { FaEye } from "react-icons/fa";

const Experience = ({experience}) => {
  

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="mb-10 font-extrabold text-2xl text-amber-950 underline decoration-2 decoration-amber-400">
        Experience
      </h1>
      <div className="flex justify-center gap-4 flex-wrap">
        {experience.map((exp, idx) => {
          return (
            <div
              className="card w-[350px] sm:w-[600px]  card-lg shadow-md"
              key={idx}
            >
              <div className="card-body">
                <h2 className="card-title">{exp.role}</h2>
                <p>{exp.company}</p>
                <p>{exp.description}</p>
                <p>{exp.duration}</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  {exp.technologies.map((tech, idx) => {
                    return (
                      <div
                        className="badge badge-outline  bg-amber-500 text-amber-950 max-w-[200px]"
                        key={idx}
                      >
                        {tech}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
