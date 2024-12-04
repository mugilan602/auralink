import React from "react";
import Welcome from "./pages/Welcome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

// Define routes
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />,
    }
  ],
  {
    future: {
      v7_relativeSplatPath: true, // Enable v7_relativeSplatPath flag
      v7_startTransition: true,   // Enable v7_startTransition flag
    },
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
