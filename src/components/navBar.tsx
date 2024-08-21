import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import CustomButton from './customButton';

const Navbar = () => {
  return (
    <div className=" bg-cream-dark">
      <nav className="flex justify-between items-center py-4 px-6 container mx-auto">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="DCHM Logo"
            className="h-8 w-auto"
            width={400}
            height={400}
          />
        </div>
        <div className="hidden md:flex space-x-16 items-center">
          <Link href="/" className="text-charcoal hover:text-orange">
            <h6> Home </h6>
          </Link>
          <Link href="/about" className="text-charcoal hover:text-orange h-6">
            <h6>About us</h6>
          </Link>
          <Link href="/projects" className="text-charcoal hover:text-orange">
            <h6>Projects</h6>
          </Link>
          <Link href="/services" className="text-charcoal hover:text-orange">
            <h6>Services</h6>
          </Link>
          <Link href="/contact">
            <CustomButton>Contact us</CustomButton>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
