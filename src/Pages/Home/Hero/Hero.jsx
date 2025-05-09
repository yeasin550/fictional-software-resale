import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat mt-16"
            style={{
                backgroundImage:
                    "url('https://img.freepik.com/free-vector/red-sale-price-tag-style-banner-design-template_1017-27328.jpg?t=st=1746706379~exp=1746709979~hmac=807871dbc99eba50acba3afd01da8754e3fa7f084575a5717d881048130b21a6&w=996')",
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 "></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 flex items-center">
                <motion.div
                    className="w-full md:w-1/2 text-left"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Unlock Value from Unused Software
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl mb-8"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        We help businesses turn unused software licenses into real revenue.
                        Safe, fast, and fully compliant.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-md transition duration-300">
                            Sell My Licenses
                        </button>
                        <button className="border bg-white hover:text-black font-semibold py-3 px-6 rounded-md transition duration-300">
                            Get a Quote
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
