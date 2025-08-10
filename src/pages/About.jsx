import React from "react";
import { Link } from "react-router-dom";
import { FaHandshake, FaLightbulb, FaUsers } from "react-icons/fa";

const About = () => {
    const values = [
        {
            icon: <FaHandshake className="text-5xl text-blue-500 mb-4" />,
            title: "Trust",
            desc: "We foster an environment of honesty and integrity, ensuring every review is authentic and reliable.",
        },
        {
            icon: <FaLightbulb className="text-5xl text-yellow-500 mb-4" />,
            title: "Transparency",
            desc: "Our platform provides clear and unbiased information, helping users make informed choices.",
        },
        {
            icon: <FaUsers className="text-5xl text-green-500 mb-4" />,
            title: "Community",
            desc: "We are a community built by shoppers, for shoppers. We value every voice and every opinion.",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">

            <div className="text-center py-16 px-4">
                <h1 className="text-4xl font-extrabold text-blue-700 drop-shadow-sm">
                    About ShopReview
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Building a community where every shopping experience counts.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-6 mb-16">
                <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition">
                    <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
                        To empower online shoppers by providing a platform for honest, transparent, and user-driven reviews.
                        We believe that collective feedback is the most powerful tool for making smart purchasing decisions.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Our Core Values
                </h2>
                <div className="grid gap-8 items-center sm:grid-cols-2 lg:grid-cols-3">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white flex justify-center items-center flex-col p-8 rounded-2xl shadow-md border border-gray-100 text-center hover:-translate-y-2 hover:shadow-xl transition transform duration-300"
                        >
                            {value.icon}
                            <h3 className="text-xl font-semibold text-gray-800">
                                {value.title}
                            </h3>
                            <p className="mt-3 text-gray-600">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-blue-600 text-white py-12">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold">Join the Conversation!</h2>
                    <p className="mt-3 text-lg text-blue-100">
                        Your voice is the most valuable part of our community.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/reviews"
                            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-50 transition"
                        >
                            Browse Reviews
                        </Link>
                        <Link
                            to="/write-review"
                            className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-900 transition"
                        >
                            Write a Review
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
