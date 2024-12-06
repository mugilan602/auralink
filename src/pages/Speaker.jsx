// Speaker.js
import React from "react";
import Footer from "../components/Footer";

function Speaker() {
    return (
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">Speaker</h2>
            <div className="flex justify-center items-center h-96">
                <p className="text-lg text-gray-600">This is the speaker section.</p>
            </div>
        </div>
    );
}

export default Speaker;
