import React, { useState } from "react";
import Names from "../Components/Names";

function Left() {
  const [searchVoice, setSearchVoice] = useState("");
  const voices = [
    { name: "Marie", language: "French" },
    { name: "John", language: "English" },
    { name: "Lucia", language: "Spanish" },
    { name: "Ahmed", language: "Arabic" },
    { name: "Giovanni", language: "Italian" },
  ];

  // Handle input change and update search state
  const handleSearchChange = (e) => {
    setSearchVoice(e.target.value);
  };

  const filteredVoices = voices.filter(
    (voice) =>
      voice.name.toLowerCase().includes(searchVoice.toLowerCase()) ||
      voice.language.toLowerCase().includes(searchVoice.toLowerCase())
  );

  return (
    <div className="bg-white-layove h-full p-3 sm:w-full lg:w-[50%] flex-wrap">
      <h1 className="text-center text-sm sm:text-sm md:text-[16px] lg:text-[18px] font-semibold sm:mb-3 md:mb-4 lg:mb-4">
        Select Voice
      </h1>

      <input
        type="text"
        placeholder="Search Voice/Language"
        className="border border-border rounded-lg p-1 md:p-2 mb-2 w-full text-sm sm:text-base md:text-[16px] lg:text-[16px]"
        onChange={handleSearchChange} // Update the state on input change
        value={searchVoice} // Controlled input
      />

      <div>
        <div className="flex items-center justify-center mb-3">
          <h2 className="pb-1 md:pt-1  md:text-[15px] lg:text-[18px]">
            {filteredVoices.length > 0 ? "Search Results" : "No Results Found"}
          </h2>
        </div>

        <div className="space-y-1 sm:space-y-2 md:space-y-3">
          {filteredVoices.length > 0 ? (
            filteredVoices.map((voice, index) => (
              <Names key={index} name={voice.name} language={voice.language} />
            ))
          ) : (
            <p className="text-center text-gray-500">
              No matching voices found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Left;
