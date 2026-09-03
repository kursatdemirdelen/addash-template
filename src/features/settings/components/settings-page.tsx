"use client"

import { PageContainer } from "@/components/layout/page-container"
import { PageHeader } from "@/components/layout/page-header"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ProfileForm } from "./profile-form"
import { AccountForm } from "./account-form"
import { AppearanceForm } from "./appearance-form"
import { useTranslation } from "@/hooks/use-translation"

export function SettingsPage({ initialTab = "profile" }: { initialTab?: string }) {
  const { t } = useTranslation()

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
          <TabsTrigger value="appearance">{t.settings.tabs.appearance}</TabsTrigger>
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

        <TabsContent value="appearance">
          <div className="max-w-3xl">
            <AppearanceForm />
          </div>
        </TabsContent>
      </Tabs>
    </PageContainer>
  )
}
