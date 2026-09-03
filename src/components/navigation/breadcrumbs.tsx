"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

interface BreadcrumbsProps {
  customSegments?: { title: string; href?: string }[];
  className?: string;
}

export function Breadcrumbs({ customSegments, className }: BreadcrumbsProps) {
  const pathname = usePathname();
  const { t } = useTranslation();

  const segmentLabels: Record<string, string> = {
    dashboard: t.nav.dashboard,
    analytics: t.nav.analytics,
    tasks: t.nav.tasks,
    messages: t.nav.messages,
    files: t.nav.files,
    posts: t.nav.posts,
    products: t.nav.products,
    customers: t.nav.customers,
    users: t.nav.team,
    roles: t.nav.roles,
    notifications: t.nav.notifications,
    settings: t.nav.settings,
    profile: t.settings.tabs.profile,
    account: t.settings.tabs.account,
    new: t.common.create,
  };

  const segments = customSegments ?? (() => {
    const raw = pathname.split("/").filter(Boolean);
    return raw.map((segment, index) => {
      const href = "/" + raw.slice(0, index + 1).join("/");
      const lower = segment.toLowerCase();
      const title =
        segmentLabels[lower] ||
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
      return { title, href: index === raw.length - 1 ? undefined : href };
    });
  })();

  if (segments.length <= 1 && !customSegments) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1 text-[12px] text-smoke", className)}>
      <Link href="/dashboard" className="hover:text-ink transition-colors">
        {t.nav.dashboard}
      </Link>
      {segments.map((seg, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight className="h-3 w-3 text-smoke/70" />
          {seg.href ? (
            <Link href={seg.href} className="hover:text-ink transition-colors">
              {seg.title}
            </Link>
          ) : (
            <span className="text-ink font-medium">{seg.title}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
