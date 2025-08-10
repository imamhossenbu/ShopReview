import React, { useState } from "react";
import { useForm } from "react-hook-form";
import StarRatings from 'react-star-ratings';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const WriteReview = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const [rating, setRating] = useState(0);

    const onSubmit = (data) => {
        if (rating === 0) {
            toast.error('Please select a star rating.', { position: "bottom-right" });
            return;
        }


        const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];


        const newReview = {
            id: Date.now(),
            author: data.authorName,
            shop: data.shopName,
            rating: rating,
            text: data.reviewText,
            timestamp: new Date().toISOString(),
        };

        const updatedReviews = [newReview, ...existingReviews];

        localStorage.setItem("reviews", JSON.stringify(updatedReviews));

        setValue('authorName', '');
        setValue('shopName', '');
        setValue('reviewText', '');

        setRating(0);

        toast.success('Your review has been submitted successfully!', { position: "bottom-right" });
    };

    const changeRating = (newRating) => {
        setRating(newRating);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-3xl mx-auto px-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-800">Write a Review</h1>
                        <p className="mt-2 text-lg text-gray-600">
                            Share your online shopping experience with the community.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label htmlFor="authorName" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="authorName"
                                {...register("authorName", { required: "Your name is required" })}
                                className="peer w-full px-4 py-2 border border-gray-300 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter Your Name"
                            />
                            {errors.authorName && (
                                <p className="mt-1 text-sm text-red-500">{errors.authorName.message}</p>
                            )}
                        </div>


                        <div>
                            <label htmlFor="shopName" className="block text-sm font-medium text-gray-700 mb-1">
                                Shop Name
                            </label>
                            <input
                                type="text"
                                id="shopName"
                                {...register("shopName", { required: "Shop name is required" })}
                                className="peer w-full px-4 py-2 border border-gray-300 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter Your Shop Name"
                            />
                            {errors.shopName && (
                                <p className="mt-1 text-sm text-red-500">{errors.shopName.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Your Rating
                            </label>
                            <div className="flex space-x-1 justify-center md:justify-start">
                                <StarRatings
                                    rating={rating}
                                    starRatedColor="#FFD700"
                                    changeRating={changeRating}
                                    numberOfStars={5}
                                    name="rating"
                                    starHoverColor="#FFD700"
                                    starDimension="28px"
                                    starSpacing="2px"
                                />
                            </div>
                            <p className="text-center md:text-left text-sm text-gray-500 mt-2">
                                You selected: <span className="font-semibold">{rating}</span> stars.
                            </p>
                        </div>

                        <div className="group">
                            <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Review
                            </label>
                            <textarea
                                id="reviewText"
                                rows="6"
                                {...register("reviewText", {
                                    required: "Review text is required",
                                    minLength: { value: 20, message: "Review must be at least 20 characters" }
                                })}
                                className=" w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
                                placeholder="Describe your experience with this shop..."
                            ></textarea>
                            {errors.reviewText && (
                                <p className="mt-1 text-sm text-red-500">{errors.reviewText.message}</p>
                            )}
                        </div>


                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={rating === 0 || errors.authorName || errors.shopName || errors.reviewText}
                            >
                                Submit Review
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default WriteReview;
