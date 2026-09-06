import React from 'react';

const TestimonialCard = ({ name, role, text, image }) => {
  return (
    <div className="flex-1 min-w-[280px] p-8 bg-blue-50/30 rounded-none border border-blue-50 transition-all duration-300">
      {/* Header with Photo and Name */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-slate-900 leading-tight">{name}</h4>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>

      {/* Separator Line */}
      <hr className="border-slate-200/60 mb-6" />

      {/* Testimonial Text */}
      <p className="text-slate-600 leading-relaxed text-sm">
        “{text}”
      </p>
    </div>
  );
};

export default TestimonialCard;
