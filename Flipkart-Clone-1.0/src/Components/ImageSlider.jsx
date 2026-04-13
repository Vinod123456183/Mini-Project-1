import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    text: "Slide 1 - Hello",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img: "https://ecomusnext-themesflat.vercel.app/images/slider/women-slideshow-2.jpg",
  },
  {
    id: 2,
    text: "Slide 2 - New Collection",
    description: "Curabitur ac velit vitae urna condimentum scelerisque.",
    img: "https://ecomusnext-themesflat.vercel.app/images/slider/women-slideshow-1.jpg",
  },
  {
    id: 3,
    text: "Slide 3 - Best Deals",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://ecomusnext-themesflat.vercel.app/images/slider/women-slideshow-3.jpg",
  },
];

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-auto flex-shrink-0">
            <div className="relative">
              {/* Text on top of image */}
              <h2 className="absolute top-[190px] left-20 transform -translate-y-1/2 text-white text-4xl font-bold">
                {slide.text}
              </h2>

              <p className="absolute top-1/2 left-20 transform -translate-y-1/2 text-white text-xl font-light">
                {slide.description}
              </p>

              <button className="bg-red-600 text-white absolute top-[300px] left-20 py-2 px-4 rounded-lg">
                Click Me
              </button>

              <img
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                src={slide.img}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots for slide indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)} // Go to specific slide when dot is clicked
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-red-600" : "bg-gray-400"
            } transition-all`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
