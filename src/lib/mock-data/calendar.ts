import type { Locale } from "@/locales/types";

export type CalendarEventType = "meeting" | "deadline" | "release" | "review";

export interface CalendarEvent {
  id: string;
  day: number;
  time: string;
  type: CalendarEventType;
  title: string;
}

const titles: Record<Locale, string[]> = {
  en: [
    "Sprint planning",
    "Design review",
    "Release v1.5",
    "Client call",
    "Invoice deadline",
    "Quarterly review",
    "Team retro",
    "Security audit",
    "Roadmap sync",
  ],
  tr: [
    "Sprint planlaması",
    "Tasarım incelemesi",
    "v1.5 sürümü",
    "Müşteri görüşmesi",
    "Fatura son tarihi",
    "Çeyrek dönem değerlendirmesi",
    "Ekip retrosu",
    "Güvenlik denetimi",
    "Yol haritası toplantısı",
  ],
};

const slots: Pick<CalendarEvent, "day" | "time" | "type">[] = [
  { day: 3, time: "10:00", type: "meeting" },
  { day: 6, time: "14:30", type: "review" },
  { day: 9, time: "17:00", type: "release" },
  { day: 12, time: "11:00", type: "meeting" },
  { day: 12, time: "16:00", type: "deadline" },
  { day: 17, time: "13:00", type: "review" },
  { day: 21, time: "15:30", type: "meeting" },
  { day: 24, time: "10:30", type: "review" },
  { day: 28, time: "09:30", type: "meeting" },
];

export function getMockCalendarEvents(locale: Locale): CalendarEvent[] {
  return slots.map((slot, index) => ({ id: `e${index}`, title: titles[locale][index], ...slot }));
}
