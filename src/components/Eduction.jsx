import React, { useState } from "react";

const Eduction = ({EducationInfo}) => {
  const [educationData, setEducationData] = useState({
    institutionName: "Panimalar Engineering College",
    standard: "B.Tech Computer Science and Business System",
    description:
      "I am currently pursuing my bachelor's degree at Panimalar Engineering College with a CGPA of 8.3. I also participated in an internal hackathon at our college and secured 30th place",
    year: 2027,
    marks: "CGPA 8.3",
    location: "Chennai, Tamil Nadu",
  });
  

  return (
    <div className="w-full flex flex-col items-center p-6">
      <h1 className="mb-8 font-extrabold text-3xl text-amber-950 underline decoration-2 decoration-amber-400">
        Education
      </h1>

      <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-6">
        <ul className="timeline timeline-vertical space-y-6">
          {EducationInfo.map((educationInfo, index) => (
            <li key={index} className="flex flex-col items-center">
              <div className="timeline-start text-sm text-gray-600">
                {educationInfo.year}
              </div>

              <div
                className={`timeline-middle rounded-full p-2 transition-colors duration-300
            ${educationInfo.year === 2027 ? "bg-amber-600" : "bg-gray-300"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div
                className="timeline-end timeline-box cursor-pointer select-none bg-amber-500 text-amber-950  px-4 py-2 rounded shadow-sm"
                onClick={() => setEducationData(educationInfo)}
              >
                {educationInfo.standard}
              </div>
              <hr className="w-24 border-gray-300 mt-4" />
            </li>
          ))}
        </ul>

        <div className="card w-[350px] sm:w-[600px] card-lg ">
          <div className="card-body">
            <h2 className="card-title text-xl text-amber-950">
              {educationData.institutionName}
            </h2>
            <p className="text-gray-600">{educationData.description}</p>
            <div className="mt-4 space-y-2">
              <p className="text-amber-950">
                <strong>Marks:</strong> {educationData.marks}
              </p>
              <p className="text-amber-950">
                <strong >Location:</strong>{" "}
                {educationData.location || "Not specified"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eduction;
