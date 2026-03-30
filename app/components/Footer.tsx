"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footer text-footer-text">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Platform */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Platform</h4>
            <ul className="space-y-3">
              {["Web Development", "Mobile Apps", "Cloud Infrastructure", "AI & Machine Learning"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-sm hover:text-white transition-colors cursor-default">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Solutions</h4>
            <ul className="space-y-3">
              {["FinTech", "Blockchain & Web3", "RegTech & DID", "AI & Data Labeling"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-sm hover:text-white transition-colors cursor-default">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: "Our Work", href: "/projects" },
                { label: "About Us", href: "/about" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@oneeightx.com" className="text-sm hover:text-white transition-colors">
                  contact@oneeightx.com
                </a>
              </li>
              <li>
                <a href="tel:+66874065389" className="text-sm hover:text-white transition-colors">
                  +66 87-406-5389
                </a>
              </li>
              <li>
                <span className="text-sm">Bangkok, Thailand</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="/#contact"
                className="inline-block text-center px-4 py-2 bg-cta text-white text-sm font-medium rounded hover:bg-cta-hover transition-colors cursor-pointer"
              >
                Get A Demo
              </a>
              <a
                href="/#contact"
                className="inline-block text-center px-4 py-2 border border-footer-text text-footer-text text-sm font-medium rounded hover:border-white hover:text-white transition-colors cursor-pointer"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with large logo */}
      <div className="border-t border-border-dark">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/">
            <img
              src="/asset/logo.svg"
              alt="ONE EIGHT X"
              className="h-10 w-auto brightness-0 invert opacity-80"
            />
          </Link>
          <p className="text-xs text-footer-text">
            © {new Date().getFullYear()} ONE EIGHT X COMPANY LIMITED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
