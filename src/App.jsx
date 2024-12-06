import React from "react";
import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import MotionWrapper from "./components/MotionWrapper";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Recents from "./pages/Recents";
import Speaker from "./pages/Speaker";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Welcome />, // No MotionWrapper for welcome
    },
    {
      path: "/login",
      element: <Login />, // No MotionWrapper for login
    },
    {
      path: "/register",
      element: <Register />, // No MotionWrapper for register
    },
    {
      path: "/home",
      element: (
        <>
          <MotionWrapper key="home">
            <Home />
          </MotionWrapper>
          <Footer />
        </>
      ),
    },
    {
      path: "/recents",
      element: (
        <>
          <MotionWrapper key="recents">
            <Recents />
          </MotionWrapper>
          <Footer /> {/* Footer remains fixed */}
        </>
      ),
    },
    {
      path: "/speaker",
      element: (
        <>
          <MotionWrapper key="speaker">
            <Speaker />
          </MotionWrapper>
          <Footer /> {/* Footer remains fixed */}
        </>
      ),
    },
    {
      path: "/contacts",
      element: (
        <>
          <MotionWrapper key="contacts">
            <Contacts />
          </MotionWrapper>
          <Footer /> {/* Footer remains fixed */}
        </>
      ),
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    },
  }
);

function App() {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
