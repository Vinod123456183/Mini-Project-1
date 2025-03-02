// src/Pages/DashBoard.jsx
import React from "react";
import Left from "../Pages/Left"; // Assuming Left is in the same folder as Right and Middle
import Middle from "../Pages/Middle";
import Right from "../Pages/Right";

function DashBoard() {
  return (
    <div className="flex  w-full flex-col lg:flex-row gap-2 md:gap-[1px] ">
      <Left />
      <Middle />
      <Right />
    </div>
  );
}

export default DashBoard;
