import React from "react";
import { Link, NavLink } from "react-router-dom";

function SixImgNoImg({ img1, img2, img3, img4, img5, img6 }) {
  return (
    <div className="px-2 pt-3 ">
      <div className="grid grid-cols-3 gap-2 pb-3">
        <NavLink
          to={"./h"}
          className="relative"
          activeClassName="active" // This is an optional active class you can style
        >
          <img
            src={img1}
            alt="Image 1"
            className="cursor-pointer w-full h-full object-cover transform transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-95"
          />
        </NavLink>

        <NavLink to={"./h"} className="relative" activeClassName="active">
          <img
            src={img2}
            alt="Image 2"
            className="cursor-pointer w-full h-full object-cover transform transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-95"
          />
        </NavLink>

        <NavLink to={"./h"} className="relative" activeClassName="active">
          <img
            src={img3}
            alt="Image 3"
            className="cursor-pointer w-full h-full object-cover transform transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-95"
          />
        </NavLink>

        <NavLink to={"./h"} className="relative" activeClassName="active">
          <img
            src={img4}
            alt="Image 4"
            className="cursor-pointer w-full h-full object-cover transform transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-95"
          />
        </NavLink>

        <NavLink to={"./h"} className="relative" activeClassName="active">
          <img
            src={img5}
            alt="Image 5"
            className="cursor-pointer w-full h-full object-cover transform transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-95"
          />
        </NavLink>

        <NavLink to={"./h"} className="relative" activeClassName="active">
          <img
            src={img6}
            alt="Image 6"
            className="w-full cursor-pointer h-full object-cover transform transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-95"
          />
        </NavLink>
      </div>
    </div>
  );
}

export default SixImgNoImg;
