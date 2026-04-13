import { useNavigate } from "react-router-dom";

function ItemDisplay({ activeFilter }) {
  const navigate = useNavigate();
  const content = {
    "New Arrival": [
      {
        name: "New Arrival Item 1",
        img: "https://int.zigzag.lk/cdn/shop/files/Zigzag_4thNov2024_6986copy_600x@2x.progressive.jpg?v=1733231498",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/Zigzag_4thNov2024_7020copy_372x.progressive.jpg?v=1733231498",
        description: "Description for item 1",
      },
      {
        name: "New Arrival Item 2",
        img: "https://int.zigzag.lk/cdn/shop/files/Zigzag_4thNov2024_7705copy_600x@2x.progressive.jpg?v=1733231489",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/Zigzag_4thNov2024_7720copy_372x.progressive.jpg?v=1733231489",
        description: "Description for item 2",
      },
      {
        name: "New Arrival Item 3",
        img: "https://int.zigzag.lk/cdn/shop/files/Zigzag_4thNov2024_7070copy_600x@2x.progressive.jpg?v=1733231482",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/Zigzag_4thNov2024_7053copy_372x.progressive.jpg?v=1733231482",
        description: "Description for item 3",
      },
      {
        name: "New Arrival Item 4",
        img: "https://int.zigzag.lk/cdn/shop/files/Zigzag_4thNov2024_6491copy_600x@2x.progressive.jpg?v=1733231475",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/Zigzag_4thNov2024_6497copy_372x.progressive.jpg?v=1733231475",
        description: "Description for item 4",
      },
      {
        name: "New Arrival Item 5",
        img: "https://int.zigzag.lk/cdn/shop/files/Zigzag_4thNov2024_6703copy_600x@2x.progressive.jpg?v=1733231457",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/Zigzag_4thNov2024_6695copy_372x.progressive.jpg?v=1733231457",
        description: "Description for item 5",
      },
      {
        name: "New Arrival Item 6",
        img: "https://int.zigzag.lk/cdn/shop/files/Zigzag_4thNov2024_9013copy_600x@2x.progressive.jpg?v=1733231451",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/Zigzag_4thNov2024_9011copy_372x.progressive.jpg?v=1733231451",
        description: "Description for item 6",
      },
      {
        name: "New Arrival Item 5",
        img: "https://int.zigzag.lk/cdn/shop/files/Zigzag_4thNov2024_9087copy_600x@2x.progressive.jpg?v=1733231446",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/Zigzag_4thNov2024_9137copy_372x.progressive.jpg?v=1733231446",
        description: "Description for item 5",
      },
      {
        name: "New Arrival Item 6",
        img: "https://int.zigzag.lk/cdn/shop/files/Zigzag_4thNov2024_6337copy_600x@2x.progressive.jpg?v=1733231441",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/Zigzag_4thNov2024_6397copy_372x.progressive.jpg?v=1733231441",
        description: "Description for item 6",
      },
    ],
    Everyday: [
      {
        name: "Everyday Item 1",
        img: "https://int.zigzag.lk/cdn/shop/files/19_7de8dc72-63d6-4561-b4a6-68e48e9da5a9_643x.progressive.jpg?v=1733906142",
        description: "Description for item 1",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/20_43a406dd-737f-4728-9452-09bcd06a4491_372x.progressive.jpg?v=1733906142",
      },
      {
        name: "Everyday Item 2",
        img: "https://int.zigzag.lk/cdn/shop/files/86_ac7ba785-6728-4feb-94ed-c06455e3d194_643x.progressive.jpg?v=1733906133",
        description: "Description for item 2",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/87_6df7b5a9-98ff-4324-98a1-c21ba62e61c3_372x.progressive.jpg?v=1733906133",
      },
      {
        name: "Everyday Item 3",
        img: "https://int.zigzag.lk/cdn/shop/files/10_36d74bfd-c1e7-4140-88e8-c51925be7576_643x.progressive.jpg?v=1733906125",
        description: "Description for item 3",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/11_fd4cbb50-0278-4d63-ba1b-ee6b3957a0bd_372x.progressive.jpg?v=1733906125",
      },
      {
        name: "Everyday Item 4",
        img: "https://int.zigzag.lk/cdn/shop/files/106_2243800b-c156-4980-aae0-a191b51c25db_600x@2x.progressive.jpg?v=1733906117",
        description: "Description for item 4",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/107_dfb00e77-74fb-48c8-b556-60d65519663d_372x.progressive.jpg?v=1733906117",
      },
      {
        name: "Everyday Item 5",
        img: "https://int.zigzag.lk/cdn/shop/files/44_8f93000f-a693-4a1a-98d2-1c44b582129b_600x@2x.progressive.jpg?v=1733906108",
        description: "Description for item 5",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/45_3977cc37-96ca-44e4-bd7c-97b39cc7f037_372x.progressive.jpg?v=1733906108",
      },
      {
        name: "Everyday Item 6",
        img: "https://int.zigzag.lk/cdn/shop/files/80_ccb5aadf-a576-4a0f-91c7-fc09a2a69905_600x@2x.progressive.jpg?v=1733906097",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/81_a101ed31-f602-44ef-b07d-e4ec8400bd9c_372x.progressive.jpg?v=1733906097",
        description: "Description for item 6",
      },
      {
        name: "Everyday Item 5",
        img: "https://int.zigzag.lk/cdn/shop/files/24_8af77302-62f8-4c5e-a5bf-e63c5a484d3c_600x@2x.progressive.jpg?v=1733906088",
        description: "Description for item 5",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/25_1d203188-2068-4e5c-978a-f8eb1cb714a2_372x.progressive.jpg?v=1733906088",
      },
      {
        name: "Everyday Item 6",
        img: "https://int.zigzag.lk/cdn/shop/files/35_923fc9cf-b3d3-47cc-aa66-2b69b74a65ca_600x@2x.progressive.jpg?v=1733906077",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/36_582883b7-83e0-4467-92cf-067ad1b65c6f_372x.progressive.jpg?v=1733906077",
        description: "Description for item 6",
      },
    ],
    "Work Wear": [
      {
        name: "Work Wear Item 1",
        img: "https://int.zigzag.lk/cdn/shop/files/75_febf4f4c-d533-44e4-85c8-ccabfe0a1467_643x.progressive.jpg?v=1736238504",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/76_a11cd264-fb3f-45d3-8550-28a3d0bc5822_372x.progressive.jpg?v=1736238504",
        description: "Description for item 1",
      },
      {
        name: "Work Wear Item 2",
        img: "https://int.zigzag.lk/cdn/shop/files/58_3c5684b7-207c-4aa3-bd42-47b1c8ab0150_643x.progressive.jpg?v=1736238470",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/59_65c116ff-9475-4134-86fe-8b079357096f_372x.progressive.jpg?v=1736238470",
        description: "Description for item 2",
      },
      {
        name: "Work Wear Item 3",
        img: "https://int.zigzag.lk/cdn/shop/files/23_cdd2c186-cf03-455d-b09c-30730fee94ec_643x.progressive.jpg?v=1736238463",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/24_0284a068-a952-4fa3-87b2-9687fc724cf8_372x.progressive.jpg?v=1736238463",
        description: "Description for item 3",
      },
      {
        name: "Work Wear Item 4",
        img: "https://int.zigzag.lk/cdn/shop/files/52_c8ce948b-f241-4dc9-a2f5-6ea61b66e9cd_643x.progressive.jpg?v=1736238446",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/53_fd457920-ed49-4d04-87e9-91c59d855b95_372x.progressive.jpg?v=1736238446",
        description: "Description for item 4",
      },
      {
        name: "Work Wear Item 5",
        img: "https://int.zigzag.lk/cdn/shop/files/13_a58a6edf-254d-4ac0-a5c2-ff013ec8c917_643x.progressive.jpg?v=1736238438",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/14_5db3814f-9aa0-43f9-8564-bf40a581c441_372x.progressive.jpg?v=1736238438",
        description: "Description for item 5",
      },
      {
        name: "Work Wear Item 6",
        img: "https://int.zigzag.lk/cdn/shop/files/37_1b42551b-21f1-46b7-8e29-afd008e1c632_643x.progressive.jpg?v=1736238430",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/38_30e44b10-6d6b-49eb-9a5a-c125ea2e9c6f_372x.progressive.jpg?v=1736238430",
        description: "Description for item 6",
      },
      {
        name: "Work Wear Item 5",
        img: "https://int.zigzag.lk/cdn/shop/files/32_1f5da341-3d3a-4328-9d61-ea3633ded48b_643x.progressive.jpg?v=1736238422",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/33_8e73987f-b13c-43ce-8348-26c1f27138e1_372x.progressive.jpg?v=1736238422",
        description: "Description for item 5",
      },
      {
        name: "Work Wear Item 6",
        img: "https://int.zigzag.lk/cdn/shop/files/01_8eeb6eb2-f420-4c93-ad38-a2ee100ad375_643x.progressive.jpg?v=1736238406",
        hoverImg:
          "https://int.zigzag.lk/cdn/shop/files/02_5cb1c928-b5b1-4456-9782-5ece49d08212_372x.progressive.jpg?v=1736238406",
        description: "Description for item 6",
      },
    ],
  };

  // Get content for the active filter
  const filteredItems = content[activeFilter] || [];

  // Function to handle item click and navigate to the delivery page
  const handleItemClick = (index, item) => {
    navigate(`/delivery/${index}`, { state: item }); // Navigating with state
  };

  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 font-league-spartan ">
      {filteredItems.map((item, index) => (
        <div key={index} className="">
          <div
            className="relative group border shadow-xl hover:scale-105 duration-200 cursor-pointer"
            onClick={() => handleItemClick(index, item)} // Handle onClick for navigation
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-0"
            />
            {item.hoverImg && (
              <img
                src={item.hoverImg}
                alt={`${item.name} Hover`}
                className="absolute inset-0  w-full h-auto object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            )}
          </div>

          {/* Item name and description */}
          <div className="mt-2 text-center text-gray-800 font-league-spartan">
            <p className="font-bold">{item.name}</p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemDisplay;
