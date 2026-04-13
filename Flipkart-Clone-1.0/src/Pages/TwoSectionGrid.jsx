import React from "react";
import { Link } from "react-router-dom";

function TwoSectionGrid({
  heading,
  img1,
  name1,
  discount1,
  img2,
  name2,
  discount2,
  img3,
  name3,
  discount3,
  img4,
  name4,
  discount4,
}) {
  return (
    <div className="  p-1  bg-white px-2">
      <div className="flex flex-col p-2 md:p-3 bg-[#ff] max-w-full gap-1 w-full ">
        <div className="flex justify-between mb-2 p-2 text-gray-800 text-xl font-semibold">
          <p className="">{heading}</p>
          <p className="">Arrow </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link to={"./"}>
            <div
              onClick={console.log("E")}
              className="border cursor-pointer border-[#c2c2c2d8] rounded-sm p-4 flex flex-col "
            >
              <img
                src={img1}
                alt="Mens Jacket"
                className="  w-full hover:scale-105 rounded-sm   object-contain mb-2 transition-transform duration-300 ease-in-out h-36 "
              />

              <p className="text-md  pb-3 font-semibold pt-2 text-gray-800 text-center ">
                {name1}
              </p>
              {/* <p className="text-[16px] text-[#249345] pt-1 font-bold">
                {discount1}
              </p> */}
            </div>
          </Link>
          <Link to={"./"}>
            <div
              onClick={console.log("E")}
              className="border cursor-pointer border-[#c2c2c2d8] rounded-sm p-4 flex flex-col "
            >
              <img
                src={img2}
                alt="Mens Jacket"
                className="  w-full hover:scale-105 rounded-sm   object-contain mb-2 transition-transform duration-300 ease-in-out h-36"
              />

              <p className="text-md  pb-3 font-semibold pt-2 text-gray-800 text-center">
                {name2}
              </p>
              {/* <p className="text-[16px] text-[#249345] pt-1 font-bold">
                {discount2}
              </p> */}
            </div>
          </Link>
          <Link to={"./"}>
            <div
              onClick={console.log("E")}
              className="border cursor-pointer border-[#c2c2c2d8] rounded-sm p-4 flex flex-col "
            >
              <img
                src={img3}
                alt="Mens Jacket"
                className="  w-full hover:scale-105 rounded-sm   object-contain mb-2 transition-transform duration-300 ease-in-out h-36 "
              />

              <p className="text-md  pb-3 font-semibold pt-2 text-gray-800 text-center">
                {name3}
              </p>
              {/* <p className="text-[16px] text-[#249345] pt-1 font-bold">
                {discount3}
              </p> */}
            </div>
          </Link>
          <Link to={"./"}>
            <div
              onClick={console.log("E")}
              className="border cursor-pointer border-[#c2c2c2d8] rounded-sm p-4 flex flex-col "
            >
              <img
                src={img4}
                alt="Mens Jacket"
                className="  w-full hover:scale-105 rounded-sm  object-contain mb-2 transition-transform duration-300 ease-in-out h-36"
              />

              <p className="text-md  pb-3 font-semibold pt-2 text-gray-800 text-center">
                {name4}
              </p>
              {/* <p className="text-[16px] text-[#249345] pt-1 font-bold">
                {discount4}
              </p> */}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TwoSectionGrid;
