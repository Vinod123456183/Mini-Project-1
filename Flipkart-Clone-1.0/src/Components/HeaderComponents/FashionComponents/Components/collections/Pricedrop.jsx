import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { fetchProducts } from "./API"; // Import the fetchProducts function from api.jsx
import Dropdown from "./Dropdown"; // Import the Dropdown component

const PriceDrop = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [refineOpen, setRefineOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]); // Store all fetched items here
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Items per page set to 10

  const filterRef = useRef(null);
  const refineRef = useRef(null);
  const filterButtonRef = useRef(null); // Reference to filter button
  const refineButtonRef = useRef(null); // Reference to refine button

  const navigate = useNavigate(); // Used for navigation
  const location = useLocation(); // Used for reading the current URL (for page query)

  // Toggle functions for filter and refine dropdowns
  const toggleFilterDropdown = () => setFilterOpen(!filterOpen);
  const toggleRefine = () => setRefineOpen(!refineOpen);

  // Close the dropdown if clicked outside the dropdown button or dropdown content
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close filter dropdown if clicked outside button or content
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target) &&
        !filterButtonRef.current.contains(event.target)
      ) {
        setFilterOpen(false);
      }

      // Close refine dropdown if clicked outside button or content
      if (
        refineRef.current &&
        !refineRef.current.contains(event.target) &&
        !refineButtonRef.current.contains(event.target)
      ) {
        setRefineOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fetch data using the API function for the specific page
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        // Fetch data for the first 10 pages (each with 10 items) to accumulate 100 items
        const allProductData = [];
        for (let page = 1; page <= 10; page++) {
          const data = await fetchProducts(page, itemsPerPage);
          allProductData.push(...data); // Accumulate all products
        }
        setAllItems(allProductData); // Store all items
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  // Read the current page from the query parameter in the URL
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const page = parseInt(urlParams.get("page"), 10);
    if (page && page > 0) {
      setCurrentPage(page);
    }
  }, [location]);

  // Calculate the start and end index for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get the products for the current page
  const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{`Error: ${error}`}</div>;

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(allItems.length / itemsPerPage)
    ) {
      setCurrentPage(pageNumber);
      // Update the URL with the new page number using navigate
      navigate(`?page=${pageNumber}`);
    }
  };

  return (
    <div className="flex">
      {/* Left Filter Sidebar */}
      <div
        className="filter-sidebar md:w-[20%] border-r overflow-y-auto hidden lg:block"
        style={{ maxHeight: "90vh" }}
      >
        <Dropdown
          title="Collections"
          options={[
            "Collection 1",
            "Collection 2",
            "Collection 3",
            "Collection 4",
          ]}
        />
        <Dropdown
          title="Size"
          options={["Small", "Medium", "Large", "Extra Large"]}
        />
        <Dropdown
          title="Fit"
          options={["Slim Fit", "Regular Fit", "Relaxed Fit"]}
        />
        <Dropdown
          title="Pattern"
          options={["Solid", "Stripes", "Checked", "Polka Dots"]}
        />
        <Dropdown title="Colors" options={["Red", "Blue", "Green", "Black"]} />
        <Dropdown
          title="Price (INR)"
          options={[
            "₹500 - ₹1000",
            "₹1001 - ₹3000",
            "₹3001 - ₹5000",
            "₹5001 - ₹10000",
          ]}
        />
        <Dropdown
          title="Occasion"
          options={["Casual", "Formal", "Party", "Wedding"]}
        />
        <Dropdown title="Sleeves" options={["Short Sleeve", "Long Sleeve"]} />
        <Dropdown
          title="Collar"
          options={["Mandarin", "Spread", "Button-Down"]}
        />
      </div>

      {/* Small screen filter */}
      <div className="cursor-pointer flex items-center justify-between lg:hidden p-3">
        {/* Filter Section */}
        <div
          onClick={toggleFilterDropdown}
          className="bg-red-700 w-full p-3 flex items-center justify-between group relative"
          ref={filterButtonRef}
        >
          <div className="cursor-pointer">Filter</div>
          <div>^</div>

          {filterOpen && (
            <div
              className="dropdown-content absolute left-0 w-full top-12 shadow-lg border border-gray-200 mt-2"
              ref={filterRef}
            >
              <div className="p-2">Curated For You</div>
              <div className="p-2">Newly Added</div>
              <div className="p-2">Best Seller</div>
              <div className="p-2">Price(Low to High)</div>
              <div className="p-2">Price(High to Low)</div>
            </div>
          )}
        </div>

        {/* Refine By Section */}
        <div
          onClick={toggleRefine}
          className="cursor-pointer bg-red-300 w-full p-3 flex items-center justify-between group relative"
          ref={refineButtonRef}
        >
          <div>Refine By</div>
          <div>A</div>

          {refineOpen && (
            <div
              className="dropdown-content absolute flex flex-col items-center justify-center w-full left-0 top-12 shadow-lg border border-gray-200 mt-2"
              ref={refineRef}
            >
              <div className="p-2">Collection</div>
              <div className="p-2">Size</div>
              <div className="p-2">Fit</div>
              <div className="p-2">Pattern</div>
              <div className="p-2">Colors</div>
              <div className="p-2">Occasion</div>
              <div className="p-2">Sleeves</div>
              <div className="p-2">Collar</div>
              <div className="p-2">Material</div>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 w-full">
        <div
          className="gap-3 grid grid-cols-4 overflow-y-auto"
          style={{ maxHeight: "90vh" }}
        >
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="item-card text-center rounded-lg flex items-center justify-center cursor-pointer bg-white gap-2 p-2"
            >
              <Link to={`/item/${item.id}`}>
                <img
                  className="h-60 object-contain w-full"
                  src={item.image}
                  alt={item.title}
                />
                <h3 className="text-sm font-medium text-black p-1">
                  {item.title.length > 20
                    ? `${item.title.slice(0, 24)}...`
                    : item.title}
                </h3>
                <p className="text-black p-1 ">${item.price}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="mt-4 text-center">
          <button
            className="pagination-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span className="mx-2">Page {currentPage}</span>

          <button
            className="pagination-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(allItems.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceDrop;
