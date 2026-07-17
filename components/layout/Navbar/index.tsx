"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logoUrl } from "@/constants/assets";
import { bsNavItems, bsNavCTA } from "@/constants/landing";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Header */}
      <header className="flex items-center px-[20px] pt-6 max-w-7xl mx-auto w-full relative z-50">
        <a href="/" className="shrink-0 flex items-center gap-3 anim-rise" style={{ animationDelay: "480ms" }}>
          <img src={logoUrl} alt="Beyond Studio Logo" width={40} height={40} />
          <span className="font-display text-xl font-bold text-foreground">Beyond Studio</span>
        </a>
        <nav className="hidden md:flex items-center gap-[30px] ml-[80px]">
          {bsNavItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] text-foreground/70 hover:text-foreground transition-colors anim-rise"
              style={{ animationDelay: `${600 + i * 60}ms` }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto hidden md:flex items-center gap-4 anim-pop" style={{ animationDelay: "900ms" }}>
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground/10 transition-all duration-300 cursor-pointer"
          >
            {theme === "dark" ? (
              <>
                <Moon className="size-4 text-amber-300" />
                <span>Night mode</span>
              </>
            ) : (
              <>
                <Sun className="size-4 text-amber-500" />
                <span>Day mode</span>
              </>
            )}
          </button>

          <Button variant="primary" href={bsNavCTA.href}>
            {bsNavCTA.label}
          </Button>
        </div>
        {/* Mobile burger & toggle */}
        <div className="ml-auto md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 text-foreground rounded-full border border-foreground/15 bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer"
          >
            {theme === "dark" ? <Moon className="size-5 text-amber-300" /> : <Sun className="size-5 text-amber-500" />}
          </button>

          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-1.5 p-2 anim-pop cursor-pointer"
            style={{ animationDelay: "600ms" }}
          >
            <span className="block w-6 h-0.5 bg-foreground" />
            <span className="block w-6 h-0.5 bg-foreground" />
            <span className="block w-6 h-0.5 bg-foreground" />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-background md:hidden flex flex-col p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={logoUrl} alt="Logo" width={40} height={40} />
                <span className="font-display text-xl font-bold text-foreground">Beyond Studio</span>
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="p-2 text-foreground text-3xl leading-none cursor-pointer"
              >
                ×
              </button>
            </div>
            <nav className="flex flex-col gap-6 mt-12">
              {bsNavItems.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-medium text-foreground/85 hover:text-foreground transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-auto flex flex-col gap-4"
            >
              <button
                type="button"
                onClick={toggleTheme}
                className="w-full py-3 px-4 rounded-xl border border-foreground/15 bg-foreground/5 text-foreground flex items-center justify-center gap-2 font-medium"
              >
                {theme === "dark" ? (
                  <>
                    <Moon className="size-5 text-amber-300" />
                    <span>Switch to Day Mode</span>
                  </>
                ) : (
                  <>
                    <Sun className="size-5 text-amber-500" />
                    <span>Switch to Night Mode</span>
                  </>
                )}
              </button>

              <Button
                variant="primary"
                className="w-full py-4 text-base"
                href={bsNavCTA.href}
                onClick={() => setMenuOpen(false)}
              >
                {bsNavCTA.label}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
