"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className={`flex flex-col gap-3 w-full ${className}`}>
      {items.map((item, index) => {
        const isOpen = !!openItems[index];

        return (
          <div
            key={index}
            className="border border-border rounded-xl bg-surface overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-5 text-left font-medium text-foreground hover:text-foreground/90 focus:outline-none cursor-pointer"
            >
              <span className="text-lg">{item.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="text-muted-foreground shrink-0 ml-4"
              >
                <ChevronDown className="size-5" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 pt-0 text-muted-foreground text-sm leading-relaxed border-t border-border/40">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
