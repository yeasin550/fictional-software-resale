import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const licenseOptions = ["Select Type", "Windows", "Office 365", "Adobe", "Other"];

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
        if (!formData.company.trim()) newErrors.company = "Company name is required";
        if (!formData.licenseType || formData.licenseType === "Select Type")
            newErrors.licenseType = "Please select a license type";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
            // You can now send `formData` to your backend or API
        }
    };

    return (
        <section className="py-20 px-6 md:px-12">
            <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
                Contact Us
            </h2>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Left Side: SVG or Image */}
                <div className="md:w-1/2 w-full flex justify-center">
                    <img
                        src="https://img.freepik.com/free-psd/man-with-phone-off-hook_1154-459.jpg?t=st=1746710592~exp=1746714192~hmac=2e8ed14b8b578d67c892202127c51a49ccc0edb29011a3c2664f987b0dfbf200&w=740"
                        alt="Contact Illustration"
                        className="w-full max-w-sm h-full"
                    />
                </div>

                {/* Right Side: Form */}
                <div className="md:w-1/2 w-full">
                    <form onSubmit={handleSubmit} className="border shadow-md rounded-xl p-5 space-y-2">
                        <div>
                            <label className="block text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full border border-gray-700 rounded-md p-2"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full border border-gray-700 rounded-md p-2"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Company</label>
                            <input
                                type="text"
                                name="company"
                                className="w-full border border-gray-700 rounded-md p-2"
                                value={formData.company}
                                onChange={handleChange}
                            />
                            {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">License Type</label>
                            <select
                                name="licenseType"
                                className="w-full border border-gray-700 rounded-md p-2"
                                value={formData.licenseType}
                                onChange={handleChange}
                            >
                                {licenseOptions.map((option) => (
                                    <option key={option}>{option}</option>
                                ))}
                            </select>
                            {errors.licenseType && (
                                <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Message</label>
                            <textarea
                                name="message"
                                rows="3"
                                className="w-full border border-gray-700 rounded-md p-2"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
