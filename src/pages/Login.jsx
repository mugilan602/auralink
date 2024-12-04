import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="w-[40%] rounded-lg h-screen p-6 flex flex-col">
                {/* Logo */}
                <img src="/photos/Logo.png" alt="Logo" className="h-40 mx-auto mb-6" />

                {/* Email Input */}
                <input
                    type="text"
                    placeholder="User Id"
                    className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Password Input */}
                <input
                    type="password"
                    placeholder="Pin"
                    className="w-full p-3 border mb-3 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Login Button */}
                <Link
                    to="/home"
                    className="w-full block text-center mb-3 bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition duration-200"
                >
                    Login
                </Link>

                <p className='text-center'>
                    Forgotten Password?
                </p>
                <div className="mt-auto mb-4">
                    <Link
                        to="/register"
                        className="w-full block text-center border text-blue-500 border-blue-500 py-2 rounded-full"
                    >
                        Create an Account
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
