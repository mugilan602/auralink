import React, { useState } from "react";
import { motion } from "framer-motion";

function Register() {
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState(0); // Positive for next, negative for back
    const [selectedOption, setSelectedOption] = useState("");
    const [customInput, setCustomInput] = useState("");
    const [showDialog, setShowDialog] = useState(false);

    const openDialog = () => setShowDialog(true);
    const closeDialog = () => setShowDialog(false);
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        if (e.target.value !== "Custom") {
            setCustomInput(""); // Clear custom input if not "Custom"
        }
    };
    const steps = [
        {
            title: "Create your AuraLink Account",
            description: "Enter your Username and Pin",
            content: (
                <div className="space-y-4">
                    <input
                        placeholder="Username"
                        className="p-3 border rounded-lg w-full"
                        type="text"
                    />
                    <input
                        placeholder="Pin"
                        className="p-3 border rounded-lg w-full"
                        type="password"
                    />
                </div>
            ),
        },
        {
            title: "Choose your Avatar",
            description: "Let people identify you by the avatar",
            content: (
                <div className="space-y-4">
                    {/* Default Avatars Section */}
                    <div className="flex space-x-4">
                        <img
                            src="/avatar/1.jpg"
                            alt="Avatar 1"
                            className="w-16 h-16 rounded-full cursor-pointer border border-gray-300 hover:shadow-lg"
                        />
                        <img
                            src="/avatar/2.jpg"
                            alt="Avatar 2"
                            className="w-16 h-16 rounded-full cursor-pointer border border-gray-300 hover:shadow-lg"
                        />
                        <img
                            src="/avatar/3.jpg"
                            alt="Avatar 3"
                            className="w-16 h-16 rounded-full cursor-pointer border border-gray-300 hover:shadow-lg"
                        />
                        <button
                            className="w-16 h-16 flex justify-center items-center rounded-full bg-gray-100 border border-gray-300 text-gray-500 text-2xl hover:bg-gray-200"
                            onClick={openDialog}
                        >
                            +
                        </button>
                    </div>

                    {/* Mild Separator */}
                    <hr className="mt-4 mx-auto border-gray-300 w-1/2 opacity-50" />

                    {/* Option to take a picture */}
                    <button
                        className="mt-4 mx-auto flex items-center justify-center w-48 h-12 rounded-full bg-gray-100 text-gray-700 text-lg font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        onClick={() => alert("Take a picture clicked!")} // Replace with actual functionality
                    >
                        📸 Take a Picture
                    </button>


                    {/* Pop-up Dialog */}
                    {showDialog && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-md p-6">
                                <h2 className="text-xl font-bold mb-4">Select More Avatars</h2>
                                <div className="grid grid-cols-4 gap-3">
                                    <img
                                        src="/avatar/4.jpg"
                                        alt="Avatar 4"
                                        className="w-16 h-16 rounded-full cursor-pointer border border-gray-300 hover:shadow-lg"
                                    />
                                    <img
                                        src="/avatar/5.jpg"
                                        alt="Avatar 5"
                                        className="w-16 h-16 rounded-full cursor-pointer border border-gray-300 hover:shadow-lg"
                                    />
                                    <img
                                        src="/avatar/6.jpg"
                                        alt="Avatar 6"
                                        className="w-16 h-16 rounded-full cursor-pointer border border-gray-300 hover:shadow-lg"
                                    />
                                    <img
                                        src="/avatar/4.jpg"
                                        alt="Avatar 4"
                                        className="w-16 h-16 rounded-full cursor-pointer border border-gray-300 hover:shadow-lg"
                                    />
                                    <img
                                        src="/avatar/5.jpg"
                                        alt="Avatar 5"
                                        className="w-16 h-16 rounded-full cursor-pointer border border-gray-300 hover:shadow-lg"
                                    />
                                    <img
                                        src="/avatar/6.jpg"
                                        alt="Avatar 6"
                                        className="w-16 h-16 rounded-full cursor-pointer border border-gray-300 hover:shadow-lg"
                                    />
                                    <img
                                        src="/avatar/4.jpg"
                                        alt="Avatar 4"
                                        className="w-16 h-16 rounded-full cursor-pointer border border-gray-300 hover:shadow-lg"
                                    />
                                    <img
                                        src="/avatar/5.jpg"
                                        alt="Avatar 5"
                                        className="w-16 h-16 rounded-full cursor-pointer border border-gray-300 hover:shadow-lg"
                                    />
                                    <img
                                        src="/avatar/6.jpg"
                                        alt="Avatar 6"
                                        className="w-16 h-16 rounded-full cursor-pointer border border-gray-300 hover:shadow-lg"
                                    />
                                    <img
                                        src="/avatar/4.jpg"
                                        alt="Avatar 4"
                                        className="w-16 h-16 rounded-full cursor-pointer border border-gray-300 hover:shadow-lg"
                                    />
                                    <img
                                        src="/avatar/5.jpg"
                                        alt="Avatar 5"
                                        className="w-16 h-16 rounded-full cursor-pointer border border-gray-300 hover:shadow-lg"
                                    />
                                    <img
                                        src="/avatar/6.jpg"
                                        alt="Avatar 6"
                                        className="w-16 h-16 rounded-full cursor-pointer border border-gray-300 hover:shadow-lg"
                                    />
                                </div>
                                <button
                                    onClick={closeDialog}
                                    className="mt-4 bg-gray-300 text-black font-semibold px-5 py-2 rounded-full transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ),
        },
        {
            title: "Choose the place",
            description: "Enter the place where you are installing the device   ",
            content: (
                <div className="space-y-4">
                    <select
                        className="p-3 border rounded-lg w-full"
                        value={selectedOption}
                        onChange={handleOptionChange}
                    >
                        <option value="" disabled>Select a Room</option>
                        <option value="Living Room">Living Room</option>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Office">Office</option>
                        <option value="Custom">Custom</option>
                    </select>

                    {selectedOption === "Custom" && (
                        <input
                            className="p-3 border rounded-lg w-full mt-2"
                            placeholder="Enter custom room"
                            value={customInput}
                            onChange={(e) => setCustomInput(e.target.value)}
                        />
                    )}

                </div>
            ),
        },
    ];

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setDirection(1); // Move forward
            setCurrentStep(currentStep + 1);
        }
    };

    const navigateToStep = (index) => {
        setDirection(index > currentStep ? 1 : -1); // Set direction based on navigation
        setCurrentStep(index);
    };

    const slideVariants = {
        hidden: (direction) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
        },
        exit: (direction) => ({
            x: direction > 0 ? "-100%" : "100%",
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
        }),
    };

    return (
        <div className="flex min-h-screen justify-center items-center bg-gray-100">
            <motion.div
                key={currentStep}
                className="sm:w-9/12 lg:w-3/5 bg-white shadow-2xl rounded-lg py-10 px-7 overflow-hidden"
                custom={direction} // Pass direction to variants
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideVariants}
            >
                <img src="/photos/Logo.png" className="h-10 mb-4" alt="" />

                <div className="flex">
                    <div className="w-1/2 flex flex-col pr-4">
                        <h1 className="text-2xl font-bold mb-4">
                            {steps[currentStep].title}
                        </h1>
                        <p className="text-gray-600">{steps[currentStep].description}</p>
                    </div>

                    <div className="w-1/2 flex flex-col justify-center pl-4">
                        <div className="">{steps[currentStep].content}</div>
                        <div className="flex justify-end mt-4">
                            {currentStep < steps.length - 1 ? (
                                <button
                                    onClick={nextStep}
                                    className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Next
                                </button>

                            ) : (
                                <button
                                    className="bg-green-600 text-white font-semibold px-5 py-2 rounded-full transition duration-300 ease-in-out hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-2 space-x-2">
                    {steps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => navigateToStep(index)}
                            className={`w-3 h-3 rounded-full ${index === currentStep
                                ? "bg-blue-600"
                                : "bg-gray-300"
                                } transition duration-300 ease-in-out focus:outline-none`}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Register;
