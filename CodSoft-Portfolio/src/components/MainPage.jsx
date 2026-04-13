import React from "react";
import { RiApps2AiLine } from "react-icons/ri";
import { TbDownload } from "react-icons/tb";

function MainPage() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const downloadCV = () => {
    // Redirect to the Google Drive link
    window.location.href =
      "https://drive.google.com/file/d/150unc_zlTSThdXE8Pt5h7qPploZb5Aiz/view?usp=drive_link";
  };

  return (
    <div className="p-2 lg:p-1 lg:h-screen w-full" id="home">
      <div className="p-2 flex items-start font-bold flex-col lg:h-full justify-center">
        <p className="text-start text-2xl lg:text-[65px] lg:py-8 lg:px-4">
          I'm Vinod Singh Barti
        </p>
        <p className="text-start text-2xl lg:text-[65px] lg:px-4">
          Frontend Developer and
        </p>
        <p className="text-start text-2xl lg:text-[65px] lg:py-8 lg:px-4">
          Illustrator
        </p>
        <div className="flex lg:px-4 text-center pt-5 gap-5 w-full flex-col lg:flex-row text-sm lg:text-xl font-syne">
          <button
            onClick={scrollToPortfolio}
            className="flex items-center justify-center gap-2 p-2 lg:p-3 lg:px-8 rounded-xl text-white border border-[#303033]"
          >
            <p>My Works</p>
            <RiApps2AiLine />
          </button>

          <button
            onClick={downloadCV}
            className="flex items-center justify-center gap-2 p-2 lg:p-3 lg:px-8 rounded-xl text-white border border-[#303033]"
          >
            <p>Download CV</p>
            <TbDownload />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
