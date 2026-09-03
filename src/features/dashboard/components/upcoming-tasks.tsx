"use client"

import { getMockTasks } from "@/lib/mock-data/tasks"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/hooks/use-translation"

const priorityColors: Record<string, string> = {
  high: "bg-red-500",
  medium: "bg-amber-500",
  low: "bg-emerald-500",
}

export function UpcomingTasks() {
  const { t, locale } = useTranslation()
  const tasks = getMockTasks(locale)
    .filter((task) => task.status !== "done")
    .slice(0, 5)

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>{t.dashboard.upcomingTasksTitle}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-0 pt-0 pb-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 border-b border-parchment/40 py-2.5 last:border-b-0"
          >
            <span
              className={`h-2 w-2 rounded-full shrink-0 ${priorityColors[task.priority] ?? "bg-smoke"}`}
              aria-label={task.priority}
            />
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-ink leading-snug truncate">
                {task.title}
              </p>
              <p className="text-[11px] text-smoke mt-0.5">{task.label}</p>
            </div>
            <span className="text-[11px] text-smoke font-mono shrink-0 whitespace-nowrap">
              {task.dueDate}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
