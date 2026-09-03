"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Avatar } from "@/components/ui/avatar"
import { useTranslation } from "@/hooks/use-translation"
import { CheckSquare, MessageSquare, Users } from "lucide-react"

export function WelcomeCard() {
  const { t, locale } = useTranslation()
  const today = new Date()
  const hour = today.getHours()
  const greeting =
    hour < 12
      ? t.dashboard.goodMorning
      : hour < 18
        ? t.dashboard.goodAfternoon
        : t.dashboard.goodEvening

  const weekNumber = Math.ceil(
    (today.getTime() - new Date(today.getFullYear(), 0, 1).getTime()) / 604800000
  )

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between py-2">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Avatar
            src={siteConfig.user.avatarUrl}
            fallback={siteConfig.user.avatar}
            size="lg"
          />
          <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-moss ring-2 ring-paper" />
        </div>
        <div>
          <p className="text-[12px] font-mono text-smoke">
            {greeting}, {t.dashboard.welcomeBack}
          </p>
          <h1 className="font-serif text-[26px] sm:text-[30px] font-normal leading-tight text-ink tracking-tight">
            {siteConfig.user.name}
          </h1>
          <div className="flex items-center gap-3 text-[12px] text-smoke mt-0.5">
            <span>{siteConfig.user.role}</span>
            <span>·</span>
            <Link
              href="/tasks"
              className="flex items-center gap-1 hover:text-ink hover:underline underline-offset-2 transition-colors"
              tabIndex={0}
              aria-label={`9 ${t.dashboard.tasksCount}`}
            >
              <CheckSquare className="h-3 w-3 text-sky" />
              <span>9 {t.dashboard.tasksCount}</span>
            </Link>
            <span>·</span>
            <Link
              href="/messages"
              className="flex items-center gap-1 hover:text-ink hover:underline underline-offset-2 transition-colors"
              tabIndex={0}
              aria-label={`2 ${t.dashboard.unreadCount}`}
            >
              <MessageSquare className="h-3 w-3 text-violet" />
              <span>2 {t.dashboard.unreadCount}</span>
            </Link>
            <span>·</span>
            <Link
              href="/users"
              className="flex items-center gap-1 hover:text-ink hover:underline underline-offset-2 transition-colors"
              tabIndex={0}
              aria-label={`6 ${t.dashboard.onlineCount}`}
            >
              <Users className="h-3 w-3 text-moss" />
              <span>6 {t.dashboard.onlineCount}</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
        <p className="text-[13px] font-medium text-ink">
          {today.toLocaleDateString(locale === "tr" ? "tr-TR" : "en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="text-[11px] text-smoke font-mono">
          {today.getFullYear()} · {locale === "tr" ? "Hafta" : "Week"} {weekNumber}
        </p>
      </div>
    </div>
  )
}
