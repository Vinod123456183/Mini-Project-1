import React from "react";

// import {img1 , img2 , img3} from '../../assets/'

function Card() {
  return (
    <>
      <div className="text-center mt-10 mb-5">
        <h1 className="font-encode text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Card
        </h1>
      </div>

      <div className="mb-20 font-medium text-center">
        <p className="text-gray-600 font-poppins text-base sm:text-lg md:text-xl">
          <span className="flex items-center justify-center">
            Home
            <span className="px-2 sm:px-3 text-base sm:text-xl">&gt;</span>
            <span>Card</span>
          </span>
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <h1 className="text-xl md:text-3xl text-center font-bold mb-6 text-gray-700">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Products Section */}
          <div className="w-full lg:w-2/3 bg-white shadow-lg  rounded-lg p-4 sm:p-6">
            <h2 className=" sm:text-xl md:text-2xl font-semibold mb-4 text-gray-500 ">Products</h2>

            <div className="">
              {[
                {
                  img: "https://placehold.co/50x50",
                  name: "Textured Sweater",
                  price: "$23.00",
                  qty: 1,
                },
                {
                  img: "https://placehold.co/50x50",
                  name: "Bermuda Shorts",
                  price: "$35.00",
                  qty: 1,
                },
                {
                  img: "https://placehold.co/50x50",
                  name: "Pocket Sweatshirt",
                  price: "$15.00",
                  qty: 1,
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-gray-200"
                >
                  <div className="flex items-center">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="rounded-full mr-4 w-12 h-12 sm:w-16 sm:h-16 object-cover"
                    />
                    <span className="text-sm sm:text-base text-gray-600">{product.name}</span>
                  </div>
                  <div className="flex items-center gap-4 flex-col md:flex-row">
                    <span className="text-sm sm:text-base font-medium text-gray-700">
                      {product.price}
                    </span>
                    <div className="flex items-center border border-gray-300 rounded-lg px-1 py-1 sm:px-2">
                      <button className=" text-gray-800 p-1 rounded-full text-xs sm:text-sm">
                        -
                      </button>
                      <span className="mx-2 text-sm sm:text-base text-gray-700">
                        {product.qty}
                      </span>
                      <button className=" text-gray-800 p-1 rounded-full text-xs sm:text-sm">
                        +
                      </button>
                    </div>
                    <span className="text-sm sm:text-base font-medium text-gray-700">
                      {product.price}
                    </span>
                  </div>
                </div>
              ))}
              <div className="flex flex-col sm:flex-row items-center justify-between py-4 border-t border-gray-200">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="border border-gray-300 rounded p-2 w-full mb-4 sm:mb-0 sm:w-2/3"
                />
                <button className="bg-black text-white p-2 px-6 ">
                  Apply
                </button>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6">
                <button className="bg-black text-white p-3 w-full sm:w-auto">
                  Empty Cart
                </button>
                <button className="bg-black text-white p-3 w-full sm:w-auto">
                  Update Cart
                </button>
              </div>
            </div>
          </div>

          {/* Cart Totals Section */}
          <div className="bg-white shadow-lg w-full lg:w-1/3 rounded-lg p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              Cart Totals
            </h2>
            <div className="flex justify-between border-b border-gray-200">
              <span className="text-sm sm:text-base pt-4 text-gray-600">Subtotal</span>
              <span className="text-sm sm:text-base  pt-4 font-semibold text-gray-600">
                $405.00
              </span>
            </div>
            <div className="py-2 border-b border-gray-200 pt-5">
              <span className="block mb-2 text-sm sm:text-base font-medium">
                Shipping
              </span>
              <div>
                <label className="pt-2 mb-1 flex items-center text-sm sm:text-base">
                  <input
                    type="radio"
                    name="shipping"
                    value="free"
                    className="mr-2"
                    defaultChecked
                  />
                  Free Shipping
                </label>
                <label className="pt-2 mb-1 flex items-center text-sm sm:text-base">
                  <input
                    type="radio"
                    name="shipping"
                    value="flat"
                    className="mr-2"
                  />
                  Flat: $12.00
                </label>
                <label className="pt-2 flex items-center text-sm sm:text-base">
                  <input
                    type="radio"
                    name="shipping"
                    value="pickup"
                    className="mr-2"
                  />
                  Local Pickup
                </label>
              </div>
            </div>
            <div className="flex pt-4 justify-between items-center  border-gray-200">
              <span className="text-sm sm:text-base">Calculate Shipping</span>
              <select className="border border-gray-300 rounded p-2 text-sm sm:text-base">
                <option>Choose an option</option>
              </select>
            </div>
            <div className="flex pt-4 md:pt-8 pb-4 md:pb-6  justify-between py-2   font-bold   border-gray-200">
              <span>Total</span>
              <span>$405.00 (Includes $19.29 tax)</span>
            </div>
            <button className="bg-black text-white p-3 rounded- w-full ">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
