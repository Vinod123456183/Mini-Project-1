import React from "react";

function FourGirlImg({ img, txt }) {
  return (
    <div className="relative">
      <img src={img} alt="" className="w-full h-auto" />
      <p className="absolute bottom-4 left-0 uppercase right-0 text-center bg-brain-wrinkle-white font-fibon-sans text-black p-2">
        {txt}
      </p>
    </div>
  );
}

export default FourGirlImg;
