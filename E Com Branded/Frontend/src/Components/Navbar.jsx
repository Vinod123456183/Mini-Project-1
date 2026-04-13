import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaOpencart, FaSearch, FaPhone, FaInstagram } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { GiPositionMarker } from "react-icons/gi";
import logo from "../assets/demo-fashion-store-logo-black@2x.webp";
import { gsap } from "gsap";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const mobileDrawerRef = useRef(null);
  const pagesRef = useRef(null);
  const dropdownAnimationRef = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen((prev) => !prev);
  };

  const handleLogoClick = () => {
    gsap.to(window, { scrollTo: 0 });
    navigate("/");
  };

  // GSAP animation for the mobile drawer
  useEffect(() => {
    if (mobileDrawerOpen) {
      gsap.fromTo(
        mobileDrawerRef.current,
        { x: 300, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      );
    } else {
      gsap.to(mobileDrawerRef.current, {
        x: 300,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          mobileDrawerRef.current.style.transform = "none";
        },
      });
    }
  }, [mobileDrawerOpen]);

  // GSAP animation for dropdown
  useEffect(() => {
    if (pagesDropdownOpen) {
      gsap.fromTo(
        dropdownAnimationRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(dropdownAnimationRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [pagesDropdownOpen]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pagesRef.current && !pagesRef.current.contains(event.target)) {
        setPagesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownClick = () => {
    setPagesDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="top-0 text-black">
      <div className="container px-2 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center bg-slate-200 p-5 md:p-8">
          {/* Right Side Info */}
          <div className="flex flex-row-reverse hidden md:flex items-center text-black">
            <FaInstagram className="mr-2" size={20} />
            <GiPositionMarker className="mr-2" size={20} />
          </div>

          {/* Left Side Navigation */}
          <div className="flex gap-10 items-center">
            <ul className="text-[17px] hidden md:flex gap-10 text-black">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/collection"
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                >
                  Collection
                </NavLink>
              </li>
            </ul>

            {/* Logo */}
            <div className="mx-auto font-black cursor-pointer">
              <img
                src={logo}
                onClick={handleLogoClick}
                alt="Logo"
                className="md:h-10 h-7"
              />
            </div>

            <ul className="hidden lg:flex gap-10 items-center text-black relative">
              <li>
                <NavLink
                  to="/magazine"
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                >
                  Magazine
                </NavLink>
              </li>
              {/* Pages Dropdown */}
              <div className="relative" ref={pagesRef}>
                <NavLink
                  to="/pages"
                  className={({ isActive }) =>
                    `px-4 py-2 flex items-center ${isActive ? "font-bold" : ""}`
                  }
                  onClick={handleDropdownClick}
                >
                  Pages
                  {/* <FiMenu className="ml-2" /> */}
                </NavLink>
                {pagesDropdownOpen && (
                  <div
                    className="absolute bg-white shadow-lg rounded-md p-2 z-10"
                    ref={dropdownAnimationRef}
                  >
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 rounded ${
                          isActive ? "font-bold" : ""
                        }`
                      }
                    >
                      About
                    </NavLink>
                    <NavLink
                      to="/faq"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 rounded ${
                          isActive ? "font-bold" : ""
                        }`
                      }
                    >
                      FAQ
                    </NavLink>
                    <NavLink
                      to="/wishlist"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 rounded ${
                          isActive ? "font-bold" : ""
                        }`
                      }
                    >
                      WishList
                    </NavLink>
                    <NavLink
                      to="/account"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 rounded ${
                          isActive ? "font-bold" : ""
                        }`
                      }
                    >
                      Account
                    </NavLink>
                    <NavLink
                      to="/card"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 rounded ${
                          isActive ? "font-bold" : ""
                        }`
                      }
                    >
                      Card
                    </NavLink>
                    <NavLink
                      to="/checkout"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 rounded ${
                          isActive ? "font-bold" : ""
                        }`
                      }
                    >
                      Checkout
                    </NavLink>
                  </div>
                )}
              </div>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3 text-black">
            <FaSearch className="block" size={18} />
            <FaPhone className="block" size={18} />
            <FaOpencart size={24} className="block" />
            <div className="lg:hidden flex items-center">
              <button onClick={toggleNavbar} aria-label="Toggle navigation">
                {mobileDrawerOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileDrawerOpen && (
          <div
            ref={mobileDrawerRef}
            className="fixed right-0 top-0 z-20 bg-neutral-300 w-full p-5 flex flex-col items-center lg:hidden"
          >
            <ul className="flex flex-col gap-4 text-center text-[20px]">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/collection"
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                >
                  Collection
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/magazine"
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                >
                  Magazine
                </NavLink>
              </li>
              {/* Pages Dropdown */}
              <div className="relative" ref={pagesRef}>
                <NavLink
                  to="/pages"
                  className={({ isActive }) =>
                    `px-4 py-2 flex items-center  ${
                      isActive ? "font-bold" : ""
                    }`
                  }
                  onClick={handleDropdownClick}
                >
                  Pages
                </NavLink>
                {pagesDropdownOpen && (
                  <div
                    className="absolute bg-white shadow-lg rounded-md p-2 z-10"
                    ref={dropdownAnimationRef}
                  >
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 rounded ${
                          isActive ? "font-bold" : ""
                        }`
                      }
                    >
                      About
                    </NavLink>
                    <NavLink
                      to="/faq"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 rounded ${
                          isActive ? "font-bold" : ""
                        }`
                      }
                    >
                      FAQ
                    </NavLink>
                    <NavLink
                      to="/wishlist"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 rounded ${
                          isActive ? "font-bold" : ""
                        }`
                      }
                    >
                      WishList
                    </NavLink>
                    <NavLink
                      to="/account"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 rounded ${
                          isActive ? "font-bold" : ""
                        }`
                      }
                    >
                      Account
                    </NavLink>
                    <NavLink
                      to="/card"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 rounded ${
                          isActive ? "font-bold" : ""
                        }`
                      }
                    >
                      Card
                    </NavLink>
                    <NavLink
                      to="/checkout"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 rounded ${
                          isActive ? "font-bold" : ""
                        }`
                      }
                    >
                      Checkout
                    </NavLink>
                  </div>
                )}
              </div>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
