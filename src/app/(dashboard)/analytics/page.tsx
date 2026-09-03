import type { Metadata } from "next";
import { AnalyticsPage } from "@/features/analytics";

export const metadata: Metadata = {
  title: "Analitik",
  description: "Detaylı grafikler, gelir trendleri ve dönem tablosu.",
};

export default function Page() {
  return <AnalyticsPage />;
}
