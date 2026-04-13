import React, { useState, useEffect } from "react";

function SnitchHeader() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check if the window size is small
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 768); // Adjust the threshold as needed
  };

  // Set up event listener to check screen size on resize
  useEffect(() => {
    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize); // Listen for resizing

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Clean up event listener
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-between bg-white text-gray-800 p-2 md:p-4">
        {/* MenuBar and Logo */}
        <div className="flex items-center">
          <div>{isSmallScreen ? "Small Menu" : "MenuBar"}</div>
          <div>
            <img
              src="https://www.snitch.co.in/cdn/shop/files/SNITCH_LOGO_NEW_BLACK.png?v=1721457834"
              alt="Logo"
              className="h-12"
            />
          </div>
        </div>

        {/* Conditional rendering for small screen */}
        <div className="flex items-center justify-center space-x-4">
          {isSmallScreen ? (
            // Display a simplified header for small screens
            <>
              <div>Contact</div>
              <div>Lens</div>
            </>
          ) : (
            // Display the full header for larger screens
            <>
              <div>Contact</div>
              <div>Lens</div>
              <div>Heart</div>
              <div>Wallet</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default SnitchHeader;
