import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Item from './index'; // Ensure this path is correct

const MovingDiv = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const totalWidth = container.scrollWidth;

    gsap.to(container, {
      x: -totalWidth / 2, // Scroll left by half the total width of items
      duration: 24, // Adjust duration as needed
      ease: 'linear',
      repeat: -1, // Infinite loop
    });
  }, []);

  return (
    <div className="overflow-hidden relative pb-20 ">
      <div ref={containerRef} className="flex whitespace-nowrap">
        {Item.concat(Item).map((item, id) => ( // Duplicate items for seamless scroll
          <div key={id} className="border-[1px] border-gray-200 gap-0 p-7  inline-block">
            <span className="whitespace-nowrap overflow-hidden text-ellipsis font-nunito text-[26px]">
              {item.p}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingDiv;
