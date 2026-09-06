import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
      <div className="w-12 h-12 flex items-center justify-center bg-blue-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-white mb-4">{title}</h4>
      <p className="text-sm text-blue-100/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
