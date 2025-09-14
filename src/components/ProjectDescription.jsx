import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

const ProjectContainer = ({ projectInfo }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[80%]  mx-auto mt-5 flex flex-col justify-start gap-5 my-5 ">
        <IoArrowBackCircle
          className="text-4xl text-amber-950"
          onClick={() => navigate(-1)}
        />
        <div>
          <span className="text-2xl font-bold text-amber-950">
            {projectInfo?.projectName}
          </span>
          <p className="text-amber-950">{projectInfo.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xl text-amber-950">Tech Stack</span>
          <div className="flex gap-2">
            {projectInfo.techStack.map((tech, idx) => {
              return (
                <div
                  className="badge badge-outline bg-amber-500 text-amber-950 dark:text-amber-950  gap-2"
                  key={idx}
                >
                  {tech}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <span className="text-xl">Gallery</span>
            <div className="flex flex-wrap gap-3">
              {projectInfo.screenshots.map((imgUrl, idx) => {
                return (
                  <img
                    src={imgUrl}
                    className="w-48 h-48 hover:scale-[1.1] rounded-md transition-all duration-300"
                    onClick={() => {
                      window.open(imgUrl, "_blank");
                    }}
                    key={idx}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {projectInfo.liveDemo == "" ? (
            ""
          ) : (
            <button
              className="btn bg-amber-500 text-amber-950 dark:text-amber-950"
              onClick={() => {
                window.open(projectInfo.liveDemo);
              }}
            >
              <FaEye />
              Live Preview
            </button>
          )}
          <button
            className="btn bg-amber-500 text-amber-950"
            onClick={() => {
              window.open(projectInfo.githubRepo);
            }}
          >
            <IoCodeSlash />
            Source Code
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xl text-amber-950">Features</span>
          <ul>
            {projectInfo.features.map((feature, idx) => {
              return <li className="text-amber-950" key={idx}>{`${idx + 1}.)  ${feature}`}</li>;
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xl text-amber-950">Challenges</span>
          <ul>
            {projectInfo.challenges.map((challenge, idx) => {
              return <li className="text-amber-950" key={idx}>{`${idx + 1}.)  ${challenge}`}</li>;
            })}
          </ul>
        </div>
        {projectInfo.contributors.length == 0 ? (
          ""
        ) : (
          <div>
            <span className="text-xl mb-2.5 text-amber-950">Contributors</span>
            <div>
              <div className="flex flex-col min-h-[30vh] justify-around">
                {projectInfo.contributors.map((contributors, idx) => {
                  return (
                    <div className="flex gap-4">
                      <div className="avatar">
                        <div className="w-16 rounded-full">
                          <img src={contributors.profile} />
                        </div>
                      </div>
                      <div>
                        <p className="text-amber-950">{contributors.role}</p>
                        <p className="text-amber-950">{contributors.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
const ProjectDescription = () => {
  const location = useLocation();
  const projectInfo = location.state?.projectInfo;

  return (
    <div className="min-h-[85vh]">
      {projectInfo ? (
        <ProjectContainer projectInfo={projectInfo} />
      ) : (
        <p>Project Details not found</p>
      )}
    </div>
  );
};

export default ProjectDescription;
