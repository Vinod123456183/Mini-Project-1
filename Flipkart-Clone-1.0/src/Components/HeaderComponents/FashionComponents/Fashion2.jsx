import React from "react";
import MainHeader from "../FashionComponents/Fashion2/Fashion2Components/MainHeader";
import MiniHeader from "../FashionComponents/Fashion2/Fashion2Components/MiniHeader";
import MovingDivFashion2 from "../FashionComponents/Fashion2/Fashion2Components/MovingDivFashion2";
import FourGirlImg from "./Fashion2/Fashion2Components/FourGirlImg";
import FilterDivFashion2 from "./Fashion2/Fashion2Components/FilterDivFashion2";

function Fashion2() {
  return (
    <div className="bg-white">
      <MainHeader />
      <MiniHeader />
      <MovingDivFashion2 />
      <div className="grid grid-cols-4 gap-5 px-4 rounded-lg p-2 md:p-4">
        <FourGirlImg
          img="https://int.zigzag.lk/cdn/shop/files/2_2dce501b-d6b7-4476-8f5b-fec46cd879b1_469x.progressive.png.jpg?v=1733731915"
          txt="text5"
        />
        <FourGirlImg
          img="https://int.zigzag.lk/cdn/shop/files/1_407ae895-7d15-4b2d-957f-e3011becddc8_1005x.progressive.png.jpg?v=1733731945"
          txt="text"
        />
        <FourGirlImg
          img="https://int.zigzag.lk/cdn/shop/files/4_ef6883ef-ba4c-44c7-854f-449f4ba825f8_1005x.progressive.png.jpg?v=1733732009"
          txt="te xt"
        />
        <FourGirlImg
          img="https://int.zigzag.lk/cdn/shop/files/5_1005x.progressive.png.jpg?v=1733733137"
          txt="te xt"
        />
      </div>
      <FilterDivFashion2 />
    </div>
  );
}

export default Fashion2;
