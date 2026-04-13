import React from "react";
import { FaHeart, FaEye, FaCartPlus } from "react-icons/fa";
import BS from './index'; // Make sure this is the correct path

const FeaturedProducts = () => {
  return (
    <>


      <div className="p-7">
        <h1 className="text-center text-[50px] md:text-[60px] font-sans">
          Featured
          <span className="font-bold border-b-yellow-500"> Products </span>
        </h1>
      </div>



      <div className="mx-auto px-4 md:px-7 lg:px-10 pb-10">
        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5">
          {BS.map((item, index) => (
            <div key={index} className="relative p-2 m-2 group">
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.p}
                  className="w-full h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                />
                {/* Dark overlay for the image on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              <div
                className="absolute inset-0 flex items-end gap-10 sm:gap-5 md:gap-4 mt-2 pt-4 flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
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
                  <div className="w-full flex items-center mt-[42px] md:mt-52 lg:mt-0 xl:mt-16 2xl:mt-[350px] justify-center">
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



    </>
  );
};

export default FeaturedProducts;
