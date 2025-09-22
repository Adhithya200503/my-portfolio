import React from "react";
import { FaReact, FaPython, FaLinux, FaGithub } from "react-icons/fa";
import { SiExpress, SiShadcnui, SiDaisyui, SiN8N } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MySQL", icon: <DiMysql /> },
  { name: "MongoDB", icon: <BiLogoMongodb /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "n8n", icon: <SiN8N /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Shadcn", icon: <SiShadcnui /> },
  { name: "DaisyUI", icon: <SiDaisyui /> },
];

const TechStack = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="mb-10 font-extrabold text-2xl text-amber-950 underline decoration-2 decoration-amber-400">Skills</h1>
      <div className="flex justify-center gap-4 flex-wrap">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="hover:tooltip hover:tooltip-open hover:tooltip-bottom"
            data-tip={skill.name}
          >
            <button className="btn btn-xl bg-amber-500 text-amber-950">
              {skill.icon}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
