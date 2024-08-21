import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import Footer from '@/components/footer';
import Navbar from '@/components/navBar';



const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const eurostile = localFont({
  src: [
    {
      path: '../../public/fonts/EurostileNextLTPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/EurostileNextLTPro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-eurostile',
});

export const metadata: Metadata = {
  title: 'DOHM Development',
  description: 'We build products that work better!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${eurostile.variable}`}>
      <body className="font-sans">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}