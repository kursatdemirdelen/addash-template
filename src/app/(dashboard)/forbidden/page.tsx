import { Metadata } from "next";
import { AccessDeniedCard } from "@/components/feedback";

export const metadata: Metadata = {
  title: "403 - Erişim Kısıtlandı",
  description: "Bu bölümü görüntülemek için gerekli yetkiye sahip değilsiniz.",
};

export default function ForbiddenPage() {
  return (
    <div className="py-8 sm:py-16">
      <AccessDeniedCard />
    </div>
  );
}
