import React, { useState } from "react";
import Avatar from "react-avatar";
import { FaArrowDown, FaArrowUp, FaTimesCircle } from "react-icons/fa";

function Recents() {
    const [selectedCall, setSelectedCall] = useState(null);

    const callLogs = [
        { id: 1, name: "Saai Srivathsan", type: "incoming", duration: "2m 3s", time: "10:30 AM" },
        { id: 2, name: "John Doe", type: "outgoing", duration: "5m 12s", time: "9:15 AM" },
        { id: 3, name: "Jane Smith", type: "missed", duration: "", time: "8:45 AM" },
        { id: 4, name: "Alice Johnson", type: "incoming", duration: "1m 22s", time: "Yesterday" },
        { id: 5, name: "Bob Brown", type: "outgoing", duration: "3m 45s", time: "Yesterday" },
        { id: 6, name: "Charlie Davis", type: "missed", duration: "", time: "2 Days Ago" },
    ];

    const handleCallClick = (call) => {
        setSelectedCall(call);
    };

    const callTypeIcon = (type) => {
        switch (type) {
            case "incoming":
                return <FaArrowDown className="text-green-500" />;
            case "outgoing":
                return <FaArrowUp className="text-blue-500" />;
            case "missed":
                return <FaTimesCircle className="text-red-500" />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="w-4/5 mx-auto flex flex-col lg:flex-row space-y-6 lg:space-y-0 mt-8">
                {/* Left Column: Call Log List */}
                <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg h-[85vh] overflow-y-scroll">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Recent Calls</h2>
                    <div className="space-y-4">
                        {callLogs.map((call) => (
                            <div
                                key={call.id}
                                className={`flex items-center space-x-4 py-3 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-gray-50 cursor-pointer ${selectedCall?.id === call.id ? "border border-gray-300" : ""
                                    }`}
                                onClick={() => handleCallClick(call)}
                            >
                                {/* Avatar */}
                                <div className="flex-shrink-0">
                                    <Avatar name={call.name} size="50" textSizeRatio={2} round={true} />
                                </div>

                                {/* Call Info */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-medium text-gray-800">{call.name}</h3>
                                    <div className="flex items-center text-sm text-gray-600">
                                        {callTypeIcon(call.type)}
                                        <span className="ml-2">
                                            {call.type === "missed" ? "Missed Call" : `${call.type.charAt(0).toUpperCase() + call.type.slice(1)} - ${call.duration}`}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500">{call.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Call Details */}
                <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
                    {selectedCall ? (
                        <div className="text-center">
                            {/* Avatar */}
                            <Avatar name={selectedCall.name} size="120" textSizeRatio={1.5} round={true} className="mx-auto mb-6" />

                            {/* Call Details */}
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{selectedCall.name}</h2>
                            <div className="space-y-4">
                                <p className="text-lg text-gray-800">
                                    <strong>Phone:</strong> {selectedCall.phone || "+123-456-7890"}
                                </p>
                                <p className="text-lg text-gray-800">
                                    <strong>Call Type:</strong> {selectedCall.type.charAt(0).toUpperCase() + selectedCall.type.slice(1)}
                                </p>
                                {selectedCall.duration && (
                                    <p className="text-lg text-gray-800">
                                        <strong>Duration:</strong> {selectedCall.duration}
                                    </p>
                                )}
                                <p className="text-lg text-gray-800">
                                    <strong>Time:</strong> {selectedCall.time}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-gray-600">
                            <p className="text-lg">Select a call to view details</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Recents;
