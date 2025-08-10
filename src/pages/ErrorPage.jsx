import React from "react";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-16 flex items-center justify-center">
            <div className="max-w-2xl mx-auto px-4 text-center">

                <h1 className="text-9xl font-extrabold text-gray-300">404</h1>


                <h2 className="text-4xl font-bold text-gray-800 mt-6">
                    Page Not Found
                </h2>


                <p className="mt-4 text-lg text-gray-600">
                    Oops! The page you are looking for might have been removed,
                    had its name changed, or is temporarily unavailable.
                </p>


                <div className="mt-8">
                    <Link
                        to="/"
                        className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
