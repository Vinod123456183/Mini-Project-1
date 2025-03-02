import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Define your routes and components
import Dashboard from "./Components/DashBoard.jsx"; // Import the Dashboard page component
import HashTag from "./Components/HashTag.jsx"; // Import the Dashboard page component
import Setting from "./Components/Setting.jsx"; // Import the Dashboard page component
import Calendar from "./Components/Calendar.jsx"; // Import the Dashboard page component

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<App />}>    // Root page
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="hashtag" element={<HashTag />} />
      <Route path="setting" element={<Setting />} />
      <Route path="calendar" element={<Calendar />} />
    </Route>
  )
);

// Render the app with the router provider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
