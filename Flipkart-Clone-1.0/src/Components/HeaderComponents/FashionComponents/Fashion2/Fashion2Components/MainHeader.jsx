import React from "react";

function MainHeader() {
  return (
    <div className=" bg-white-layover flex items-center p-2 md:p-3 justify-between px-8 lg:px-14 ">
      <div>
        <img
          className="h-8"
          src="https://int.zigzag.lk/cdn/shop/files/zigzag_logo_Black_318cb611-4bb4-4bb3-85fd-42843a891a2b_352x.png?v=1652960607"
          alt=""
        />
      </div>
      <div className="flex text-black gap-3">
        <div>Person</div>
        <div>Bag </div>
      </div>
    </div>
  );
}

export default MainHeader;
