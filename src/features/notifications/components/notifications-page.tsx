"use client";

import * as React from "react";
import { mockNotifications, type Notification } from "@/lib/mock-data/notifications";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";
import {
  Info, CheckCircle2, AlertTriangle, XCircle,
  AtSign, Settings2, BellOff, Check,
} from "lucide-react";

function getNotifIcon(type: Notification["type"]) {
  const base = "h-4 w-4 shrink-0";
  switch (type) {
    case "success":  return <CheckCircle2 className={cn(base, "text-moss")} />;
    case "warning":  return <AlertTriangle className={cn(base, "text-amber")} />;
    case "error":    return <XCircle className={cn(base, "text-rose")} />;
    case "mention":  return <AtSign className={cn(base, "text-ink")} />;
    case "system":   return <Settings2 className={cn(base, "text-smoke")} />;
    default:         return <Info className={cn(base, "text-smoke")} />;
  }
}

function getIconBg(type: Notification["type"]) {
  switch (type) {
    case "success":  return "bg-moss/10 border-moss/20";
    case "warning":  return "bg-amber/10 border-amber/20";
    case "error":    return "bg-rose/10 border-rose/20";
    case "mention":  return "bg-sand border-parchment";
    default:         return "bg-sand border-parchment";
  }
}

export function NotificationsPage() {
  const { t } = useTranslation();
  const [notifications, setNotifications] = React.useState(mockNotifications);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const groupLabels: Record<string, string> = {
    Today: t.notifications.groups.today,
    Yesterday: t.notifications.groups.yesterday,
    "This Week": t.notifications.groups.thisWeek,
  };

  const groups = ["Today", "Yesterday", "This Week"] as const;

  return (
    <PageContainer className="space-y-6">
      <PageHeader
        title={t.notifications.title}
        description={t.notifications.description}
        action={
          <div className="flex items-center gap-2">
            {unreadCount > 0 && (
              <Button variant="outline" size="sm" onClick={markAllRead}>
                <Check className="h-3.5 w-3.5 mr-1.5" />
                {t.notifications.markAllRead} ({unreadCount})
              </Button>
            )}
          </div>
        }
      />

      <div className="space-y-6">
        {groups.map((group) => {
          const items = notifications.filter((n) => n.group === group);
          if (items.length === 0) return null;

          return (
            <div key={group} className="space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-[0.08em] text-smoke px-1 select-none">
                {groupLabels[group] ?? group}
              </p>

              <Card className="overflow-hidden divide-y divide-parchment/60">
                {items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => markRead(item.id)}
                    className={cn(
                      "flex items-start gap-4 p-4 transition-colors cursor-pointer select-none",
                      item.read
                        ? "bg-paper hover:bg-sand/30 opacity-75"
                        : "bg-paper hover:bg-sand/40"
                    )}
                  >
                    {/* Icon */}
                    <div
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full border shrink-0 mt-0.5",
                        getIconBg(item.type)
                      )}
                    >
                      {getNotifIcon(item.type)}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 space-y-0.5">
                      <div className="flex items-center justify-between gap-2">
                        <p className={cn("text-[13px] leading-snug truncate", !item.read ? "font-semibold text-ink" : "text-ink")}>
                          {item.title}
                        </p>
                        <span className="text-[11px] font-mono text-smoke shrink-0">
                          {item.timestamp}
                        </span>
                      </div>
                      <p className="text-[12px] text-smoke leading-relaxed">
                        {item.message}
                      </p>
                    </div>

                    {/* Unread indicator */}
                    {!item.read && (
                      <span className="h-2 w-2 rounded-full bg-moss shrink-0 mt-2" />
                    )}
                  </div>
                ))}
              </Card>
            </div>
          );
        })}

        {notifications.length === 0 && (
          <Card className="p-12 text-center flex flex-col items-center justify-center space-y-2">
            <BellOff className="h-6 w-6 text-smoke" />
            <p className="text-sm text-smoke font-mono">{t.notifications.noNotifications}</p>
          </Card>
        )}
      </div>
    </PageContainer>
  );
}
