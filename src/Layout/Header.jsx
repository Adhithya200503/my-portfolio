import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
  const copyToClipboard = () => {
    const mobileNumber = "+918610046581";
    navigator.clipboard
      .writeText(mobileNumber)
      .then(() => {
        alert("Mobile number copied!");
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };
  return (
    <div className="navbar shadow-sm">
      <div className="navbar-start">
        {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <a
              href="https://github.com/Adhithya200503"
              className="btn bg-amber-500 text-amber-950 text-xl"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a className="btn bg-amber-500 text-amber-950 text-xl">
              <FaLinkedin />
            </a>
          </ul>
        </div> */}
        {/* <a  className="btn btn-ghost text-xl">adhithya.dev</a> */}
        <NavLink to="/">
          <span className="btn btn-ghost hover:bg-amber-500 text-xl text-amber-950">
            adhithya.dev
          </span>
        </NavLink>
      </div>
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div> */}
      <div className="navbar-end gap-2">
        <div
          className="hover:tooltip hover:tooltip-open hover:tooltip-bottom"
          data-tip="Github"
        >
          <a
            href="https://github.com/Adhithya200503"
            className="btn bg-amber-500 text-amber-950 text-xl"
            target="_blank"
          >
            <FaGithub />
          </a>
        </div>
        <div
          className="hover:tooltip hover:tooltip-open hover:tooltip-bottom"
          data-tip="Linkedin"
        >
          <a href="https://www.linkedin.com/in/adhithya-saravanan/" target="_blank" className="btn bg-amber-500 text-amber-950 text-xl">
            <FaLinkedin />
          </a>
        </div>
        <div
        >
          <div className="btn bg-amber-500 text-amber-950 text-xl">
            <FaPhoneVolume onClick={()=>copyToClipboard()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
