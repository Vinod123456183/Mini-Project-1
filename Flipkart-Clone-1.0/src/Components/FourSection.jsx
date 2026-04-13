import React from "react";

function FourSection({
  main,
  img1,
  text1,
  img2,
  text2,
  img3,
  text3,
  img4,
  text4,
}) {
  return (
    <div className="bg-[#fff] p-2 flex flex-col mx-2">
      <h2 className="text-gray-800 text-xl pb-3 font-semibold max-h-52 ">
        {main}
      </h2>
      <div className="flex-grow grid grid-cols-2  gap-y-1 ">
        <div className="flex flex-col items-center">
          <img
            src={img1}
            alt="img1"
            className="w-12 h-12 md:w-32 md:h-32   object-contain"
          />
          <p className="text-black mt-1 text-sm text-center">{text1}</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={img2}
            alt="img2"
            className="w-12 h-12 md:w-32 md:h-32   object-contain"
          />
          <p className="text-black mt-1 text-sm  text-center">{text2}</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={img3}
            alt="img3"
            className="w-12 h-12 md:w-32 md:h-32   object-contain"
          />
          <p className="text-black mt-1 text-sm  text-center">{text3}</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={img4}
            alt="img4"
            className="w-12 h-12 md:w-32 md:h-32   object-contain"
          />
          <p className="text-black mt-1 text-sm  text-center">{text4}</p>
        </div>
      </div>
      <div className="flex items-center mt-auto p-2">
        <p className="text-black text-sm">Explore All</p>
      </div>
    </div>
  );
}

export default FourSection;
