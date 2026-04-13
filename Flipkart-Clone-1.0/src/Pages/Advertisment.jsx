import React from "react";

function Advertisment({img, onClick, alt}) {
  return (
    <div>
      <div onClick={onClick}>
        <img src={img} alt={alt} />
      </div>
    </div>
  );
}

export default Advertisment;
