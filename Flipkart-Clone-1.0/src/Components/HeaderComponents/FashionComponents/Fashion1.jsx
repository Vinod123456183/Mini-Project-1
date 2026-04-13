// snitch clone
import React from "react";
import SnitchHeader from "./Components/Header/Header/SnitchHeader";
import MovingDiv from "./Fashion1Mens/Pages/MovingDiv";
import Filters from "./Fashion1Mens/Pages/Filters";
import OrderImagesComplete from "./Components/Header/Complete Img Component/OrderImagesComplete";
import SalesImageComplete from "./Components/Header/Complete Img Component/SalesImageComplete";
function Fashion1() {
  return (
    <div className="bg-white">
      <SnitchHeader />
      <MovingDiv />
      <Filters text1={"New Drops"} text2={"Most Trending"} />
      <OrderImagesComplete
        items={[
          {
            img: "https://www.snitch.co.in/cdn/shop/files/4mss3808-03-m-31.jpg?v=1735798625",
            hoverImg:
              "https://www.snitch.co.in/cdn/shop/files/4mss3808-03-m-19.jpg?v=1735798651",
            text: "Cream Geometric Regular Fit Overshirt",
            cost: "INR 1,399",
            size1: "XS",
            size2: "S",
            size3: "M",
            size4: "L",
            size5: "XL",
          },
          {
            img: "https://www.snitch.co.in/cdn/shop/files/4mss3305-03-m-41.jpg?v=1735811499",
            hoverImg:
              "https://www.snitch.co.in/cdn/shop/files/4mss3305-03-m-16.jpg?v=1735811499",
            text: "Cream Geometric Regular Fit Overshirt",
            cost: "INR 1,399",
            size1: "XS",
            size2: "S",
            size3: "M",
            size4: "L",
            size5: "XL",
          },
          {
            img: "https://www.snitch.co.in/cdn/shop/files/4mss3844-09-m-34.jpg?v=1735795222",
            hoverImg:
              "https://www.snitch.co.in/cdn/shop/files/4mss3844-09-m-19.jpg?v=1735795222",
            text: "Cream Geometric Regular Fit Overshirt",
            cost: "INR 1,399",
            size1: "XS",
            size2: "S",
            size3: "M",
            size4: "L",
            size5: "XL",
          },
          {
            img: "https://www.snitch.co.in/cdn/shop/files/4mss3844-08-m-30.jpg?v=1735798751",
            hoverImg:
              "https://www.snitch.co.in/cdn/shop/files/4mss3844-08-m-41.jpg?v=1735798751",
            text: "Cream Geometric Regular Fit Overshirt",
            cost: "INR 1,399",
            size1: "XS",
            size2: "S",
            size3: "M",
            size4: "L",
            size5: "XL",
          },
          {
            img: "https://www.snitch.co.in/cdn/shop/files/4mss3844-07-m-42.jpg?v=1735798767",
            hoverImg:
              "https://www.snitch.co.in/cdn/shop/files/4mss3844-07-m-19.jpg?v=1735798767",
            text: "Cream Geometric Regular Fit Overshirt",
            cost: "INR 1,399",
            size1: "XS",
            size2: "S",
            size3: "M",
            size4: "L",
            size5: "XL",
          },
        ]}
        link={"/collection/new-drops"}
      />

      <SalesImageComplete
        heading={"☀️ SEASONAL FAVS ☀️"}
        img1={
          "https://www.snitch.co.in/cdn/shop/files/CAT_Sale_web.jpg?v=1735968946&width=360"
        }
        text1={"LAST CHANCE"}
        img2={
          "https://www.snitch.co.in/cdn/shop/files/Shirts_5aad779f-7261-48e1-b2b8-0e215f4c1311.jpg?v=1735200403&width=540"
        }
        text2={"Shirts"}
        img3={
          "https://www.snitch.co.in/cdn/shop/files/Trousers_3203ea3f-9127-4934-a1c7-591dd2ce0b73.jpg?v=1735200403&width=540"
        }
        text3={"Trousers"}
        img4={
          "https://www.snitch.co.in/cdn/shop/files/Jeans_241d77e9-b582-4e07-a513-8c83bdb5ccf2.jpg?v=1735200403&width=540"
        }
        text4={"Denims"}
      />
      <Filters text1={"Sweaters"} text2={"Jacket"} text3={"Sweatshirt"} />

      <OrderImagesComplete
        items={[
          {
            img: "https://www.snitch.co.in/cdn/shop/files/32d1e432ca65bc92ef7554c5566b1bed.jpg?v=1733815747",
            hoverImg:
              "https://www.snitch.co.in/cdn/shop/files/e99dbb0d910ad98d0a0e960b77139446.jpg?v=1733815747",
            text: "Cream Geometric Regular Fit Overshirt",
            cost: "INR 1,399",
            size1: "XS",
            size2: "S",
            size3: "M",
            size4: "L",
            size5: "XL",
          },
          {
            img: "https://www.snitch.co.in/cdn/shop/files/c4d9eb37419b31c031a2b88b80722d9c.jpg?v=1733815656",
            hoverImg:
              "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/9c80c2e6b2f578f8357f5ad45031960b.jpg?v=1733815656",
            text: "Cream Geometric Regular Fit Overshirt",
            cost: "INR 1,399",
            size1: "XS",
            size2: "S",
            size3: "M",
            size4: "L",
            size5: "XL",
          },
          {
            img: "https://www.snitch.co.in/cdn/shop/files/196cabd62eb7b3ddab292d32bfd01431.jpg?v=1733814903",
            hoverImg:
              "https://www.snitch.co.in/cdn/shop/files/3f4214e448c4c0ebf2326c6871a8d7fa.jpg?v=1733814903",
            text: "Cream Geometric Regular Fit Overshirt",
            cost: "INR 1,399",
            size1: "XS",
            size2: "S",
            size3: "M",
            size4: "L",
            size5: "XL",
          },
          {
            img: "https://www.snitch.co.in/cdn/shop/files/bf0c59ecd4daf24a91509255b7775042.jpg?v=1733569277",
            hoverImg:
              "https://www.snitch.co.in/cdn/shop/files/7a9b45b31bfd057d935bc2354e269f32.jpg?v=1733569277",
            text: "Cream Geometric Regular Fit Overshirt",
            cost: "INR 1,399",
            size1: "XS",
            size2: "S",
            size3: "M",
            size4: "L",
            size5: "XL",
          },
        ]}
        link={"/collection/sweater"}
      />

      <SalesImageComplete
        heading={"TRENDING NOW"}
        img1={
          "https://www.snitch.co.in/cdn/shop/files/Flanel_Shirt.jpg?v=1735203494&width=540"
        }
        text1={"flankel shirt"}
        img2={
          "https://www.snitch.co.in/cdn/shop/files/464881879_18144267967355802_3574424924775240827_n_f917e14e-11e2-473e-bbce-5405d6e09a3e.jpg?v=1735200793&width=540"
        }
        text2={"korean Pants"}
        img3={
          "https://www.snitch.co.in/cdn/shop/files/4MSS3420-05-M_47.jpg?v=1735200513&width=540"
        }
        text3={"Formal wear"}
        img4={
          "https://www.snitch.co.in/cdn/shop/files/1733755355.jpg?v=1735267520&width=540"
        }
        text4={"club wear"}
      />
      <Filters text1={"Jeans "} text2={"T-shirts"} text3={"Shirts"} />
      <OrderImagesComplete
        items={[
          {
            img: "https://www.snitch.co.in/cdn/shop/files/5ecdef7090f3d06b46e0c3f744513edd.jpg?v=1735043234",
            hoverImg:
              "https://www.snitch.co.in/cdn/shop/files/e80ce6724aa72dfbc40245425f5b7b16.jpg?v=1735043234",
            text: "Cream Geometric Regular Fit Overshirt",
            cost: "INR 1,399",
            size1: "XS",
            size2: "S",
            size3: "M",
            size4: "L",
            size5: "XL",
          },
          {
            img: "https://www.snitch.co.in/cdn/shop/files/4304d7d2c3e8ee44bf8229acd846a0d4.jpg?v=1735043187",
            hoverImg:
              "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4ec58e1f9ce86ba2bd3ecf9255e24043.jpg?v=1735043187",
            text: "Cream Geometric Regular Fit Overshirt",
            cost: "INR 1,399",
            size1: "XS",
            size2: "S",
            size3: "M",
            size4: "L",
            size5: "XL",
          },
          {
            img: "https://www.snitch.co.in/cdn/shop/files/4MSD3713-01-3224.jpg?v=1734529258",
            hoverImg:
              "https://www.snitch.co.in/cdn/shop/files/4MSD3713-01-3216.jpg?v=1734529258",
            text: "Cream Geometric Regular Fit Overshirt",
            cost: "INR 1,399",
            size1: "XS",
            size2: "S",
            size3: "M",
            size4: "L",
            size5: "XL",
          },
          {
            img: "https://www.snitch.co.in/cdn/shop/files/4eb4cc2de39a35c6d4e974c6a4461fb6.jpg?v=1734525490",
            hoverImg:
              "https://www.snitch.co.in/cdn/shop/files/c5c292d51d0a951b6fcca0f68e5448bd.jpg?v=1734588751",
            text: "Cream Geometric Regular Fit Overshirt",
            cost: "INR 1,399",
            size1: "XS",
            size2: "S",
            size3: "M",
            size4: "L",
            size5: "XL",
          },
        ]}
      />
      <OrderImagesComplete
        items={[
          {
            img: "https://www.snitch.co.in/cdn/shop/files/4mss3305-03-m-41.jpg?v=1735811499",
            hoverImg:
              "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mss3305-03-m-2.jpg?v=1735811499&width=400",
            text: "Cream Geometric Regular Fit Overshirt",
            cost: "INR 1,399",
            size1: "XS",
            size2: "S",
            size3: "M",
            size4: "L",
            size5: "XL",
          },
          {
            img: "https://www.snitch.co.in/cdn/shop/files/c4d9eb37419b31c031a2b88b80722d9c.jpg?v=1733815656",
            hoverImg:
              "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/9c80c2e6b2f578f8357f5ad45031960b.jpg?v=1733815656",
            text: "Cream Geometric Regular Fit Overshirt",
            cost: "INR 1,399",
            size1: "XS",
            size2: "S",
            size3: "M",
            size4: "L",
            size5: "XL",
          },
          {
            img: "https://www.snitch.co.in/cdn/shop/files/196cabd62eb7b3ddab292d32bfd01431.jpg?v=1733814903",
            hoverImg:
              "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/5bc703cf93c1533b505916dd08b73d65.jpg?v=1733814903&width=400",
            text: "Cream Geometric Regular Fit Overshirt",
            cost: "INR 1,399",
            size1: "XS",
            size2: "S",
            size3: "M",
            size4: "L",
            size5: "XL",
          },
          {
            img: "https://www.snitch.co.in/cdn/shop/files/bf0c59ecd4daf24a91509255b7775042.jpg?v=1733569277",
            hoverImg:
              "https://www.snitch.co.in/cdn/shop/files/7a9b45b31bfd057d935bc2354e269f32.jpg?v=1733569277",
            text: "Cream Geometric Regular Fit Overshirt",
            cost: "INR 1,399",
            size1: "XS",
            size2: "S",
            size3: "M",
            size4: "L",
            size5: "XL",
          },
        ]}
      />
    </div>
  );
}

export default Fashion1;
