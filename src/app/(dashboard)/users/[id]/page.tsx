import { notFound } from "next/navigation";
import { mockUsers } from "@/lib/mock-data/users";
import { UserDetail } from "@/features/users";

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = mockUsers.find((u) => u.id === id) || mockUsers[0];

  if (!user) {
    notFound();
  }

  return <UserDetail user={user} />;
}
