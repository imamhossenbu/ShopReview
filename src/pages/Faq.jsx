import React from "react";

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
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10">
                <h1 className="text-4xl font-extrabold text-blue-700 mb-10 text-center">
                    Frequently Asked Questions
                </h1>

                <div className="accordion accordion-open accordion-arrow border border-gray-200 rounded-lg">
                    {faqs.map((faq, index) => (
                        <div key={index} className="accordion-item border-b border-gray-200 last:border-b-0">
                            <input type="checkbox" id={`accordion-${index}`} className="peer hidden" />
                            <label
                                htmlFor={`accordion-${index}`}
                                className="accordion-title flex justify-between items-center p-4 cursor-pointer select-none text-gray-800 font-semibold"
                            >
                                {faq.question}
                            </label>
                            <div className="accordion-content px-4 py-2 text-gray-600 peer-checked:block hidden">
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Faq