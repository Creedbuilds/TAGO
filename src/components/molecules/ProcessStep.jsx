import React from 'react';

const ProcessStep = ({ number, title, description, isLeft }) => {
  return (
    <div className={`flex items-center justify-between w-full mb-16 lg:mb-24 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Content Side */}
      <div className="w-full lg:w-[45%] text-left">
        <span className="text-3xl font-bold text-blue-600 mb-4 block">{number}</span>
        <h4 className="text-xl font-bold text-slate-900 mb-4">{title}</h4>
        <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
          {description}
        </p>
      </div>

      {/* Spacer for the central line on desktop */}
      <div className="hidden lg:block w-[10%] relative h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full z-10 border-4 border-white shadow-sm" />
      </div>

      {/* Empty side for layout balance */}
      <div className="hidden lg:block lg:w-[45%]" />
    </div>
  );
};

export default ProcessStep;
