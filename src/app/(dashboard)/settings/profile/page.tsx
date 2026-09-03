import type { Metadata } from "next";
import { SettingsPage } from "@/features/settings";

export const metadata: Metadata = {
  title: "Profil Ayarları",
  description: "Kişisel profil ve hesap bilgileri yönetimi.",
};

export default function Page() {
  return <SettingsPage initialTab="profile" />;
}
