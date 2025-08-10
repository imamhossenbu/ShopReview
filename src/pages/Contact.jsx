import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const SERVICE_ID = "service_pn3gwi3";
        const TEMPLATE_ID = "template_otb47qo";
        const USER_ID = "2WOAspDuf-PhHAO40";

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, data, USER_ID)
            .then(() => {
                toast.success("Message sent successfully!");
                reset();
            })
            .catch((error) => {
                toast.error("Failed to send message. Please try again.");
                console.error("EmailJS error:", error);
            });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                {...register("name", { required: "Name is required" })}
                                placeholder="Enter Your Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                placeholder="Enter Your Email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Message</label>
                            <textarea
                                {...register("message", { required: "Message is required" })}
                                placeholder="Describe Your Message"
                                rows="5"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <iframe
                        title="Barisal Sadar Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.162530019052!2d90.39822491544179!3d22.70174438513465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd7e7e7f9a7a9%3A0x43c6d42210e792c0!2sBarisal%20Sadar%2C%20Barisal%20Division%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1691629100000!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        style={{ minHeight: "450px", border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    />
                </div>

            </div>
        </div>
    );
}
