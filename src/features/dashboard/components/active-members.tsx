import Link from "next/link";
import { mockMembers } from "@/lib/mock-data/members";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { useTranslation } from "@/hooks/use-translation";

const statusDot: Record<string, string> = {
  active: "bg-moss",
  away: "bg-amber-400",
  offline: "bg-parchment border border-smoke/30",
};

export function ActiveMembers() {
  const { t } = useTranslation();

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex-row items-center justify-between pb-3">
        <CardTitle>{t.dashboard.activeTeamTitle}</CardTitle>
        <Link
          href="/users"
          className="flex items-center gap-1 text-[11px] text-smoke hover:text-ink transition-colors font-mono"
        >
          {t.dashboard.viewAll}
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      </CardHeader>

      <CardContent className="pt-0 pb-3 px-0">
        {mockMembers.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-between gap-3 px-5 py-2.5 border-b border-parchment/40 last:border-b-0 hover:bg-sand/30 transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative shrink-0">
                <Avatar
                  src={member.avatarUrl}
                  fallback={member.initials}
                  size="sm"
                />
                <span
                  className={cn(
                    "absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-1 ring-paper",
                    statusDot[member.status]
                  )}
                />
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-medium text-ink truncate leading-none">
                  {member.name}
                </p>
                <p className="text-[11px] text-smoke mt-0.5 truncate leading-none">
                  {member.role}
                </p>
              </div>
            </div>
            <span className="text-[10px] text-smoke font-mono shrink-0 whitespace-nowrap">
              {member.lastSeen}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
