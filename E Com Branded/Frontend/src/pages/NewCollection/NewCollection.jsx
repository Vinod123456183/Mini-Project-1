import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { gsap } from "gsap";

// Import images
import img1 from "./demo-fashion-store-product-01.jpg";
import img2 from "./demo-fashion-store-product-03.jpg";
import img3 from "./demo-fashion-store-product-02.jpg";
import img4 from "./demo-fashion-store-product-01.jpg";
import img5 from "./demo-fashion-store-product-02.jpg";
import img6 from "./demo-fashion-store-product-03.jpg";

// Array of images
const imgs = [img1, img2, img3, img4, img5, img6];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 2.9; // 4 seconds for constant timing
const DRAG_BUFFER = 70;
const IMAGE_WIDTH = 400; // Width of each image
const IMAGE_GAP = 40; // Space between images
const CONTAINER_WIDTH = (IMAGE_WIDTH + IMAGE_GAP) * (imgs.length - 1) + IMAGE_WIDTH; // Adjusted to account for the last image

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // Adjust translateX to fit the container width
  const translateX = useTransform(
    dragX,
    [0, -CONTAINER_WIDTH],
    [0, -CONTAINER_WIDTH]
  );

  useEffect(() => {
    startAutoSlide();
    return () => {
      clearInterval(intervalRef.current); // Cleanup interval on unmount
    };
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setImgIndex((prevIndex) =>
        prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
      );
    }, AUTO_DELAY);
  };

  const Images = () => (
    <>
      {imgs.map((imgSrc, idx) => (
        <motion.div
          key={idx}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: `${IMAGE_WIDTH}px`,
            height: "400px",
            marginRight: idx < imgs.length - 1 ? `${IMAGE_GAP}px` : 0, // Avoid margin on the last image
          }}
          className="flex-shrink-0 rounded-lg"
        />
      ))}
    </>
  );

  const Dots = ({ imgIndex, onDotClick }) => (
    <div className="mt-5 flex w-full justify-center gap-2">
      {imgs.map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className={`h-3 w-3 rounded-full transition-colors ${
            i === imgIndex ? "bg-black" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );

  const handleDragEnd = () => {
    const x = dragX.get();
    const threshold = DRAG_BUFFER;

    if (x <= -threshold && imgIndex < imgs.length - 1) {
      setImgIndex((prevIndex) => prevIndex + 1);
    } else if (x >= threshold && imgIndex > 0) {
      setImgIndex((prevIndex) => prevIndex - 1);
    }

    // Reset dragX to align with the current image index
    dragX.set(-imgIndex * (IMAGE_WIDTH + IMAGE_GAP));
  };

  const handleDotClick = (index) => {
    setImgIndex(index);
    clearInterval(intervalRef.current); // Stop automatic sliding
    startAutoSlide(); // Restart automatic sliding
  };

  useEffect(() => {
    // Use GSAP for smooth scrolling
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        x: `-${imgIndex * (IMAGE_WIDTH + IMAGE_GAP)}px`,
        duration: 0.4, // Duration of the animation
        ease: "power2.inOut", // Easing function
      });
    }
  }, [imgIndex]);

  return (
    <div className="relative w-full pt-20">
      <div className="flex flex-col md:flex-row">
        <div className="bg-white/30  p-8 md:p-12 flex flex-col mt-8 text-gray-900">
          <h1 className="text-[17px] font-sans mb-2">Lookbook 2023</h1>
          <h2 className="text-5xl font-nunito "> New  <span className="text-primary">arrival</span> </h2>
          <h1 className="text-5xl font-nunito mb-4"><span>collection</span></h1>
          <div className="pt-3 ">
          <button className=" rounded-3xl bg-black text-white/80 px-7 py-3" >View Collection</button>
          </div>
        </div>
        
        <div className="bg-white/70 overflow-hidden relative w-full">
          <motion.div
            drag="x"
            dragConstraints={{ left: -CONTAINER_WIDTH, right: 0 }}
            style={{ x: translateX }}
            onDragEnd={handleDragEnd}
            className="flex"
            ref={containerRef}
          >
            <Images />
          </motion.div>
          {imgs.length > 1 && (
            <div className="absolute bottom-5 w-full">
              <Dots imgIndex={imgIndex} onDotClick={handleDotClick} />
            </div>
          )}
        </div>
      </div>


    </div>
  );
};

// Correct export
export default SwipeCarousel;