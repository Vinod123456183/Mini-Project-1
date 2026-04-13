// DetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "./API"; // Import the fetchProductDetails function from api.jsx

const DetailPage = () => {
  const { id } = useParams(); // Get the item ID from the URL
  const [item, setItem] = useState(null); // Store the item data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch the item details by its ID
    fetchProductDetails(id)
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Handle loading state
  if (loading) return <div>Loading...</div>;

  // Handle error state

  // const [dropDown , isDropDown] = useState(false)

  return (
    <div className="detail-page">
      {item && (
        <div>
          <div className="flex flex-col md:flex-row p-4 bg-background">
            <div className="md:w-1/2">
              <img
                undefinedhidden="true"
                alt="Olive Ombre Light Weight Sweater"
                src="https://openui.fly.dev/openui/500x500.svg?text=Olive+Ombre+Sweater"
                className="w-full h-auto rounded-lg"
              />
              <div className="flex space-x-2 mt-4">
                <img
                  undefinedhidden="true"
                  alt="Thumbnail 1"
                  src="https://openui.fly.dev/openui/100x100.svg?text=Thumbnail+1"
                  className="w-16 h-16 rounded-lg cursor-pointer"
                />
                <img
                  undefinedhidden="true"
                  alt="Thumbnail 2"
                  src="https://openui.fly.dev/openui/100x100.svg?text=Thumbnail+2"
                  className="w-16 h-16 rounded-lg cursor-pointer"
                />
                <img
                  undefinedhidden="true"
                  alt="Thumbnail 3"
                  src="https://openui.fly.dev/openui/100x100.svg?text=Thumbnail+3"
                  className="w-16 h-16 rounded-lg cursor-pointer"
                />
                <img
                  undefinedhidden="true"
                  alt="Thumbnail 4"
                  src="https://openui.fly.dev/openui/100x100.svg?text=Thumbnail+4"
                  className="w-16 h-16 rounded-lg cursor-pointer"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-6">
              <h1 className="text-2xl font-league-spartan">{item.title}</h1>
              <p className="text-md font-league-spartan pt-2">INR 1,699</p>
              <p className="text-md font-league-spartan ">
                (incl. of all taxes)
              </p>

              <div className="flex pt-9 items-center font-league-spartan">
                <div>
                  <img
                    src="https://www.snitch.co.in/cdn/shop/files/offer_icon-1_622ad98c-ea3e-4c1a-8048-d93363abf7a9_20x.png?v=1708413144/"
                    alt=""
                  />
                </div>
                <div className="flex flex-col ">
                  <div>
                    Get this For{" "}
                    <span>INR {item.price - 0.1 * item.price}</span>
                  </div>
                  <div>Flat 10% Off on your first app purchase</div>
                  <div>
                    Code: <span>APP10</span>
                  </div>
                </div>
              </div>
              <div className="flex pt-4 items-center font-league-spartan">
                <div>
                  <img
                    src="https://www.snitch.co.in/cdn/shop/files/offer_icon-1_622ad98c-ea3e-4c1a-8048-d93363abf7a9_20x.png?v=1708413144/"
                    alt=""
                  />
                </div>
                <div className="flex flex-col ">
                  <div>
                    Get this For
                    <span>INR {item.price - 0.2 * item.price}</span>
                  </div>
                  <div>Flat 20% Off on your first app purchase</div>
                  <div>
                    Code: <span>FLAT20</span>
                  </div>
                </div>
              </div>
              <div className="flex pt-4 items-center font-league-spartan">
                <div>
                  <img
                    src="https://www.snitch.co.in/cdn/shop/files/offer_icon-1_622ad98c-ea3e-4c1a-8048-d93363abf7a9_20x.png?v=1708413144/"
                    alt=""
                  />
                </div>
                <div className="flex flex-col ">
                  <div>
                    Get this For
                    <span>INR {item.price - 0.15 * item.price}</span>
                  </div>
                  <div>Flat 15% Off on your first app purchase</div>
                  <div>
                    Code: <span>FLAT15</span>
                  </div>
                </div>
              </div>
              <div className="flex pt-4 items-center font-league-spartan">
                <div>
                  <img
                    src="https://www.snitch.co.in/cdn/shop/files/offer_icon-1_622ad98c-ea3e-4c1a-8048-d93363abf7a9_20x.png?v=1708413144/"
                    alt=""
                  />
                </div>
                <div className="flex flex-col ">
                  <div>
                    Get this For
                    <span>INR {item.price - 0.2 * item.price}</span>
                  </div>
                  <div>Flat 20% Off on your first app purchase</div>
                  <div>
                    Code: <span>FLAT20</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-semibold">SELECT A SIZE</h2>
                <div className="flex space-x-2 mt-2 ">
                  <div className="flex border border-red-400 p-2 md:p-3 rounded-lg">
                    <button onClick={() => {}} className="">
                      XS
                    </button>
                  </div>

                  <div className="flex border border-red-400 p-2 md:p-3 rounded-lg">
                    <button onClick={() => {}} className="">
                      S
                    </button>
                  </div>

                  <div className="flex border border-red-400 p-2 md:p-3 rounded-lg">
                    <button onClick={() => {}} className="">
                      ML
                    </button>
                  </div>

                  <div className="flex border border-red-400 p-2 md:p-3 rounded-lg">
                    <button onClick={() => {}} className="">
                      L
                    </button>
                  </div>

                  <div className="flex border border-red-400 p-2 md:p-3 rounded-lg">
                    <button onClick={() => {}} className="">
                      XL
                    </button>
                  </div>

                  <div className="flex border border-red-400 p-2 md:p-3 rounded-lg">
                    <button onClick={() => {}} className="">
                      XXL
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => {}}
                  className="mt-4 bg-primary text-primary-foreground p-2 rounded"
                >
                  SIZE CHART
                </button>

                <div className="pt-4 md:pt-6">
                  <button
                    onClick={() => {}}
                    className="p-2 md:p-4 text-black font-league-spartan"
                  >
                    Order Now
                  </button>
                </div>
                <div onClick={() => {}} className="pt-2 md:pt-3">
                  <button className="font-league-spartan p-2 md:p-4">
                    Add To Wishlist
                  </button>
                </div>
              </div>
              <div>
                <div>Dropdown 1</div>
                <div>Dropdown 1</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
