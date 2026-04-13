// BestSeller.js

import React from "react";
import { FaHeart, FaEye, FaCartPlus } from "react-icons/fa";
import { BS } from "./constants2/index"; // Ensure the path is correct

const ProductActions = () => (
  <div className="absolute inset-0 flex items-end gap-4 mt-2 pt-4 flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="bg-white rounded-full p-2 mx-1">
      <FaHeart className="text-red-500" />
    </div>
    <div className="bg-white rounded-full p-2 mx-1">
      <FaEye className="text-gray-700" />
    </div>
    <div className="bg-white rounded-full p-2 mx-1">
      <FaCartPlus className="text-green-500" />
    </div>
    <div className="flex justify-center w-full mt-4">
      <button className="flex items-center space-x-2 p-2 rounded bg-white text-black hover:bg-gray-100 transition duration-300">
        <FaCartPlus className="text-black" />
        <span>Add To Cart</span>
      </button>
    </div>
  </div>
);

const ProductCard = ({ item }) => (
  <div className="relative p-2 m-2 group">
    <div className="relative">
      <img
        src={item.image}
        alt={item.p}
        className="w-full h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover transition-opacity duration-300" />
    </div>

    <ProductActions />

    <h2 className="text-lg font-semibold text-center pt-5">{item.p}</h2>
    <div className="flex gap-2 items-center justify-center">
      <p className="line-through text-gray-500">{item.cutcost}</p>
      <p className="text-[15px] font-bold text-gray-800">{item.realcost}</p>
    </div>
  </div>
);

const BestSeller = ({ showBanner = true }) => (
  <>
    <div className="p-7">
      {showBanner && (
        <h1 className="text-center text-[60px] font-sans">
          Best Seller{" "}
          <span className="font-bold border-b-4 border-yellow-500">
            Products
          </span>
        </h1>
      )}
    </div>

    <div className="mx-auto px-4 md:px-7 lg:px-10 pb-20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {BS.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </div>

    {showBanner && (
      <div className="bg-black p-4 flex items-center justify-center">
        <span className="text-white text-center mx-2 uppercase text-[14px]">
          Take an extra 25% discount on our favorite dress style. Use code:
        </span>
        <button className="bg-yellow-400 px-4 py-1 rounded-2xl ml-2 text-black font-bold">
          FW205
        </button>
      </div>
    )}
  </>
);

export default BestSeller;
