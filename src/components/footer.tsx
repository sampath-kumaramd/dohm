import React from 'react';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="/logo-white.svg" alt="DCHM Logo" className="h-8 w-auto mb-4" />
          <p className="text-sm">Building innovative solutions for a digital world.</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-orange">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange">About us</Link></li>
            <li><Link href="/projects" className="hover:text-orange">Projects</Link></li>
            <li><Link href="/services" className="hover:text-orange">Services</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>Email: info@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Tech Street, Silicon Valley, CA 94000</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="hover:text-orange">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-orange">Terms of Service</Link></li>
            <li><Link href="/cookies" className="hover:text-orange">Cookie Policy</Link></li>
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