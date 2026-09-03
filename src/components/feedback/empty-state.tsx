import * as React from "react";
import {
  FolderOpen,
  SearchX,
  FilterX,
  AlertCircle,
  FileQuestion,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type EmptyStatePreset =
  | "no-data"
  | "no-results"
  | "filter-empty"
  | "error"
  | "custom";

export interface EmptyStateProps {
  preset?: EmptyStatePreset;
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const PRESET_ICONS: Record<EmptyStatePreset, React.ReactNode> = {
  "no-data": <FolderOpen className="h-5 w-5" />,
  "no-results": <SearchX className="h-5 w-5" />,
  "filter-empty": <FilterX className="h-5 w-5" />,
  error: <AlertCircle className="h-5 w-5 text-rose" />,
  custom: <FileQuestion className="h-5 w-5" />,
};

export function EmptyState({
  preset = "no-data",
  icon,
  title,
  description,
  action,
  secondaryAction,
  size = "md",
  className,
}: EmptyStateProps) {
  const resolvedIcon = icon ?? PRESET_ICONS[preset] ?? PRESET_ICONS["no-data"];

  const sizeClasses = {
    sm: "p-6",
    md: "p-10",
    lg: "p-16 sm:p-20",
  };

  const iconContainerSizes = {
    sm: "h-10 w-10 mb-2.5",
    md: "h-12 w-12 mb-3.5",
    lg: "h-16 w-16 mb-5",
  };

  const titleSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border border-dashed border-parchment bg-paper/60 text-center transition-all duration-200",
        sizeClasses[size],
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-full bg-sand/80 text-smoke border border-parchment/60 shadow-xs",
          iconContainerSizes[size]
        )}
      >
        {resolvedIcon}
      </div>

      <h3
        className={cn(
          "font-serif font-normal text-ink tracking-tight",
          titleSizes[size]
        )}
      >
        {title}
      </h3>

      <p className="mt-1.5 text-xs text-smoke max-w-sm leading-relaxed">
        {description}
      </p>

      {(action || secondaryAction) && (
        <div className="mt-5 flex items-center justify-center gap-2.5 flex-wrap">
          {action}
          {secondaryAction}
        </div>
      )}
    </div>
  );
}
