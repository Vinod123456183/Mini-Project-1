import React, { useState, useEffect } from "react";
import Hoodies from "../../Pages/BestSeller/Hoodies";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { LiaGreaterThanSolid } from "react-icons/lia";

function BestSeller({ heading }) {
  // State to track the screen width
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px is the typical breakpoint for large screens
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex p-2 my-3 gap-1 lg:gap-2  ">
        <div
          className="p-2 lg:p-4"
          style={{
            background: "linear-gradient(180deg, blue 20%, white 25%)", // Vertical gradient from top to bottom
            width: "100%", // Ensure it takes the full width
          }}
        >
          <div className="flex items-center justify-between ">
            <div>
              <h1 className="text-xl font-semibold p-1 md:p-2">{heading}</h1>
            </div>

            <Link
              to="/home" // Navigate to /home route
              className="rounded-full cursor-pointer bg-blue-600 text-white p-1"
            >
              <LiaGreaterThanSolid size={14} /> {/* Render the '>' icon */}
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-2  p-2 lg:p-2 rounded-lg  w-auto">
            <Hoodies
              img="https://m.media-amazon.com/images/I/71j8by4bU0L._AC_UL480_FMwebp_QL65_.jpg"
              name="Hoodie 1"
              price="$50"
            />
            <Hoodies
              img="https://m.media-amazon.com/images/I/81roW4LB+QL._AC_UL480_FMwebp_QL65_.jpg"
              name="Hoodie 2"
              price="$60"
              onClick={() => {
                console.error("Clicked on Hoodie 2");
              }}
            />

            {/* Only render this hoodie on large screens */}
            {isLargeScreen && (
              <Hoodies
                img="https://m.media-amazon.com/images/I/719UiPPxPlL._AC_UL480_FMwebp_QL65_.jpg"
                name="Hoodie 3"
                price="$70"
                onClick={() => {
                  console.error("Clicked on Hoodie 3");
                }}
              />
            )}

            <Hoodies
              img="https://m.media-amazon.com/images/I/81lDMsQoV2L._AC_UL480_FMwebp_QL65_.jpg"
              name="Hoodie 4"
              price="$80"
              onClick={() => {
                console.error("Clicked on Hoodie 4");
              }}
            />
            <Hoodies
              img="https://m.media-amazon.com/images/I/71S9dg5+wbL._AC_UL480_FMwebp_QL65_.jpg"
              name="Hoodie 4"
              price="$80"
              onClick={() => {
                console.error("Clicked on Hoodie 4");
              }}
            />
          </div>
        </div>

        <div className="hidden lg:block w-[30%]  pt-4 pb-4 bg-slate-100">
          <div className="flex items-center justify-center">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/530/810/image/720da148d097675d.jpg?q=20"
              alt=""
              className="h-64 xl:h-80"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSeller;
