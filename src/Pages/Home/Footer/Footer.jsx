import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../../../assets/logo.png"
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6 md:px-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left: Logo and Description */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-10 flex items-center">
                            <img src={logo} alt="Logo" className="h-full w-24 object-contain" />
                        </div>
                        <span className="text-3xl font-bold text-white">LicensePro</span>
                    </div>
                    <p className="text-gray-400 mt-4 text-center md:text-left max-w-sm">
                        Your one-stop solution for managing software licenses, offloading unused ones, and saving costs. Join us to streamline your software asset management.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <a href="#" className="hover:text-indigo-500 transition">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className="hover:text-indigo-500 transition">
                            <Twitter size={24} />
                        </a>
                        <a href="#" className="hover:text-indigo-500 transition">
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>

                {/* Center: Useful Links */}
                <div className="flex flex-col items-center md:items-start gap-6">
                    <h3 className="text-xl font-semibold text-gray-300">Quick Links</h3>
                    <div className="text-center md:text-right space-y-2">
                        <nav className="space-x-4 flex flex-col">
                            <a href="#" className="hover:text-indigo-400 transition">Home</a>
                            <a href="#" className="hover:text-indigo-400 transition">About</a>
                            <a href="#" className="hover:text-indigo-400 transition">Services</a>
                            <a href="#" className="hover:text-indigo-400 transition">Contact</a>
                        </nav>

                    </div>
                </div>

                {/* Right: Newsletter */}
                <div className="flex flex-col items-center md:items-end gap-6">
                    <h3 className="text-xl font-semibold text-gray-300">Subscribe to our Newsletter</h3>
                    <p className="text-gray-400">Get the latest updates and offers directly to your inbox!</p>
                    <form className="flex gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-md border border-gray-700 text-gray-800"
                        />
                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-400">
                <p className="text-sm">
                    © {new Date().getFullYear()} LicensePro. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
