import type { Metadata } from "next";
import { MessagesPage } from "@/features/messages/components/messages-page";

export const metadata: Metadata = {
  title: "Mesajlar",
  description: "Bölünmüş gelen kutusu ve anlık ekip yazışmaları.",
};

export default function Page() {
  return <MessagesPage />;
}
