import type { Metadata } from "next";
import { DashboardPage } from "@/features/dashboard";

export const metadata: Metadata = {
  title: "Kontrol Paneli",
  description: "Operasyonel genel bakış ve performans metrikleri.",
};

export default function Page() {
  return <DashboardPage />;
}
