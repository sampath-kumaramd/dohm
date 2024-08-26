'use client';
import React, { useState } from 'react';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import CustomButton from './customButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-cream-dark">
      <nav className="flex justify-between items-center py-4 px-6 container mx-auto">
        <div className="flex items-center">
          <Image
            unoptimized
            src="/logo.svg"
            alt="DCHM Logo"
            className="h-10 w-auto"
            width={400}
            height={400}
          />
        </div>
        <div className="hidden md:flex space-x-16 items-center">
          <Link href="/" className="text-charcoal hover:text-orange">
            <h6>Home</h6>
          </Link>
          <Link href="/about" className="text-charcoal hover:text-orange">
            <h6>About us</h6>
          </Link>
          <Link href="/projects" className="text-charcoal hover:text-orange">
            <h6>Projects</h6>
          </Link>
          <Link href="/services" className="text-charcoal hover:text-orange">
            <h6>Services</h6>
          </Link>
          <Link href="/contact-us">
            <CustomButton>Contact us</CustomButton>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-charcoal items-center">
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Image
                unoptimized
                src="/icons/menu.svg"
                alt="menu Logo"
                className="h-10 w-auto"
                width={40}
                height={40}
              />
            )}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-cream-dark z-50">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-6 text-charcoal"
            >
              <Image
                unoptimized
                src="/icons/close.svg"
                alt="menu Logo"
                className="h-10 w-auto"
                width={40}
                height={40}
              />
            </button>
            <Link
              href="/"
              className="text-charcoal hover:text-orange"
              onClick={toggleMenu}
            >
              <h6>Home</h6>
            </Link>
            <Link
              href="/about"
              className="text-charcoal hover:text-orange"
              onClick={toggleMenu}
            >
              <h6>About us</h6>
            </Link>
            <Link
              href="/projects"
              className="text-charcoal hover:text-orange"
              onClick={toggleMenu}
            >
              <h6>Projects</h6>
            </Link>
            <Link
              href="/services"
              className="text-charcoal hover:text-orange"
              onClick={toggleMenu}
            >
              <h6>Services</h6>
            </Link>
            <Link href="/contact-us" onClick={toggleMenu}>
              <CustomButton>Contact us</CustomButton>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
