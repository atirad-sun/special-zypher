"use client";

import React from "react";
import { useTheme } from "../ThemeContext";

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer
      className={`py-8 border-t text-center text-sm transition-colors duration-300
      ${isDark ? "bg-slate-950 border-slate-800 text-slate-600" : "bg-white border-slate-200 text-slate-500"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <p>
          © {new Date().getFullYear()} ONE EIGHT X COMPANY LIMITED. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
