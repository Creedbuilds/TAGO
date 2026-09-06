import React from 'react';
import NavLink from '../atoms/NavLink';

const NavMenu = () => {
  return (
    <div className="flex items-center space-x-12">
      <NavLink href="#about">About us</NavLink>
      <NavLink href="#services">Services</NavLink>
      <NavLink href="#process">Our Process</NavLink>
      <NavLink href="#projects">Our Projects</NavLink>
      <NavLink href="#testimonials">Testimonials</NavLink>
      <NavLink href="#faqs">FAQs</NavLink>
    </div>
  );
};

export default NavMenu;
