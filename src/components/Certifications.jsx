import React from "react";
import { FaDownLong } from "react-icons/fa6";
import { LiaDownloadSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const Certifications = ({courses}) => {
 

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="mb-10 font-extrabold text-2xl text-amber-950 underline decoration-2 decoration-amber-400">
        Certifications
      </h1>
      <div className="flex justify-center gap-4 flex-wrap">
        {courses.map((course) => {
          return (
            <div className="card w-[350px] sm:w-[600px]  card-lg shadow-md" key={course.id}>
              <div className="card-body ">
                <h2 className="card-title">{course.name}</h2>
                <p>{course.platform}</p>
                <p>{course.provider}</p>
                <p>Expiry Date {" "}{course.expiryDate}</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  {course.learnedTopics.map((topic , idx) => {
                    return (
                      <div
                        className="badge badge-outline  bg-amber-500 text-amber-950 max-w-[200px]"
                        key={idx}
                      >
                        {topic}
                      </div>
                    );
                  })}
                </div>
                <div className="justify-end card-actions">
                  <button className="btn bg-amber-500 text-amber-950 rounded-4xl" onClick={()=>window.open(course.DownloadLink , "_blank")}>
                    <LiaDownloadSolid />
                    Download
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
