import React, { useState } from "react";
import NewArrival from "../NewArrivals/NewArrival";
// we used { } bec we have 2 exports

import {BS} from '../constants2/index';
import {
  FaHeart,
  FaEye,
  FaCartPlus,
  FaCircle,
  FaCheckCircle,
} from "react-icons/fa";

const Shop = () => {
  const componentName = "Shop";
  const [selectedCategories, setSelectedCategories] = useState({});

  const toggleCategory = (categoryName) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const categories = [
    { name: "Jeans", count: 22 },
    { name: "Trouser", count: 18 },
    { name: "Swimshirt", count: 15 },
    { name: "Casual Shirt", count: 20 },
    { name: "Winter Jacket", count: 12 },
    { name: "Legging", count: 25 },
    { name: "Dupattas", count: 30 },
  ];

  const renderFilterSection = (title) => (
    <div className="mt-4 mb-5 px-5 py-4 rounded-md text-[15px] flex justify-center bg-slate-800 gap-2 flex-col md:text-[18px]">
      <span className="text-white text-[32px] font-josefin text-center">
        {title}
      </span>
      {categories.map((category) => (
        <ul
          key={category.name}
          className="text-white flex flex-row justify-between items-center mt-2"
        >
          <li className="flex items-center">
            <button
              onClick={() => toggleCategory(category.name)}
              className="text-gray-100 focus:outline-none"
            >
              {selectedCategories[category.name] ? (
                <FaCheckCircle size={20} className="text-green-500 mx-2" />
              ) : (
                <FaCircle size={19} className="text-gray-200" />
              )}
            </button>
            <label className="ml-5">{category.name}</label>
          </li>
          <li>{category.count}</li>
        </ul>
      ))}
    </div>
  );

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

      <div className="flex flex-col md:flex-row mx-auto px-4 md:px-8 pb-10">
        <div className="p-4 md:p-6 md:w-full lg:w-[90%] xl:w-[45%]">
          {/* Left Sidebar */}
          {renderFilterSection("Filter by Category")}
          {renderFilterSection("Filter by Color")}
          {renderFilterSection("Filter by Size")}

          <div className="mt-4 mb-5 px-5 py-4 rounded-md text-2xl md:text-3xl text-center">
            <NewArrival />
          </div>

          <div className="mt-4 mb-4 px-5 py-4 rounded-md text-2xl md:text-3xl">
            <span>Filter by Tag</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 px-2">
            {[
              "Coats",
              "Dresses",
              "Jackets",
              "Polyester",
              "Shirts",
              "Shorts",
              "Tops",
            ].map((tag, i) => (
              <div
                key={i}
                className="border-[1.2px] rounded-md border-gray-300 text-center py-2"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {BS.map((item, index) => (
            <div key={index} className="relative p-2 m-2 group">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.p}
                  className="w-full h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              <div className="absolute inset-0 flex items-end gap-10 sm:gap-5 md:gap-4 mt-2 pt-4 flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white rounded-full p-2 mx-4">
                  <FaHeart className="text-red-500" />
                </div>
                <div className="bg-white rounded-full p-2 mx-4">
                  <FaEye className="text-gray-700" />
                </div>
                <div className="bg-white rounded-full p-2 mx-4">
                  <FaCartPlus className="text-green-500" />
                </div>
                <div className="flex justify-between w-full">
                  <div className="w-full flex items-center mt-[42px] md:mt-52 lg:mt-0 xl:mt-16 2xl:mt-[150px] justify-center">
                    <button className="flex items-center space-x-2 md:space-x-4 p-2 md:p-3 rounded bg-white text-black hover:bg-white/70 transition duration-500">
                      <FaCartPlus className="text-black" />
                      <span className="text-black">Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>

              <h2 className="text-lg font-semibold text-center pt-5">
                {item.p}
              </h2>
              <div className="flex gap-2 items-center justify-center">
                <p className="line-through text-gray-500">{item.cutcost}</p>
                <p className="text-[15px] font-bold text-gray-500">
                  {item.realcost}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4 flex items-center justify-center space-x-4 py-4">
        <button className="text-[20px] md:text-[25px] text-muted-foreground hover:text-muted">
          ←
        </button>
        <button className="text-[20px] md:text-[25px] text-muted-foreground hover:text-muted">
          01
        </button>
        <button className="text-[20px] md:text-[25px] bg-black text-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
          02
        </button>
        <button className="text-[20px] md:text-[25px] text-muted-foreground hover:text-muted">
          03
        </button>
        <button className="text-[20px] md:text-[25px] text-muted-foreground hover:text-muted">
          04
        </button>
        <button className="text-[20px] md:text-[25px] text-muted-foreground hover:text-muted">
          →
        </button>
      </div>
    </>
  );
};

export default Shop;
