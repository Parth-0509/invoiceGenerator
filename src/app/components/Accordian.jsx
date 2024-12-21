"use client";

import React, { useState } from "react";

function Accordion() {
    const faqs = [
        {
            title: "How can I make invoice for free?",
            description: "Refrens invoice generator allows you to create invoices for free without taking much time. Head over to Refrens invoice generator and start creating invoices using pre-formatted invoice templates. You can add your logo, brand colors, and multiple invoice templates and use many more such features to keep your brand consistent."
        },
        {
            title: "Which is the best free invoice Generator?",
            description: "Refrens is the best free invoice generator as you can create invoices for clients without paying a single amount. You can freely customize your fields and columns, download the invoice as PDF or send it directly via email, or share it via WhatsApp and within one click you can create a payment receipt, debit note, and credit note."
        },
        {
            title: "Can I generate a PDF invoice using the invoice generator?",
            description: "Yes, it is easy to download the PDF invoice using Refrens invoice maker. Clicking on the option of 'Download PDF' will make your invoice in PDF format. Moreover, you can also email the invoice, print the invoice, and send the invoice via WhatsApp or schedule for future dates."
        },
        {
            title: "Will there be any ads on the Invoices?",
            description: "Not at all. Your invoices will carry no ads. On the free version, the documents will carry a small non-intrusive Refrens branding. Documents of Premium customers will carry only your business' branding."
        },
        {
            title: "Can I save my Invoices in this online generator?",
            description: "Yes. All the invoices created by you are saved online. You can access all the invoices anytime just by logging into your account."
        },
        {
            title: "What happens to my data when I want to leave?",
            description: "When you decide to leave Refrens, you have the option to download all your customer data, invoices, quotations, and other documents at any time."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="flex justify-center mt-8">
            <div id="accordion" className="w-full max-w-3xl space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg">
                        {/* Title Section */}
                        <h2
                            className="text-lg font-medium text-gray-800 bg-gray-100 p-4 cursor-pointer flex justify-between items-center"
                            onClick={() => handleToggle(index)}
                        >
                            {faq.title}
                            <span
                                className={`transition-transform transform ${activeIndex === index ? "rotate-180" : ""
                                    }`}
                            >
                                {/* Chevron Icon */}
                                <svg
                                    className="w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </span>
                        </h2>
                        {/* Content Section */}
                        {activeIndex === index && (
                            <div className="p-4 text-gray-600 bg-gray-50">
                                {faq.description}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accordion;
