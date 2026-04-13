import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

function LeftSide() {
  return (
    <div className=" border-[#303033] left-8 mt-2  items-start max-h-full xl:max-h-full justify-center flex flex-col font-syne rounded-2xl p-2 lg:p-4 px-6 lg:w-[24%] w-full lg:fixed  border-[1.5px] ">
      <p className="text-2xl font-semibold pb-2 text-center">
        Vinod Singh Barti
      </p>
      <p className="text-3xl"></p>
      <img
        src="https://www.phot.ai/ai-art-generator/inspire/inspire_id/6433d9c09c118d1bf9cbf279"
        alt="Img"
        className="rounded-3xl "
      />
      <div className="text-start">
        <p className=" text-xs font-bold pt-4 pb-2 px-2 ">Specilization</p>
        <p className=" text-md font-bold px-2 ">Frontend Developer ,</p>
        <p className=" text-md font-bold px-2 ">
          UI/UX designer,
          <br />
          Cyber Security Enthusiast
        </p>
        <p className="text-xs font-bold pt-2 px-2">Based In:</p>
        <p className="text-md font-bold  px-2">Uttarakhand , India</p>
      </div>
      <div className="flex font-semibold items-center text-lg xl:text-2xl justify-between  gap-7 pb-4 pt-4 px-2">
        <Link to={"https://www.linkedin.com/in/vinod-barti-339571268/"}>
          <FaLinkedin />
        </Link>
        <Link to={"https://github.com/Vinod123456183"}>
          <FaGithub />
        </Link>
        <Link to={"mailto:vinodsinghbarti420@gmail.com"}>
          <SiGmail />
        </Link>
        <Link
          to={
            "https://api.whatsapp.com/send?phone=919456541392&text=%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F"
          }
        >
          <BsWhatsapp />
        </Link>
        <Link to={"https://www.instagram.com/___deeppak_3__9/s"}>
          <FiInstagram />
        </Link>
      </div>
      <div className=" pt-2 ">
        <Link to={"mailto:vinodsinghbarti420@gmail.com"}>
          <button className="font-bold rounded-lg  p-2 w-full border-[#303033] border-[1.5px]  px-4">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LeftSide;

