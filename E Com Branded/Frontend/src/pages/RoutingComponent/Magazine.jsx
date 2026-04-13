import React from "react";
import { M } from "../constants2/index";
const Magazine = () => {
  const componentName = "Collection"; // You can also define this inside the component

  return (
    <>
      <div className="text-center mt-10 mb-5">
        <span className="font-encode text-5xl md:text-6xl lg:text-7xl">
          {componentName}
        </span>
      </div>

      <div className="pb-12 font-medium text-center">
        <p className="text-gray-600 font-poppins text-lg md:text-xl">
          <span className="flex items-center justify-center">
            Home
            <span className="px-3 text-xl">&gt;</span>
            <span>{componentName}</span>
          </span>
        </p>
      </div>

      <div className=" mx-20 grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {M.map((item, id) => (
          <div className=" pb-10">
            <div className="flex items-center justify-center">
              <img src={item.img} alt="" className="h-[190px] w-auto mb-6" />
            </div>
            <div className="  flex flex-col items-center mx-auto w-[40%] md:w-[90%]">
              <span className=" mx-auto text-wrap text-center mb-2 font-normal text-gray-400 ">
                {" "}
                {item.p1}
                <p className="mt-3 text-start text-black " >{item.p11}</p>
              </span>
              <p className=" mx-auto text-wrap mb-5 font-bold md:pl-4 ">
                {" "}
                {item.p2}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Magazine;
