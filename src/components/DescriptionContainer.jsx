import React from "react";
import TechStack from "./TechStack";
import { LiaDownloadSolid } from "react-icons/lia";

const DescriptionContainer = () => {
  return (
    <div className="hero min-h-[50vh]">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="pt-6">
          <h1 className="text-5xl font-bold text-amber-950">Adhithya S</h1>
          <ul className="list-disc list-inside text-amber-900 py-6">
            <li>
              I’m a passionate full stack developer with hands-on experience in
              frontend (React) and backend development (Express.js & Django).
            </li>
            <li>
              I completed an internship focused on React with Firebase, where I
              contributed to building responsive UI and real-time backend
              functionality.
            </li>
            <li>
              I am proficient in JavaScript and Python, and familiar with Java.
            </li>
            <li>
              I enjoy building scalable web applications and learning new
              technologies.
            </li>
            <li>
              I'm currently seeking opportunities where I can contribute to
              impactful projects and grow as a developer.
            </li>
          </ul>

          <button
            className="btn bg-amber-500 text-amber-950"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/18bhLQXZmKODEQheduBMhuwp_ySV9q428/view?usp=sharing",
                "_blank"
              );
            }}
          >
          <LiaDownloadSolid /> Download Resume
          </button>
        </div>
        <img
          src="https://res.cloudinary.com/datvfcnme/image/upload/v1757834367/Adhithya_Portfolio_photo_1_k6oy42.png"
          className="w-[250px] h-[250px] select-none  p-[2px] rounded-2xl  bg-amber-100"
        />
      </div>
    </div>
  );
};

export default DescriptionContainer;
