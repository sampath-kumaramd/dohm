'use client';

import React, { useState, ReactNode } from 'react';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import CustomButton from './customButton';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About us' },
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Services' },
  ];

  const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`${
          isActive ? 'text-orange' : 'text-charcoal'
        } hover:text-orange transition-colors`}
        onClick={onClick}   
      >
        <h6>{children}</h6>
      </Link>
    );
  };

  return (
    <div className="bg-cream-dark">
      <nav className="flex justify-between items-center py-4 px-6 container mx-auto">
        <div className="flex items-center">
          <Link href="/">
          <Image
            unoptimized
            src="/logo.svg"
            alt="DCHM Logo"
            className="h-10 w-auto"
            width={400}
            height={400}
            />
            </Link>
        </div>
        <div className="hidden md:flex space-x-16 items-center">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
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
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} onClick={toggleMenu}>
                {item.label}
              </NavLink>
            ))}
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