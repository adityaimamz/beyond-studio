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

  let baseClass = "flow-hover rounded-lg font-medium transition-[transform,background-color,color] duration-500 cursor-pointer inline-flex items-center justify-center gap-2 py-2.5 px-5 text-sm active:scale-95 hover:scale-105";

  if (resolvedVariant === "primary") {
    baseClass += ` bg-primary text-primary-foreground hover:text-primary before:bg-primary-foreground`;
  } else if (resolvedVariant === "outline") {
    baseClass += ` border border-border bg-transparent text-foreground hover:text-background before:bg-foreground`;
  } else if (resolvedVariant === "ghost") {
    baseClass += ` bg-transparent text-foreground/70 hover:text-foreground before:bg-surface`;
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
