import type { Metadata } from "next";
import { UsersPage } from "@/features/users";

export const metadata: Metadata = {
  title: "Kullanıcılar",
  description: "Ekip üyeleri ve hesap yönetimi tablosu.",
};

export default function Page() {
  return <UsersPage />;
}
