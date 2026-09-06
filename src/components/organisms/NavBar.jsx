import React from 'react';
import Logo from '../atoms/Logo';
import NavMenu from '../molecules/NavMenu';
import Button from '../atoms/Button';

const NavBar = () => {
  return (
    <nav className="relative w-full pt-8 z-50">
      <div className="w-full flex lg:grid lg:grid-cols-5 items-center justify-between relative z-10 px-6 lg:px-16">
        
        {/* Logo Section */}
        <div className="lg:col-start-1 lg:col-span-1">
          <Logo />
        </div>

        
        <div className="hidden lg:flex lg:col-start-2 lg:col-span-3 justify-center">
          <NavMenu />
        </div>

        {/* CTA Button Section */}
        <div className="lg:col-start-5 lg:col-span-1 flex justify-end">
          <Button href="#contact" className="bg-[#0d1b2a] hover:bg-slate-900 rounded-full px-6 lg:px-8 py-2 lg:py-3 text-xs lg:text-sm">
            Get Started
          </Button>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
