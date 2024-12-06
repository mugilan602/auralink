// Recents.js
import React from "react";
import Avatar from 'react-avatar';
import Footer from "../components/Footer";

function Recents() {
    return (
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">Recent Calls</h2>
            <div>
                {[...Array(6)].map((_, idx) => (
                    <div
                        key={idx}
                        className="flex space-x-3 items-center py-2 px-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <div>
                            <Avatar name="Saai Srivathsan" size="40" textSizeRatio={2} round={true} />
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-800">Saai Srivathsan</h3>
                            <p className="text-xs text-gray-600">Incoming - 2m 3sec...</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recents;
