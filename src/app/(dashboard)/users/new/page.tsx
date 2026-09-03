import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { UserForm } from "@/features/users";

export const metadata: Metadata = {
  title: "Yeni Kullanıcı Ekle",
  description: "Yeni ekip üyesi davet et ve yetkilendir.",
};

export default function NewUserPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Yeni Kullanıcı Davet Et"
        description="Yeni bir ekip üyesine erişim yetkisi tanımlayın ve güvenlik izinlerini belirleyin."
      />
      <UserForm />
    </PageContainer>
  );
}
