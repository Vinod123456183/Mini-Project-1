import React from "react";

function MyEdu({ year, course, coursename, details }) {
  return (
    <div className=" border-gray-700 w-full gap-4 lg:gap-10 flex flex-col lg:flex-row justify-between tracking-tighter items-start border-t-[.8px] border-b-[.1px] lg:border-t-[1px] lg:border-b-[1px] pb-8 pt-8 lg:pb-10 lg:pt-10">
      <div className=" text-lg lg:text-xl  lg:w-[60%] ">
        <p className=" text-sm lg:text-lg">{year}</p>
      </div>
      <div className="  text-2xl w-full font-bold lg:w-full">
        <p className=" text-lg lg:text-2xl">{course}</p>
        <p className=" text-sm lg:text-lg">{coursename}</p>
      </div>
      <div>
        <p className=" text-md w-ful ">{details}</p>
      </div>
    </div>
  );
}

export default MyEdu;
