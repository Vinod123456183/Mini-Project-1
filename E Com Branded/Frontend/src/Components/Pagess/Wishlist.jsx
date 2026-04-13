// Wishlist.js

import React from "react";
import BestSeller from "../../pages/BestSeller";

const Wishlist = () => (
  <>
    <div className="text-center mt-10 mb-5">
      <span className="font-encode text-5xl md:text-6xl lg:text-7xl">
        Wishlist
      </span>
    </div>
    
    <div className="mb-20 font-medium text-center">
      <p className="text-gray-600 font-poppins text-lg md:text-xl">
        <span className="flex items-center justify-center">
          Home
          <span className="px-3 text-xl">&gt;</span>
          <span>Wishlist</span>
        </span>
      </p>
    </div>

    <BestSeller showBanner={false} /> {/* Exclude the banner */}
  </>
);

export default Wishlist;
