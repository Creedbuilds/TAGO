import React from "react";
import FaqItem from "../molecules/FaqItem";

const FaqSection = () => {
  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer:
        "We work with startups,  growing companies and established enterprises seeking structured, scalable software solutions.Our systems are designed to support businesses at various stages of growth",
    },
    {
      question:
        "Do you only build new systems, or can you improve existing ones?",
      answer:
        "We do both. Tago builds new product from the ground up and alos modernizes, restructures, and optimizes existing systems to improve performance, scalability and reliability  .",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines depend on the scope and complexity of the project. After understanding your requirements, we provide a clear timeline and development plan before we begin.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes. We provide ongoing maintenance, technical support, updates, and improvements to help keep your system secure, reliable, and up to date.",
    },
    {
      question: "What makes Tago different from other development companies?",
      answer:
        "We don't just write code. We focus on understanding the problem behind the product, building practical solutions, and creating systems that are scalable, reliable, and designed for real business needs both locally and globally.",
    },
  ];

  return (
    <section id="faqs" className="py-24 px-6 bg-[#F7FAFF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 font-primary">
            FAQs
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Answers to common questions about our process, services, and
            approach to building scalable systems.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-7xl">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;