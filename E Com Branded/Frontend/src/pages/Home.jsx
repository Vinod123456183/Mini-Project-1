import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import carouselData from "../constants/carouselData"; // Import the data file
import { useNavigate } from "react-router-dom"; // Use useNavigate for routing
import { FaShippingFast, FaUndo, FaLock, FaHeadset } from "react-icons/fa"; // Importing icons from React Icons
import BestSeller from './BestSeller'
import NewCollection from '../pages/NewCollection/NewCollection'
import Icons from './icons/Icons';
import MovingDiv from './MovingDiv/MovingDiv';


import i1 from "../smallpages/Smallassets/demo-fashion-store-banner-01.jpg";
import i2 from "../smallpages/Smallassets/demo-fashion-store-banner-02.jpg";
import i3 from "../smallpages/Smallassets/demo-fashion-store-banner-03.jpg";
import i4 from "../smallpages/Smallassets/demo-fashion-store-banner-04.jpg";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import FashionMagazine from "./FashionMagazine/FashionMagazine";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const navigate = useNavigate(); // Use useNavigate for routing
  const itemRefs = useRef([]); // Use to hold references to item divs

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % carouselData.length;

      // Animate flip out
      gsap.to(containerRef.current, {
        rotationY: 180,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          // Update index and reset flip
          setCurrentIndex(nextIndex);
          gsap.set(containerRef.current, { rotationY: -180, opacity: 0 });

          // Animate flip in
          gsap.to(containerRef.current, {
            rotationY: 0,
            opacity: 1,
            duration: 0.5,
          });
        },
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [currentIndex]);

  const ROUTECHANGE = () => {
    navigate("/collection"); // Navigate to '/collection'
  };

  const handleHover = (index) => {
    const tl = gsap.timeline();

    // Roll effect
    tl.to(itemRefs.current[index], {
      rotationX: 30,
      duration: 0.4,
      // transformOrigin: "50% 50%",
      opacity: 0,
    }).to(itemRefs.current[index], {
      rotationX: 0,
      duration: 0.4,
      opacity: 1,
    });
  };

  return (
    <>
      <div className="overflow-hidden h-[100vh] flex items-center justify-center max-w-[1440px] mx-auto">
        <div
          ref={containerRef}
          className="transition-transform flex duration-500 w-full h-full"
          style={{ perspective: "1000px" }} // Add perspective for 3D effect
        >
          <div className="flex bg-slate-100/50 items-center justify-center mx-auto w-full h-full">
            <div className="w-1/2 mx-16 flex justify-center flex-col">
              <div className="w-[92%] mx-2 h-auto items-center">
                <span className="text-[16px] font-semibold md:text-[20px]">
                  Discount on selected collections
                </span>
              </div>
              <span className="text-[110px] font-semibold font-kodchasan">
                {carouselData[currentIndex].text1}
              </span>
              <span className="text-[70px] font-normal font-kodchasan">
                <p>{carouselData[currentIndex].text2}</p>
              </span>

              <div className="px-2 mt-5 flex items-center">
                <button
                  onClick={ROUTECHANGE}
                  className="bg-gray-900 md:p-5 p-3 text-white font-kodchasan rounded-sm"
                >
                  View Collection
                </button>
              </div>
            </div>
            <div className="w-2/3 md:w-1/2 flex justify-center mx-16">
              <img
                src={carouselData[currentIndex].image}
                alt={`Carousel Image ${currentIndex + 1}`}
                className="md:w-full h-[200%] w-full md:h-auto rounded-lg shadow-lg transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Return Policy */}
      <div className="grid p-14 grid-cols-1 md:grid-cols-4 xl:grid-cols-4 mx-auto gap-6">
        <div className="flex p-2 items-center gap-2">
          <div className="text-4xl flex items-center font-extralight mr-4">
            <FaShippingFast /> {/* Free shipping icon */}
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-pt-caption font-bold text-lg">Free Shipping</p>
            <p className="font-pt-caption text-sm">
              Free shipping on first order
            </p>
          </div>
        </div>

        <div className="flex p-2 items-center gap-2">
          <div className="text-4xl flex items-center font-thin mr-4">
            <FaUndo /> {/* 15 days returns icon */}
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-pt-caption font-bold text-lg">15 Days Returns</p>
            <p className="font-pt-caption text-sm">Moneyback guarantee</p>
          </div>
        </div>

        <div className="flex p-2 items-center gap-2">
          <div className="text-4xl flex items-center mr-4">
            <FaLock /> {/* Secure payment icon */}
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-pt-caption font-bold text-lg">Secure Payment</p>
            <p className="font-pt-caption text-sm">100% protected payment</p>
          </div>
        </div>

        <div className="flex p-2 items-center gap-2">
          <div className="text-4xl flex items-center mr-4">
            <FaHeadset /> {/* Online support icon */}
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-pt-caption font-bold text-lg">Online Support</p>
            <p className="font-pt-caption text-sm">24/7 days a week support</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:gap-6 gap-7 p-2 md:mx-16 ">
        {[
          { img: i1, alt: "Women", label: "Women" },
          { img: i2, alt: "Men", label: "Men" },
          { img: i3, alt: "Others", label: "Others" },
          { img: i4, alt: "Kids", label: "Kids" },
        ].map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center hover:transform hover:-translate-y-2 duration-300"
          >
            <img
              src={item.img}
              alt={item.alt}
              className="w-[82%] md:w-full h-auto gap-3"
            />
            <button
              className="absolute bottom-9 left-1/2 transform -translate-x-1/2 bg-white px-14 text-black font-nunito font-bold p-3"
              onMouseEnter={() => handleHover(index)} // Trigger hover effect
              ref={(el) => (itemRefs.current[index] = el)} // Assign the ref
            >
              {item.label}
            </button>
          </div>
        ))}
      </div>

      <BestSeller/>
      <NewCollection/>
      <Icons/>
      <FeaturedProduct/>
      <MovingDiv/>
      <FashionMagazine/>
      
    </>
  );
};

export default ImageCarousel;
