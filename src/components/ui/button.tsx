import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const baseStyles =
      "inline-flex items-center justify-center font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink disabled:pointer-events-none disabled:opacity-40 select-none rounded-full cursor-pointer";

    const variants = {
      // Primary: #18181b fill, white text, zero shadow
      primary: "bg-charcoal text-paper hover:bg-ink active:scale-[0.99]",
      // Secondary: warm paper fill with hairline border
      secondary: "bg-paper text-ink border border-parchment hover:bg-sand/60 active:scale-[0.99]",
      // Outline: transparent fill with hairline parchment border
      outline: "bg-transparent text-ink border border-parchment hover:bg-paper active:scale-[0.99]",
      // Ghost: transparent with hover subtle sand
      ghost: "bg-transparent text-ink hover:bg-sand/70 active:bg-sand",
      // Destructive: subtle red accent
      destructive: "bg-rose text-paper hover:bg-rose/90 active:scale-[0.99]",
    };

    const sizes = {
      sm: "h-7 px-3 text-[12px] tracking-[0.05em]",
      md: "h-8 px-4 text-[13px] tracking-[0.04em]",
      lg: "h-10 px-6 text-[14px] tracking-[0.04em]",
      icon: "h-8 w-8 p-0 shrink-0",
    };

    return (
      <Comp
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";
