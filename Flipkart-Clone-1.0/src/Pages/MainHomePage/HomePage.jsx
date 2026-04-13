import Header2 from "../../Components/MainComponents/Header2";
import SmallImageSlider from "../../Components/SmallImageSlider";
import BestSeller from "../../Components/MainComponents/BestSeller";
import BestSeller2 from "../../Components/MainComponents/BestSeller2";
import FourSection from "../../Components/FourSection";
import SixImgsDiv from "../SixImgsDiv";
// import './App.css'

// import img from "./assets/a.png";
import TwoSectionGrid from "../../Pages/TwoSectionGrid";
import Advertisment from "../../Pages/Advertisment";
import SixImgNoImg from "../../Pages/SixImgNoImg";
import HorizontalItems from "../../Pages/HorizontalItems";
import OnlyImageContent from "../../Pages/OnlyImageContent";
import Header from "../../Components/MainComponents/Header";
function HomePage() {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-col  mx-2">
        <Header />
        <div className="p-5">
          <Header2 />
        </div>
        <SmallImageSlider />
      </div>

      <BestSeller heading={"Best Seller "} />
      <BestSeller2 heading={"Best Collection"} />
      <div className="grid grid-cols-1 md:grid-cols-4  pt-1 gap-y-3">
        <FourSection
          main="Explore more from Small Businesses"
          img1="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/December/Desktop_QC_Clothing_1x._SY116_CB540581077_.jpg"
          text1="Ethics Dress and More"
          img2={
            "https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/December/Desktop_QC_Decor_1x._SY116_CB540581077_.jpg"
          }
          text2="Decor "
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/December/Desktop_QC_Fashion_Accessories_1x._SY116_CB540581077_.jpg"
          text3="Fashion Accessories"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/December/Desktop_QC_Glasses_1x._SY116_CB540581077_.jpg"
          text4="Glassware & drinkware"
        />
        <FourSection
          main="Revamp your home in style and more.."
          img1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg"
          text1="Cover & Bedsheet"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg"
          text2="Figurines , vases & more "
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg"
          text3="Home Storage"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg"
          text4="Lightining Solution"
        />
        <FourSection
          main="Starting ₹149 | Headphones and more.."
          img1="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg"
          text1="Starting ₹249 | boAt"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg"
          text2="Starting ₹349 | boult "
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg"
          text3="Starting ₹649 | Noise"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg"
          text4="Starting ₹149 | Zebronics"
        />
        <FourSection
          main="Appliances for your home | Up to 55% off"
          img1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
          text1="Air Conditioners"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
          text2="Refrigerators "
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
          text3="Microwaves"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
          text4="Washing Machines"
        />
        <FourSection
          main="Automotive essentials | Up to 60% off"
          img1="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg"
          text1="Cleaning Accessories"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg"
          text2="Tyre & rim care"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg"
          text3="Helmets"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg"
          text4="Vaccume Cleaner"
        />
        <FourSection
          main="Starting ₹199 | Amazon Brands & more"
          img1="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg"
          text1="Starting ₹199 Bedsheets"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg"
          text2="Starting ₹199 Curtains"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg"
          text3="Minimum 40% off| ironboard & more"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg"
          text4="Upto 60% off | Home decor"
        />
        <FourSection
          main="Up to 60% off | Styles for women"
          img1="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg"
          text1="Women's Clothing"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg"
          text2="Footwear + Handbag"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg"
          text3="Watches"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg"
          text4="Fashion jewellery"
        />
        <FourSection
          main="Min. 40% off | Gifting toys for little ones | Flipkart..."
          img1="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/baby/QC_PC_186x116_9._SY116_CB563558900_.jpg"
          text1="Min. 40% off | Indoor games"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_14._SY116_CB541414575_.jpg"
          text2="Min. 40% off | Ride ons"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_11._SY116_CB541414575_.jpg"
          text3="Min. 40% off | Outdoor games"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_16._SY116_CB541411275_.jpg"
          text4="Get Started Now"
        />
      </div>

      <div className="mx-2 ">
        <SixImgsDiv
          mainImage="https://rukminim2.flixcart.com/fk-p-flap/1600/140/image/a19d56e1234fed98.jpg?q=20"
          img1={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/b3ee941d6274f1ff.png?q=20"
          }
          img2={
            // "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/c5d934dadf5ab311.jpg?q=20"
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/d042ed7a0d8176fe.jpg?q=20"
          }
          img3={
            // "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/388e46508cfc77dd.jpg?q=20"
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/08ed687587b6272c.jpg?q=20"
          }
          img4={
            // "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/a9b00ce10f28927b.jpg?q=20"
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/5d4623ecc38d30c5.png?q=20"
          }
          img5={
            // "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/c20111b7b13bac96.jpg?q=20"
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/148e9883140d6e35.png?q=20"
          }
          img6={
            // "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/7ce846f464bc367a.jpg?q=20"
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6abc52491461c554.jpg?q=20"
          }
        />
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-3 mx-2  ">
        <TwoSectionGrid
          heading={"Under ₹499 | Pocket-friendly fashion"}
          name1={"Clothing"}
          img1={
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-1-186-116._SY116_CB636055991_.jpg"
          }
          img2={
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-3-186-116._SY116_CB636055991_.jpg"
          }
          img3={
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-2-186-116._SY116_CB636055991_.jpg"
          }
          img4={
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-4-186-116._SY116_CB636055991_.jpg"
          }
          discount1={" Min 50% Off"}
          name2={"Bagpack"}
          discount2={"Min 50% Off"}
          name3={"Footwear"}
          discount3={"Min 50% Off"}
          name4={"Mens and Women"}
          discount4={"Min 50% Off"}
        />
        <TwoSectionGrid
          heading={"Under ₹599 | Bedroom Accessories   "}
          name1={"Chairs"}
          img1={
            "https://m.media-amazon.com/images/I/71FIVIV316L._AC_SY170_.jpg"
          }
          img2={
            "https://m.media-amazon.com/images/I/61wHkCENFtL._AC_SY170_.jpg"
          }
          img3={
            "https://m.media-amazon.com/images/I/51cXkIfVBtL._AC_SY170_.jpg"
          }
          img4={
            "https://m.media-amazon.com/images/I/51GIMFvynDL._AC_SY170_.jpg"
          }
          discount1={" Min 50% Off"}
          name2={"Footmats"}
          discount2={"Min 50% Off"}
          name3={"Office Study Chair"}
          discount3={"Min 50% Off"}
          name4={"Sofas"}
          discount4={"Min 50% Off"}
        />

        <div className="flex ">
          <Advertisment img={""} alt={"Add"} onClick={() => {}} />
        </div>
      </div>

      <div className="mx-2 ">
        <SixImgsDiv
          // mainImage="https://rukminim2.flixcart.com/fk-p-flap/1600/350/image/a60ad09db7cdf3f7.png?q=20"
          mainImage="https://rukminim2.flixcart.com/fk-p-flap/1600/350/image/d3d9fe6aa331e1fa.jpg?q=20"
          img1={
            // "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/75fb3403799831e1.jpg?q=20"
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6a50a23ea6319ed4.jpg?q=20"
          }
          img2={
            // "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/74dc9e7511360029.jpg?q=20"
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/547d756f97507e15.jpg?q=20"
          }
          img3={
            // "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6c415fa75271d719.jpg?q=20"
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/c337d4aef8aa4c16.jpg?q=20"
          }
          img4={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/2dc85f509a490df0.png?q=20"
          }
          img5={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/555a34b43a2c618d.png?q=20"
          }
          img6={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/fef4f80ff53ba9ab.png?q=20"
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mx-2 ">
        <TwoSectionGrid
          heading={"Up to 50% off | Home Decor Products from stores nearby "}
          name1={"Table Lamp"}
          img1={
            "https://m.media-amazon.com/images/I/71-TMoSFo-L._AC_SY170_.jpg"
          }
          img2={
            "https://m.media-amazon.com/images/I/71-eNBuYoPL._AC_SY170_.jpg"
          }
          img3={
            "https://m.media-amazon.com/images/I/91rf+9l7NRL._AC_SY170_.jpg"
          }
          img4={
            "https://m.media-amazon.com/images/I/71IYWMZNKVL._AC_SY170_.jpg"
          }
          discount1={" Min 50% Off"}
          name2={"Glass Jars"}
          discount2={"Min 50% Off"}
          name3={"Glass Plates"}
          discount3={"Min 50% Off"}
          name4={"Glass Container"}
          discount4={"Min 50% Off"}
        />
        <TwoSectionGrid
          heading={"Up to 50% off | Top Products for You "}
          name1={"Shoes"}
          img1={
            "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/ATF_BAU/Dec/UBS/PCQC/Sport_low._SY116_CB539722664_.jpg"
          }
          img2={
            "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/ATF_BAU/Dec/UBS/PCQC/Jewelry_low._SY116_CB539722664_.jpg"
          }
          img3={
            "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/ATF_BAU/Dec/UBS/PCQC/Watches_low._SY116_CB539722664_.jpg"
          }
          img4={
            "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Nov25/HB_Low._SY116_CB540429415_.jpg"
          }
          discount1={" Min 50% Off"}
          name2={"Necklaces"}
          discount2={"Min 50% Off"}
          name3={"Stylish Watches"}
          discount3={"Min 50% Off"}
          name4={"Handbag Purse"}
          discount4={"Min 50% Off"}
        />

        <div className="flex ">
          <Advertisment img={""} alt={"Add"} onClick={() => {}} />
        </div>
      </div>

      <div className=" ">
        <SixImgNoImg
          img1={
            // "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/0b6d5a2f6233269a.jpg?q=20"
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ac7e50a78daeac67.png?q=20"
          }
          img2={
            // "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/8ab586e0365a9681.jpg?q=20"
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6c613e3c99904603.jpg?q=20"
          }
          img3={
            // "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/f31fded66b8f3bbe.jpg?q=20"
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/e707222ea0670474.jpg?q=20"
          }
          img4={
            // "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/aaec95a6d9055d0a.jpg?q=20"
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/b90e81b613b86406.jpg?q=20"
          }
          img5={
            // "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/a96a7d453aec7188.jpg?q=20"
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/f2b8bb049f875982.png?q=20"
          }
          img6={
            // "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/63863d847ad688b0.jpg?q=20"
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/46c7b06a200da470.png?q=20"
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mx-2 ">
        <TwoSectionGrid
          heading={"Up to 70% off | Kitchen tools, water utensils and more  "}
          name1={"Bed Items"}
          img1={
            "https://m.media-amazon.com/images/I/61cWkRrn0cL._AC_SY200_.jpg"
          }
          img2={
            "https://m.media-amazon.com/images/I/61NulmrlM9L._AC_SY200_.jpg"
          }
          img3={
            "https://m.media-amazon.com/images/I/61k3Y3RbFqL._AC_SY200_.jpg"
          }
          img4={
            "https://m.media-amazon.com/images/I/61xWsxaxKNL._AC_SY200_.jpg"
          }
          discount1={" Min 50% Off"}
          name2={"Beds"}
          discount2={"Min 50% Off"}
          name3={"Office Study Chair"}
          discount3={"Min 50% Off"}
          name4={"Sofas"}
          discount4={"Min 50% Off"}
        />
        <TwoSectionGrid
          heading={"Upto 20% Off | On Unique  from stores nearby   "}
          name1={"Photo Frame"}
          img1={
            "https://m.media-amazon.com/images/I/81Oda5dqDrL._AC_SY200_.jpg"
          }
          img2={
            "https://m.media-amazon.com/images/I/81voCGj5u-L._AC_SY200_.jpg"
          }
          img3={
            "https://m.media-amazon.com/images/I/815vWGnQ6XL._AC_SY200_.jpg"
          }
          img4={
            "https://m.media-amazon.com/images/I/71W2OK9xSFL._AC_SY200_.jpg"
          }
          discount1={" Min 50% Off"}
          name2={"Idols "}
          discount2={"Min 50% Off"}
          name3={"Wall Hanging "}
          discount3={"Min 50% Off"}
          name4={"Idols and more"}
          discount4={"Min 50% Off"}
        />

        <div className="flex">
          <Advertisment img={""} alt={"Add"} onClick={() => {}} />
        </div>
      </div>

      <div className=" ">
        <SixImgNoImg
          img1={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/248d38574aada422.jpg?q=20"
          }
          img2={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/1829b9a9fc33ecb4.jpg?q=20"
          }
          img3={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/42c7af524a56b971.png?q=20"
          }
          img4={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/0abd8e6d900ba89f.jpg?q=20"
          }
          img5={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/44650052cb39c9f7.jpg?q=20"
          }
          img6={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/2012cb50b41d78b4.jpg?q=20"
          }
        />
      </div>

      <div className="  mx-2 space-y-2">
        <HorizontalItems
          heading={"Grooming , Books, Auto & more"}
          name1={"Top Selling Stationery"}
          img1={
            "https://m.media-amazon.com/images/I/81rRFrCtjHL._AC_UL480_FMwebp_QL65_.jpg"
          }
          discount1={"From Inr 49"}
          name2={"Remote Control Toys"}
          img2={
            "https://m.media-amazon.com/images/I/717pTcRrigL._AC_UL480_FMwebp_QL65_.jpg"
          }
          discount2={"Up to 80% Off"}
          name3={"Best of Action Toys"}
          img3={
            "https://m.media-amazon.com/images/I/71Qg-7+pt4L._AC_UL480_FMwebp_QL65_.jpg"
          }
          discount3={"Up to 70% Off"}
          name4={"Cofee Powder"}
          img4={
            "https://m.media-amazon.com/images/I/71o+xJDf95L._AC_UL480_FMwebp_QL65_.jpg"
          }
          discount4={"Up to 80% Off"}
          name5={"Dry Fruits"}
          img5={
            "https://m.media-amazon.com/images/I/71Jcb6oYRPL._AC_UL480_FMwebp_QL65_.jpg"
          }
          discount5={"Up to 75% Off"}
          name6={"Treadmill , Exercise ...."}
          img6={
            "https://m.media-amazon.com/images/I/71+cEairvSL._AC_UY327_FMwebp_QL65_.jpg"
          }
          discount6={"Up to 70% Off"}
        />

        <HorizontalItems
          heading={"Furniture Deals"}
          img1={
            "https://m.media-amazon.com/images/I/81p-bJ2-S4L._AC_UL480_FMwebp_QL65_.jpg"
          }
          name1={"Mattresses"}
          discount1={"From 2,990"}
          img2={
            "https://m.media-amazon.com/images/I/61BGV75tAnL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name2={"Sofa & Sectional"}
          discount2={"From 7,999"}
          img3={
            "https://m.media-amazon.com/images/I/61fIviipxJL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name3={"Office Study Chairs"}
          discount3={"From 1,890"}
          img4={
            "https://m.media-amazon.com/images/I/71oWwF5-pUL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name4={"Beds"}
          discount4={"From 1,790"}
          img5={
            "https://m.media-amazon.com/images/I/81qGQQoaXcL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name5={"TV Units"}
          discount5={"From 1,249"}
          img6={
            "https://m.media-amazon.com/images/I/71eAZ+qqHDL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name6={"Outdoor Chairs"}
          discount6={"From 990"}
        />
      </div>

      <div className="">
        <SixImgNoImg
          img1={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/0fd27df2ed8d11cf.jpg?q=20"
          }
          img2={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/d3fc442082091bed.png?q=20"
          }
          img3={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/b45d989c8570328f.png?q=20"
          }
          img4={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/f42e030ec95cb119.jpg?q=20"
          }
          img5={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/a3f4ae6cb355530f.jpg?q=20"
          }
          img6={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/5be06d8515f7fc85.jpg?q=20"
          }
        />
      </div>

      <div className="mx-2  space-y-2">
        <HorizontalItems
          heading={" Top Women's Deals"}
          img1={
            "https://m.media-amazon.com/images/I/61wwLxKN6gL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name1={"Women's Shirts  "}
          discount1={"Min 70% Off"}
          img2={
            "https://m.media-amazon.com/images/I/31EdcndesFL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name2={"Women's Nightsuits "}
          discount2={"Upto 80% Off"}
          img3={
            "https://m.media-amazon.com/images/I/71Hmi0ljnUL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name3={"Lingerie Sets"}
          discount3={"Under ₹1299"}
          img4={
            "https://m.media-amazon.com/images/I/71VveO7JuYL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name4={"Women Bra "}
          discount4={"From ₹199"}
          img5={
            "https://m.media-amazon.com/images/I/612VLDhrIdL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name5={"Track Pants "}
          discount5={"From ₹299"}
          img6={
            "https://m.media-amazon.com/images/I/614RjM3YPhL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name6={"Alan Jones"}
          discount6={"Under ₹499"}
        />

        <HorizontalItems
          heading={"Fashion Top Deals"}
          img1={
            "https://m.media-amazon.com/images/I/61lzQ6LtDTL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name1={"U.S Polo Assn.,Highlanded..."}
          discount1={"Min 70% Off"}
          img2={
            "https://m.media-amazon.com/images/I/612UMXIsp5L._AC_UL480_FMwebp_QL65_.jpg"
          }
          name2={"Sweatshirts , Hoodides , H...."}
          discount2={"From ₹399"}
          img3={
            "https://m.media-amazon.com/images/I/71V4RzxkvtL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name3={"Bag , Trolley , Luggages..."}
          discount3={"50-70%+ 10% Off"}
          img4={
            "https://m.media-amazon.com/images/I/61yUss8p-uL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name4={"Kurta Sets "}
          discount4={"Min 70% Off"}
          img5={
            "https://m.media-amazon.com/images/I/71jF7678loL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name5={"Trendy Kurta "}
          discount5={"Under ₹499"}
          img6={
            "https://m.media-amazon.com/images/I/71csNTBGnLL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name6={"Trendy Saree"}
          discount6={"Under ₹399"}
        />
      </div>

      <div className="">
        <SixImgNoImg
          img1={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/0b6d5a2f6233269a.jpg?q=20"
          }
          img2={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/8ab586e0365a9681.jpg?q=20"
          }
          img3={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/f31fded66b8f3bbe.jpg?q=20"
          }
          img4={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/aaec95a6d9055d0a.jpg?q=20"
          }
          img5={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/a96a7d453aec7188.jpg?q=20"
          }
          img6={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/63863d847ad688b0.jpg?q=20"
          }
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row  px-2 space-x-2 ">
        <div className="max-w-[420px] ">
          <TwoSectionGrid
            heading={" Best Deals on  Phones "}
            name1={"IPhone "}
            img1={
              "https://m.media-amazon.com/images/I/61Ony8rgwEL._AC_UY327_FMwebp_QL65_.jpg"
            }
            img2={
              "https://m.media-amazon.com/images/I/71o8VehMHXL._AC_UY327_FMwebp_QL65_.jpg"
            }
            img3={
              "https://m.media-amazon.com/images/I/61YIKEr9Y9L._AC_UY327_FMwebp_QL65_.jpg"
            }
            img4={
              "https://m.media-amazon.com/images/I/71goZuIha-L._AC_UY327_FMwebp_QL65_.jpg"
            }
            discount1={" Min 50% Off"}
            name2={"OnePlus "}
            discount2={"Min 50% Off"}
            name3={"Google Pixel"}
            discount3={"Min 50% Off"}
            name4={"Samsung"}
            discount4={"Min 50% Off"}
          />
        </div>
        <div className="max-w-[420px] ">
          <TwoSectionGrid
            heading={" Best Deals on  laptops  "}
            name1={"Hp Laptops "}
            img1={
              "https://m.media-amazon.com/images/I/71stbZtYInL._AC_UY327_FMwebp_QL65_.jpg"
            }
            img2={
              "https://m.media-amazon.com/images/I/61eA9PkZ07L._AC_UY327_FMwebp_QL65_.jpg"
            }
            img3={
              "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg"
            }
            img4={
              "https://m.media-amazon.com/images/I/718zbAOG7HL._AC_UY327_FMwebp_QL65_.jpg"
            }
            discount1={" Min 50% Off"}
            name2={"Macbook M3"}
            discount2={"Min 50% Off"}
            name3={"Macbook M1"}
            discount3={"Min 50% Off"}
            name4={"Victus"}
            discount4={"Min 50% Off"}
          />
        </div>

        {/* <div className="flex flex-col">
            <img
              src={
                "https://photos5.appleinsider.com/gallery/product_pages/204-hero.jpg?=1733399304"
              }
              alt=""
              className="w-full object-contain h-[200px] "
            />
            <img
              src={
                "https://photos5.appleinsider.com/gallery/0-116334-iPhone-15-cameras-xl.jpg"
              }
              alt=""
              className="w-full  object-contain  md:h-[190px] lg:h-[260px] xl:h-[250px]  "
            />
          </div> */}
      </div>

      <div className="px-2 pt-2 ">
        <HorizontalItems
          heading={"Best Deals On Electronics & Accessories"}
          img1={
            "https://rukminim2.flixcart.com/image/416/416/xif0q/keyboard/laptop-keyboard/z/q/s/key7-combo-keyboard-mouse-combo-set-with-2-4ghz-1200-dpi-original-imagwdmcabwmcnvu.jpeg?q=70&crop=false"
          }
          name1={"Keyboard and Mouse"}
          discount1={"Under ₹99"}
          img2={
            "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/6/e/o/15-fa1327tx-gaming-laptop-hp-original-imah49jgajdqgjcz.jpeg?q=70"
          }
          name2={"Laptops"}
          discount2={"Under ₹25,999"}
          img3={
            "https://rukminim2.flixcart.com/image/612/612/xif0q/pendrive/pendrive/q/g/d/a1-xyz-hp-original-imagstfnggyj9f2m.jpeg?q=70"
          }
          name3={"Pendrives "}
          discount3={"Under ₹699"}
          img4={
            "https://rukminim2.flixcart.com/image/128/128/xif0q/speaker/l/q/2/-original-imah4gnkgkzudxgf.jpeg?q=70&crop=false"
          }
          name4={"Bluetooth Soundbox"}
          discount4={"Under ₹599"}
          img5={
            "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/g/f/k/-original-imahfj7nzfryptfv.jpeg?q=70"
          }
          name5={"Mobile Headphones"}
          discount5={"Under ₹499"}
          img6={
            "https://rukminim2.flixcart.com/image/612/612/xif0q/battery-charger/w/4/1/iphn-11-12-13-fast-charging-18-w-power-delivery-pd-charger-with-original-imah5zc53yh888h2.jpeg?q=70"
          }
          name6={"Charger & Adapter"}
          discount6={"Under ₹199"}
        />
      </div>

      <div className="mx-2 ">
        <OnlyImageContent
          img1={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/8ab586e0365a9681.jpg?q=20"
          }
          img2={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/0b6d5a2f6233269a.jpg?q=20"
          }
          img3={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/8ab586e0365a9681.jpg?q=20"
          }
          img4={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/aaec95a6d9055d0a.jpg?q=20"
          }
        />
      </div>

      <div className="mx-2">
        <HorizontalItems
          heading={"Kitchen Accessories & more"}
          img1={
            "https://m.media-amazon.com/images/I/61hD-fVYjcL._AC_UY327_FMwebp_QL65_.jpg"
          }
          name1={"Microwave"}
          discount1={"From ₹8,999"}
          img2={
            "https://m.media-amazon.com/images/I/61tg52t21QL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name2={"Gas Stove"}
          discount2={"From ₹2,999"}
          img3={
            "https://m.media-amazon.com/images/I/71vfrhmJ1SL._AC_UY327_FMwebp_QL65_.jpg"
          }
          name3={"Mixer & Grinders"}
          discount3={"From ₹1,999"}
          img4={
            "https://m.media-amazon.com/images/I/71keoWUVGvL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name4={"Utensils Stand"}
          discount4={"From ₹999"}
          img5={
            "https://m.media-amazon.com/images/I/71bmk7NQKkL._AC_UY327_FMwebp_QL65_.jpg"
          }
          name5={"Water Purifier"}
          discount5={"From ₹1,099"}
          img6={
            "https://m.media-amazon.com/images/I/61eZDCysoeL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name6={"Storage Rack"}
          discount6={"From ₹899"}
        />
      </div>

      <div className="mx-2 pt-2">
        <OnlyImageContent
          img1={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/0b6d5a2f6233269a.jpg?q=20"
          }
          img2={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/0b6d5a2f6233269a.jpg?q=20"
          }
          img3={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/8ab586e0365a9681.jpg?q=20"
          }
          img4={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/aaec95a6d9055d0a.jpg?q=20"
          }
        />
      </div>

      <div className="mx-2 pt-2">
        <HorizontalItems
          heading={"Bathroom Accessories & more"}
          img1={
            "https://m.media-amazon.com/images/I/616kf2DfM3L._AC_UL480_FMwebp_QL65_.jpg"
          }
          name1={"Towel Holder"}
          discount1={"From ₹199"}
          img2={
            "https://m.media-amazon.com/images/I/5150doEAwNL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name2={"Soap Holder"}
          discount2={"From ₹199"}
          img3={
            "https://m.media-amazon.com/images/I/81qt5I5rBcL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name3={"Washroom Essentials"}
          discount3={"From ₹299"}
          img4={
            "https://m.media-amazon.com/images/I/619YEfl2foL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name4={"Washroom Soap Squezzer"}
          discount4={"From ₹199"}
          img5={
            "https://m.media-amazon.com/images/I/515nNlnjmSL._AC_UY327_FMwebp_QL65_.jpg"
          }
          name5={"Geyser"}
          discount5={"From ₹8,999"}
          img6={
            "https://m.media-amazon.com/images/I/51VjkKSBTCL._AC_UL480_FMwebp_QL65_.jpg"
          }
          name6={"Soap Holder"}
          discount6={"From ₹99"}
        />
      </div>

      <div className="mx-2 ">
        <OnlyImageContent
          img1={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6c415fa75271d719.jpg?q=20"
          }
          img2={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/0b6d5a2f6233269a.jpg?q=20"
          }
          img3={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/8ab586e0365a9681.jpg?q=20"
          }
          img4={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/aaec95a6d9055d0a.jpg?q=20"
          }
        />
      </div>

      <div className="  mx-2 pt-2">
        <HorizontalItems
          img1={
            "https://m.media-amazon.com/images/I/71hBUthcJ5L._AC_UY327_FMwebp_QL65_.jpg"
          }
          name1={"Samsung Refrigerator"}
          discount1={"From ₹12,999"}
          img2={
            "https://m.media-amazon.com/images/I/61QjBtPiQrL._AC_UY327_FMwebp_QL65_.jpg"
          }
          name2={"Semi Automatic Washin...."}
          discount2={"From ₹8,999"}
          img3={
            "https://m.media-amazon.com/images/I/71HeZPXsVuL._AC_UY327_FMwebp_QL65_.jpg"
          }
          name3={"Godrej Refrigerator"}
          discount3={"From ₹7,250"}
          img4={
            "https://m.media-amazon.com/images/I/71IOiVYOQKL._AC_UY327_FMwebp_QL65_.jpg"
          }
          name4={"Double Door Refrigerator"}
          discount4={"From ₹26,129"}
          img5={
            "https://m.media-amazon.com/images/I/51rI+jSqx5L._AC_UY327_FMwebp_QL65_.jpg"
          }
          name5={"Marq Refrigerator"}
          discount5={"From ₹8,999"}
          img6={
            "https://m.media-amazon.com/images/I/61YtNJ4j7eL._AC_UY327_FMwebp_QL65_.jpg"
          }
          name6={"Top Loading Washing Mac..."}
          discount6={"Buy Now"}
        />
      </div>

      <div className="px-2">
        <OnlyImageContent
          img1={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/99840871c3523b08.jpg?q=20"
          }
          img2={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/0b6d5a2f6233269a.jpg?q=20"
          }
          img3={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/8ab586e0365a9681.jpg?q=20"
          }
          img4={
            "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/aaec95a6d9055d0a.jpg?q=20"
          }
        />
      </div>
    </div>
  );
}

export default HomePage;
