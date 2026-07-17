import type * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "", ...props }: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center bg-surface border border-border text-muted-foreground rounded-full px-3 py-1 text-xs font-medium ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Badge;
