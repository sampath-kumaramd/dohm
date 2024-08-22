import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from './ui/button';

type SocailMedia = {
  name: string;
  href: string;
  icon: string;
};

const Footer = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
  ];

  const SocailMedia: SocailMedia[] = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: '/icons/facebook.svg',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: '/icons/instagram.svg',
    },
    { name: 'Email', href: 'https://gmail.com', icon: '/icons/mail.svg' },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: '/icons/linkedin.svg',
    },
  ];

  return (
    <footer className="bg-charcoal text-cream py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Image unoptimized
            src="/logo-white.svg"
            alt="DCHM Logo"
            className="h-10 w-auto"
            width={400}
            height={400}
          />
          <p className="text-sm text-cream-dark mt-4">
            We build products that work better!
          </p>
          {SocailMedia.map((item, index) => (
            <Button
              key={index}
              variant={'ghost'}
              className=" bg-orange-light rounded-full w-10 h-10 p-0 me-3 mt-10"
            >
              <Image unoptimized
                src={item.icon || '/icons/facebook.svg'}
                alt={item.name}
                className="h-5 w-auto"
                width={40}
                height={40}
              />
            </Button>
          ))}
        </div>
        <div>
          <h3 className="font-bold mb-4">MAIN</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-orange">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange">
                About us
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-orange">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-orange">
                Services
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-orange">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">CONTACT</h3>
          <ul className="space-y-2">
            <li>Book a developer </li>
            <li>dhomagency@mail.com</li>
            <li>999-888-777</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">LEGAL</h3>
          <ul className="space-y-2">
             <li>
              <Link href="/terms" className="hover:text-orange">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-orange">
                Privacy Policy
              </Link>
            </li>
           
            <li>
              <Link href="/cookies" className="hover:text-orange">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center">
        <p>&copy; 2024 DCHM Development. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
