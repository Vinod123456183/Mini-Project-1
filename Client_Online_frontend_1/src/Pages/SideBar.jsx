// src/SideBar.jsx
import React from "react";
import { BsSoundwave } from "react-icons/bs";
import { CgHashtag } from "react-icons/cg";
import { FaCalendarMinus } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "../App.css"; // Ensure your styles are imported

function SideBar() {
  return (
    <div className="flex p-3  h-full md:flex md:block hidden">
      <aside className="flex flex-col justify-between h-full gap-10 items-center">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `cursor-pointer ${isActive ? "text-purple-y" : "text-gray-700"}`
          }
        >
          <BsSoundwave className="icon-size " />
        </NavLink>

        <NavLink
          to="/setting"
          className={({ isActive }) =>
            `cursor-pointer ${isActive ? "text-purple-y" : "text-gray-700"}`
          }
        >
          <IoSettingsSharp className="icon-size" />
        </NavLink>

        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            `cursor-pointer ${isActive ? "text-purple-y" : "text-gray-700"}`
          }
        >
          <FaCalendarMinus className="icon-size" />
        </NavLink>

        <NavLink
          to="/hashtag"
          className={({ isActive }) =>
            `cursor-pointer ${isActive ? "text-blue-500" : "text-gray-700"}`
          }
        >
          <CgHashtag className="icon-size" />
        </NavLink>
      </aside>
    </div>
  );
}

export default SideBar;
