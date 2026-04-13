import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    text: "Slide 1 - Hello",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img: "https://www.snitch.co.in/cdn/shop/files/1_WebBanner_1920x1080_3_dd3a03a7-c104-4da1-9db2-b3a8eea7e9b7_1400x.jpg?v=1735293689",
    imgSmall:
      "https://www.snitch.co.in/cdn/shop/files/1_CoreLab_1080X1350_85f829d1-2016-4534-b320-8a31a264013b_400x.jpg?v=1735197657", // Smaller image
    navigate: "/sedf1", // Correct the navigate URL to be used in Link
  },
  {
    id: 2,
    text: "Slide 2 - New Collection",
    description: "Curabitur ac velit vitae urna condimentum scelerisque.",
    img: "https://www.snitch.co.in/cdn/shop/files/2_WebBanner_1920x1080_5eab5db3-2ebf-409b-b8dd-ba741be9dc0a_1400x.jpg?v=1735197650",
    imgSmall:
      "https://www.snitch.co.in/cdn/shop/files/2_Winter_1080X1350_f5addf34-f162-41a0-ae03-fc4f59791a61_400x.jpg?v=1735197657", // Smaller image
    navigate: "/1asdrfd", // Correct the navigate URL to be used in Link
  },
  {
    id: 3,
    text: "Slide 3 - Best Deals",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://www.snitch.co.in/cdn/shop/files/6_WebBanner_1920x1080_ae645ca6-9c22-47b0-82a4-75eb38a388b0_1400x.jpg?v=1735197648",
    imgSmall:
      "https://www.snitch.co.in/cdn/shop/files/6_1080X1350_ca74a6eb-d59f-4935-afa7-9297caebd803_400x.jpg?v=1735197657", // Smaller image
    navigate: "/1", // Correct the navigate URL to be used in Link
  },
  {
    id: 4,
    text: "Slide 3 - Best Deals",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://www.snitch.co.in/cdn/shop/files/5_WebBanner_1920x1080_ff92809a-9407-4e6b-bff9-e3a244a96db6_1400x.jpg?v=1735197650",
    imgSmall:
      "https://www.snitch.co.in/cdn/shop/files/5_Wedding_1080X1350_95de6a9a-2ff1-4560-ba4b-b7b2f66436da_400x.jpg?v=1735197658", // Smaller image
    navigate: "/1", // Correct the navigate URL to be used in Link
  },
  {
    id: 5,
    text: "Slide 4 - Best Deals",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://www.snitch.co.in/cdn/shop/files/4_WebBanner_1920x1080_0ca74346-72dd-416c-80f5-14efcfc76635_1400x.jpg?v=1735197649",
    imgSmall:
      "https://www.snitch.co.in/cdn/shop/files/4_Old_Money_Looks_1080X1350_7dc3a264-b658-4a16-a25f-7ecb390b15c5_400x.jpg?v=1735197657", // Smaller image
    navigate: "/1", // Correct the navigate URL to be used in Link
  },
];

function MovingDiv() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 768); // Check for small screen
  };

  // Set up event listener to check screen size
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize); // Listen for window resizing

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Clean up event listener
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Slide content */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-auto flex-shrink-0">
            <Link to={slide.navigate}>
              <div className="relative">
                <img
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                  src={isSmallScreen ? slide.imgSmall : slide.img} // Conditionally load images
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </Link>
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
              currentSlide === index ? "bg-black" : "bg-black"
            } transition-all`}
          />
        ))}
      </div>
    </div>
  );
}

export default MovingDiv;
