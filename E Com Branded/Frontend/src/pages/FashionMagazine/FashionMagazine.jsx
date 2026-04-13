import React from "react";
import Item from "./index"; // Ensure this path is correct

const FashionMagazine = () => {
  return (
    <>
      {/* Header Section */}
      {/* <header className=" text-white py-4"> */}
      <div className="container pb-6  mx-auto text-center">
        {/* <h1 className="text-[30px] md:text-[60px] font-bold font-mono">Fashion < span className= ' text-line-below border-b-zinc-200'>Magazine </span>  </h1> */}
        <h1 className="text-3xl md:text-5xl font-bold ">
          Fashion{" "}
          <span className="text-3xl md:text-5xl font-bold border-b-4 border-yellow-400 inline-block -pb-2">
            Magazine
          </span>
        </h1>
      </div>

      <div className="  p-4 flex gap-1 flex-col md:flex-row mx-10">
        {/* <div className="container mx-auto px-4"> */}
        {Item.map((item) => (
          <div className="  mx-auto flex flex-col items-center justify-center ">
            <img
              src={item.img}
              alt={item.name}
              className="w-[250px] h-[200px] object-cover"
            />
            <h2 className=" pt-4 text-xl font-semibold text-gray-800">
              {item.name}
            </h2>
            <p className="text-gray-600">{item.date}</p>
            <p className="mt-2 px-10 font-bold ">{item.lorem}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FashionMagazine;
