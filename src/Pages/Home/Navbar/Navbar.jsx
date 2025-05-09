import React, { useState } from "react";
import { MoreVertical } from "lucide-react";
import logo from "../../../assets/logo.png"
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md px-6 py-4 fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left - Logo */}
                <div className="w-16 h-10 flex items-center">
                    <img src={logo} alt="Logo" className="h-full object-contain" />
                </div>

                {/* Center - Menu (hidden on mobile) */}
                <ul className="hidden md:flex space-x-8 text-gray-700 font-medium mx-auto">
                    <li className="hover:text-indigo-700 cursor-pointer">Home</li>
                    <li className="hover:text-indigo-700 cursor-pointer">About</li>
                    <li className="hover:text-indigo-700 cursor-pointer">How It Works</li>
                    <li className="hover:text-indigo-700 cursor-pointer">Pricing</li>
                </ul>

                {/* Right - CTA Button (hidden on mobile) */}
                <div className="hidden md:block">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md transition cursor-pointer">
                        Sell Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <MoreVertical className="w-6 h-6 text-gray-800" />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden mt-3 bg-white shadow-md rounded-lg px-4 py-3">
                    <ul className="space-y-3 text-gray-700 font-medium text-center">
                        <li className="hover:text-indigo-700 cursor-pointer">Home</li>
                        <li className="hover:text-indigo-700 cursor-pointer">About</li>
                        <li className="hover:text-indigo-700 cursor-pointer">How It Works</li>
                        <li className="hover:text-indigo-700 cursor-pointer">Pricing</li>
                        <li>
                            <button className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition cursor-pointer">
                                Sell Now
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
