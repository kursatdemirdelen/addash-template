import type { Metadata } from "next";
import { InvoicesPage } from "@/features/invoices/components/invoices-page";

export const metadata: Metadata = {
  title: "Faturalar",
  description: "Fatura listesi, ödeme durumları ve toplamlar.",
};

export default function Page() {
  return <InvoicesPage />;
}
