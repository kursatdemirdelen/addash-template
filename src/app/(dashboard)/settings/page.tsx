import type { Metadata } from "next";
import { SettingsPage } from "@/features/settings";

export const metadata: Metadata = {
  title: "Ayarlar",
  description: "Genel sistem ve çalışma alanı ayarları.",
};

export default function Page() {
  return <SettingsPage />;
}
