// src/Pages/Middle.jsx
import React from "react";

function Middle() {
  return (
    <div className="  mx-1 bg-gray-200 p-2 md:p-3 lg:p-5 w-full max-w-full rounded-lg shadow-md flex flex-col items-center justify-center">
      {/* Name Input */}
      <div className="mb-4 w-full ">
        <label
          htmlFor="name"
          className="block font-semibold mb-2 text-sm sm:text-base lg:text-[16px] text-[#2a2a2a]"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter Your Name..."
          className="w-full p-2 lg:p-2 rounded-md border border-gray-300 text-gray-700 focus:outline-none text-sm sm:text-base lg:text-[16px]"
        />
      </div>

      <div className="w-full">
        <label
          htmlFor="prompt"
          className="block  text-[#2a2a2a] font-semibold mb-5 text-sm sm:text-base md:text-[16px]"
        >
          Prompt
        </label>
        <textarea
          id="prompt"
          placeholder="Enter Your Prompt"
          rows={16}
          className="w-full p-2 md:p-3 rounded-md border border-gray-300 text-gray-700 focus:outline-none text-sm sm:text-base md:text-[16px]"
        />
      </div>
    </div>
  );
}

export default Middle;
