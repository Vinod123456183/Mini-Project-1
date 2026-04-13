// Import images at the top of your file
import img1 from './demo-fashion-store-banner-01.jpg';
import img2 from './demo-fashion-store-banner-02.jpg';
import img3 from './demo-fashion-store-product-01.jpg';
import img4 from './demo-fashion-store-product-02.jpg'




const carouselData = [
  {
    p: "Discount On Selected Items",
    text1: "Men's",
    text2: "Collection",
    image: img2, // Using the imported image
  },
  {
    p: "Discount On Selected Items",
    text1: "Women's",
    text2: "Collection",
    image: img1, // Using the imported image
  },
  {
    p: "Discount On Selected Items",
    text1: "Kid's",
    text2: "Collection",
    image: img4, // Using the imported image
  },
  {
    p: "Discount On Selected Items",
    text1: "Childrens",
    text2: "Collection",
    image: img3, // Using the imported image
  },
];
export default carouselData;

