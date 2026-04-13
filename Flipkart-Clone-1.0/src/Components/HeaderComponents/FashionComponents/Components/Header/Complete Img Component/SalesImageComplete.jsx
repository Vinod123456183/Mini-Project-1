import React from "react";
import { Link } from "react-router-dom";

function SalesImageComplete({
  heading,
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
    <>
      <div className="pt-10 md:pt-20">
        <div>
          <h2 className="font-kodchasan text-black p-2 md:p-5 text-center text-2xl md:text-4xl">
            {heading}
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4 p-2 gap-2 md:p-5 md:gap-4 font-compel-geometric text-center">
            <Link to={"/collection/price-drop"}>
              {/* This div was missing 'relative' positioning */}
              <div className="relative">
                {/* The text was positioned 'absolute' but the parent wasn't 'relative', causing positioning issues */}
                <p className="uppercase text-white font-compel-geometric text-[14px] md:text-xl absolute bottom-2 md:bottom-5 left-1/2 transform -translate-x-1/2 mt-4 font-semibold">
                  {text1}
                </p>
                <img
                  className="w-full h-[12.8rem] md:h-[26rem] object-cover rounded-lg"
                  src={img1}
                  alt="Price Drop"
                />
              </div>
            </Link>

            <Link to={"/collection/shirts"}>
              {/* This div was missing 'relative' positioning */}
              <div className="relative">
                {/* The text was positioned 'absolute' but the parent wasn't 'relative', causing positioning issues */}
                <p className="uppercase text-white font-compel-geometric text-[14px] md:text-xl absolute bottom-2 md:bottom-5  left-1/2 transform -translate-x-1/2 mt-4 font-semibold">
                  {text2}
                </p>
                <img
                  className="w-full h-[12.8rem] md:h-[26rem] object-cover rounded-lg"
                  src={img2}
                  alt="Shirts"
                />
              </div>
            </Link>

            <Link to={"/collection/trousers"}>
              {/* This div was missing 'relative' positioning */}
              <div className="relative">
                {/* The text was positioned 'absolute' but the parent wasn't 'relative', causing positioning issues */}
                <p className="uppercase text-white font-compel-geometric text-[14px] md:text-xl absolute bottom-2 md:bottom-5 left-1/2 transform -translate-x-1/2 mt-4 font-semibold">
                  {text3}
                </p>
                <img
                  className="w-full h-[12.8rem] md:h-[26rem] object-cover rounded-lg"
                  src={img3}
                  alt="Trousers"
                />
              </div>
            </Link>

            <Link to={"/collection/denims"}>
              {/* This div was missing 'relative' positioning */}
              <div className="relative">
                {/* The text was positioned 'absolute' but the parent wasn't 'relative', causing positioning issues */}
                <p className="uppercase text-white font-compel-geometric text-[14px] md:text-xl absolute bottom-2 md:bottom-5 text-start  left-1/2 transform -translate-x-1/2 mt-4 font-semibold">
                  {text4}
                </p>
                <img
                  className="w-full h-[12.8rem] md:h-[26rem] object-cover rounded-lg"
                  src={img4}
                  alt="Denims"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SalesImageComplete;
