import React from 'react';

const InfoCard = ({ title, description, icon }) => {
  return (
    <div className="flex gap-4 p-6 bg-blue-50/30 border border-blue-100/50 rounded-2xl transition-all duration-300">
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white rounded-lg border border-blue-50">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-primary mb-1">{title}</h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
