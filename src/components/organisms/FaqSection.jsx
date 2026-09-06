import React from "react";
import FaqItem from "../molecules/FaqItem";

const FaqSection = () => {
  const faqs = [
    {
      question: "What types of businesses do you work with?",
    },
    {
      question:
        "Do you only build new systems, or can you improve existing ones?",
    },
    {
      question: "How long does a typical project take?",
    },
    {
      question: "Do you offer ongoing support after launch?",
    },
    {
      question:
        "What makes Tago different from other development companit just write code;",
    },
  ];

  return (
    <section id="faqs" className="py-24 px-6 bg-[#F7FAFF]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 font-primary">
            FAQs
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Answers to common questions about our process, services, and
            approach to building scalable systems.
          </p>
        </div>

        <div className="max-w-7xl">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
