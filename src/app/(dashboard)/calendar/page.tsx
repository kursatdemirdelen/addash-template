import type { Metadata } from "next";
import { CalendarPage } from "@/features/calendar/components/calendar-page";

export const metadata: Metadata = {
  title: "Takvim",
  description: "Toplantılar, son tarihler ve sürümler için aylık takvim.",
};

export default function Page() {
  return <CalendarPage />;
}
