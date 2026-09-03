import type { Metadata } from "next";
import { RolesPage } from "@/features/roles/components/roles-page";

export const metadata: Metadata = {
  title: "Roller & Yetkiler",
  description: "Rol tabanlı erişim kontrolü (RBAC) yetki matrisi.",
};

export default function Page() {
  return <RolesPage />;
}
