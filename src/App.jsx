import React from "react";
import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout"; // Layout to handle background and footer
import MotionWrapper from "./components/MotionWrapper";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Recents from "./pages/Recents";
import Speaker from "./pages/Speaker";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: (
      <Layout>
        <MotionWrapper key="home">
          <Home />
        </MotionWrapper>
      </Layout>
    ),
  },
  {
    path: "/recents",
    element: (
      <Layout>
        <MotionWrapper key="recents">
          <Recents />
        </MotionWrapper>
      </Layout>
    ),
  },
  {
    path: "/speaker",
    element: (
      <Layout>
        <MotionWrapper key="speaker">
          <Speaker />
        </MotionWrapper>
      </Layout>
    ),
  },
  {
    path: "/contacts",
    element: (
      <Layout>
        <MotionWrapper key="contacts">
          <Contacts />
        </MotionWrapper>
      </Layout>
    ),
  },
]);

function App() {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
