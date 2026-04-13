import React from "react";

function Locations() {
  return (
    <div className="  lg:px-1 flex flex-col gap-6 lg:flex-row font-bold justify-between pt-10 border-[#303033]  border-t-2">
      <div>
        <p className="text-sm">Location</p>
        <p className=" lg:text-lg">Haldwani , Uttarakhand</p>
      </div>
      <div>
        <p className="text-sm">Phone</p>
        <p className=" lg:text-lg">+91-9456541392</p>
      </div>
      <div>
        <p className="text-sm">Email</p>
        <p className=" lg:text-lg">vinodsinghbarti420@gmail.com</p>
      </div>
    </div>
  );
}

export default Locations;
