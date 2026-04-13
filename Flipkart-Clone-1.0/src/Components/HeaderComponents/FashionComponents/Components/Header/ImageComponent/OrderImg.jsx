import React, { useState } from "react";

function OrderImg({
  img,
  hoverImg,
  text,
  cost,
  size1,
  size2,
  size3,
  size4,
  size5,
}) {
  const [isHovered, setIsHovered] = useState(false); // state to track hover status

  // Handle mouse enter and leave events
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div>
      {/* Image section with smooth transition */}
      <div className="relative">
        <img
          src={isHovered ? hoverImg : img} // Change image based on hover state
          alt="Product"
          className="transition-opacity  ease-in-out opacity-100 hover:opacity-90" // Apply smooth transition
          onMouseEnter={handleMouseEnter} // Trigger hover effect
          onMouseLeave={handleMouseLeave} // Reset to normal image
        />
      </div>

      <div>
        <p className="text-black text-sm pt-2">{text}</p>
        <p className="text-black text-sm pt-1">{cost}</p>
        <div className="flex items-start justify-start gap-2 pt-1  ">
          <p className="text-gray-500 text-xs">{size1}</p>
          <p className="text-gray-500 text-xs">{size2}</p>
          <p className="text-gray-500 text-xs">{size3}</p>
          <p className="text-gray-500 text-xs">{size4}</p>
          <p className="text-gray-500 text-xs">{size5}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderImg;
