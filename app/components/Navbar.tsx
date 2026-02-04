"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../ThemeContext";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-md border-b transition-colors duration-300
      ${isDark ? "bg-slate-950/80 border-slate-800" : "bg-white/80 border-slate-200"}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl tracking-tighter cursor-pointer"
        >
          <img
            src="/asset/logo.svg"
            alt="Logo"
            className={`h-8 w-auto ${isDark ? "brightness-0 invert" : ""}`}
          />
        </Link>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div
          className={`hidden md:flex items-center gap-8 text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-600"}`}
        >
          <Link href="/" className="hover:text-brand transition-colors">
            Home
          </Link>
          <Link href="/projects" className="hover:text-brand transition-colors">
            Portfolio
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors mr-4 ${isDark ? "hover:bg-slate-800 text-yellow-400" : "hover:bg-slate-100 text-slate-600"}`}
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button className="px-5 py-2 bg-brand text-white rounded-full hover:bg-teal-700 transition-colors shadow-lg shadow-brand/20">
            Contact Us
          </button>
        </div>

        {/* MOBILE TOGGLES (Visible on Mobile) */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`${isDark ? "text-yellow-400" : "text-slate-600"}`}
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={isDark ? "text-white" : "text-slate-900"}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN (This was missing!) --- */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden absolute top-16 left-0 w-full border-b shadow-2xl p-6 flex flex-col gap-4
          ${isDark ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-900"}`}
        >
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium hover:text-brand py-2 border-b border-dashed border-gray-700/20"
          >
            Home
          </Link>
          <Link
            href="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium hover:text-brand py-2 border-b border-dashed border-gray-700/20"
          >
            Our Work
          </Link>

          {/* Mobile Contact Button */}
          <button className="w-full mt-2 px-5 py-3 bg-brand text-white rounded-lg font-bold hover:bg-teal-700 transition-colors">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
