"use client"

import Link from "next/link"
import { getMockMembers } from "@/lib/mock-data/members"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/hooks/use-translation"

const statusDot: Record<string, string> = {
  active: "bg-moss",
  away: "bg-amber-400",
  offline: "bg-parchment border border-smoke/30",
}

const statusLabel: Record<string, Record<string, string>> = {
  tr: { active: "Çevrimiçi", away: "Uzakta", offline: "Çevrimdışı" },
  en: { active: "Online", away: "Away", offline: "Offline" },
}

export function TeamSummary() {
  const { t, locale } = useTranslation()
  const members = getMockMembers(locale)

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex-row items-center justify-between pb-3">
        <CardTitle>{t.dashboard.teamSummaryTitle}</CardTitle>
        <Link
          href="/users"
          className="flex items-center gap-1 text-[11px] text-smoke hover:text-ink transition-colors font-mono"
        >
          {t.dashboard.viewAll}
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      </CardHeader>

      <CardContent className="pt-0 pb-3 px-0 flex-1">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex items-center gap-3 px-5 py-2.5 border-b border-parchment/40 last:border-b-0 hover:bg-sand/30 transition-colors"
          >
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
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-ink truncate leading-none">
                {member.name}
              </p>
              <p className="text-[11px] text-smoke mt-0.5 truncate leading-none">
                {member.role}
              </p>
            </div>
            <span
              className={cn(
                "text-[10px] font-mono px-1.5 py-0.5 rounded-full shrink-0",
                member.status === "active" && "text-moss bg-moss/10",
                member.status === "away" && "text-amber-600 bg-amber-50",
                member.status === "offline" && "text-smoke bg-sand"
              )}
            >
              {statusLabel[locale]?.[member.status] ?? member.status}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
