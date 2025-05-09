
import React from "react";
import { ShieldCheck, Clock, DollarSign, CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
    const features = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
            title: "Secure & Compliant",
            desc: "Our platform ensures legal, safe, and fully compliant license transfers.",
        },
        {
            icon: <Clock className="w-8 h-8 text-indigo-600" />,
            title: "Fast Turnaround",
            desc: "Get quotes quickly and receive payments within days, not weeks.",
        },
        {
            icon: <DollarSign className="w-8 h-8 text-indigo-600" />,
            title: "Maximize Value",
            desc: "We ensure you get the highest value for your unused software.",
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-indigo-600" />,
            title: "Trusted by Businesses",
            desc: "Join hundreds of companies who trust us for their software resale needs.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
                    Why Choose Us
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
                        >
                            <div className="mb-4 flex justify-center">{feature.icon}</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
