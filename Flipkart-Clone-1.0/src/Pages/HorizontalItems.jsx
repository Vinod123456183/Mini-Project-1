import React from "react";
import { Link } from "react-router-dom";

function HorizontalItems({
  heading,
  img1,
  discount1,
  name1,
  img2,
  discount2,
  name2,
  img3,
  discount3,
  name3,
  img4,
  discount4,
  name4,
  img5,
  discount5,
  name5,
  img6,
  discount6,
  name6,
}) {
  return (
    <div className=" p-3  items-center justify-center  gap-2  w-full  bg-white ">
      <div className=" pb-3 flex justify-between items-center w-full ">
        <div className="font-semibold text-gray-900 text-xl p-1 pb-4">
          <h2 className="">{heading}</h2>
        </div>
        <div>
          <h2>A</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 sm md:grid-cols-4 lg:grid-cols-6 w-full gap-2">
        <Link to={"./"}>
          <div
            onClick={console.log("E")}
            className="border cursor-pointer border-[#c2c2c2d8] rounded-sm p-4 flex flex-col items-center"
          >
            <img
              src={img1}
              alt="Mens Jacket"
              className="w-full hover:scale-105 rounded-sm h-52 object-contain mb-2 transition-transform duration-300 ease-in-out"
            />
            <p className="text-sm text-gray-900 pt-2 text-center">{name1}</p>
            <p className="text-[16px] text-[#0c0c0c] pt-1 font-semibold text-center">
              {discount1}
            </p>
          </div>
        </Link>
        <Link to={"./"}>
          <div
            onClick={console.log("E")}
            className="border cursor-pointer border-[#c2c2c2d8] rounded-sm p-4 flex flex-col items-center"
          >
            <img
              src={img2}
              alt="Mens Jacket"
              className="w-full hover:scale-105 rounded-sm h-52 object-contain mb-2 transition-transform duration-300 ease-in-out"
            />
            <p className="text-sm text-gray-900 pt-2 text-center">{name2}</p>
            <p className="text-[16px] text-[#0c0c0c] pt-1 font-semibold text-center">
              {discount2}
            </p>
          </div>
        </Link>
        <Link to={"./"}>
          <div
            onClick={console.log("E")}
            className="border cursor-pointer border-[#c2c2c2d8] rounded-sm p-4 flex flex-col items-center"
          >
            <img
              src={img3}
              alt="Mens Jacket"
              className="w-full hover:scale-105 rounded-sm h-52 object-contain mb-2 transition-transform duration-300 ease-in-out"
            />
            <p className="text-sm text-gray-900 pt-2 text-center">{name3}</p>
            <p className="text-[16px] text-[#0c0c0c] pt-1 font-semibold text-center">
              {discount3}
            </p>
          </div>
        </Link>
        <Link to={"./"}>
          <div
            onClick={console.log("E")}
            className="border cursor-pointer border-[#c2c2c2d8] rounded-sm p-4 flex flex-col items-center"
          >
            <img
              src={img4}
              alt="Mens Jacket"
              className="w-full hover:scale-105 rounded-sm h-52 object-contain mb-2 transition-transform duration-300 ease-in-out"
            />
            <p className="text-sm text-gray-900 pt-2 text-center">{name4}</p>
            <p className="text-[16px] text-[#0c0c0c] pt-1 font-semibold text-center">
              {discount4}
            </p>
          </div>
        </Link>
        <Link to={"./"}>
          <div
            onClick={console.log("E")}
            className="border cursor-pointer border-[#c2c2c2d8] rounded-sm p-4 flex flex-col items-center"
          >
            <img
              src={img5}
              alt="Mens Jacket"
              className="w-full hover:scale-105 rounded-sm h-52 object-contain mb-2 transition-transform duration-300 ease-in-out"
            />
            <p className="text-sm text-gray-900 pt-2 text-center">{name5}</p>
            <p className="text-[16px] text-[#0c0c0c] pt-1 font-semibold text-center">
              {discount5}
            </p>
          </div>
        </Link>
        <Link to={"./"}>
          <div
            onClick={console.log("E")}
            className="border cursor-pointer border-[#c2c2c2d8] rounded-sm p-4 flex flex-col items-center"
          >
            <img
              src={img6}
              alt="Mens Jacket"
              className="w-full hover:scale-105 rounded-sm h-52 object-contain mb-2 transition-transform duration-300 ease-in-out"
            />
            <p className="text-sm text-gray-900 pt-2 text-center">{name6}</p>
            <p className="text-[16px] text-[#0c0c0c] pt-1 font-semibold text-center">
              {discount6}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HorizontalItems;
