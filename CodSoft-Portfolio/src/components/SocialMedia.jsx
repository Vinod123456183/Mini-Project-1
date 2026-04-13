import React from "react";
import { Link } from "react-router-dom";

function SocialMedia({ logo: Logo, link }) {
  return (
    <Link to={link}>
      <div className="border-[#303033] border text-[#303033] hover:text-[#dbdbdb] cursor-pointer rounded-3xl p-4 px-3 py-4 lg:px-14 lg:py-12 text-center transition-all duration-300 ease-in-out transform hover:scale-110">
        <Logo className=" text-4xl lg:text-6xl" />
      </div>
    </Link>
  );
}

export default SocialMedia;
