import React from "react";
import { FaHistory } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import * as Tabs from "@radix-ui/react-tabs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";
import Avatar from 'react-avatar';

function Home() {
    return (
        <Tabs.Root defaultValue="history" className="flex bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
            {/* Sidebar */}
            <div className="h-screen flex flex-col items-center justify-center space-y-4 w-[5%] border-r-2 border-gray-300 bg-white text-gray-800">
                <Tabs.List className="flex flex-col space-y-3 items-center">
                    <Tabs.Trigger
                        value="history"
                        className="hover:opacity-75 focus:outline-none transition-transform transform hover:scale-110"
                    >
                        <FaHistory size={25} />
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        value="contacts"
                        className="hover:opacity-75 focus:outline-none transition-transform transform hover:scale-110"
                    >
                        <RiContactsBook3Fill size={25} />
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        value="contacts"
                        className="hover:opacity-75 focus:outline-none transition-transform transform hover:scale-110"
                    >
                        <HiSpeakerphone size={25} />
                    </Tabs.Trigger>
                </Tabs.List>
            </div>

            {/* Main Content */}
            <div className="w-full flex bg-gray-100 text-gray-800">
                {/* History Tab */}
                <Tabs.Content value="history" className="w-1/4 min-h-screen border-r-2 border-gray-300 p-4 bg-white">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-semibold text-gray-800">Auralink</h1>
                        <BsThreeDotsVertical size={20} />
                    </div>
                    <input
                        className="border border-gray-300 w-full rounded-full p-2 mb-4 bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search Recents"
                        type="text"
                    />
                    {[...Array(6)].map((_, idx) => (
                        <div
                            key={idx}
                            className="flex space-x-3 items-center py-2 px-2 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            <div>
                                <Avatar name="Saai Srivathsan" size="40" textSizeRatio={3} round={true} />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-800">Saai Srivathsan</h3>
                                <p className="text-xs text-gray-600">Incoming - 2m 3sec...</p>
                            </div>
                        </div>
                    ))}
                </Tabs.Content>

                {/* Contacts Tab */}
                <Tabs.Content value="contacts" className="w-1/4 min-h-screen border-r-2 border-gray-300 p-4 bg-white">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-semibold text-gray-800">Auralink</h1>
                        <BsThreeDotsVertical size={20} />
                    </div>

                    <input
                        className="border border-gray-300 w-full rounded-full p-2 mb-4 bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search Contacts"
                        type="text"
                    />
                    {[...Array(6)].map((_, idx) => (
                        <div
                            key={idx}
                            className="flex space-x-3 items-center py-2 px-2 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            <div>
                                <Avatar name="Saai Srivathsan" size="40" textSizeRatio={3} round={true} />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-800">Contact {idx + 1}</h3>
                                <p className="text-xs text-gray-600">Phone: +123-456-789</p>
                            </div>
                        </div>
                    ))}
                </Tabs.Content>

                <div className="w-3/4 flex items-center justify-center text-center bg-gray-50 text-gray-800">
                    <h1 className="text-xl font-bold">Start a call</h1>
                </div>
            </div>
        </Tabs.Root>
    );
}

export default Home;
