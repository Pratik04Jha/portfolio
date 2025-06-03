"use client";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.theme = newMode ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-5 w-10 items-center rounded-full transition-colors cursor-pointer"
      aria-label="Toggle dark mode"
    >
      {/* Track */}
      <span
        className={`inline-block h-5 w-10 rounded-full transition-colors ${
          darkMode ? "bg-indigo-800" : "bg-zinc-800"
        }`}
      ></span>

      {/* Thumb (circle) */}
      <span
        className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-md transform transition-transform ${
          darkMode ? "translate-x-5" : "translate-x-0"
        }`}
      ></span>
    </button>
  );
};

export default ThemeToggle;
