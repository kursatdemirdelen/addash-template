import type { Metadata } from "next";
import { SettingsPage } from "@/features/settings";

export const metadata: Metadata = {
  title: "Hesap Güvenliği",
  description: "Güvenlik anahtarları, oturumlar ve hesap tercihleri.",
};

export default function Page() {
  return <SettingsPage initialTab="account" />;
}
