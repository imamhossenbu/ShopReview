import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaPen } from "react-icons/fa";
import HeroImage from '../assets/banner.jpg'

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-blue-50 to-white pt-16 pb-20">
            <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">


                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Share & Discover{" "}
                        <span className="text-blue-600">Online Shopping Experiences</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-lg">
                        Submit reviews, rate shops, and help others shop smarter.
                        Your opinion can make a difference for thousands of online shoppers.
                    </p>


                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            to="/write-review"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-md shadow hover:bg-blue-700 transition"
                        >
                            <FaPen /> Write a Review
                        </Link>
                        <Link
                            to="/reviews"
                            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-3 rounded-md shadow hover:bg-gray-200 transition"
                        >
                            <FaStar className="text-yellow-500" /> Browse Reviews
                        </Link>
                    </div>
                </div>


                <div className="flex-1 flex justify-end ">
                    <img
                        src={HeroImage}
                        alt="Shopping Illustration"
                        className="max-w-xs md:max-w-md drop-shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}


export default Hero;