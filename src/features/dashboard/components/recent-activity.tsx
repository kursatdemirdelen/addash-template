import { mockRecentActivity } from "@/lib/mock-data/activity";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { UserCheck, CreditCard, RotateCcw, ShieldCheck, Activity } from "lucide-react";

function getEventIcon(type: string) {
  switch (type) {
    case "user":
      return <UserCheck className="h-3.5 w-3.5 text-ink" />;
    case "order":
      return <CreditCard className="h-3.5 w-3.5 text-moss" />;
    case "refund":
      return <RotateCcw className="h-3.5 w-3.5 text-amber-700" />;
    case "security":
      return <ShieldCheck className="h-3.5 w-3.5 text-smoke" />;
    default:
      return <Activity className="h-3.5 w-3.5 text-smoke" />;
  }
}

import { useTranslation } from "@/hooks/use-translation";

export function RecentActivity() {
  const { t } = useTranslation();
  // Show the 5 most recent items, no filters needed on dashboard
  const items = mockRecentActivity.slice(0, 5);

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>{t.dashboard.recentActivityTitle}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-0 pt-0 pb-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 border-b border-parchment/40 py-2.5 last:border-b-0"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sand border border-parchment/60 shrink-0 mt-0.5">
              {getEventIcon(item.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-ink leading-snug">{item.title}</p>
              <p className="text-[11px] text-smoke mt-0.5 leading-normal truncate">
                {item.description}
              </p>
            </div>
            <span className="text-[10px] text-smoke font-mono shrink-0 whitespace-nowrap mt-0.5">
              {item.timestamp}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
