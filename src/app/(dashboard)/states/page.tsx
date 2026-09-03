import { Metadata } from "next";
import { StatesPage } from "@/features/states/components/states-page";

export const metadata: Metadata = {
  title: "Sistem Durumları",
  description: "Hata sınırları, yükleme iskeletleri, boş durumlar ve işlem onayları vitrini.",
};

export default function Page() {
  return <StatesPage />;
}
