import * as React from "react";
import { ShieldCheck, FileEdit, BarChart3, User, Eye } from "lucide-react";
import { getRoleConfig } from "@/config/roles";
import { cn } from "@/lib/utils";

export interface RoleBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  role: string;
  showIcon?: boolean;
}

function getRoleIcon(roleName: string) {
  const normalized = roleName.toLowerCase();
  const iconClass = "h-3 w-3 shrink-0";
  if (normalized.includes("admin")) return <ShieldCheck className={iconClass} />;
  if (normalized.includes("edit")) return <FileEdit className={iconClass} />;
  if (normalized.includes("analy")) return <BarChart3 className={iconClass} />;
  if (normalized.includes("view")) return <Eye className={iconClass} />;
  return <User className={iconClass} />;
}

export function RoleBadge({
  role,
  showIcon = true,
  className,
  ...props
}: RoleBadgeProps) {
  const config = getRoleConfig(role);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[5px] px-2 py-0.5 text-[11px] font-mono font-medium tracking-[0.03em] select-none border",
        config.badgeClass,
        className
      )}
      {...props}
    >
      {showIcon && getRoleIcon(role)}
      <span>{config.label}</span>
    </div>
  );
}
