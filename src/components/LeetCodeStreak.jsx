import axios from "axios";
import React, { useEffect, useState } from "react";

const LeetCodeStreak = () => {
  const [leetCodeData, setLeetCodeData] = useState(null);

  useEffect(() => {
    const getLeetcodeData = async () => {
      try {
        const res = await axios.get(
          "https://leetcode-stats-api.herokuapp.com/user4836F"
        );
        setLeetCodeData(res.data);
      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
      }
    };

    getLeetcodeData();
  }, []);

  if (!leetCodeData) {
    return <p className="mx-auto">Loading...</p>;
  }

  const easyPercent = (
    (leetCodeData.easySolved / leetCodeData.totalEasy) *
    100
  ).toFixed(1);
  const mediumPercent = (
    (leetCodeData.mediumSolved / leetCodeData.totalMedium) *
    100
  ).toFixed(1);
  const hardPercent = (
    (leetCodeData.hardSolved / leetCodeData.totalHard) *
    100
  ).toFixed(1);

  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <h1 className="mb-10 font-extrabold text-2xl text-amber-950 underline decoration-2 decoration-amber-400">My LeetCode Streak</h1>
      <span className="text-amber-950">Total Problems Solved {leetCodeData.totalSolved} / {leetCodeData.totalQuestions}</span>
      <span className="text-amber-950">Rank {leetCodeData.ranking}</span>
      <div className="flex gap-4 mt-10">
        <div className="text-center">
          <div
            className="radial-progress bg-amber-500 text-amber-950 text-amber-950-content"
            style={{ "--value": easyPercent }}
            aria-valuenow={easyPercent}
            role="progressbar"
          >
            {easyPercent}%
          </div>
          <p className="text-amber-950">Easy</p>
        </div>

        <div className="text-center">
          <div
            className="radial-progress bg-green-500 text-amber-950 text-green-950-content"
            style={{ "--value": mediumPercent }}
            aria-valuenow={mediumPercent}
            role="progressbar"
          >
            {mediumPercent}%
          </div>
          <p className="text-amber-950">Medium</p>
        </div>

        <div className="text-center">
          <div
            className="radial-progress bg-red-500 text-amber-950 text-red-950-content"
            style={{ "--value": hardPercent }}
            aria-valuenow={hardPercent}
            role="progressbar"
          >
            {hardPercent}%
          </div>
          <p className="text-amber-950">Hard</p>
        </div>
      </div>
      <button className="btn mb-10 mt-10 bg-amber-500 text-amber-950 rounded-4xl" onClick={()=>{window.open("https://leetcode.com/u/user4836F/","_blank")}}>View My Leet Code Profile</button>
    </div>
  );
};

export default LeetCodeStreak;
