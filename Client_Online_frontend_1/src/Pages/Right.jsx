// src/Pages/Right.jsx
import React, { useState } from "react";

function Right() {
  const [activeSection, setActiveSection] = useState("call"); // Default active section
  const [name, setName] = useState(""); // State to hold the name
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="flex flex-col items-center p-4 sm:p-3 md:p-6 lg:p-8 bg-[#fdfdfd] h-full w-full lg:w-[50%] mx-1">
      {/* Toggle Buttons */}
      <div className="flex mb-4 bg-[#f2d4ff] text-black w-full items-center justify-center">
        <button
          onClick={() => setActiveSection("call")}
          className={`p-2 ${
            activeSection === "call" ? "font-bold bg-[#fff8f8] rounded-md" : ""
          }`}
        >
          Test Call
        </button>
        <button
          onClick={() => setActiveSection("chat")}
          className={`p-2 ${
            activeSection === "chat" ? "font-bold bg-[#fff8f8] rounded-md" : ""
          }`}
        >
          Test Chat
        </button>
      </div>

      {/* Conditional Rendering of Content */}
      <div className="pt-5 text-black p-2 rounded shadow w-full">
        {activeSection === "call" ? (
          <>
            <select
              className="w-full p-2 mb-2 border border-gray-300 rounded text-sm sm:text-base"
              defaultValue=""
            >
              <option value="" disabled>
                Select your phone number
              </option>
              <option value="1234567890">123-456-7890</option>
              <option value="0987654321">098-765-4321</option>
              <option value="5551234567">555-123-4567</option>
            </select>

            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mb-2 border border-gray-300 rounded text-sm sm:text-base"
            />

            <input
              type="text"
              placeholder="Enter Phone No"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-2 mb-2 border border-gray-300 rounded text-sm sm:text-base"
            />

            <button className="w-full p-2 bg-[#7d34ec] text-white rounded hover:bg-[#753cca] text-sm sm:text-base">
              Call Me
            </button>
          </>
        ) : (
          <>
            <h2 className="text-lg sm:text-xl font-semibold">
              Test Chat Content
            </h2>
            <p className="text-sm sm:text-base">
              This is the content for the Test Chat section.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Right;
