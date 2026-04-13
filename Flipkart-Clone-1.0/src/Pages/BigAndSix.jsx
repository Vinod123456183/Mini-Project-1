import React from "react";
import { img1, img2, img3, img4, img5, img6 } from "../assets/B61/"; // Assuming these are your images

function BigAndSix() {
  const mainImage =
    "https://rukminim2.flixcart.com/fk-p-flap/1600/140/image/a19d56e1234fed98.jpg?q=20";
  const images = [img1, img2, img3, img4, img5, img6]; // Array of images for the grid

  return <BigAndSix mainImage={mainImage} images={images} />;
}

export default BigAndSix;
