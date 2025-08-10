import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReviewCard = ({ review }) => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    className={i < rating ? "text-yellow-400" : "text-gray-300"}
                />
            );
        }
        return stars;
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex text-lg mb-2">{renderStars(review.rating)}</div>
            <p className="text-gray-700 text-base italic leading-relaxed">"{review.text}"</p>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                    <p className="text-sm font-semibold text-gray-900">{review.author}</p>
                    <p className="text-sm text-blue-600 font-medium">
                        — Reviewed for <span className="font-bold">{review.shop}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        try {
            const savedReviews = JSON.parse(localStorage.getItem("reviews"));
            if (savedReviews) {
                setReviews(savedReviews);
            }
        } catch (error) {
            toast.error("Failed to load reviews. Please try again.", { position: "bottom-right" });
            console.error("Failed to load reviews from localStorage:", error);
        }
    }, []);

    return (
        <section className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">All Reviews</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        See what our community has to say about their recent shopping experiences.
                    </p>
                </div>

                {reviews.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map(review => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center p-10 bg-white rounded-xl shadow-md">
                        <p className="text-xl text-gray-600 font-medium">
                            No reviews found. Be the first to share your experience!
                        </p>
                        <Link
                            to="/write-review"
                            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition"
                        >
                            Write a Review
                        </Link>
                    </div>
                )}
            </div>
            <ToastContainer />
        </section>
    );
};

export default Reviews;
