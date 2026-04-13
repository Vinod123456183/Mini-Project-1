import React, { useEffect, useState } from "react";
import Hoodies from "../../Pages/BestSeller/Hoodies";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { LiaGreaterThanSolid } from "react-icons/lia";

function BestSeller2({ heading }) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth < 768); // 1024px is the typical breakpoint for large screens
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex  bg-white mx-2">
        <div className="p-2   ">
          <div className="flex  items-center justify-between px-3">
            <div className="p-2  text-sm md:text-lg font-semibold text-black">
              <h1>{heading}</h1>
            </div>

            <Link
              to="/home"
              className="rounded-full cursor-pointer bg-blue-600 text-white p-1"
            >
              <LiaGreaterThanSolid size={14} />
            </Link>
          </div>

          <div className="bg-white grid grid-cols-2 md:grid-cols-7  gap-2 items-center justify-evenly p-1 ">
            <Hoodies
              img="https://m.media-amazon.com/images/I/71QFfp3Ub0L._AC_UL480_FMwebp_QL65_.jpg"
              name="names"
              price="prices"
              onClick={() => {
                console.error("es");
              }}
            />
            <Hoodies
              img="https://m.media-amazon.com/images/I/81JAxXmLHcL._AC_UL480_FMwebp_QL65_.jpg"
              name="names"
              price="prices"
              onClick={() => {
                console.error("es");
              }}
            />

            <Hoodies
              img="https://m.media-amazon.com/images/I/71FARTagvQL._AC_UL480_FMwebp_QL65_.jpg"
              name="names"
              price="prices"
              onClick={() => {
                console.error("es");
              }}
            />
            <Hoodies
              img="https://m.media-amazon.com/images/I/81YW9cAvJ1L._AC_UL480_FMwebp_QL65_.jpg"
              name="names"
              price="prices"
              onClick={() => {
                console.error("es");
              }}
            />
              <Hoodies
                img="https://m.media-amazon.com/images/I/81oGr44gB4L._AC_UL480_FMwebp_QL65_.jpg"
                name="names"
                price="prices"
                onClick={() => {
                  console.error("es");
                }}
              />
            

            <Hoodies
              img="https://m.media-amazon.com/images/I/71GgojcEpZL._AC_UL480_FMwebp_QL65_.jpg"
              name="names"
              price="prices"
              onClick={() => {
                console.error("es");
              }}
            />

            <Hoodies
              img="https://m.media-amazon.com/images/I/51yt+zk+NaL._AC_UL480_FMwebp_QL65_.jpg"
              name="names"
              price="prices"
              onClick={() => {
                console.error("es");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSeller2;
