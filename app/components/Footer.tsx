"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTheme } from "../ThemeContext";

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer
      className={`relative overflow-hidden transition-colors duration-300
      ${isDark ? "bg-surface-dark" : "bg-slate-50"}`}
    >
      {/* Top gradient accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <img
                src="/asset/logo.svg"
                alt="ONE EIGHT X"
                className={`h-8 w-auto ${isDark ? "brightness-0 invert" : ""}`}
              />
            </Link>
            <p className={`text-sm leading-relaxed ${isDark ? "text-slate-500" : "text-slate-500"}`}>
              Building digital experiences that matter. Enterprise-grade solutions with startup speed.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className={`text-xs font-semibold uppercase tracking-widest mb-4 ${isDark ? "text-slate-400" : "text-slate-900"}`}>
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Our Work" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${isDark ? "text-slate-500 hover:text-brand-light" : "text-slate-500 hover:text-brand"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`text-xs font-semibold uppercase tracking-widest mb-4 ${isDark ? "text-slate-400" : "text-slate-900"}`}>
              Services
            </h4>
            <ul className="space-y-3">
              {["Web Development", "Mobile Apps", "Cloud Infrastructure", "AI & ML"].map(
                (service) => (
                  <li key={service}>
                    <span className={`text-sm ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                      {service}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`text-xs font-semibold uppercase tracking-widest mb-4 ${isDark ? "text-slate-400" : "text-slate-900"}`}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@oneeightx.com"
                  className={`text-sm flex items-center gap-2 transition-colors ${isDark ? "text-slate-500 hover:text-brand-light" : "text-slate-500 hover:text-brand"}`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  contact@oneeightx.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+66874065389"
                  className={`text-sm flex items-center gap-2 transition-colors ${isDark ? "text-slate-500 hover:text-brand-light" : "text-slate-500 hover:text-brand"}`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  +66 87-406-5389
                </a>
              </li>
              <li>
                <span className={`text-sm flex items-center gap-2 ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                  <MapPin className="w-3.5 h-3.5" />
                  Bangkok, Thailand
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`mt-14 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4
          ${isDark ? "border-white/[0.06]" : "border-slate-200"}`}>
          <p className={`text-xs ${isDark ? "text-slate-600" : "text-slate-400"}`}>
            © {new Date().getFullYear()} ONE EIGHT X COMPANY LIMITED. All rights reserved.
          </p>
          <div className={`flex items-center gap-1 text-xs ${isDark ? "text-slate-600" : "text-slate-400"}`}>
            <span>Crafted in</span>
            <span className="text-brand">Bangkok</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
