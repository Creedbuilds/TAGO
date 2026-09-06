import React from 'react';

const NavLink = ({ children, href = '#' }) => {
  return (
    <a 
      href={href} 
      className="text-sm font-medium text-slate-700 hover:text-primary transition-colors duration-200"
    >
      {children}
    </a>
  );
};

export default NavLink;
