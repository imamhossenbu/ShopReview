import React, { useState } from "react";

const faqs = [
    {
        question: "What is ShopReview?",
        answer:
            "ShopReview is a community platform where users can share honest and transparent reviews about online shopping experiences.",
    },
    {
        question: "How do I write a review?",
        answer:
            "To write a review, navigate to the 'Write a Review' page, fill out the form with your shopping experience details, and submit.",
    },
    {
        question: "Is my personal information safe?",
        answer:
            "Yes! We respect your privacy and do not share your personal information without your consent.",
    },
    {
        question: "Can I edit or delete my review?",
        answer:
            "Currently, users can edit or delete their reviews by visiting their profile and managing their submissions.",
    },
    {
        question: "How do I contact support?",
        answer:
            "You can contact us using the contact form on the 'Contact' page. We strive to respond within 24 hours.",
    },
];

const Faq = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10">
                <h1 className="text-4xl font-extrabold text-blue-700 mb-10 text-center">
                    Frequently Asked Questions
                </h1>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-semibold focus:outline-none"
                            >
                                <span>{faq.question}</span>
                                <svg
                                    className={`w-6 h-6 text-blue-700 transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            <div
                                className={`px-4 pb-4 text-gray-600 transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    } overflow-hidden`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
