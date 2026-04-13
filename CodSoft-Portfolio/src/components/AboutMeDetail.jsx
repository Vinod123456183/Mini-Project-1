import React from "react";
import { Link } from "react-router-dom";

function AboutMeDetail({ projectname, name1, name2, description, img, link }) {
  return (
    <>
      <Link to={link}>
        <div className=" p-4 hover:opacity-70 transform transition-all duration-300  hover:scale-105 lg:p-3  rounded-2xl border-[2px] cursor-wait w-full font-semibold border-gray-700">
          <div className="lg:p-4">
            <p className="  text-md lg:text-2xl  ">{projectname}</p>
            <div className="flex text-xs lg:text-md pt-4 gap-3 items-start justify-start pb-4 ">
              <button className="rounded-lg  border p-2  px-2 lg:px-3">
                {name1}
              </button>
              <button className="rounded-lg border p-2 px-2 lg:px-3">
                {name2}
              </button>
            </div>

            <p className=" pt-2 pb-2 ">{description}</p>
          </div>
          <img
            className=" w-full object-cover hover:opacity-70 "
            src={img}
            alt=""
          />
        </div>
      </Link>
    </>
  );
}

export default AboutMeDetail;
