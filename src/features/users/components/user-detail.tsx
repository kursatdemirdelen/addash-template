"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Shield, Calendar, Clock } from "lucide-react";
import { User } from "@/types/user";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RoleBadge } from "@/components/ui/role-badge";
import { Button } from "@/components/ui/button";
import { UserStatusBadge } from "./user-status-badge";
import { useTranslation } from "@/hooks/use-translation";

export function UserDetail({ user }: { user: User }) {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <PageHeader
        title={user.name}
        description={`${t.team.detail.profileSubtitle} (${user.id})`}
        action={
          <Button variant="outline" size="sm" asChild>
            <Link href="/users" className="flex items-center gap-1">
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>{t.team.detail.back}</span>
            </Link>
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Card: Summary */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>{t.team.columns.user}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center space-y-3 pt-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-charcoal text-paper text-xl font-medium">
              {user.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-base font-medium text-ink">{user.name}</h3>
              <p className="text-xs text-smoke">{user.email}</p>
            </div>
            <div className="pt-1">
              <UserStatusBadge status={user.status} />
            </div>
          </CardContent>
        </Card>

        {/* Right Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>{t.team.detail.accountDetails}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <span className="text-xs text-smoke flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5" /> {t.team.detail.assignedRole}
                </span>
                <div>
                  <RoleBadge role={user.role} />
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-smoke flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5" /> {t.team.detail.department}
                </span>
                <p className="text-sm font-medium text-ink">{user.department}</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-smoke flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> {t.team.detail.joinedDate}
                </span>
                <p className="text-sm font-medium text-ink">{user.createdAt}</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-smoke flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {t.team.detail.lastActive}
                </span>
                <p className="text-sm font-medium text-ink">{user.lastActive}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
