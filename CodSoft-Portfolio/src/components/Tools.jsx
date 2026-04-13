import React from "react";

function Tools({ img, name }) {
  return (
    <div>
      <div className="border border-[#303033]  rounded-[2.1rem] px-8 py-4 gap-5 lg:px-11 lg:py-5">
        <img
          src={img}
          alt=""
          className=" w-14 h-12 lg:w-[4.3rem] lg:h-[4.3rem] object-cover "
        />
        <p className="w-[60px] lg:w-full text-lg text-gray-300 transform scale-x-105 font-semibold   text-center  pt-3">
          {name}
        </p>
      </div>
    </div>
  );
}

export default Tools;
