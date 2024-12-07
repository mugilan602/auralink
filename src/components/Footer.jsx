import React from "react";
import { FaHistory } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { HiSpeakerphone } from "react-icons/hi";
import { FaHome } from "react-icons/fa"; // Import Home Icon
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="flex justify-center">
            <div
                className="fixed bottom-0 bg-transparent pb-4 z-50 overflow-hidden"
            >
                {/* Container for the icons */}
                <div
                    className="bg-white bg-opacity-20  py-1 px-2 rounded-xl shadow-lg flex justify-center items-center space-x-2"
                    style={{
                        transition: "all 0.3s ease-in-out", // Smooth transition
                    }}
                >
                    <Link
                        to="/home"
                        className="cursor-pointer hover:opacity-80 transition-all transform hover:scale-125 hover:translate-y-2 p-4 rou"
                    >
                        <FaHome size={20} className="text-gray-800" />
                    </Link>
                    <Link
                        to="/recents"
                        className="cursor-pointer hover:opacity-80 transition-all transform hover:scale-125 hover:translate-y-2 p-4 rounded-full"
                    >
                        <FaHistory size={20} className="text-blue-500" />
                    </Link>
                    <Link
                        to="/contacts"
                        className="cursor-pointer hover:opacity-80 transition-all transform hover:scale-125 hover:translate-y-2 p-4 rounded-full"
                    >
                        <RiContactsBook3Fill size={20} className="text-green-500" />
                    </Link>
                    <Link
                        to="/speaker"
                        className="cursor-pointer hover:opacity-80 transition-all transform hover:scale-125 hover:translate-y-2 p-4 rounded-full"
                    >
                        <HiSpeakerphone size={20} className="text-yellow-500" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
