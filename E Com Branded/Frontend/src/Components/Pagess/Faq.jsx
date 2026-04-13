import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [expandedFaq, setExpandedFaq] = useState(null);

  function toggleFaq(faqKey) {
    setExpandedFaq(expandedFaq === faqKey ? null : faqKey);
  }

  // Define styles for transition
  const faqContentStyle = (isOpen) => ({
    maxHeight: isOpen ? "200px" : "0",
    opacity: isOpen ? 1 : 0,
    overflow: "hidden",
    transition: "max-height 0.3s ease-out, opacity 0.3s ease-out",
  });

  const content = {
    general: (
      <>
        <div className=" space-x-1 -space-y-1   ">
          <div className=" mx-auto border-b-2 border-gray-200 ">
            <div className=" flex items-center justify-between">
              <div className=" p-1 mt-3 md:mt-5 flex flex-1">
                <p className="px-3 text-[19px] font-josefin md:text-[20px] text-slate-600">
                  Can I order over the phone?
                </p>
              </div>

              <div className="flex items-center px-3">
                <button
                  className=" text-zinc-400 px-2 pt-4 py-1  "
                  onClick={() => toggleFaq("faq1")}
                  aria-expanded={expandedFaq === "faq1"}
                  aria-controls="faq-content1"
                >
                  {expandedFaq === "faq1" ? (
                    <FaChevronUp size={20} />
                  ) : (
                    <FaChevronDown size={20} />
                  )}
                </button>
              </div>
            </div>

            <div
              id="faq-content1"
              className={`transition-max-height duration-500 scroll-smooth ease-in-out overflow-hidden ${
                expandedFaq === "faq1" ? "max-h-screen" : "max-h-0"
              } pt-2`}
            >
              <p className="p-2 text-[18px] md:text-[21px] pb-6 font-nunito text-gray-600/80">
                Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ullam, ad? adipisicing elit.
                Accusamus, illo error. Consequatur quasi cum necessitatibus
                rerum odio delectus accusamus est autem nobis doloremque illum
                ratione, similique itaque cumque deserunt quae.
              </p>
            </div>
          </div>

          <div className=" mx-auto border-b-2 border-gray-200 ">
            <div className=" flex items-center justify-between">
              <div className=" p-1 mt-3 md:mt-5 flex flex-1">
                <p className="px-3 text-[19px] font-josefin md:text-[20px] text-slate-600">
                  I am having difficulty placing an order?
                </p>
              </div>

              <div className="flex items-center px-3">
                <button
                  className=" text-zinc-400 px-2 pt-4 py-1  "
                  onClick={() => toggleFaq("faq2")}
                  aria-expanded={expandedFaq === "faq2"}
                  aria-controls="faq-content2"
                >
                  {expandedFaq === "faq2" ? (
                    <FaChevronUp size={20} />
                  ) : (
                    <FaChevronDown size={20} />
                  )}
                </button>
              </div>
            </div>

            <div
              id="faq-content2"
              className={`transition-max-height duration-500 scroll-smooth ease-in-out overflow-hidden ${
                expandedFaq === "faq2" ? "max-h-screen" : "max-h-0"
              } pt-2`}
            >
              <p className="p-2 text-[18px] md:text-[21px] pb-6 font-nunito text-gray-600/80">
                Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ullam, ad? adipisicing elit.
                Accusamus, illo error. Consequatur quasi cum necessitatibus
                rerum odio delectus accusamus est autem nobis doloremque illum
                ratione, similique itaque cumque deserunt quae.
              </p>
            </div>
          </div>

          <div className=" mx-auto border-b-2 border-gray-200 ">
            <div className=" flex items-center justify-between">
              <div className=" p-1 mt-3 md:mt-5 flex flex-1">
                <p className="px-3 text-[19px] font-josefin md:text-[20px] text-slate-600">
                  What payment methods does accept?
                </p>
              </div>

              <div className="flex items-center px-3">
                <button
                  className=" text-zinc-400 px-2 pt-4 py-1  "
                  onClick={() => toggleFaq("faq3")}
                  aria-expanded={expandedFaq === "faq3"}
                  aria-controls="faq-content3"
                >
                  {expandedFaq === "faq3" ? (
                    <FaChevronUp size={20} />
                  ) : (
                    <FaChevronDown size={20} />
                  )}
                </button>
              </div>
            </div>

            <div
              id="faq-content3"
              className={`transition-max-height duration-500 scroll-smooth ease-in-out overflow-hidden ${
                expandedFaq === "faq3" ? "max-h-screen" : "max-h-0"
              } pt-2`}
            >
              <p className="p-2 text-[18px] md:text-[21px] pb-6 font-nunito text-gray-600/80">
                Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ullam, ad? adipisicing elit.
                Accusamus, illo error. Consequatur quasi cum necessitatibus
                rerum odio delectus accusamus est autem nobis doloremque illum
                ratione, similique itaque cumque deserunt quae.
              </p>
            </div>
          </div>

          <div className=" mx-auto border-b-2 border-gray-200 ">
            <div className=" flex items-center justify-between">
              <div className=" p-1 mt-3 md:mt-5 flex flex-1">
                <p className="px-3 text-[19px] font-josefin md:text-[20px] text-slate-600">
                  Can i amend my order once placed?
                </p>
              </div>

              <div className="flex items-center px-3">
                <button
                  className=" text-zinc-400 px-2 pt-4 py-1  "
                  onClick={() => toggleFaq("faq4")}
                  aria-expanded={expandedFaq === "faq4"}
                  aria-controls="faq-content4"
                >
                  {expandedFaq === "faq4" ? (
                    <FaChevronUp size={20} />
                  ) : (
                    <FaChevronDown size={20} />
                  )}
                </button>
              </div>
            </div>

            <div
              id="faq-content4"
              className={`transition-max-height duration-500 scroll-smooth ease-in-out overflow-hidden ${
                expandedFaq === "faq4" ? "max-h-screen" : "max-h-0"
              } pt-2`}
            >
              <p className="p-2 text-[18px] md:text-[21px] pb-6 font-nunito text-gray-600/80">
                Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ullam, ad? adipisicing elit.
                Accusamus, illo error. Consequatur quasi cum necessitatibus
                rerum odio delectus accusamus est autem nobis doloremque illum
                ratione, similique itaque cumque deserunt quae.
              </p>
            </div>
          </div>

          <div className=" mx-auto border-b-2 border-gray-200 ">
            <div className=" flex items-center justify-between">
              <div className=" p-1 mt-3 md:mt-5 flex flex-1">
                <p className="px-3 text-[19px] font-josefin md:text-[20px] text-slate-600">
                  How do i know if my order was successful?
                </p>
              </div>

              <div className="flex items-center px-3">
                <button
                  className=" text-zinc-400 px-2 pt-4 py-1  "
                  onClick={() => toggleFaq("faq5")}
                  aria-expanded={expandedFaq === "faq5"}
                  aria-controls="faq-content5"
                >
                  {expandedFaq === "faq5" ? (
                    <FaChevronUp size={20} />
                  ) : (
                    <FaChevronDown size={20} />
                  )}
                </button>
              </div>
            </div>

            <div
              id="faq-content5"
              className={`transition-max-height duration-500 scroll-smooth ease-in-out overflow-hidden ${
                expandedFaq === "faq5" ? "max-h-screen" : "max-h-0"
              } pt-2`}
            >
              <p className="p-2 text-[18px] md:text-[21px] pb-6 font-nunito text-gray-600/80">
                Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ullam, ad? adipisicing elit.
                Accusamus, illo error. Consequatur quasi cum necessitatibus
                rerum odio delectus accusamus est autem nobis doloremque illum
                ratione, similique itaque cumque deserunt quae.
              </p>
            </div>
          </div>

          <div className=" mx-auto border-b-2 border-gray-200 ">
            <div className=" flex items-center justify-between">
              <div className=" p-1 mt-3 md:mt-5 flex flex-1">
                <p className="px-3 text-[19px] font-josefin md:text-[20px] text-slate-600">
                  What if my order is incorrect?
                </p>
              </div>

              <div className="flex items-center px-3">
                <button
                  className=" text-zinc-400 px-2 pt-4 py-1  "
                  onClick={() => toggleFaq("faq6")}
                  aria-expanded={expandedFaq === "faq6"}
                  aria-controls="faq-content6"
                >
                  {expandedFaq === "faq5" ? (
                    <FaChevronUp size={20} />
                  ) : (
                    <FaChevronDown size={20} />
                  )}
                </button>
              </div>
            </div>

            <div
              id="faq-content6"
              className={`transition-max-height duration-500 scroll-smooth ease-in-out overflow-hidden ${
                expandedFaq === "faq6" ? "max-h-screen" : "max-h-0"
              } pt-2`}
            >
              <p className="p-2 text-[18px] md:text-[21px] pb-6 font-nunito text-gray-600/80">
                Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ullam, ad? adipisicing elit.
                Accusamus, illo error. Consequatur quasi cum necessitatibus
                rerum odio delectus accusamus est autem nobis doloremque illum
                ratione, similique itaque cumque deserunt quae.
              </p>
            </div>
          </div>
        </div>
      </>
    ),

    shopping: (
      <>
        <div className=" mx-auto border-b-2 border-gray-200 ">
          <div className=" flex items-center justify-between">
            <div className=" p-1 mt-3 md:mt-5 flex flex-1">
              <p className="px-3 text-[19px] font-josefin md:text-[20px] text-slate-600">
                I am having difficulty placing an order?
              </p>
            </div>

            <div className="flex items-center px-3">
              <button
                className=" text-zinc-400 px-2 pt-4 py-1  "
                onClick={() => toggleFaq("faq2")}
                aria-expanded={expandedFaq === "faq2"}
                aria-controls="faq-content2"
              >
                {expandedFaq === "faq2" ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </button>
            </div>
          </div>

          <div
            id="faq-content2"
            className={`transition-max-height duration-500 scroll-smooth ease-in-out overflow-hidden ${
              expandedFaq === "faq2" ? "max-h-screen" : "max-h-0"
            } pt-2`}
          >
            <p className="p-2 text-[18px] md:text-[21px] pb-6 font-nunito text-gray-600/80">
              Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ullam, ad? adipisicing elit.
              Accusamus, illo error. Consequatur quasi cum necessitatibus rerum
              odio delectus accusamus est autem nobis doloremque illum ratione,
              similique itaque cumque deserunt quae.
            </p>
          </div>
        </div>

        <div className=" mx-auto border-b-2 border-gray-200 ">
          <div className=" flex items-center justify-between">
            <div className=" p-1 mt-3 md:mt-5 flex flex-1">
              <p className="px-3 text-[19px] font-josefin md:text-[20px] text-slate-600">
                What payment methods does accept?
              </p>
            </div>

            <div className="flex items-center px-3">
              <button
                className=" text-zinc-400 px-2 pt-4 py-1  "
                onClick={() => toggleFaq("faq3")}
                aria-expanded={expandedFaq === "faq3"}
                aria-controls="faq-content3"
              >
                {expandedFaq === "faq3" ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </button>
            </div>
          </div>

          <div
            id="faq-content3"
            className={`transition-max-height duration-500 scroll-smooth ease-in-out overflow-hidden ${
              expandedFaq === "faq3" ? "max-h-screen" : "max-h-0"
            } pt-2`}
          >
            <p className="p-2 text-[18px] md:text-[21px] pb-6 font-nunito text-gray-600/80">
              Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ullam, ad? adipisicing elit.
              Accusamus, illo error. Consequatur quasi cum necessitatibus rerum
              odio delectus accusamus est autem nobis doloremque illum ratione,
              similique itaque cumque deserunt quae.
            </p>
          </div>
        </div>
      </>
    ),

    payment: (
      <>
        <div className=" mx-auto border-b-2 border-gray-200 ">
          <div className=" flex items-center justify-between">
            <div className=" p-1 mt-3 md:mt-5 flex flex-1">
              <p className="px-3 text-[19px] font-josefin md:text-[20px] text-slate-600">
                Can I order over the phone?
              </p>
            </div>

            <div className="flex items-center px-3">
              <button
                className=" text-zinc-400 px-2 pt-4 py-1  "
                onClick={() => toggleFaq("faq1")}
                aria-expanded={expandedFaq === "faq1"}
                aria-controls="faq-content1"
              >
                {expandedFaq === "faq1" ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </button>
            </div>
          </div>

          <div
            id="faq-content1"
            className={`transition-max-height duration-500 scroll-smooth ease-in-out overflow-hidden ${
              expandedFaq === "faq1" ? "max-h-screen" : "max-h-0"
            } pt-2`}
          >
            <p className="p-2 text-[18px] md:text-[21px] pb-6 font-nunito text-gray-600/80">
              Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ullam, ad? adipisicing elit.
              Accusamus, illo error. Consequatur quasi cum necessitatibus rerum
              odio delectus accusamus est autem nobis doloremque illum ratione,
              similique itaque cumque deserunt quae.
            </p>
          </div>
        </div>

        <div className=" mx-auto border-b-2 border-gray-200 ">
          <div className=" flex items-center justify-between">
            <div className=" p-1 mt-3 md:mt-5 flex flex-1">
              <p className="px-3 text-[19px] font-josefin md:text-[20px] text-slate-600">
                I am having difficulty placing an order?
              </p>
            </div>

            <div className="flex items-center px-3">
              <button
                className=" text-zinc-400 px-2 pt-4 py-1  "
                onClick={() => toggleFaq("faq2")}
                aria-expanded={expandedFaq === "faq2"}
                aria-controls="faq-content2"
              >
                {expandedFaq === "faq2" ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </button>
            </div>
          </div>

          <div
            id="faq-content2"
            className={`transition-max-height duration-500 scroll-smooth ease-in-out overflow-hidden ${
              expandedFaq === "faq2" ? "max-h-screen" : "max-h-0"
            } pt-2`}
          >
            <p className="p-2 text-[18px] md:text-[21px] pb-6 font-nunito text-gray-600/80">
              Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ullam, ad? adipisicing elit.
              Accusamus, illo error. Consequatur quasi cum necessitatibus rerum
              odio delectus accusamus est autem nobis doloremque illum ratione,
              similique itaque cumque deserunt quae.
            </p>
          </div>
        </div>

        <div className=" mx-auto border-b-2 border-gray-200 ">
          <div className=" flex items-center justify-between">
            <div className=" p-1 mt-3 md:mt-5 flex flex-1">
              <p className="px-3 text-[19px] font-josefin md:text-[20px] text-slate-600">
                What payment methods does accept?
              </p>
            </div>

            <div className="flex items-center px-3">
              <button
                className=" text-zinc-400 px-2 pt-4 py-1  "
                onClick={() => toggleFaq("faq3")}
                aria-expanded={expandedFaq === "faq3"}
                aria-controls="faq-content3"
              >
                {expandedFaq === "faq3" ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </button>
            </div>
          </div>

          <div
            id="faq-content3"
            className={`transition-max-height duration-500 scroll-smooth ease-in-out overflow-hidden ${
              expandedFaq === "faq3" ? "max-h-screen" : "max-h-0"
            } pt-2`}
          >
            <p className="p-2 text-[18px] md:text-[21px] pb-6 font-nunito text-gray-600/80">
              Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ullam, ad? adipisicing elit.
              Accusamus, illo error. Consequatur quasi cum necessitatibus rerum
              odio delectus accusamus est autem nobis doloremque illum ratione,
              similique itaque cumque deserunt quae.
            </p>
          </div>
        </div>
      </>
    ),

    orders: (
      <>
        <div className=" mx-auto border-b-2 border-gray-200 ">
          <div className=" flex items-center justify-between">
            <div className=" p-1 mt-3 md:mt-5 flex flex-1">
              <p className="px-3 text-[19px] font-josefin md:text-[20px] text-slate-600">
                Can I order over the phone?
              </p>
            </div>

            <div className="flex items-center px-3">
              <button
                className=" text-zinc-400 px-2 pt-4 py-1  "
                onClick={() => toggleFaq("faq1")}
                aria-expanded={expandedFaq === "faq1"}
                aria-controls="faq-content1"
              >
                {expandedFaq === "faq1" ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </button>
            </div>
          </div>

          <div
            id="faq-content1"
            className={`transition-max-height duration-500 scroll-smooth ease-in-out overflow-hidden ${
              expandedFaq === "faq1" ? "max-h-screen" : "max-h-0"
            } pt-2`}
          >
            <p className="p-2 text-[18px] md:text-[21px] pb-6 font-nunito text-gray-600/80">
              Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ullam, ad? adipisicing elit.
              Accusamus, illo error. Consequatur quasi cum necessitatibus rerum
              odio delectus accusamus est autem nobis doloremque illum ratione,
              similique itaque cumque deserunt quae.
            </p>
          </div>
        </div>

        <div className=" mx-auto border-b-2 border-gray-200 ">
          <div className=" flex items-center justify-between">
            <div className=" p-1 mt-3 md:mt-5 flex flex-1">
              <p className="px-3 text-[19px] font-josefin md:text-[20px] text-slate-600">
                I am having difficulty placing an order?
              </p>
            </div>

            <div className="flex items-center px-3">
              <button
                className=" text-zinc-400 px-2 pt-4 py-1  "
                onClick={() => toggleFaq("faq2")}
                aria-expanded={expandedFaq === "faq2"}
                aria-controls="faq-content2"
              >
                {expandedFaq === "faq2" ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </button>
            </div>
          </div>

          <div
            id="faq-content2"
            className={`transition-max-height duration-500 scroll-smooth ease-in-out overflow-hidden ${
              expandedFaq === "faq2" ? "max-h-screen" : "max-h-0"
            } pt-2`}
          >
            <p className="p-2 text-[18px] md:text-[21px] pb-6 font-nunito text-gray-600/80">
              Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ullam, ad? adipisicing elit.
              Accusamus, illo error. Consequatur quasi cum necessitatibus rerum
              odio delectus accusamus est autem nobis doloremque illum ratione,
              similique itaque cumque deserunt quae.
            </p>
          </div>
        </div>

        <div className=" mx-auto border-b-2 border-gray-200 ">
          <div className=" flex items-center justify-between">
            <div className=" p-1 mt-3 md:mt-5 flex flex-1">
              <p className="px-3 text-[19px] font-josefin md:text-[20px] text-slate-600">
                What payment methods does accept?
              </p>
            </div>

            <div className="flex items-center px-3">
              <button
                className=" text-zinc-400 px-2 pt-4 py-1  "
                onClick={() => toggleFaq("faq3")}
                aria-expanded={expandedFaq === "faq3"}
                aria-controls="faq-content3"
              >
                {expandedFaq === "faq3" ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </button>
            </div>
          </div>

          <div
            id="faq-content3"
            className={`transition-max-height duration-500 scroll-smooth ease-in-out overflow-hidden ${
              expandedFaq === "faq3" ? "max-h-screen" : "max-h-0"
            } pt-2`}
          >
            <p className="p-2 text-[18px] md:text-[21px] pb-6 font-nunito text-gray-600/80">
              Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ullam, ad? adipisicing elit.
              Accusamus, illo error. Consequatur quasi cum necessitatibus rerum
              odio delectus accusamus est autem nobis doloremque illum ratione,
              similique itaque cumque deserunt quae.
            </p>
          </div>
        </div>
      </>
    ),

    ordering: (
      <>
        <div className=" mx-auto border-b-2 border-gray-200 ">
          <div className=" flex items-center justify-between">
            <div className=" p-1 mt-3 md:mt-5 flex flex-1">
              <p className="px-3 text-[19px] font-josefin md:text-[20px] text-slate-600">
                What payment methods does accept?
              </p>
            </div>

            <div className="flex items-center px-3">
              <button
                className=" text-zinc-400 px-2 pt-4 py-1  "
                onClick={() => toggleFaq("faq3")}
                aria-expanded={expandedFaq === "faq3"}
                aria-controls="faq-content3"
              >
                {expandedFaq === "faq3" ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </button>
            </div>
          </div>

          <div
            id="faq-content3"
            className={`transition-max-height duration-500 scroll-smooth ease-in-out overflow-hidden ${
              expandedFaq === "faq3" ? "max-h-screen" : "max-h-0"
            } pt-2`}
          >
            <p className="p-2 text-[18px] md:text-[21px] pb-6 font-nunito text-gray-600/80">
              Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ullam, ad? adipisicing elit.
              Accusamus, illo error. Consequatur quasi cum necessitatibus rerum
              odio delectus accusamus est autem nobis doloremque illum ratione,
              similique itaque cumque deserunt quae.
            </p>
          </div>
        </div>
      </>
    ),

    help: (
      <>
        <div className=" mx-auto border-b-2 border-gray-200 ">
          <div className=" flex items-center justify-between">
            <div className=" p-1 mt-3 md:mt-5 flex flex-1">
              <p className="px-3 text-[19px] font-josefin md:text-[20px] text-slate-600">
                I am having difficulty placing an order?
              </p>
            </div>

            <div className="flex items-center px-3">
              <button
                className=" text-zinc-400 px-2 pt-4 py-1  "
                onClick={() => toggleFaq("faq2")}
                aria-expanded={expandedFaq === "faq2"}
                aria-controls="faq-content2"
              >
                {expandedFaq === "faq2" ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </button>
            </div>
          </div>

          <div
            id="faq-content2"
            className={`transition-max-height duration-500 scroll-smooth ease-in-out overflow-hidden ${
              expandedFaq === "faq2" ? "max-h-screen" : "max-h-0"
            } pt-2`}
          >
            <p className="p-2 text-[18px] md:text-[21px] pb-6 font-nunito text-gray-600/80">
              Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ullam, ad? adipisicing elit.
              Accusamus, illo error. Consequatur quasi cum necessitatibus rerum
              odio delectus accusamus est autem nobis doloremque illum ratione,
              similique itaque cumque deserunt quae.
            </p>
          </div>
        </div>

        <div className=" mx-auto border-b-2 border-gray-200 ">
          <div className=" flex items-center justify-between">
            <div className=" p-1 mt-3 md:mt-5 flex flex-1">
              <p className="px-3 text-[19px] font-josefin md:text-[20px] text-slate-600">
                What payment methods does accept?
              </p>
            </div>

            <div className="flex items-center px-3">
              <button
                className=" text-zinc-400 px-2 pt-4 py-1  "
                onClick={() => toggleFaq("faq3")}
                aria-expanded={expandedFaq === "faq3"}
                aria-controls="faq-content3"
              >
                {expandedFaq === "faq3" ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </button>
            </div>
          </div>

          <div
            id="faq-content3"
            className={`transition-max-height duration-500 scroll-smooth ease-in-out overflow-hidden ${
              expandedFaq === "faq3" ? "max-h-screen" : "max-h-0"
            } pt-2`}
          >
            <p className="p-2 text-[18px] md:text-[21px] pb-6 font-nunito text-gray-600/80">
              Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ullam, ad? adipisicing elit.
              Accusamus, illo error. Consequatur quasi cum necessitatibus rerum
              odio delectus accusamus est autem nobis doloremque illum ratione,
              similique itaque cumque deserunt quae.
            </p>
          </div>
        </div>
      </>
    ),
  };

  return (
    <>
      <div className=" mb-20">
        <div className="text-center  mt-10 mb-5 ">
          <span className="font-encode text-5xl md:text-6xl lg:text-7xl">
            FAQs
          </span>
        </div>

        <div className="mb-20 font-medium text-center">
          <p className="text-gray-600 font-poppins text-lg md:text-xl">
            <span className="flex items-center justify-center">
              Home
              <span className="px-3 text-xl">&gt;</span>
              <span>FAQs</span>
            </span>
          </p>
        </div>

        <div className=" flex md:gap-40 flex-col md:flex-row justify-between w-full  mx-auto p-4">
          <div className="  -pt-5 md:mx-10  mx-auto text-[20.4px] text-slate-600 w-full md:w-[35%]">
            <nav className="m-2  w-full  ">
              <ul className=" space-y-1">
                <li
                  className=" hover:bg-yellow-200  p-4 border-b-[1px] border-gray-200 "
                  onClick={() => setActiveTab("general")}
                >
                  <NavLink to="#" className="">
                    General
                  </NavLink>
                </li>

                <li
                  className=" hover:bg-yellow-200  p-4 border-b-[1px] border-gray-200"
                  onClick={() => setActiveTab("shopping")}
                >
                  <NavLink to="#" className="">
                    Shopping information
                  </NavLink>
                </li>

                <li
                  className="hover:bg-yellow-200  p-4 border-b-[1px] border-gray-200"
                  onClick={() => setActiveTab("payment")}
                >
                  <NavLink to="#" className="">
                    Payment information
                  </NavLink>
                </li>

                <li
                  className="hover:bg-yellow-200   p-4 border-b-[1px] border-gray-200"
                  onClick={() => setActiveTab("orders")}
                >
                  <NavLink to="#" className="">
                    Orders and returns
                  </NavLink>
                </li>

                <li
                  className="hover:bg-yellow-200  p-4 border-b-[1px] border-gray-200"
                  onClick={() => setActiveTab("ordering")}
                >
                  <NavLink to="#" className="text-primary ">
                    Ordering from Crafo
                  </NavLink>
                </li>

                <li
                  className="hover:bg-yellow-200  p-4 border-b-[1px] border-gray-200"
                  onClick={() => setActiveTab("help")}
                >
                  <NavLink to="#" className="">
                    Help and support
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className=" space-y-1 mx-1 md:mx-5 w-full mx-aut  ">
            {content[activeTab]}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
