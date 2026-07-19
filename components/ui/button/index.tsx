import type * as React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "white" | "blue" | "dark" | "none";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({ variant = "primary", href, className = "", children, ...props }: ButtonProps) {
  // Map old deprecated variant names to the closest new variants
  let resolvedVariant = variant;
  if (variant === "blue" || variant === "dark") {
    resolvedVariant = "primary";
  } else if (variant === "white") {
    resolvedVariant = "outline";
  }

  let baseClass = "rounded-lg font-medium transition-[transform,background-color,color] duration-[var(--duration-fast)] ease-[var(--ease-out)] cursor-pointer inline-flex items-center justify-center py-2.5 px-5 text-sm active:scale-[0.97]";

  if (resolvedVariant === "primary") {
    baseClass += " bg-primary text-primary-foreground hover:bg-primary-hover";
  } else if (resolvedVariant === "outline") {
    baseClass += " border border-border bg-transparent text-foreground hover:bg-surface";
  } else if (resolvedVariant === "ghost") {
    baseClass += " bg-transparent text-foreground/70 hover:text-foreground hover:bg-surface/50";
  } else if (resolvedVariant === "none") {
    baseClass = "";
  }

  const finalClassName = `${baseClass} ${className}`.trim();

  if (href) {
    const { type, ...linkProps } = props as any;
    return (
      <Link href={href} className={finalClassName} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
}

export default Button;
