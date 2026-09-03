import type { Metadata } from "next"
import { UserForm } from "@/features/users"

export const metadata: Metadata = {
  title: "Yeni Üye Davet Et",
  description: "Yeni bir ekip üyesi davet edin.",
}

export default function NewUserPage() {
  return <UserForm />
}
