import React from 'react';

export default function Hero() {
  return (
    <>
      <div className="container">
        <div className="left-column">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
            <br />
            YOUR FEET DESERVE THE BEST AND <br />
            WE’RE HERE TO HELP YOU WITH OUR SHOES.
          </p>
          <div className="row">
            <button className="b1">Buy Now</button>
            <button className="b2">Add To Cart</button>
          </div>

        </div>
        <div className="right-column">
          <div className="clr">
          <img src="../public/imgs/hero-image.png" alt="Image" />

          </div>
        </div>
      </div>
    </>
  );
}
