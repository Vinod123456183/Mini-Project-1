import React from "react";
import OrderImg from "../ImageComponent/OrderImg";
import { Link } from "react-router-dom";

function OrderImagesComplete({ items = []  , link}) {
  // Determine the grid columns for medium and larger screens based on the number of items
  let gridCols;
  if (items.length === 5) {
    gridCols = "md:grid-cols-5";
  } else {
    gridCols = "md:grid-cols-4";
  }

  return (
    <>
      <div className={`grid grid-cols-2 ${gridCols} md:p-8 gap-2 md:gap-5 p-2`}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <OrderImg
              key={index}
              img={item.img}
              hoverImg={item.hoverImg}
              text={item.text}
              cost={item.cost}
              size1={item.size1}
              size2={item.size2}
              size3={item.size3}
              size4={item.size4}
              size5={item.size5}
            />
          ))
        ) : (
          <div>No items available</div>
        )}
      </div>

      <div className="flex items-center justify-center md:hidden">
        <Link to={link}>
          <button className="p-2 text-gray-700 border border-slate-400 rounded-sm text-sm">
            View All
          </button>
        </Link>
      </div>

      <div className="flex items-center hidden md:block justify-center p-5 mx-5">
        <div className="flex items-center justify-center mr-4">
          <Link to={link}>
            <button className="p-2 text-gray-600 border border-slate-400 rounded-sm text-sm">
              View All
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default OrderImagesComplete;
