"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Our Work" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50 bg-white/90 glass border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center cursor-pointer">
          <img src="/asset/logo.svg" alt="ONE EIGHT X" className="h-7 w-auto" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-ink text-white"
                      : "text-ink-light hover:text-ink hover:bg-ink/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              className="btn-spring px-4 py-2 text-sm font-medium border border-ink text-ink rounded-full hover:bg-ink hover:text-white cursor-pointer"
            >
              Talk to Us
            </a>
            <a
              href="/#contact"
              className="btn-spring px-4 py-2 text-sm font-medium bg-cta text-white rounded-full hover:bg-cta-hover cursor-pointer"
            >
              Start Your Project
            </a>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-1 text-ink"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-border p-6 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium py-3 px-4 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-ink text-white"
                    : "text-ink-light hover:text-ink hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-spring w-full text-center px-5 py-3 border border-ink text-ink rounded-full font-medium hover:bg-ink hover:text-white cursor-pointer"
            >
              Talk to Us
            </a>
            <a
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-spring w-full text-center px-5 py-3 bg-cta text-white rounded-full font-medium hover:bg-cta-hover cursor-pointer"
            >
              Start Your Project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
