import React from "react";

function Filters({ text1, text2, text3 }) {
  return (
    <>
      <div className="font-league-spartan uppercase flex items-center justify-center gap-2 p-4">
        <button className="bg-black rounded-full flex items-center justify-center p-2">
          <p className="text-sm mx-2 ">{text1}</p>
        </button>
        <button className="text-black border rounded-full border-gray-600 flex items-center justify-center p-2">
          <p className="text-sm mx-2 ">{text2}</p>
        </button>
        {/* Conditionally render the third filter button only if text3 is provided */}
        {text3 && (
          <button className="text-black border rounded-full border-gray-600 flex items-center justify-center p-2">
            <p className="text-sm mx-2 ">{text3}</p>
          </button>
        )}
      </div>
    </>
  );
}

export default Filters;
