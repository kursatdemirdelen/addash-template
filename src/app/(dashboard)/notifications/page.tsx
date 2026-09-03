import type { Metadata } from "next";
import { NotificationsPage } from "@/features/notifications/components/notifications-page";

export const metadata: Metadata = {
  title: "Bildirimler",
  description: "Sistem ve aktivite bildirim merkezi.",
};

export default function Page() {
  return <NotificationsPage />;
}
