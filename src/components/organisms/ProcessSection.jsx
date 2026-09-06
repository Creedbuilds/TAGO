import React from 'react';
import ProcessStep from '../molecules/ProcessStep';
import ProjectsSection from './ProjectsSection';
import { Workflow, TrendingUp, ShieldCheck } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We begin by understanding your vision, requirements, site context, and project objectives through in-depth consultation.",
      isLeft: true
    },
    {
      number: "02",
      title: "Architecture & Planning",
      description: "We design robust system architectures with layered structures, clean modules, and scalable foundations. Every decision is made to support long-term stability and growth.",
      isLeft: false
    },
    {
      number: "03",
      title: "Development & Execution",
      description: "Our engineers build the system meticulously, focusing on clean code, modular design, and reliable integrations. Each layer is developed with scalability in mind.",
      isLeft: true
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description: "We rigorously test every component for performance, security, and reliability. Systems are optimized to perform efficiently under increasing demand.",
      isLeft: false
    },
    {
      number: "05",
      title: "Delivery & Support",
      description: "We launch systems confidently, providing ongoing support and monitoring. Our solutions are built to evolve as your business grows, ensuring long-term viability.",
      isLeft: true
    }
  ];

  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Heading */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Process</h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            We follow a structured, architecture-first approach to design and build systems that are reliable, scalable, and adaptable for long-term growth.
          </p>
        </div>

        {/* Timeline Content */}
        <div className="relative mb-32">
        
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-blue-100 -translate-x-1/2" />

          <div className="flex flex-col">
            {steps.map((step, index) => (
              <ProcessStep 
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                isLeft={step.isLeft}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectsSection />

      <div className="max-w-7xl mx-auto px-6 relative mt-24">
        {/* Why Choose Us*/}
        <div className="bg-[#0047ff] rounded-[2.5rem] p-12 lg:p-20 text-white">
          <div className="max-w-4xl mb-16">
            <h3 className="text-4xl font-bold mb-6">Why Choose Us</h3>
            <p className="text-lg text-blue-50 leading-relaxed">
              We follow a structured, architecture-first approach to design and build systems that are reliable, scalable, and adaptable for long-term growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="border-l-4 border-black pl-6">
              <Workflow className="w-7 h-7 text-white mb-3 opacity-90" />
              <h4 className="text-xl font-bold mb-4">Structured Approach</h4>
              <p className="text-sm text-blue-100 leading-relaxed">
                Every system we build is thoughtfully designed with layered architecture and clean execution. Complexity is broken down into manageable, scalable parts.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border-l-4 border-black pl-6">
              <TrendingUp className="w-7 h-7 text-white mb-3 opacity-90" />
              <h4 className="text-xl font-bold mb-4">Scalable Systems</h4>
              <p className="text-sm text-blue-100 leading-relaxed">
                Our solutions are built to evolve. From early-stage products to enterprise platforms, we ensure technology can grow as your business grows.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border-l-4 border-black pl-6">
              <ShieldCheck className="w-7 h-7 text-white mb-3 opacity-90" />
              <h4 className="text-xl font-bold mb-4">Reliability & Precision</h4>
              <p className="text-sm text-blue-100 leading-relaxed">
                We focus on performance, stability, and error-free execution. Our systems are engineered to function today and continue to perform tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
