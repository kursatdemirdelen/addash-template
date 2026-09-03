import type { Metadata } from "next";
import { CustomersPage } from "@/features/customers/components/customers-page";

export const metadata: Metadata = {
  title: "Müşteriler",
  description: "CRM müşteri dizini ve hesap kademeleri.",
};

export default function Page() {
  return <CustomersPage />;
}
