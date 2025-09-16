import React from "react";
import { NavLink } from "react-router-dom";

const Projects = ({projectsInfo}) => {
 
  
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="mb-10 font-extrabold text-2xl text-amber-950 underline decoration-2 decoration-amber-400">
        Projects
      </h1>
      <div className="flex justify-center gap-4 flex-wrap">
        {projectsInfo.map((projectInfo, idx) => {
          return (
            <div className="w-80 shadow-sm" key={idx}>
              <figure>
                <img src={projectInfo.screenshots[0]} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-amber-950">
                  {projectInfo.projectName}
                </h2>
                <p className="text-amber-900">{projectInfo.description.slice(0,250)+"..."}</p>
                <div className="card-actions justify-start">
                  {projectInfo.techStack.map((tech, idx) => {
                    return (
                      <div
                        className="badge badge-outline bg-amber-500 text-amber-950"
                        key={idx}
                      >
                        {tech}
                      </div>
                    );
                  })}
                </div>
                <div className="card-actions justify-start">
                  <NavLink to="/project" state={{ projectInfo }}>
                    <button className="btn bg-amber-500 text-amber-950 rounded-4xl">
                      View in Detail
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
