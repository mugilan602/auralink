import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-center">
            <img src="/photos/Logo.png" alt="Logo" className="h-60" />
            <h1 className="text-2xl font-semibold my-5">Welcome to AuraLink</h1>
            <Link to="/login" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
                Get Started
            </Link>
        </div>
    );
}

export default Welcome;
