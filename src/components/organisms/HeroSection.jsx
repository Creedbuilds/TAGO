import React from 'react';
import Button from '../atoms/Button';
import roboHand from '../../assets/Robohand.png';
import heroRectangle from '../../assets/herorectangle.png';

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-0 overflow-hidden w-full min-h-[800px] lg:min-h-[900px] flex items-end">
      {/* Rectangle */}
      <div className="absolute left-0 bottom-0 w-full lg:w-auto z-0 pointer-events-none">
        <img 
          src={heroRectangle} 
          alt="Design Element" 
          className="w-full lg:w-[620px] h-auto object-contain block align-bottom"
          style={{ marginBottom: '-1px' }}
        />
      </div>

      <div className="w-full flex flex-col lg:grid lg:grid-cols-5 items-end relative z-10 px-8 lg:px-16">
        
        {/* text */}
        <div className="lg:col-start-1 lg:col-span-3 text-left max-w-[1777px] h-fit mb-24 lg:mb-48">
          <h1 className="text-3xl md:text-5xl lg:text-[54px] font-bold leading-[1.2] lg:leading-[1.1] text-primary tracking-tight mb-10 lg:mb-10">
            Designing Structured <br className="block md:hidden" />
            Software Architecture for <br className="block md:hidden" />
            Sustainable Growth
          </h1>
          <p className="md:text-xl lg:text-2xl text-slate-700 leading-relaxed mb-12 lg:mb-14 font-medium max-w-xl">
            We design and engineer scalable platforms that evolve with your business from
            early-stage products to enterprise grade systems.
          </p>
          <Button href="#contact" className="px-10 lg:px-12 py-4 lg:py-5 text-xl lg:text-xl bg-[#0d1b2a] hover:bg-slate-900 rounded-full transition-all">
            Contact us
          </Button>
        </div>
        
  
        <div className="relative lg:absolute right-0 bottom-0 w-full lg:w-[40%] flex justify-center lg:justify-end lg:translate-x-12 z-0 pointer-events-none">
          <div className="relative w-full max-w-[650px] md:max-w-[850px] lg:max-w-[1500px]">
            <img 
              src={roboHand} 
              alt="Robotic Hand" 
              className="w-full h-auto object-contain block align-bottom scale-110 lg:scale-125"
              style={{ marginBottom: '-1px' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
