"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";
import { getMockCalendarEvents, type CalendarEventType } from "@/lib/mock-data/calendar";

const DOT: Record<CalendarEventType, string> = {
  meeting: "bg-sky",
  deadline: "bg-rose",
  release: "bg-moss",
  review: "bg-amber",
};

export function CalendarPage() {
  const { t, locale } = useTranslation();
  const [offset, setOffset] = React.useState(0);
  const events = React.useMemo(() => getMockCalendarEvents(locale), [locale]);

  const now = new Date();
  const month = new Date(now.getFullYear(), now.getMonth() + offset, 1);
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const leading = (month.getDay() + 6) % 7; // weeks start on Monday
  const cells = Array.from({ length: Math.ceil((leading + daysInMonth) / 7) * 7 }, (_, i) => {
    const day = i - leading + 1;
    return day >= 1 && day <= daysInMonth ? day : null;
  });
  const isToday = (day: number) => offset === 0 && day === now.getDate();

  const weekdays = Array.from({ length: 7 }, (_, i) =>
    new Intl.DateTimeFormat(locale, { weekday: "short" }).format(new Date(2024, 0, 1 + i)),
  );
  const title = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(month);
  const upcoming = events.filter((e) => offset !== 0 || e.day >= now.getDate()).slice(0, 5);

  return (
    <PageContainer className="space-y-6">
      <PageHeader
        title={t.calendar.title}
        description={t.calendar.description}
        action={
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setOffset(0)}>
              {t.calendar.today}
            </Button>
            <Button variant="outline" size="sm" aria-label={t.calendar.previous} onClick={() => setOffset((o) => o - 1)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" aria-label={t.calendar.next} onClick={() => setOffset((o) => o + 1)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <Card className="overflow-hidden">
          <p className="border-b border-parchment px-5 py-3 font-serif text-[16px] capitalize text-ink">{title}</p>
          <div className="grid grid-cols-7 border-b border-parchment/60 text-center">
            {weekdays.map((d) => (
              <p key={d} className="py-2 text-[10px] font-mono uppercase tracking-[0.08em] text-smoke">
                {d}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {cells.map((day, i) => {
              const dayEvents = day ? events.filter((e) => e.day === day) : [];
              return (
                <div
                  key={i}
                  className={cn(
                    "min-h-20 border-b border-r border-parchment/60 p-1.5 sm:min-h-24",
                    !day && "bg-sand/30",
                  )}
                >
                  {day && (
                    <>
                      <span
                        className={cn(
                          "inline-flex h-6 w-6 items-center justify-center rounded-full text-[12px] text-ink",
                          isToday(day) && "bg-ink font-semibold text-paper",
                        )}
                      >
                        {day}
                      </span>
                      <ul className="mt-1 space-y-0.5">
                        {dayEvents.slice(0, 2).map((e) => (
                          <li key={e.id} className="flex items-center gap-1 truncate text-[11px] text-ink">
                            <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", DOT[e.type])} />
                            <span className="hidden truncate sm:inline">{e.title}</span>
                          </li>
                        ))}
                        {dayEvents.length > 2 && <li className="text-[10px] text-smoke">+{dayEvents.length - 2}</li>}
                      </ul>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="p-5">
            <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.08em] text-smoke">{t.calendar.upcoming}</p>
            {upcoming.length === 0 ? (
              <p className="text-[13px] text-smoke">{t.calendar.noEvents}</p>
            ) : (
              <ul className="space-y-3">
                {upcoming.map((e) => (
                  <li key={e.id} className="flex items-start gap-3">
                    <span className={cn("mt-1.5 h-2 w-2 shrink-0 rounded-full", DOT[e.type])} />
                    <div className="min-w-0">
                      <p className="truncate text-[13px] text-ink">{e.title}</p>
                      <p className="text-[11px] text-smoke">
                        {e.day} · {e.time}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </Card>
          <Card className="p-5">
            <ul className="space-y-2">
              {(Object.keys(DOT) as CalendarEventType[]).map((type) => (
                <li key={type} className="flex items-center gap-2 text-[12px] text-ink">
                  <span className={cn("h-2 w-2 rounded-full", DOT[type])} />
                  {t.calendar.types[type]}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
