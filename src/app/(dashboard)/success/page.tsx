import { Metadata } from "next";
import { SuccessState } from "@/components/feedback";

export const metadata: Metadata = {
  title: "İşlem Tamamlandı",
  description: "İşlem başarıyla tamamlandı ve sisteme işlendi.",
};

export default function SuccessPage() {
  return (
    <div className="py-8 sm:py-16">
      <SuccessState />
    </div>
  );
}
