import type { Metadata } from "next";
import { HelpPage } from "@/features/help/components/help-page";

export const metadata: Metadata = {
  title: "Yardım Merkezi",
  description: "Arama, konu kartları ve sık sorulan sorular.",
};

export default function Page() {
  return <HelpPage />;
}
