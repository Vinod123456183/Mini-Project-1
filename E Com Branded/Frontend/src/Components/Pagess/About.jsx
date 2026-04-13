import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import imga1 from "../Constants/A1.webp";
import imga2 from "../Constants/A2.jpg";
import { SiPrometheus } from "react-icons/si";
import { CiFaceSmile, CiStar } from "react-icons/ci";
import { MdAdd, MdRemove } from "react-icons/md";
import { ONE } from "../Constants/index";
import { motion, AnimatePresence } from "framer-motion";
import MovingDiv2 from "../Pagess/MovingDiv2";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const outerDivRef = useRef(null);
  const imageRef = useRef(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // GSAP animation for moving the outer div from right to left
    gsap.fromTo(
      outerDivRef.current,
      { x: "100%" },
      { x: "-100%", duration: 5, repeat: -1, ease: "linear" }
    );
  }, []);

  useEffect(() => {
    // GSAP animation for infinite rotation
    gsap.to(imageRef.current, {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <>
      <div className="text-center mt-10 mb-5">
        <span className="font-encode text-5xl md:text-6xl lg:text-7xl">
          About
        </span>
      </div>

      <div className="mb-20 font-medium text-center">
        <p className="text-gray-600 font-poppins text-lg md:text-xl">
          <span className="flex items-center justify-center">
            Home
            <span className="px-3 text-xl">&gt;</span>
            <span>About</span>
          </span>
        </p>
      </div>

      <div className="bg-slate-100 ">
        <div className="relative mx-2 md:px-24">
          <div className="md:px-10 px-3 py-5 md:py-0 absolute">
            <img
              src={imga1}
              alt="img"
              className="w-[70%] h-[70%] md:w-full md:h-auto object-cover"
              ref={imageRef}
            />
          </div>
          <div className="py-20">
            <div className="px-14 md:px-28 flex absolute text-white">
              <div className="px-3 flex items-center justify-center">
                <SiPrometheus
                  size={26}
                  className="-my-5 text-black md:-mx-3 -mx-2 bg-white"
                />
              </div>
            </div>
            <img src={imga2} alt="img" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="flex flex-col mb-6 mx-6 md:flex-row p-6 md:p-12 gap-6 md:gap-12">
          <div className="flex flex-col text-black font-sans p-6 w-full md:w-1/2">
            <p className="text-[17px] font-medium mb-5">
              The Fashion Core Collection!
            </p>
            <span className="text-[43px] font-medium mb-1">The Journey of</span>
            <span className="text-[43px] font-bold">crafto lifestyle</span>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-10">
            <p className="text-lg font-medium text-gray-500">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown.
            </p>

            <p className="text-lg font-medium text-gray-500">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="flex flex-row">
          {ONE.map((items, id) => (
            <div key={id} className="flex items-center justify-center">
              <img src={items.img} alt={`img-${id}`} />
            </div>
          ))}
        </div>

        <div className="flex items-center mb-8 mt-20 justify-center">
          <h1 className="text-center text-[50px] capitalize">
            We care our customers
          </h1>
        </div>

        <div className="mx-auto max-w-[1440px] pb-10">
          <ul className="p-2 pt-3 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <li className="border-b-2 pb-5 text-gray-700 md:-my-2 md:mb-5">
              <span className="text-lg font-bold">Business Founded</span>
              <p className="text-gray-500 py-2 mt-2 leading-7">
                Lorem ipsum is simply text the printing typesetting standard
                dummy.
              </p>
            </li>

            <li className="border-b-2 md:pt-5 pb-5 text-gray-700">
              <strong className="text-lg">Build New Office:</strong>
              <p className="text-gray-500 py-2 mt-2 leading-7">
                Lorem ipsum is simply text the printing typesetting standard
                dummy.
              </p>
            </li>

            <li className="border-b-2 pb-5 text-gray-700 md:-my-2 md:mb-5">
              <strong className="text-lg">Relocates Headquarters:</strong>
              <p className="text-gray-700 py-2 mt-2 leading-7">
                Lorem ipsum is simply text the printing typesetting standard
                dummy.
              </p>
            </li>

            <li className="border-b-2 md:pt-5 text-gray-700">
              <strong className="text-lg">Revenues of Millions:</strong>
              <p className="text-gray-500 py-2 mt-2 leading-7">
                Lorem ipsum is simply text the printing typesetting standard
                dummy.
              </p>
            </li>
          </ul>
        </div>

        <div className="pt-32 h-0 flex flex-col md:flex-row items-center justify-center mx-auto">
          <div className="flex flex-col md:flex-row font-josefin md:w-auto bg-white gap-4 md:gap-10 md:p-7 md:rounded-full shadow-lg shadow-slate-200/50">
            <div className="flex items-center gap-2 mx-auto justify-center">
              <CiFaceSmile
                size={40}
                className="flex items-center justify-center"
              />
              <span className="tracking-wider text-slate-700 text-[22px] text-center">
                Join the{" "}
                <span className="text-twitterColor/70 font-bold text-[27px]">
                  10000+
                </span>
                people trusting us.
              </span>
            </div>

            <div className="mx-auto md:w-[2.4px] bg-gray-600"></div>

            <div className="mx-auto flex items-center gap-1 justify-center">
              <CiStar size={40} />
              <span className="tracking-wider text-[22px] text-slate-700">
                4.9 out of 5 - 8549 Total reviews.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-10 md:mt-20 mb-20  items-center p-4 md:p-8   max-w-[2560px] mx-auto   ">
        <div className=" mx-auto w-full md:h-[800px] h-[400px]  lg:h-[800px] lg:w-full mt-20 md:mt-0 flex items-center justify-center relative">
          {/* Background Image */}
          <div className="absolute top-0 -left-7 right-4 w-auto mx-8 md:mx-0 md:w-full h-full mt-10 flex md:items-center justify-center">
            <img
              src="https://craftohtml.themezaa.com/images/demo-fashion-store-about-10.jpg"
              alt="Fashion model"
              className="w-auto h-[300px] md:w-auto md:h-[600px] rounded-lg shadow-lg"
            />
          </div>

          {/* Image Overlay 1 */}
          <div className="  w-auto absolute top-[60%] left-32    lg:top-[60%] lg:left-[55%] ">
            <img
              src="https://craftohtml.themezaa.com/images/demo-fashion-store-about-11.jpg"
              alt=""
              className=" w-[140px] h-[140px] md:h-[300px] md:w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Image Overlay 2 */}

          <div className="absolute w-auto rounded-full bottom-[60%] left-[65%]  lg:bottom-[44%] lg:left-[55%] ">
            <div className="animate-spin-slow">
              <img
                src="https://craftohtml.themezaa.com/images/demo-fashion-store-about-12.png"
                alt=""
                className="h-[100px] w-auto md:h-[300px]"
              />
            </div>
          </div>

        </div>

        {/* tailwind rotate used */}
        <div className="  w-full p-4 md:p-8 mx-auto flex flex-col justify-center">
          <h1 className="text-[20px] font-normal  font-expletus pt-2  md:pt-10">
            Our fashion store mission
          </h1>
          <h1 className="text-[55px] md:text-[73px] font-semibold text-slate-700/80   font-nunito ">
            Quality product
          </h1>
          <span className="text-[50px]  md:text-[73px] font-bold  font-josefin  text-slate-700 ">
            {" "}
            <span className="font-bold font-josefin"> with exceptional</span>
            <br /> price-value.
          </span>
          <p className=" text-[22px] font-medium mt-3 text-gray-900/80">
            Fashions fade style is eternal
          </p>
          <p className=" text-[18px]  mt-2 text-gray-600  ">
            We deliver customized marketing campaign to use
          </p>
          <p className=" text-[18px]  text-gray-600">
            {" "}
            your audience to make a positive move.
          </p>

          <div className="flex flex-col justify-center mt-10 w-full text-[16px] md:text-[18px] lg:text-[20px] mx-auto">
            {[
              {
                title: "Fashion Fade Style is eternal",
                content:
                  "Style endures while trends come and go. Our designs focus on timeless elegance that transcends fleeting fashions, ensuring you always look sophisticated and relevant.",
              },
              {
                title: "I make clothes. Women make fashion",
                content:
                  "We believe in empowering our customers. Our clothes are the canvas, but it's you who brings them to life with your unique personality and style choices.",
              },
              {
                title: "Something new fashion for everyone",
                content:
                  "Diversity and inclusivity are at the heart of our brand. We offer a wide range of styles and sizes to ensure that everyone can find something that makes them feel confident and beautiful.",
              },
            ].map((item, index) => (
              <div key={index} className="mt-2">
                <div
                  className={`flex justify-between text-slate-800 font-encode items-center ${
                    index > 0 ? "border-t-2 border-stone-300" : ""
                  }`}
                >
                  <div>
                    <h3 className="font-semibold text-muted-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <div className="p-2 md:p-3">
                    <button
                      className="text-2xl"
                      onClick={() => toggleDetails(index)}
                    >
                      {openIndex === index ? <MdRemove /> : <MdAdd />}
                    </button>
                  </div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 text-gray-600">{item.content}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <MovingDiv2 />
      </div>
    </>
  );
};

export default About;
