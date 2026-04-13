import React from "react";
import { C } from "../constants2/index";
const Collection = () => {
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

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto p-10 mb-10">
        {C.map((item, key) => (
          <div key={key} className="relative">
            <div className="relative transition-transform hover:-translate-y-2 duration-300">
              <p className="absolute top-0 right-0 bg-white px-2 py-1 m-2 rounded shadow z-10">
                {item.text}
              </p>
              <img
                src={item.img}
                alt="Img"
                className="w-full h-[290px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 mx-auto md:px-28 px-32 bg-opacity-50  py-2">
                <p className=" mb-10 text-center p-2 font-medium bg-white text-black">
                  {item.it}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Collection;
