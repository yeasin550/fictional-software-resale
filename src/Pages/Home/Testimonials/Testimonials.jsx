import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "IT Manager",
        company: "NovaTech Ltd.",
        quote: "ResellSoft helped us recover thousands from unused licenses. Their process was fast and totally secure.",
    },
    {
        name: "James Carter",
        role: "Procurement Lead",
        company: "BrightEdge Systems",
        quote: "We had old licenses sitting idle — ResellSoft turned them into real value in days. Highly recommended!",
    },
    {
        name: "Emily Johnson",
        role: "Operations Director",
        company: "TechNova",
        quote: "Amazing experience! We were able to quickly offload licenses we no longer needed.",
    },
    {
        name: "Michael Lee",
        role: "IT Coordinator",
        company: "FusionWare Inc.",
        quote: "ResellSoft made the whole process seamless and compliant. Couldn’t be happier.",
    },
    {
        name: "Ava Rodriguez",
        role: "Software Asset Manager",
        company: "NextGen Apps",
        quote: "Very professional and efficient. Highly recommend for any company looking to unlock value from unused software.",
    },
];

const ITEMS_PER_VIEW = 3;

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setIndex((prev) =>
            (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    const getVisibleItems = () => {
        const items = [];
        for (let i = 0; i < ITEMS_PER_VIEW; i++) {
            items.push(testimonials[(index + i) % testimonials.length]);
        }
        return items;
    };

    return (
        <section className="py-20 bg-white px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-6xl mx-auto text-center">
                <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl md:text-4xl font-bold  text-gray-800">
                    What Our Clients Say
                    </h2>
                    ---------------------------------------------------------------------------------------
                    <div className="flex justify-center gap-4 relative z-10">
                        <button
                            onClick={handlePrev}
                            className="p-2 rounded-full border hover:bg-gray-200 transition"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-2 rounded-full border hover:bg-gray-200 transition"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden relative h-[300px]">
                    <motion.div
                        key={index}
                        initial={{ x: 300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
                    >
                        {getVisibleItems().map((item, i) => (
                            <div
                                key={i}
                                className="bg-gray-100 p-6 rounded-xl shadow-sm text-left border"
                            >
                                <p className="text-gray-700 text-lg mb-4 italic">
                                    “{item.quote}”
                                </p>
                                <div>
                                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                                    <p className="text-sm text-gray-600">
                                        {item.role} — {item.company}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                   
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
