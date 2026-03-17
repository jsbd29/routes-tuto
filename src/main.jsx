/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout"; // Import your layout
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // MainLayout is now the "Shell"
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true, // This makes Home the default page at "/"
        element: <Home />,
      },
      {
        path: "about", // No need for leading slash in children
        element: <About />,
      },
      {
        path: "user",
        element: <Users />,
      },
      {
        path: "userDetails/:id",
        element: <UserDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
