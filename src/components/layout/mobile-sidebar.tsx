"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, SunMedium } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getNavigationConfig } from "@/config/navigation";
import { NavItem } from "@/components/navigation/nav-item";
import { useAppStore } from "@/store/app-store";
import { useTranslation } from "@/hooks/use-translation";

export function MobileSidebar() {
  const { mobileSidebarOpen, setMobileSidebarOpen } = useAppStore();
  const { t } = useTranslation();
  const pathname = usePathname();
  const navSections = getNavigationConfig(t);

  // Close drawer on route navigation
  React.useEffect(() => {
    setMobileSidebarOpen(false);
  }, [pathname, setMobileSidebarOpen]);

  if (!mobileSidebarOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/40 backdrop-blur-[2px] transition-opacity"
        onClick={() => setMobileSidebarOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-72 bg-parchment border-r border-parchment flex flex-col p-4 z-50 animate-in slide-in-from-left duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-parchment">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-charcoal text-paper">
              <SunMedium className="h-4 w-4" />
            </div>
            <span className="font-serif text-lg font-medium text-ink">
              {siteConfig.name}
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileSidebarOpen(false)}
            className="p-1 rounded-full text-smoke hover:text-ink hover:bg-sand transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-6">
          {navSections.map((section) => (
            <div key={section.label} className="space-y-1">
              <p className="px-3 text-[10px] font-medium uppercase tracking-[0.08em] text-smoke">
                {section.label}
              </p>
              <div className="space-y-0.5">
                {section.items.map((item) => (
                  <NavItem
                    key={item.href}
                    href={item.href}
                    title={item.title}
                    icon={item.icon}
                    badge={item.badge}
                    onClick={() => setMobileSidebarOpen(false)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Drawer Author Footer */}
        <div className="pt-3 border-t border-parchment flex items-center justify-between text-[11px] font-mono text-smoke">
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
      </div>
    </div>
  );
}
