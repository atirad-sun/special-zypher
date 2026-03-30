"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center cursor-pointer">
          <img src="/asset/logo.svg" alt="ONE EIGHT X" className="h-7 w-auto" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-7 text-sm font-medium text-ink-light">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/projects", label: "Our Work" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              className="px-4 py-2 text-sm font-medium border border-ink text-ink rounded hover:bg-ink hover:text-white transition-all cursor-pointer"
            >
              Start Free Trial
            </a>
            <a
              href="/#contact"
              className="px-4 py-2 text-sm font-medium bg-cta text-white rounded hover:bg-cta-hover transition-all cursor-pointer"
            >
              Get A Demo
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
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Our Work" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium py-3 px-4 text-ink-light hover:text-ink hover:bg-gray-50 rounded transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center px-5 py-3 border border-ink text-ink rounded font-medium hover:bg-ink hover:text-white transition-colors cursor-pointer"
            >
              Start Free Trial
            </a>
            <a
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center px-5 py-3 bg-cta text-white rounded font-medium hover:bg-cta-hover transition-colors cursor-pointer"
            >
              Get A Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
