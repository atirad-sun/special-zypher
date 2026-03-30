"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../ThemeContext";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b
      ${
        scrolled
          ? isDark
            ? "bg-surface-dark/90 backdrop-blur-xl border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-white/80 backdrop-blur-xl border-slate-200/80 shadow-lg shadow-slate-200/40"
          : isDark
            ? "bg-transparent border-transparent"
            : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold text-xl tracking-tighter cursor-pointer"
        >
          <img
            src="/asset/logo.svg"
            alt="ONE EIGHT X Logo"
            className={`h-8 w-auto transition-all ${isDark ? "brightness-0 invert" : ""}`}
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Our Work" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
              ${
                isDark
                  ? "text-slate-400 hover:text-white hover:bg-white/[0.06]"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className={`w-px h-6 mx-3 ${isDark ? "bg-white/10" : "bg-slate-200"}`} />

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-lg transition-all duration-200
            ${isDark ? "hover:bg-white/[0.06] text-amber-400" : "hover:bg-slate-100 text-slate-500"}`}
          >
            {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
          </button>

          <Link
            href="/#contact"
            className="ml-3 px-5 py-2 bg-brand text-white rounded-lg text-sm font-semibold hover:bg-brand-light transition-all duration-200 shadow-md shadow-brand/20 hover:shadow-lg hover:shadow-brand/30 cursor-pointer"
          >
            Contact Us
          </Link>
        </div>

        {/* MOBILE TOGGLES */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={isDark ? "text-amber-400" : "text-slate-500"}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className={`p-1 rounded-lg transition-colors ${isDark ? "text-white hover:bg-white/10" : "text-slate-900 hover:bg-slate-100"}`}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden absolute top-16 left-0 w-full border-b p-6 flex flex-col gap-1 backdrop-blur-xl
          ${
            isDark
              ? "bg-surface-dark/95 border-white/[0.06]"
              : "bg-white/95 border-slate-200"
          }`}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Our Work" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-base font-medium py-3 px-4 rounded-lg transition-colors
              ${isDark ? "text-slate-300 hover:text-white hover:bg-white/[0.06]" : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-3 w-full text-center px-5 py-3 bg-brand text-white rounded-lg font-semibold hover:bg-brand-light transition-colors cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
