import React from "react";

function Names({ name, language }) {
  return (
    <div className="flex  p-1 md:p-2  bg-[#dddddd] items-center rounded-md justify-between w-full mb-2 ">
      <div>{name}</div>
      <div className="text-xs bg-purple-y rounded-md p-[3px]">{language}</div>
    </div>
  );
}

export default Names;
