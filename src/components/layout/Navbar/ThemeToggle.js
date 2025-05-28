'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isLight = theme === 'light';

  return (
    <button
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      className="p-2 rounded-lg  transition relative cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isLight ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1.5 }}
            exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          >
            <Sun className=""  />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 180, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1.5 }}
            exit={{ opacity: 0, rotate: -180, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          >
            <Moon className="" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
