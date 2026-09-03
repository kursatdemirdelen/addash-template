import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMockUsers } from "@/lib/mock-data/users";
import { UserDetail } from "@/features/users";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const user = getMockUsers().find((u) => u.id === id);
  return {
    title: user ? user.name : "Kullanıcı Detayı",
    description: user ? `${user.name} profili ve kullanıcı detayları.` : "Kullanıcı detay sayfası.",
  };
}

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const users = getMockUsers();
  const user = users.find((u) => u.id === id) || users[0];

  if (!user) {
    notFound();
  }

  return <UserDetail user={user} />;
}
