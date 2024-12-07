// Layout.js
import React from "react";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div
            className="layout-container"
            style={{
                background: "url('/photos/backgrounf.jpg') no-repeat center center fixed",
                backgroundSize: "cover",
                minHeight: "100vh", // Ensure the background covers the full screen
            }}
        >
            <div className="main-content">
                {children} {/* The children will be the page content */}
            </div>
            <Footer /> {/* Common footer */}
        </div>
    );
}

export default Layout;
