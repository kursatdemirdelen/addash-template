import type { Metadata } from "next";
import { FilesPage } from "@/features/files/components/files-page";

export const metadata: Metadata = {
  title: "Dosyalar",
  description: "Bulut dosya yöneticisi ve arşiv depolama alanı.",
};

export default function Page() {
  return <FilesPage />;
}
