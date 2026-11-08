"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  ChartNoAxesCombined,
  CheckSquare,
  MessageSquare,
  FolderOpen,
  FileText,
  Package,
  Building2,
  Users,
  ShieldCheck,
  Bell,
  CalendarDays,
  Settings,
  UserPlus,
  Plus,
  Search,
  ArrowRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Actions";
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  keywords?: string[];
}

const COMMAND_ITEMS: CommandItem[] = [
  // Navigation
  {
    id: "nav-dashboard",
    title: "Dashboard Overview",
    category: "Navigation",
    href: "/dashboard",
    icon: LayoutDashboard,
    keywords: ["home", "main", "stats", "kpi", "kontrol"],
  },
  {
    id: "nav-analytics",
    title: "Analytics & Performance",
    category: "Navigation",
    href: "/analytics",
    icon: ChartNoAxesCombined,
    keywords: ["charts", "reports", "metrics", "analitik", "rapor"],
  },
  {
    id: "nav-tasks",
    title: "Tasks & Kanban Board",
    category: "Navigation",
    href: "/tasks",
    icon: CheckSquare,
    keywords: ["todo", "kanban", "projects", "görev", "işler"],
  },
  {
    id: "nav-messages",
    title: "Messages & Inbox",
    category: "Navigation",
    href: "/messages",
    icon: MessageSquare,
    keywords: ["mail", "chat", "inbox", "mesaj"],
  },
  {
    id: "nav-files",
    title: "Files & Cloud Storage",
    category: "Navigation",
    href: "/files",
    icon: FolderOpen,
    keywords: ["drive", "docs", "storage", "dosya", "depo"],
  },
  {
    id: "nav-posts",
    title: "Posts & Content (CMS)",
    category: "Navigation",
    href: "/posts",
    icon: FileText,
    keywords: ["blog", "articles", "cms", "yazı", "içerik"],
  },
  {
    id: "nav-products",
    title: "Products Catalog",
    category: "Navigation",
    href: "/products",
    icon: Package,
    keywords: ["inventory", "items", "katalog", "ürün"],
  },
  {
    id: "nav-customers",
    title: "Customers & CRM Accounts",
    category: "Navigation",
    href: "/customers",
    icon: Building2,
    keywords: ["clients", "crm", "contacts", "müşteri"],
  },
  {
    id: "nav-users",
    title: "Team & Member Roster",
    category: "Navigation",
    href: "/users",
    icon: Users,
    keywords: ["members", "staff", "ekip", "kullanıcı"],
  },
  {
    id: "nav-roles",
    title: "Roles & Permissions Matrix",
    category: "Navigation",
    href: "/roles",
    icon: ShieldCheck,
    keywords: ["rbac", "security", "clearance", "yetki", "rol"],
  },
  {
    id: "nav-notifications",
    title: "Notifications Center",
    category: "Navigation",
    href: "/notifications",
    icon: Bell,
    keywords: ["alerts", "updates", "bildirim"],
  },
  {
    id: "nav-calendar",
    title: "Calendar & Events",
    category: "Navigation",
    href: "/calendar",
    icon: CalendarDays,
    keywords: ["schedule", "meetings", "events", "takvim", "etkinlik"],
  },
  {
    id: "nav-settings",
    title: "System Settings",
    category: "Navigation",
    href: "/settings",
    icon: Settings,
    keywords: ["preferences", "config", "account", "ayar"],
  },
  // Quick Actions
  {
    id: "act-invite",
    title: "Invite New Team Member",
    category: "Actions",
    href: "/users/new",
    icon: UserPlus,
    keywords: ["add user", "davet", "yeni üye"],
  },
  {
    id: "act-new-task",
    title: "Create New Task",
    category: "Actions",
    href: "/tasks",
    icon: Plus,
    keywords: ["add task", "yeni görev"],
  },
  {
    id: "act-new-post",
    title: "Write New Post",
    category: "Actions",
    href: "/posts",
    icon: FileText,
    keywords: ["draft", "yazı yaz"],
  },
];

export function CommandMenu({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const { t } = useTranslation();
  const [query, setQuery] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Focus input when opened
  React.useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIndex(0);
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const filteredItems = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COMMAND_ITEMS;
    return COMMAND_ITEMS.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchKeywords = item.keywords?.some((k) => k.toLowerCase().includes(q));
      return matchTitle || matchKeywords;
    });
  }, [query]);

  // Keep selected index in bounds
  React.useEffect(() => {
    setSelectedIndex(0);
  }, [filteredItems.length]);

  const handleSelect = React.useCallback(
    (item: CommandItem) => {
      onOpenChange(false);
      setQuery("");
      router.push(item.href);
    },
    [onOpenChange, router]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(filteredItems.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev <= 0 ? Math.max(filteredItems.length - 1, 0) : prev - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex]);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl p-0 overflow-hidden border border-parchment bg-paper gap-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Quick Command Search</DialogTitle>
        </DialogHeader>

        {/* Search input bar */}
        <div className="flex items-center px-4 border-b border-parchment bg-paper">
          <Search className="h-4 w-4 text-smoke shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t.common.quickJump}
            className="h-12 w-full bg-transparent text-sm text-ink placeholder:text-smoke focus:outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center rounded border border-parchment bg-sand px-1.5 py-0.5 text-[10px] font-mono text-smoke select-none">
            ESC
          </kbd>
        </div>

        {/* Results list */}
        <div className="max-h-80 overflow-y-auto p-1.5 space-y-0.5">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs text-ink transition-colors cursor-pointer text-left group",
                    isSelected ? "bg-sand" : "hover:bg-sand/60"
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={cn(
                        "flex h-6 w-6 items-center justify-center rounded-md border shrink-0 transition-colors",
                        isSelected
                          ? "bg-paper text-ink border-parchment"
                          : "bg-sand/60 text-smoke border-parchment/60 group-hover:text-ink"
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-medium truncate">{item.title}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-smoke shrink-0">
                    <span className="px-1.5 py-0.5 rounded-full bg-sand/60 border border-parchment/60">
                      {item.category}
                    </span>
                    <ArrowRight
                      className={cn(
                        "h-3 w-3 transition-opacity",
                        isSelected ? "opacity-100 text-ink" : "opacity-0"
                      )}
                    />
                  </div>
                </button>
              );
            })
          ) : (
            <div className="py-10 text-center text-xs text-smoke">
              No results found for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>

        {/* Footer shortcuts bar */}
        <div className="flex items-center justify-between border-t border-parchment px-4 py-2 text-[11px] font-mono text-smoke bg-sand/20 select-none">
          <div className="flex items-center gap-2">
            <span>↑↓ Navigate</span>
            <span>·</span>
            <span>↵ Select</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Close:</span>
            <kbd className="font-mono text-[10px] bg-sand px-1.5 py-0.5 rounded border border-parchment">
              ESC
            </kbd>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
