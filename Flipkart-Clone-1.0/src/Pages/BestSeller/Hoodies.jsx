import React from "react";

function Hoodies({ img, name, price, onClick }) {
  return (
    <div className=" border p-3  rounded-lg border-gray-300" onClick={onClick}>
      <div className="p-1 flex items-center justify-center flex-col  ">
        <img
          className="   lg:h-32 lg:w-60 xl:w-40 xl:h-40 object-contain"
          src={img}
          alt={name}
        />
        <p className=" text-xs pt-1 lg:pt-2 md:text-[14px] text-black font-bold font">
          {name}
        </p>
        <p className=" text-xs pt-1 lg:pt-2 md:text-[14px] text-black font-bold font">
          {price}
        </p>
      </div>
    </div>
  );
}

export default Hoodies;
