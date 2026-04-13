import React, { useState, useEffect } from "react";

// Replace the import statement for images with direct URL usage
const images = [
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/3db48f3341053283.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/36936297551c5f46.jpeg?q=20", // Replace with the correct URL for img2
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8074e7b2f6d2bfea.jpg?q=20", // Replace with the correct URL for img3
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/c17a729b388bfd52.jpg?q=20", // Replace with the correct URL for img4
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/03988fdb408473ce.jpeg?q=20", // Replace with the correct URL for img5
];

function SmallImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [moving, setMoving] = useState(false);

  // Change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMoving(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setMoving(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setMoving(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index) => {
    setMoving(true);
    setCurrentIndex(index);
  };

  return (
    <div className="image-slider md:pt-8 pt-4">
      <div
        className="slider-container"
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
          overflow: "hidden",
        }}
      >
        <div
          className="slider-images"
          style={{
            display: "flex",
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: moving ? "transform 1s ease" : "none",
          }}
        >
          <div className="flex h-[150px] md:h-auto">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slider ${index}`}
                style={{
                  width: "100%",
                  height: "md:auto h-[200px]",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            background: "transparent",
            border: "none",
            fontSize: "24px",
            color: "white",
            cursor: "pointer",
          }}
        >
          &#8592;
        </button>
        <button
          onClick={goToNext}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            background: "transparent",
            border: "none",
            fontSize: "24px",
            color: "white",
            cursor: "pointer",
          }}
        >
          &#8594;
        </button>

        {/* Dots Below the Slider */}
        <div
          className="dots"
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              style={{
                backgroundColor: currentIndex === index ? "white" : "gray", // Active dot is white, inactive dots are gray
                border: "none",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SmallImageSlider;
