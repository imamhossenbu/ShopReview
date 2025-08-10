import React from "react";
import { FaUserShield, FaCookieBite, FaLock, FaEnvelope, FaDatabase, FaUserCheck } from "react-icons/fa";

const Privacy = () => {
    const sections = [
        {
            icon: <FaUserShield className="text-blue-600 text-3xl" />,
            title: "Information We Collect",
            desc: "We collect personal details like your name and email, as well as non-personal data such as browser type and device information for analytics."
        },
        {
            icon: <FaUserCheck className="text-green-600 text-3xl" />,
            title: "How We Use Your Information",
            desc: "Your data helps us display reviews, improve site functionality, send updates, and protect against fraudulent activity."
        },
        {
            icon: <FaDatabase className="text-purple-600 text-3xl" />,
            title: "Sharing Your Information",
            desc: "We don’t sell your personal data. We only share it when legally required or to protect our legal rights."
        },
        {
            icon: <FaCookieBite className="text-yellow-600 text-3xl" />,
            title: "Cookies",
            desc: "We use cookies to enhance your browsing experience. You can disable cookies in your browser settings."
        },
        {
            icon: <FaLock className="text-red-600 text-3xl" />,
            title: "Data Security",
            desc: "We implement reasonable security measures to protect your data, but no online system is 100% secure."
        },
        {
            icon: <FaEnvelope className="text-indigo-600 text-3xl" />,
            title: "Contact Us",
            desc: "If you have questions, reach us at support@shopreview.com"
        }
    ];

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">

            <div className="text-center py-16 px-6">
                <h1 className="text-4xl font-bold text-blue-700 mb-4">Privacy Policy</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Your privacy matters to us. Learn how we collect, use, and safeguard your information.
                </p>
            </div>


            <div className="max-w-6xl mx-auto px-6 pb-16 grid gap-8 sm:grid-cols-2">
                {sections.map((section, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition transform hover:-translate-y-1"
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <div className="bg-gray-100 w-14 h-14 flex items-center justify-center rounded-full">
                                {section.icon}
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{section.desc}</p>
                    </div>
                ))}
            </div>

            <p className="text-center text-gray-500 text-sm pb-8">
                Last Updated: {new Date().toLocaleDateString()}
            </p>
        </div>
    );
};

export default Privacy;
