import type * as React from "react";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: (string | SelectOption)[];
  error?: string;
  className?: string;
}

export function Select({ label, options, error, className = "", id, ...props }: SelectProps) {
  const selectId = id || (label ? `select-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-foreground/80">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={`w-full px-4 py-2.5 border border-border rounded-lg bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm appearance-none bg-no-repeat bg-[right_1rem_center] ${
          error ? "border-red-500 focus:ring-red-500/40 focus:border-red-500" : ""
        } ${className}`}
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
          backgroundSize: "1.25rem",
        }}
        {...props}
      >
        {options.map((opt, i) => {
          const val = typeof opt === "string" ? opt : opt.value;
          const lbl = typeof opt === "string" ? opt : opt.label;
          return (
            <option key={i} value={val} className="bg-surface text-foreground">
              {lbl}
            </option>
          );
        })}
      </select>
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  );
}

export default Select;
