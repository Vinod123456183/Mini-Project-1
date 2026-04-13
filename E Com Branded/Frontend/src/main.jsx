import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./pages/Home";
import Contact from "./pages/RoutingComponent/Contact.jsx";
import ErrorPage from "./pages/ErrorPage";
import Shop from "./pages/RoutingComponent/Shop.jsx";
import Collection from "./pages/RoutingComponent/Collection.jsx";
import Magazine from "./pages/RoutingComponent/Magazine.jsx";

import About from "./Components/Pagess/About.jsx";
import Account from "./Components/Pagess/Account.jsx";
import Card from "./Components/Pagess/Card.jsx";
import Checkout from "./Components/Pagess/Checkout.jsx";
import Faq from "./Components/Pagess/Faq.jsx";
import Wishlist from "./Components/Pagess/Wishlist.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a QueryClient instance
const queryClient = new QueryClient();

// Define your routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/magazine" element={<Magazine />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/account" element={<Account />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/card" element={<Card />} />
      <Route path="*" element={<ErrorPage />} />

    </Route>
  )
);

// Render your application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
