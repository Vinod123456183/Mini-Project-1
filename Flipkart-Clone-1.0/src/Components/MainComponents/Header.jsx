import { useState } from "react";
import { FaChevronDown, FaBars } from "react-icons/fa"; // Import FaBars for mobile menu
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Header() {
  const [hovered, setHovered] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  const menuItems = [
    {
      name: "Home",
      images: [
        {
          src: "https://placekitten.com/100/100",
          text: "Image 1",
          link: "/home-image-1",
        },
        {
          src: "https://placekitten.com/100/100",
          text: "Image 2",
          link: "/home-image-2",
        },
        {
          src: "https://placekitten.com/100/100",
          text: "Image 3",
          link: "/home-image-3",
        },
      ],
    },
    {
      name: "Shop",
      textItems: [
        { text: "Shop Item 1", link: "/shop-item-1" },
        { text: "Shop Item 2", link: "/shop-item-2" },
        { text: "Shop Item 3", link: "/shop-item-3" },
      ],
    },
    {
      name: "Product",
      textItems: [
        { text: "Product Item 1", link: "/product-item-1" },
        { text: "Product Item 2", link: "/product-item-2" },
      ],
    },
    {
      name: "Page",
      textItems: [
        { text: "Page Item 1", link: "/page-item-1" },
        { text: "Page Item 2", link: "/page-item-2" },
      ],
    },
    {
      name: "Blogs",
      textItems: [
        { text: "Blog Item 1", link: "/blog-item-1" },
        { text: "Blog Item 2", link: "/blog-item-2" },
      ],
    },
  ];

  const LCS = [
    {
      name: "Login",
      link: "../",
      logo: " loddd",
      m: "m",
    },
    {
      name: "LOGO",
      link: "../",
      logo: " loddd",
      m: "m",
    },
    {
      name: " CaR  ",
      link: "../",
      logo: " loddd",
      m: "m",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between p-2 md:p-4 gap-4       max-w-[1440px] mx-2">
        <div className="md:hidden flex items-center">
          <FaBars
            className="text-white text-[20px] cursor-pointer"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>

        <div className="flex justify-between  w-full gap-6 ">
          <div className="   flex items-center justify-start">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus_mobile-39120d.svg"
              alt="Mobile Logo"
              className="sm:hidden max-w-[120px] h-auto" // Visible only on mobile
            />
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              alt="Desktop Logo"
              className="hidden sm:block  max-w-[180px] h-auto" // Visible only on desktop
            />
          </div>

          <div className=" bg-deep-green gap-2  block md:hidden flex items-center">
            {LCS.map((item, idx) => (
              <div key={idx}>
                <div className="bg-red-600 gap-2">
                  <Link to={item.link}>{item.m}</Link>
                  <Link to={item.link}>{item.m}</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex  w-full gap-8 md:items-center md:justify-center">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex items-center gap-2 cursor-pointer p-2">
                  <span>{item.name}</span>
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      hovered === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {hovered === index && (
                  <div className="absolute top-10 h-auto rounded-md z-10 bg-white shadow-lg p-3">
                    {item.images ? (
                      <div className="grid grid-cols-5 w-[800px] gap-4">
                        {item.images.map((img, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-center cursor-pointer"
                          >
                            <Link to={img.link}>
                              <img
                                src={img.src}
                                alt={img.text}
                                className="mb-2"
                              />
                            </Link>
                            <span>{img.text}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2 w-40 p-2">
                        {item.textItems.map((textItem, idx) => (
                          <Link to={textItem.link} key={idx}>
                            <div className="text-gray-800 hover:text-blue-700 text-sm">
                              {textItem.text}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="  gap-2  hidden md:block  items-center">
            <div className="flex items-center justify-center gap-3      ">
              {LCS.map((item, idx) => (
                <div key={idx}>
                  <div className="pt-2 gap-2">
                    <Link to={item.link}>{item.name}</Link>
                    <Link to={item.link}>{item.logo}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 z-10">
          {menuItems.map((item, index) => (
            <div key={index} className="flex flex-col mb-4">
              <span className="font-bold text-lg">{item.name}</span>
              {item.images ? (
                <div className="flex gap-4 overflow-x-auto">
                  {item.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center cursor-pointer"
                    >
                      <Link to={img.link}>
                        <img
                          src={img.src}
                          alt={img.text}
                          className="mb-2 w-16 h-16"
                        />
                      </Link>
                      <span>{img.text}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {item.textItems.map((textItem, idx) => (
                    <Link to={textItem.link} key={idx}>
                      <div className="text-gray-800 hover:text-blue-700 text-sm">
                        {textItem.text}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Add L, C, S in the mobile menu */}
        </div>
      )}
    </>
  );
}

export default Header;
