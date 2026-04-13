import React from "react";

function SalesImg({ img, text }) {
  return (
    <>
      <div className="bg-red-500 relative rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
        {/* Text placed above the image */}
        <p className=" uppercase text-white font-compel-geometric text-md md:text-3xl absolute top-5 left-1/2 transform -translate-x-1/2 mt-4 font-semibold">
          {text}
        </p>

        <img
          className=" w-full h-[12.8rem] md:h-[26rem] object-cover rounded-lg"
          src={img}
          alt=""
        />
      </div>
    </>
  );
}

export default SalesImg;
