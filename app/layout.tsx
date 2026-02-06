import type { Metadata } from 'next';
import { Poppins, Open_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

import Header from '@/components/header';
import Footer from '@/components/footer';
import FooterTop from "@/components/footerTop";
import { Toaster } from "@/components/ui/toaster";
import TitleUpdater from '@/components/TitleUpdater';
import PixelLoader from "@/components/PixelLoader";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={` antialiased bg-black text-white`}>
        {/* Global Header */}
        <PixelLoader />
        <TitleUpdater />
        <Header />

        {/* Page Content */}
        <main className="mt-5 w-full">
          {children}
        </main>

        {/* Global Footer */}
        <FooterTop />
        <Footer />

        {/* Toast notifications - high z-index to appear above everything */}
        <Toaster />

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}