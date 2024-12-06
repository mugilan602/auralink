import React, { useState, useEffect } from "react";
import { FaHistory } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { HiSpeakerphone } from "react-icons/hi";
import { FaHome } from "react-icons/fa"; // Import Home Icon
import { Link } from "react-router-dom";

function Footer() {
    const [currentDateTime, setCurrentDateTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setCurrentDateTime(now.toLocaleString()); // Formats as: "MM/DD/YYYY, hh:mm:ss AM/PM"
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []); // This useEffect will only run once on mount

    return (
        <div
            className="fixed bottom-0 left-0 w-full bg-gray-100 py-3 shadow-md z-50 overflow-hidden"
            style={{
                maxWidth: "100vw", // Prevent horizontal overflow
            }}
        >
            {/* Icons Section */}
            <div className="flex justify-center space-x-12">
                <Link
                    to="/home"
                    className="cursor-pointer hover:opacity-80 transition-transform transform hover:scale-125 hover:translate-y-2"
                >
                    <FaHome size={20} className="text-gray-600" />
                </Link>
                <Link
                    to="/recents"
                    className="cursor-pointer hover:opacity-80 transition-transform transform hover:scale-125 hover:translate-y-2"
                >
                    <FaHistory size={20} className="text-blue-500" />
                </Link>
                <Link
                    to="/contacts"
                    className="cursor-pointer hover:opacity-80 transition-transform transform hover:scale-125 hover:translate-y-2"
                >
                    <RiContactsBook3Fill size={20} className="text-green-500" />
                </Link>
                <Link
                    to="/speaker"
                    className="cursor-pointer hover:opacity-80 transition-transform transform hover:scale-125 hover:translate-y-2"
                >
                    <HiSpeakerphone size={20} className="text-yellow-500" />
                </Link>
            </div>

            {/* Date and Time */}
            <div className="absolute right-4 bottom-4 text-gray-800 text-sm">
                <p>{currentDateTime}</p>
            </div>
        </div>
    );
}

export default Footer;
