import React, { useState } from "react";
import Avatar from "react-avatar";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contacts() {
    const [selectedContact, setSelectedContact] = useState(null);

    const contacts = [...Array(20)].map((_, idx) => ({
        id: idx + 1,
        name: `Contact ${idx + 1}`,
        phone: `+123-456-789${idx}`,
        email: `contact${idx + 1}@example.com`,
        address: `1234 Street, City, Country ${idx + 1}`,
    }));

    const handleContactClick = (contact) => {
        setSelectedContact(contact);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Main Content Area */}
            <div className="w-4/5 mx-auto flex flex-col lg:flex-row space-y-6 lg:space-y-0 mt-8">
                {/* Left Column (Contact List) */}
                <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg space-y-4 h-[85vh] overflow-y-scroll">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Available Devices</h2>
                    <div className="space-y-4">
                        {contacts.map((contact) => (
                            <div
                                key={contact.id}
                                className="flex items-center space-x-4 py-3 px-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-gray-50 cursor-pointer"
                                onClick={() => handleContactClick(contact)}
                            >
                                {/* Avatar */}
                                <div className="flex-shrink-0">
                                    <Avatar name={contact.name} size="50" textSizeRatio={2} round={true} />
                                </div>

                                {/* Contact Info */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-medium text-gray-800">{contact.name}</h3>
                                    <p className="text-sm text-gray-600">Phone: {contact.phone}</p>
                                </div>

                                {/* Call & Message Icons */}
                                <div className="flex space-x-3">
                                    <a
                                        href={`tel:${contact.phone}`}
                                        className="text-green-500 hover:text-green-600"
                                        title="Call"
                                    >
                                        <FaPhoneAlt size={18} />
                                    </a>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column (Contact Detail View) */}
                <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
                    {selectedContact ? (
                        <div className="text-center space-y-6">
                            {/* Avatar */}
                            <Avatar name={selectedContact.name} size="100" round={true} />

                            {/* Name */}
                            <h2 className="text-3xl font-semibold text-gray-800">{selectedContact.name}</h2>

                            {/* Contact Details */}
                            <div className="space-y-4 text-left">
                                <p className="text-lg text-gray-800">
                                    <strong>Phone:</strong> {selectedContact.phone}
                                </p>
                                <p className="text-lg text-gray-800">
                                    <strong>Email:</strong> {selectedContact.email}
                                </p>
                                <p className="text-lg text-gray-800">
                                    <strong>Address:</strong> {selectedContact.address}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-gray-600">
                            <p className="text-lg">Select a contact to view details</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contacts;
