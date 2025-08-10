import React from "react";
import { FaShopify, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">


                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                    <div className="flex items-center space-x-2">

                        <span className="text-3xl text-lime-500"><FaShopify /></span>

                        <Link to="/" className="font-bold text-xl text-blue-600">ShopReview</Link>
                    </div>

                    <p className="mt-2 text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} ShopReview. All rights reserved.
                    </p>
                </div>


                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-12 mb-6 md:mb-0">

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Company</h3>
                        <ul className="space-y-1 text-gray-600">
                            <li><Link to="/about" className="hover:text-blue-600 transition">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
                            <li><Link to="/privacy" className="hover:text-blue-600 transition">Privacy Policy</Link></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Community</h3>
                        <ul className="space-y-1 text-gray-600">
                            <li><Link to="/reviews" className="hover:text-blue-600 transition">Reviews</Link></li>
                            <li><Link to="/write-review" className="hover:text-blue-600 transition">Write a Review</Link></li>
                            <li><Link to="/faq" className="hover:text-blue-600 transition">FAQ</Link></li>
                        </ul>
                    </div>
                </div>


                <div className="flex space-x-4">
                    <a href="https://www.facebook.com/ReviewDibo" target="_blank" aria-label="Facebook" className="text-gray-400 hover:text-blue-600 transition">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://www.linkedin.com/company/reviewdibo/" target="_blank" aria-label="Twitter" className="text-gray-400 hover:text-blue-600 transition">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://www.instagram.com/reviewdibo/" target="_blank" aria-label="Instagram" className="text-gray-400 hover:text-blue-600 transition">
                        <FaInstagram size={24} />
                    </a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
