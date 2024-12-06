// Home.js
import React from "react";
import Footer from "../components/Footer";
// Helper function for greeting
const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
        return "Good Morning";
    } else if (hour < 18) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
};

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 text-gray-800 p-4 relative">
            {/* Greeting Section */}
            <div className="text-center mb-10 mt-10">
                <h1 className="text-3xl font-semibold">{getGreeting()}, Saai Srivathsan!</h1>
                <p className="text-lg text-gray-600">Welcome back to Auralink. What would you like to do today?</p>
            </div>
        </div>
    );
}

export default Home;
