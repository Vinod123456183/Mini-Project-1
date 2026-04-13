import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import "./index.css";
import HomePage from "./Pages/MainHomePage/HomePage.jsx";

import Fashion1 from "./Components/HeaderComponents/FashionComponents/Fashion1.jsx";
import Fashion2 from "./Components/HeaderComponents/FashionComponents/Fashion2.jsx";
import Fashion3 from "./Components/HeaderComponents/FashionComponents/Fashion3.jsx";
import Fashion4 from "./Components/HeaderComponents/FashionComponents/Fashion4.jsx";

import Electronics1 from "./Components/HeaderComponents/ElectronicsComponents/Electronics1.jsx";
import Electronics2 from "./Components/HeaderComponents/ElectronicsComponents/Electronics2.jsx";
import Electronics3 from "./Components/HeaderComponents/ElectronicsComponents/Electronics3.jsx";
import Electronics4 from "./Components/HeaderComponents/ElectronicsComponents/Electronics4.jsx";

import Beauty1 from "./Components/HeaderComponents/BeautyComponents/Beauty1.jsx";
import Beauty2 from "./Components/HeaderComponents/BeautyComponents/Beauty2.jsx";
import Beauty3 from "./Components/HeaderComponents/BeautyComponents/Beauty3.jsx";
import Beauty4 from "./Components/HeaderComponents/BeautyComponents/Beauty4.jsx";

import Newdrops from "./Components/HeaderComponents/FashionComponents/Components/collections/Newdrops.jsx";
import Pricedrop from "./Components/HeaderComponents/FashionComponents/Components/collections/Pricedrop.jsx";
import Shirts from "./Components/HeaderComponents/FashionComponents/Components/collections/Shirts.jsx";
import Trousers from "./Components/HeaderComponents/FashionComponents/Components/collections/Trousers.jsx";
import Denims from "./Components/HeaderComponents/FashionComponents/Components/collections/Denims.jsx";
import Sweater from "./Components/HeaderComponents/FashionComponents/Components/collections/Sweater.jsx";
import DetailsPage from "./Components/HeaderComponents/FashionComponents/Components/collections/DetailsPage.jsx";
import DeliveryPage from "./Components/HeaderComponents/FashionComponents/Fashion2/Fashion2Components/DeliveryPage.jsx";
// import Pricedrop from "./Components/HeaderComponents/FashionComponents/Components/collections/Pricedrop.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/fashion1" element={<Fashion1 />} />
      <Route path="/fashion2" element={<Fashion2 />} />
      <Route path="/fashion3" element={<Fashion3 />} />
      <Route path="/fashion4" element={<Fashion4 />} />
      {/*here we can route any path and it should same ass link to   */}
      {/* so create a collection alag se */}
      <Route path="/collection/new-drops" element={<Newdrops />} />
      <Route path="/collection/price-drop" element={<Pricedrop />} />
      <Route path="/collection/Shirts" element={<Shirts />} />
      <Route path="/collection/trousers" element={<Trousers />} />
      <Route path="/collection/denims" element={<Denims />} />
      <Route path="/collection/sweater" element={<Sweater />} />
      <Route path="/electronics1" element={<Electronics1 />} />
      <Route path="/electronics2" element={<Electronics2 />} />
      <Route path="/electronics3" element={<Electronics3 />} />
      <Route path="/electronics4" element={<Electronics4 />} />
      <Route path="/delivery/:id" element={<DeliveryPage />} />

      <Route path="/beauty1" element={<Beauty1 />} />
      <Route path="/beauty2" element={<Beauty2 />} />
      <Route path="/beauty3" element={<Beauty3 />} />
      <Route path="/beauty4" element={<Beauty4 />} />
      <Route path="/item/:id" element={<DetailsPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
