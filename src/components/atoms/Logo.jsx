import React from 'react';
import darkLogo from '../../assets/darklogo.png';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={darkLogo} className="h-10 w-auto" />
    </div>
  );
};

export default Logo;
