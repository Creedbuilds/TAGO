import React, { useRef } from 'react';
import TestimonialCard from '../molecules/TestimonialCard';
import aminaImg from '../../assets/Amina.png';
import tundeImg from '../../assets/tunde.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const testimonials = [
    {
      name: "Chinedu Okafor",
      role: "Product Lead, Fintech Company",
      text: "Working with Tago transformed how we think about technology. They didn't just develop our app; they engineered a structured system that supports our current operations and future growth.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chinedu"
    },
    {
      name: "Tunde Adewale",
      role: "Founder, Technology Startup",
      text: "What impressed us most was Tago's ability to simplify complex technical challenges. They built a scalable platform that is reliable, flexible, and ready to evolve with our business.",
      image: tundeImg
    },
    {
      name: "Amina Yusuf",
      role: "Operations Dir, Digital Services Firm",
      text: "Tago approached our project with clarity and discipline. Every layer of the system was thoughtfully designed, and performance has remained stable even as our user base continues to expand.",
      image: aminaImg
    },
    {
      name: "Ifeoma Nwankwo",
      role: "Head of Tech, Financial Services",
      text: "Tago demonstrated exceptional technical depth from the very beginning. Their architecture-first approach ensured our platform was stable, secure, and ready to handle rapid growth.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ifeoma"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-white overflow-visible">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 font-primary">What Our Clients Say</h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            We build long-term partnerships by delivering structured, scalable systems that businesses can rely on.
          </p>
        </div>

      
        <div className="relative">
          
          <button 
            aria-label="Previous testimonials"
            onClick={() => scroll('left')}
            className="absolute -left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            aria-label="Next testimonials"
            onClick={() => scroll('right')}
            className="absolute -right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-8 scroll-smooth px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              .flex::-webkit-scrollbar { display: none; }
            `}} />
            {testimonials.map((t, i) => (
              <TestimonialCard 
                key={i}
                name={t.name}
                role={t.role}
                text={t.text}
                image={t.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
