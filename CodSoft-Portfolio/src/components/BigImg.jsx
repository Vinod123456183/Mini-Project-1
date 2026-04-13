import React from "react";
import { Link } from "react-router-dom";

function BigImg({ illustrations, name, img, link }) {
  return (
    <div className="  relative w-[18.5rem] h-[18.5rem] md:w-[20rem] md:h-[20rem] lg:w-[29.2rem] lg:h-[29.2rem]   rounded-3xl ">
      <Link to={link}>
        <div className="cursor-pointer  rounded-3xl h-full shadow-lg">
          <div className="px-2 h-full  flex  object-contain items-center justify-center  ">
            <img
              src={img}
              alt="Image"
              className=" rounded-3xl  object-cover hover:opacity-70 transform transition-all duration-300  hover:scale-105"
            />
          </div>
          <div className=" lg:px-12 absolute bottom-5  lg:bottom-8 flex items-center  gap-5 text-xs px-5 lg:text-md  rounded-3xl left-0 w-full text-center  bg-opacity-50 p-2">
            <button className="   text-white bg-black  hover:bg-secondary/80 px-4 py-2 rounded-xl">
              {illustrations}
            </button>
            <button className="   text-white bg-black  hover:bg-secondary/80 px-4 py-2 rounded-xl">
              {name}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BigImg;
