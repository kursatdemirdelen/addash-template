"use client";

import * as React from "react";
import { Menu, Search, Bell } from "lucide-react";
import { useAppStore } from "@/store/app-store";
import { useTranslation } from "@/hooks/use-translation";
import { UserMenu } from "@/components/navigation/user-menu";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { CommandMenu } from "@/components/layout/command-menu";
import { ThemeSwitcher } from "@/components/layout/theme-switcher";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

export function Header() {
  const { setMobileSidebarOpen } = useAppStore();
  const { t } = useTranslation();
  const [commandOpen, setCommandOpen] = React.useState(false);

  // Global keyboard listener for ⌘K and /
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName))) {
        e.preventDefault();
        setCommandOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-20 flex h-14 w-full items-center justify-between border-b border-parchment bg-parchment/90 backdrop-blur-xs px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileSidebarOpen(true)}
            className="lg:hidden p-1.5 rounded-full text-smoke hover:text-ink hover:bg-sand transition-colors"
            aria-label="Open mobile navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Breadcrumbs />
        </div>

        <div className="flex items-center gap-2.5">
          {/* Quick Search Trigger Pill */}
          <button
            type="button"
            onClick={() => setCommandOpen(true)}
            className="relative hidden sm:flex items-center justify-between h-8 w-64 rounded-full border border-parchment bg-paper pl-3 pr-2 text-[12px] text-smoke hover:border-ink hover:text-ink transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <Search className="h-3.5 w-3.5 text-smoke group-hover:text-ink transition-colors" />
              <span className="truncate">{t.common.quickJump}</span>
            </div>
            <kbd className="inline-flex items-center gap-0.5 rounded-full border border-parchment bg-sand px-2 py-0.5 text-[10px] font-mono text-smoke">
              <span className="text-[11px]">⌘</span>K
            </kbd>
          </button>

          {/* Notifications */}
          <button
            type="button"
            className="relative flex h-8 w-8 items-center justify-center rounded-full border border-parchment bg-paper text-smoke hover:text-ink hover:bg-sand/60 transition-colors"
            aria-label="Notifications"
          >
            <Bell className="h-3.5 w-3.5" />
            <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-moss" />
          </button>

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Theme Switcher */}
          <ThemeSwitcher />

          {/* User Menu */}
          <UserMenu />
        </div>
      </header>

      {/* Command Palette Modal */}
      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
    </>
  );
}
