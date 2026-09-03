"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  title: string;
  icon: LucideIcon;
  badge?: string | number;
  exact?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
}

export function NavItem({
  href,
  title,
  icon: Icon,
  badge,
  exact = false,
  collapsed = false,
  onClick,
}: NavItemProps) {
  const pathname = usePathname();
  const isActive = exact
    ? pathname === href
    : pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group flex items-center gap-2.5 rounded-full px-3 py-1.5 text-[13px] font-normal transition-colors select-none tracking-[0.035em]",
        isActive
          ? "bg-sand text-ink font-medium"
          : "text-smoke hover:text-ink hover:bg-sand/50",
        collapsed && "justify-center px-2"
      )}
      title={collapsed ? title : undefined}
    >
      <Icon
        className={cn(
          "h-4 w-4 shrink-0 transition-colors",
          isActive ? "text-ink" : "text-smoke group-hover:text-ink"
        )}
      />
      {!collapsed && (
        <span className="flex-1 truncate">{title}</span>
      )}
      {!collapsed && badge !== undefined && (
        <span
          className={cn(
            "ml-auto text-[10px] px-1.5 py-0.5 rounded-full",
            isActive ? "bg-paper text-ink" : "bg-sand text-smoke"
          )}
        >
          {badge}
        </span>
      )}
    </Link>
  );
}
