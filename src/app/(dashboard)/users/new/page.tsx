import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { UserForm } from "@/features/users";

export default function NewUserPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Invite New User"
        description="Provision ledger access credentials and assign security permissions."
      />
      <UserForm />
    </PageContainer>
  );
}
