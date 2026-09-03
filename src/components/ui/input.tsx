import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  pill?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", pill = false, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-8 w-full border border-parchment bg-paper px-3 py-1 text-[13px] text-ink placeholder:text-smoke focus-visible:outline-none focus-visible:border-ink focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          pill ? "rounded-full px-4" : "rounded-lg",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
