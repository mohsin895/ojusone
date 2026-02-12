"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GradientButton } from "@/components/gradient-button";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { fetchApi } from "@/lib/api";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState("/logo.png"); // default logo
  const pathname = usePathname();

  useEffect(() => {
    async function loadSetting() {
      const res = await fetchApi("setting");
      if (res?.data?.logo) {
        setLogo(`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${res.data.logo}`);
      }
    }
    loadSetting();
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Check if click is outside the menu
      if (isOpen && !target.closest('header')) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  // Detect if a path (or its nested path) is active
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const navLink = (path: string) =>
    `text-[16px] text-[#FFFFFF] font-regular transition-all duration-300 ${
      isActive(path)
        ? "text-transparent !text-[#957AE4]  font-regular"
        : ""
    }`;

  const handleMenuToggle = () => {
    console.log("Menu toggle clicked, current state:", isOpen);
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    console.log("Link clicked, closing menu");
    setIsOpen(false);
  };

  return (
    <header className="bg-black relative z-50 mt-6">
      <div className="max-w-[1335px] h-[95px] mx-auto px-4 font-poppins flex items-center w-full">
        {/* Left Column: Logo */}
        <div className="flex-1 flex items-center gap-2 ">
          <Link href="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[100px] h-[70px] cursor-pointer object-contain "
            />
          </Link>
        </div>

        {/* Right Column: Desktop Navigation */}
        <div className="flex-1 flex justify-end items-center gap-8 pr-5">
          <nav className="hidden md:flex items-center gap-6 flex-1">
            {/* Nav links aligned left */}
            <div className="flex gap-10 text-[16px] text-[#FFFFFF] font-poppins">
              <Link href="/" className={navLink("/")}>Home</Link>
              <Link href="/support" className={navLink("/support")}>Support</Link>
              <Link href="/become-partner" className={navLink("/become-partner")}>Become a Partner</Link>
            </div>

            {/* Login button aligned right */}
            <div className="ml-auto">
              <Link 
                href="https://login.ojusone.com/Home/Login" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GradientButton>Login</GradientButton>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-auto ">
            <button
              onClick={handleMenuToggle}
              className="text-white focus:outline-none z-50"
              type="button"
            >
              {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm font-poppins border-t border-gray-800 absolute top-full left-0 right-0 w-full">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
            <Link href="/" className={navLink("/")} onClick={handleLinkClick}>
              Home
            </Link>
            <Link href="/support" className={navLink("/support")} onClick={handleLinkClick}>
              Support
            </Link>
            <Link href="/become-partner" className={navLink("/become-partner")} onClick={handleLinkClick}>
              Become a Partner
            </Link>
            <Link 
              href="https://login.ojusone.com/Home/Login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full mt-2"
              onClick={handleLinkClick}
            >
              <GradientButton className="w-full">Login</GradientButton>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}