import { Link } from "react-router-dom";

function OnlyImageContent({ img1, img2, img3, img4 }) {
  return (
    <div>
      <div className=" grid grid-cols-4 gap-1 items-center justify-center   pt-2 ">
        <Link to={"./"}>
          <div className="transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-95 ">
            <img src={img1} alt="" />
          </div>
        </Link>
        <Link to={"./"}>
          <div className="transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-95 ">
            <img src={img2} alt="" />
          </div>
        </Link>
        <Link to={"./"}>
          <div className="transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-95 ">
            <img src={img3} alt="" />
          </div>
        </Link>
        <Link to={"./"}>
          <div className="transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-95 ">
            <img src={img4} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default OnlyImageContent;
