import React from "react";
import Footer from "./Footer"; // Import Footer component

const Layout = ({ children }) => {
    return (
        <div className="relative flex flex-col min-h-screen">
            {/* Main Content Area */}
            <main className="flex-grow pb-16"> {/* Add padding-bottom to make space for the fixed footer */}
                {children}
            </main>

            {/* Fixed Footer stays at the bottom */}
            <Footer />
        </div>
    );
};

export default Layout;
