"use client";

import Link from "next/link";
import { PanelLeftClose, PanelLeft } from "lucide-react";
import { getNavigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { BrandMark } from "@/components/layout/brand-mark";
import { NavItem } from "@/components/navigation/nav-item";
import { UserMenu } from "@/components/navigation/user-menu";
import { useAppStore } from "@/store/app-store";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

export function Sidebar({ className }: { className?: string }) {
  const { sidebarCollapsed, toggleSidebar } = useAppStore();
  const { t } = useTranslation();
  const navSections = getNavigationConfig(t);

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-30 flex flex-col bg-parchment border-r border-parchment transition-all duration-200",
        sidebarCollapsed ? "w-16" : "w-64",
        className
      )}
    >
      {/* Brand Header */}
      <div
        className={cn(
          "flex h-14 items-center border-b border-parchment",
          sidebarCollapsed ? "justify-center px-0" : "justify-between px-4"
        )}
      >
        <Link
          href="/dashboard"
          className="flex items-center gap-2.5 overflow-hidden shrink-0"
          title={siteConfig.name}
        >
          <BrandMark />
          {!sidebarCollapsed && (
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-[18px] font-medium tracking-tight text-ink leading-tight">
                {siteConfig.name}
              </span>
              <span className="text-[10px] text-smoke font-mono tracking-[0.04em] uppercase leading-none">
                v{siteConfig.version}
              </span>
            </div>
          )}
        </Link>
        {!sidebarCollapsed && (
          <button
            type="button"
            onClick={toggleSidebar}
            className="hidden lg:flex h-7 w-7 items-center justify-center rounded-full text-smoke hover:text-ink hover:bg-sand transition-colors cursor-pointer shrink-0"
            title="Collapse sidebar"
          >
            <PanelLeftClose className="h-4 w-4" />
          </button>
        )}
      </div>
      {sidebarCollapsed && (
        <div className="flex justify-center py-2 border-b border-parchment">
          <button
            type="button"
            onClick={toggleSidebar}
            className="hidden lg:flex h-7 w-7 items-center justify-center rounded-full text-smoke hover:text-ink hover:bg-sand transition-colors cursor-pointer"
            title="Expand sidebar"
          >
            <PanelLeft className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Nav Navigation Sections */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navSections.map((section) => (
          <div key={section.label} className="space-y-1">
            {!sidebarCollapsed && (
              <p className="px-3 text-[10px] font-medium uppercase tracking-[0.08em] text-smoke/90 mb-1.5 select-none">
                {section.label}
              </p>
            )}
            <div className="space-y-0.5">
              {section.items.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  title={item.title}
                  icon={item.icon}
                  badge={item.badge}
                  exact={item.href === "/dashboard"}
                  collapsed={sidebarCollapsed}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Rail: Profile + Author */}
      <div className="p-3 border-t border-parchment space-y-2">
        <UserMenu collapsed={sidebarCollapsed} />
        {!sidebarCollapsed ? (
          <div className="flex items-center justify-between px-2 text-[10px] font-mono text-smoke/70">
            <span>{t.sidebar.craftedBy}</span>
            <a
              href={siteConfig.author.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink hover:underline transition-colors inline-flex items-center gap-0.5"
            >
              ahmetkursat.com
              <span className="text-[9px]">↗</span>
            </a>
          </div>
        ) : (
          <a
            href={siteConfig.author.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center py-1 cursor-pointer"
            title={`Crafted by ${siteConfig.author.name} (ahmetkursat.com)`}
          >
            <span className="text-[10px] text-smoke/50 font-mono">ak</span>
          </a>
        )}
      </div>
    </aside>
  );
}
