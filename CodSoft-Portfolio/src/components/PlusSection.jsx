import React from "react";

function PlusSection({ number, name }) {
  return (
    <div className="border border-[#303033] p-3 lg:p-5   lg:w-full w-full rounded-3xl px-[3.3rem] py-[1.8rem] lg:px-[2.8rem] lg:py-[2.8rem] flex items-center justify-center flex-col  ">
      <p className="font-semibold lg:text-6xl text-xl pb-3 ">{number}</p>
      <p className=" lg:text-md text-xl tracking-tight ">{name}</p>
    </div>
  );
}

export default PlusSection;
