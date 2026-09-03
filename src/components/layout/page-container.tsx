import * as React from "react";
import { cn } from "@/lib/utils";

export interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function PageContainer({ className, children, ...props }: PageContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1400px] space-y-6 animate-in fade-in-50 duration-200", className)}
      {...props}
    >
      {children}
    </div>
  );
}
