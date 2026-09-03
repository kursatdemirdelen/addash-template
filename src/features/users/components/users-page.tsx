"use client";

import Link from "next/link";
import { UserPlus, Download } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { UsersTable } from "./users-table";
import { useTranslation } from "@/hooks/use-translation";

export function UsersPage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <PageHeader
        title={t.team.title}
        description={t.team.description}
        action={
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-3.5 w-3.5 mr-1.5" />
              {t.common.export}
            </Button>
            <Button variant="primary" size="sm" asChild>
              <Link href="/users/new" className="flex items-center gap-1.5">
                <UserPlus className="h-3.5 w-3.5" />
                <span>{t.team.inviteMember}</span>
              </Link>
            </Button>
          </div>
        }
      />
      <UsersTable />
    </PageContainer>
  );
}
