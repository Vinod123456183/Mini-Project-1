import React, { useState } from "react";
import ItemDisplay from "./ItemDisplay"; // Reusable component for displaying items

function FilterDivFashion2() {
  // State to track the active filter
  const [activeFilter, setActiveFilter] = useState("New Arrival");

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex items-center font-julius-sans-one justify-center p-2 uppercase font-black gap-4 md:gap-8 md:text-2xl md:p-6">
        <div
          className={`p-2 cursor-pointer text-black md:p-4 ${
            activeFilter === "New Arrival" ? "text-blue-600" : ""
          }`}
          onClick={() => setActiveFilter("New Arrival")}
        >
          New Arrival
        </div>
        <div
          className={`p-2 cursor-pointer text-black md:p-4 ${
            activeFilter === "Everyday" ? "text-blue-600 font-bold" : ""
          }`}
          onClick={() => setActiveFilter("Everyday")}
        >
          Everyday
        </div>
        <div
          className={`p-2 cursor-pointer md:p-4 text-black ${
            activeFilter === "Work Wear" ? "text-blue-600" : ""
          }`}
          onClick={() => setActiveFilter("Work Wear")}
        >
          Work Wear
        </div>
      </div>

      {/* Display filtered content directly within ItemDisplay */}
      <ItemDisplay activeFilter={activeFilter} />
    </div>
  );
}

export default FilterDivFashion2;
