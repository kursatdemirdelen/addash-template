"use client";

import * as React from "react";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProfileForm } from "./profile-form";
import { AccountForm } from "./account-form";
import { useTranslation } from "@/hooks/use-translation";

export function SettingsPage({ initialTab = "profile" }: { initialTab?: string }) {
  const { t, locale } = useTranslation();

  return (
    <PageContainer>
      <PageHeader
        title={t.settings.title}
        description={t.settings.description}
      />

      <Tabs defaultValue={initialTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">{t.settings.tabs.profile}</TabsTrigger>
          <TabsTrigger value="account">{t.settings.tabs.account}</TabsTrigger>
          <TabsTrigger value="notifications">{t.nav.notifications}</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="max-w-3xl">
            <ProfileForm />
          </div>
        </TabsContent>

        <TabsContent value="account">
          <div className="max-w-3xl">
            <AccountForm />
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <div className="max-w-3xl rounded-lg border border-parchment bg-paper p-6 text-xs text-smoke">
            <h4 className="font-medium text-ink text-sm mb-1">
              {locale === "tr" ? "E-posta Bülteni & Bildirimleri" : "Email Digest"}
            </h4>
            <p>
              {locale === "tr"
                ? "Sistem olayları ve kullanıcı girişlerinin haftalık periyodik özetleri kayıtlı hesap e-postanıza iletilir."
                : "Periodic summaries of paid orders and user logins are delivered to your account email weekly."}
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}
