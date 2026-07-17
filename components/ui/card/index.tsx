import type * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`bg-surface-elevated border border-border rounded-2xl p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
