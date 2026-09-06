import React from "react";
import ServiceCard from "../molecules/ServiceCard";
import { Cpu, Layers, Network, Server, RefreshCw, Cloud } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Product Engineering",
      description:
        "We design and develop digital products from concept to launch, combining technical precision with scalable architecture. Whether building an MVP or refining an existing product, we focus on performance, stability, and long-term.",
      icon: <Cpu className="w-6 h-6 text-white" />,
    },
    {
      title: "System Architecture",
      description:
        "We engineer strong technical foundations that support growth. By designing clean, modular architectures, we ensure systems remain stable, adaptable, and easy to evolve as business needs change.",
      icon: <Layers className="w-6 h-6 text-white" />,
    },
    {
      title: "Platform Development",
      description:
        "We build robust platforms capable of handling complexity at scale. Our layered approach ensures clarity in structure, seamless integrations, and reliable system performance.",
      icon: <Network className="w-6 h-6 text-white" />,
    },
    {
      title: "Infrastructure & Optimization",
      description:
        "We design infrastructure that supports performance and scalability. From system optimization to performance tuning, we ensure technology runs efficiently under increasing demand.",
      icon: <Server className="w-6 h-6 text-white" />,
    },
    {
      title: "System Modernization",
      description:
        "We build robust platforms capable of handling complexity at scale. Our layered approach ensures clarity in structure, seamless integrations, and reliable system performance.",
      icon: <RefreshCw className="w-6 h-6 text-white" />,
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Modern cloud-native solutions with AWS, Azure, and GCP. DevOps, CI/CD, and infrastructure as code.",
      icon: <Cloud className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[#0047ff]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">What we do</h2>
          <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
            We design, build, and optimize structured software systems that
            support business growth at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
