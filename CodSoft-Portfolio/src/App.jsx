import "./App.css";
import AboutMeDetail from "./components/AboutMeDetail";
import BigImg from "./components/BigImg";
import Contact from "./components/Contact";
import MyEdu from "./components/MyEdu";
import PlusSection from "./components/PlusSection";
import Tools from "./components/Tools";
import SocialMedia from "./components/SocialMedia";
import Locations from "./components/Locations";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import MainPage from "./components/MainPage";

import { SiGmail } from "react-icons/si";
import { FaFacebookSquare, FaMobile, FaTelegram } from "react-icons/fa";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaWhatsapp,
} from "react-icons/fa";
import { FaMessage, FaSquarePhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

function App() {
  const downloadCV = () => {
    // Redirect to the Google Drive link
    window.location.href =
      "https://drive.google.com/file/d/150unc_zlTSThdXE8Pt5h7qPploZb5Aiz/view?usp=drive_link";
  };

  return (
    <>
      <div className="  flex flex-col text-[#efe6ff] ">
        <LeftSide />

        <div className=" p-1 lg:p-3  w-full font-syne overflow-x-hidden md:flex-1  lg:ml-[26%] md:w-auto">
          <Header />

          <div className=" pt-10 md:pt-16 lg:pt-5 ">
            <MainPage />

            <div
              className=" p-2 lg:p-1 font-semibold lg:font-semibold pt-16 lg:pt-5 "
              id="portfolio"
            >
              <p className="text-start  text-2xl tracking-wide  lg:text-[40px] lg:py-8 lg:px-4 ">
                Check out my featured projects
              </p>
              <div className="p-2  lg:p-1 flex items-center w-full  pt-10 lg:pt-2 flex-wrap justify-center gap-2 ">
                <BigImg
                  img={
                    "https://mixdesign.club/themeforest/braxton/img/works/800_w01-thumb.webp"
                  }
                  illustrations={"UI/UX Portfolio"}
                  name={"Web Dev"}
                  link={"https://capable-griffin-321a17.netlify.app/"}
                />
                <BigImg
                  img={
                    "https://mixdesign.club/themeforest/braxton/img/works/800_w02-thumb.webp"
                  }
                  illustrations={"Flipkart EComerce "}
                  name={"Frontend Dev"}
                  link={
                    "https://6780b8f3c9adf60176bba91e--lighthearted-concha-329e45.netlify.app/"
                  }
                />
                <BigImg
                  img={
                    "https://mixdesign.club/themeforest/braxton/img/works/800_w03-thumb.webp"
                  }
                  illustrations={"Fashion Web"}
                  name={"Frontend Dev"}
                  link={
                    "https://66faa60e88d18205c7f6f126--wondrous-cactus-f0ab23.netlify.app/"
                  }
                />
                <BigImg
                  img={
                    "https://mixdesign.club/themeforest/braxton/img/works/800_w04-thumb.webp"
                  }
                  illustrations={"Prediction System"}
                  name={"Machine Learning"}
                  link={
                    "https://github.com/Vinod123456183/D_Science/tree/main/ML-Projects/___________2____Frontend____Create___Medical__Insurace__By_Details_______"
                  }
                />
              </div>
            </div>

            <div
              className="p-2 lg:p-1 text-2xl lg:text-[46px] pt-16 lg:pt-24 pb-6 lg:px-4 lg:-mb-4"
              id="about"
            >
              <p className=" font-semibold lg:pb-3 ">
                Turning complex problems
              </p>
              <p className=" font-semibold  ">into simple design</p>

              <div className=" w-full flex flex-col lg:flex-row gap-4 lg:pt-12 font-semibold items-center  pt-6  justify-between pb-6">
                <PlusSection number={"2+"} name={"Happy Clients"} />
                <PlusSection number={"0+"} name={"Years Of Experience"} />
                <PlusSection number={"8+"} name={"Projects Done"} />
              </div>
              <div className="  font-thin flex flex-col lg:flex-row items-start justify-start gap-4">
                <div>
                  <p className="text-lg pb-4 pt-4 ">
                    I wonder if I've been changed in the night? Let me think.
                    Was I the same when I got up this morning? I almost think I
                    can remember feeling a little different. But if I'm not the
                    same, the next question is 'Who in the world am I?' Ah,
                    that's the great puzzle!
                  </p>
                  <p className="text-lg pb-4 pt-4 ">
                    Be what you would seem to be - or, if you'd like it put more
                    simply - never imagine yourself not to be otherwise than
                    what it might appear to others that what you were or might
                    have been was not otherwise than what you had been would
                    have appeared to them to be otherwise.
                  </p>
                </div>

                <div className=" font-semibold text- w-full p-2">
                  <div className="   lg:px-4 ">
                    <p className="text-xs">Name</p>
                    <p className="text-lg ">Vinod Singh Barti</p>
                  </div>
                  <div className="  lg:px-4  pt-2 ">
                    <p className="  text-xs  ">Mail</p>
                    <p className=" text-lg  ">vinodsinghbarti420@gmail.com</p>
                    <p className=" text-lg  ">devilstriangle420@gmail.com</p>
                  </div>
                  <div className="  text-xl lg:px-4  pt-2 ">
                    <p className="text-xs">Phone</p>
                    <p className="text-lg  ">+91-9456541392</p>
                    <p className="text-lg  ">+91-8439371949</p>
                  </div>
                  <div className="  text-xl lg:px-4  pt-2 ">
                    <p className="text-xs">Location</p>
                    <p className="text-lg  ">Uttarakhand , India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" lg:text-lg font-semibold lg:px-5 p-2  lg:pb-36 lg:pt-10">
              <Link
                to={
                  "https://drive.google.com/file/d/150unc_zlTSThdXE8Pt5h7qPploZb5Aiz/view?usp=drive_link"
                }
              >
                <button
                  onClick={downloadCV}
                  className="border border-[#303033] p-4 px-3 py-2 rounded-xl"
                >
                  Download CV
                </button>
              </Link>
            </div>

            <div className=" p-2 lg:p-1 grid grid-cols-1 md:grid-cols-2  gap-2 lg:gap-6 w-full pt-6 lg:p-2  lg:px-4 ">
              <AboutMeDetail
                projectname={"WebSite  Development"}
                name1={"UI/UX Design"}
                name2={"Design To Code"}
                description={
                  "I work with React/TailwindCss , MUI and Formik to handle real time forms."
                }
                img={
                  "https://mixdesign.club/themeforest/braxton/img/services/1200x900_s01.webp"
                }
                link={"https://capable-griffin-321a17.netlify.app/"}
              />
              <AboutMeDetail
                projectname={"ML / AI Experiment"}
                name1={"Illustrations"}
                name2={"ML / AI Experiment"}
                description={
                  "Learned Data cleaning, visualization, prediction, evaluation to get high-quality  reliable results."
                }
                img={
                  "https://mixdesign.club/themeforest/braxton/img/services/1200x900_s02.webp"
                }
                link={
                  "https://github.com/Vinod123456183/D_Science/tree/main/ML-Projects/___________2____Frontend____Create___Medical__Insurace__By_Details_______"
                }
              />
              <AboutMeDetail
                projectname={"Frontend  Development"}
                name1={"EComerce "}
                name2={"Design To Code"}
                description={
                  "I work with React/TailwindCss , MUI and Formik to handle real time forms."
                }
                img={
                  "https://mixdesign.club/themeforest/braxton/img/services/1200x900_s03.webp"
                }
                link={
                  "https://66faa60e88d18205c7f6f126--wondrous-cactus-f0ab23.netlify.app/"
                }
              />
              <AboutMeDetail
                projectname={"Frontend  Development"}
                name1={"EComerce / Design"}
                name2={"Style Guides"}
                description={
                  "Embedded multiple live sites to showcase my frontend skills."
                }
                img={
                  "https://mixdesign.club/themeforest/braxton/img/services/1200x900_s04.webp"
                }
                link={
                  "https://6780b8f3c9adf60176bba91e--lighthearted-concha-329e45.netlify.app/"
                }
              />
            </div>

            <div className="p-2 lg:p-1" id="resume">
              <p className=" font-semibold text-2xl lg:text-5xl  lg:px-4 pt-20 lg:mb-2 ">
                Education and Practical <br />
                Experience
              </p>

              <div className="  pt-4 font-semibold">
                <p className="  p-1 lg:p-4  text- ">
                  Be what you would seem to be - or, if you'd like it put more
                  simply - never imagine yourself not to be otherwise than what
                  it might appear to others that what you were or might have
                  been was not otherwise than what you had been would have
                  appeared to them to be otherwise.
                </p>

                {/* education Section */}
                <div className="pb-5  lg:pt-20  text-md  lg:px-2 pt-32">
                  <p className="lg:pb-10 text-2xl lg:text-4xl">My Education</p>
                  <MyEdu
                    year={"2022-26"}
                    course={"Btech"}
                    coursename={"Course From Graphic Era Hill"}
                    details={
                      "Pursuing B.Tech in Computer Science from Graphic Era University, focusing on programming, algorithms, and software development."
                    }
                  />

                  <MyEdu
                    year={"2018-19"}
                    course={"12th "}
                    coursename={"Schooling From St Pauls Sr Secondary"}
                    details={
                      "I completed my 12th grade as part of the COVID-19 batch, no exams were conducted. As a result, my percentage was lower than usual."
                    }
                  />
                  <MyEdu
                    year={"2018-19"}
                    course={"10th "}
                    coursename={"Schooling From St Pauls Sr Secondary"}
                    details={
                      "Completed 10th grade with a score of 71%, demonstrating a strong foundation in core subjects and a commitment to academic growth"
                    }
                  />
                </div>

                {/* Work experience*/}
                <div className="pb-5  lg:pt-20  text-md  lg:px-2 pt-32">
                  <p className="lg:pb-10 text-2xl lg:text-4xl">
                    Work experience
                  </p>
                  <MyEdu
                    year={"2025"}
                    course={"InternShip Program"}
                    coursename={"Recieved 1st Intern Offer From ShadowFox "}
                    details={
                      "Received my first internship offer letter, filled with excitement and gratitude! 🎉 Looking forward to working on impactful projects and gaining valuable experience."
                    }
                  />
                </div>
                {/* ICons */}
                <div className="lg:p-2 lg:px-2  pt-32">
                  <p className="pb-5 pt-16 lg:pb-10 font-semibold text-2xl lg:text-4xl">
                    My Favorute Tools
                  </p>
                  <div className="  flex items-center justify-center flex-wrap gap-3 lg:gap-4">
                    <Tools
                      img={"https://www.svgrepo.com/show/355190/reactjs.svg"}
                      name={"ReactJs"}
                    />
                    <Tools
                      img={"https://www.svgrepo.com/show/354118/nodejs.svg"}
                      name={"NodeJS"}
                    />
                    <Tools
                      img={
                        "https://mixdesign.club/themeforest/braxton/img/icons/icon-html.svg"
                      }
                      name={"HTML"}
                    />

                    <Tools
                      img={
                        "https://mixdesign.club/themeforest/braxton/img/icons/icon-illustrator.svg"
                      }
                      name={"AI"}
                    />
                    <Tools
                      img={
                        "https://mixdesign.club/themeforest/braxton/img/icons/icon-css.svg"
                      }
                      name={"CSS"}
                    />
                    <Tools
                      img={
                        "https://mixdesign.club/themeforest/braxton/img/icons/icon-figma.svg"
                      }
                      name={"Figma"}
                    />
                    <Tools
                      img={"https://www.svgrepo.com/show/353925/javascript.svg"}
                      name={"JS"}
                    />
                    <Tools
                      img={"https://www.svgrepo.com/show/374118/tailwind.svg"}
                      name={"Tailwind"}
                    />
                    <Tools
                      img={"https://www.svgrepo.com/show/452210/git.svg"}
                      name={"Git"}
                    />
                    <Tools
                      img={"https://www.svgrepo.com/show/452091/python.svg"}
                      name={"Python"}
                    />
                    <Tools
                      img={"https://www.svgrepo.com/show/353498/bootstrap.svg"}
                      name={"BS"}
                    />
                    <Tools
                      img={"https://www.svgrepo.com/show/373276/linux.svg"}
                      name={"Linux"}
                    />
                    <Tools
                      img={"https://www.svgrepo.com/show/331488/mongodb.svg"}
                      name={"Mongo"}
                    />
                    <Tools
                      img={
                        "https://www.svgrepo.com/show/331760/sql-database-generic.svg"
                      }
                      name={"SQL"}
                    />
                    <Tools
                      img={"https://www.svgrepo.com/show/353724/express.svg"}
                      name={"Express"}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div id="contact">
              <div className="p-2 font-semibold lg:px-4  pt-12  text-2xl lg:text-4xl">
                <p>
                  Let's Make Someting <br />
                  awesome together{" "}
                </p>
              </div>

              <Contact />

              <div className="gap-3 lg:gap-4 flex flex-wrap w-full px-1 lg:px-2 justify-between items-center ">
                <SocialMedia
                  link={"https://www.linkedin.com/in/vinod-barti-339571268/"}
                  logo={FaLinkedin}
                />
                <SocialMedia
                  link={"https://github.com/Vinod123456183"}
                  logo={FaGithub}
                />
                <SocialMedia
                  link={"mailto:vinodsinghbarti420@gmail.com"}
                  logo={SiGmail}
                />
                <SocialMedia
                  link={"https://www.instagram.com/___deeppak_3__9/"}
                  logo={FaInstagram}
                />
                <SocialMedia
                  link={
                    "https://api.whatsapp.com/send?phone=919456541392&text=%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F"
                  }
                  logo={FaWhatsapp}
                />
                <SocialMedia
                  link={"https://medium.com/@vinodsinghbarti420"}
                  logo={FaMedium}
                />
                <SocialMedia
                  link={"https://www.facebook.com/vinodsingh.barti/"}
                  logo={FaFacebookSquare}
                />
                <SocialMedia
                  link={"https://t.me/vinod_1_3"}
                  logo={FaTelegram}
                />
                <SocialMedia
                  link={"https://wa.me/9456541392"}
                  logo={FaSquarePhone}
                />
                <SocialMedia
                  link={"https://wa.me/9456541392"}
                  logo={FaMessage}
                />
              </div>

              <div className="pt-20 pb-10">
                <p className="p-2 text-2xl lg:text-3xl  font-semibold pb-16   lg:p-3 lg:px-2 ">
                  Want to know more about me, tell me about your project or just
                  to say hello? Drop me a line and I'll get back as soon as
                  possible.
                </p>
                <div className="pt-10 px-2">
                  <Locations />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
