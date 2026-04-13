import React, { useState, useEffect } from "react";
import { PiGlobe } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { RiApps2AiLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { PiStudentLight } from "react-icons/pi";

function Header() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    // Handle homepage section
    const section = document.getElementById(
      sectionId === "/" ? "home" : sectionId // Map "/" to "home"
    );
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  const sections = [
    { name: "home", icon: <PiGlobe size={27} /> },
    { name: "portfolio", icon: <RiApps2AiLine size={27} /> },
    { name: "about", icon: <TbListDetails size={27} /> },
    { name: "resume", icon: <PiStudentLight size={27} /> },
    { name: "contact", icon: <MdOutlineConnectWithoutContact size={27} /> },
  ];

  // Ensure the active section is updated when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "portfolio", "about", "resume", "contact"];
      let currentSection = "home";

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 150) {
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="flex hidden items-center fixed z-30  lg:block md:w-[50%] justify-between py-2 overflow-x-auto">
        <div className="flex px-5 lg:w-full justify-between ">
          {sections.map((section) => (
            <button
              key={section.name}
              className={`p-2 w-full rounded-lg text-md font-semibold transition-all duration-300 ${
                activeSection === section.name
                  ? "bg-[#121212] text-white"
                  : "bg-[#000] text-gray-300"
              }`}
              onClick={() => scrollToSection(section.name)}
            >
              <p className="capitalize">{section.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Section (Mobile) */}
      <div className="fixed font-bold items-center justify-between px-5 flex bottom-0 left-0 w-full bg-[#0e0a0a] bg-opacity-95 p-3 sm:bottom-10 md:bottom-0 lg:hidden">
        {sections.map((section) => (
          <button
            key={section.name}
            className={`p- transition-all duration-300 ${
              activeSection === section.name
                ? "text-gray-300"
                : "text-[#5c54f8]"
            }`}
            onClick={() => scrollToSection(section.name)}
          >
            {section.icon}
          </button>
        ))}
      </div>
    </>
  );
}

export default Header;
