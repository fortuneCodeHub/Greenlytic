"use client";

import { useState, useEffect } from "react";
import { Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header({ post }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
    { name: "Terms", href: "/terms-of-use" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`w-full z-50 transition-all ${
          isSticky
            ? "sticky top-0 bg-white backdrop-blur-lg shadow-lg shadow-black/40 py-2"
            : "py-4 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* 
            #243D31- hover green 
            #2F4F3E- green
          */}
          {/* Logo */}
          <Link href="/" className="relative lg:text-5xl md:text-4xl text-2xl font-extrabold">
            <span className="text-[#2F4F3E] tracking-wide">Greenlytic</span>

            {/* Subtle accent stroke */}
            {/* <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2F4F3E]/70"></span> */}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-800 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[#2F4F3E] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right CTA + Menu */}
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/peter-mark-98b429398?trk=contact-info" className="p-2 bg-[#2F4F3E] shadow-sm rounded-full hover:shadow-md transition">
              <Linkedin className="h-5 w-5 text-white" />
            </a>
            <Link
              href={post ? `/post/${post?.slug}` : '/'}
              className="hidden sm:inline-block bg-[#2F4F3E] text-white text-sm px-4 py-2 rounded-md hover:bg-[#243D31] transition-colors shadow-md shadow-blue-[#243D31]"
            >
              Latest Blog
            </Link>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 hover:text-[#2F4F3E] transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href={post ? `/post/${post?.slug}` : '/'}
                className="bg-[#2F4F3E] text-white text-center px-4 py-2 rounded-md hover:bg-[#243D31] shadow-md shadow-blue-[#243D31]"
                onClick={() => setIsOpen(false)}
              >
                Latest Blog
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
