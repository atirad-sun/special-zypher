"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the shape of our context
type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Default to true (Dark Mode)
  const [isDark, setIsDark] = useState(true);

  // Load preference from LocalStorage on startup
  useEffect(() => {
    // Check if we are in the browser
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("theme");
      if (saved) {
        setIsDark(saved === "dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // FIX: We render the Provider IMMEDIATELY, we do not wait for mount.
  // This ensures 'useTheme' always finds the provider.
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme easily
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}