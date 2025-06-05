"use client";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex h-5 w-10 items-center rounded-full transition-colors cursor-pointer"
      aria-label="Toggle dark mode"
    >
      {/* Track */}
      <span
        className={`inline-block h-5 w-10 rounded-full transition-colors ${
          theme === "dark" ? "bg-indigo-800" : "bg-zinc-800"
        }`}
      ></span>
      <span
        className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-md transform transition-transform ${
          theme === "dark" ? "translate-x-5" : "translate-x-0"
        }`}
      ></span>
    </button>
  );
};

export default ThemeToggle;