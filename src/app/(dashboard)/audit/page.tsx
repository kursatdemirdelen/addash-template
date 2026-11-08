import type { Metadata } from "next";
import { AuditPage } from "@/features/audit/components/audit-page";

export const metadata: Metadata = {
  title: "Denetim Kaydı",
  description: "Kim, ne zaman, ne yaptı: güvenlik, içerik, ödeme ve erişim olayları.",
};

export default function Page() {
  return <AuditPage />;
}
