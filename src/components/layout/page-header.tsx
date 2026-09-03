import * as React from "react";
import { cn } from "@/lib/utils";

export interface PageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  breadcrumbs?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  action,
  breadcrumbs,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between", className)}>
      <div className="space-y-1">
        {breadcrumbs && <div className="mb-2">{breadcrumbs}</div>}
        <h1 className="text-[24px] font-normal leading-tight text-ink tracking-[-0.025em] font-serif">
          {title}
        </h1>
        {description && (
          <p className="text-[13px] text-smoke tracking-[0.035em]">
            {description}
          </p>
        )}
      </div>
      {action && <div className="mt-3 sm:mt-0 flex flex-wrap items-center gap-2">{action}</div>}
    </div>
  );
}
