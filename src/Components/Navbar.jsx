import React, { useState } from "react";
import { FaShopify } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();

    const navLinks = [
        {
            label: "Home", path: "/"
        },
        {
            label: "About", path: "/about"
        },
        {
            label: "Privacy Policy", path: '/privacy'
        }
        ,
        {
            label: "Reviews", path: "/reviews"
        },
        {
            label: "Write a Review", path: "/write-review"
        },
        {
            label: 'Contact', path: '/contact'
        },
        {
            label: "FAQ", path: '/faq'
        }

    ];

    const getLinkClass = (path) =>
        `relative px-4 py-2 rounded-md text-sm font-medium tracking-wide transition duration-300
    ${pathname === path
            ? "text-blue-600 font-semibold"
            : "text-gray-700 hover:text-blue-600"}
    group`;

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">


                    <div className="flex items-center space-x-2">
                        <span className="text-3xl text-lime-500"><FaShopify /></span>
                        <Link to="/" className="font-bold text-xl text-blue-600">ShopReview</Link>
                    </div>


                    <div className="hidden md:flex space-x-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={getLinkClass(link.path)}
                            >
                                {link.label}

                                <span
                                    className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300
                    ${pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}`}
                                />
                            </Link>
                        ))}
                    </div>


                    <div className="md:hidden">
                        <button
                            className="focus:outline-none text-2xl"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <IoCloseSharp /> : <TiThMenu />}
                        </button>
                    </div>
                </div>
            </div>


            <div
                className={`md:hidden bg-white shadow-inner border-t overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-60" : "max-h-0"
                    }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`block text-center px-6 py-3 text-sm tracking-wide ${pathname === link.path
                            ? "bg-blue-100 text-blue-700 font-semibold w-[30%] mx-auto"
                            : "text-gray-700 hover:bg-blue-50"
                            }`}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}


export default Navbar;