"use client"

import { PageContainer } from "@/components/layout/page-container"
import { StatCard } from "@/components/data-display/stat-card"
import { WelcomeCard } from "./welcome-card"
import { OverviewChart } from "./overview-chart"
import { TeamSummary } from "./team-summary"
import { RecentActivity } from "./recent-activity"
import { UpcomingTasks } from "./upcoming-tasks"
import { TopCustomers } from "./top-customers"
import { useTranslation } from "@/hooks/use-translation"
import { CheckSquare, Users, FolderOpen } from "lucide-react"

export function DashboardPage() {
  const { t } = useTranslation()

  return (
    <PageContainer className="space-y-8">
      {/* karsilama */}
      <WelcomeCard />

      {/* kpi kartlari */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title={t.dashboard.activeTasksTitle}
          value="23"
          change="+8.7%"
          trend="up"
          caption={t.dashboard.activeTasksCaption}
          sparkline={[12, 15, 14, 19, 17, 21, 20, 22, 23]}
          icon={<CheckSquare className="h-3.5 w-3.5" />}
          iconColor="bg-sky/10 text-sky border-sky/20"
        />
        <StatCard
          title={t.dashboard.teamMembersTitle}
          value="14"
          change="+2 new"
          trend="up"
          caption={t.dashboard.teamMembersCaption}
          sparkline={[8, 9, 9, 10, 11, 11, 12, 13, 14]}
          icon={<Users className="h-3.5 w-3.5" />}
          iconColor="bg-moss/10 text-moss border-moss/20"
        />
        <StatCard
          title={t.dashboard.cloudStorageTitle}
          value="12.7 GB"
          change="25.4%"
          trend="neutral"
          caption={t.dashboard.cloudStorageCaption}
          sparkline={[5, 6.2, 7.5, 8.1, 9, 10.3, 11, 12, 12.7]}
          icon={<FolderOpen className="h-3.5 w-3.5" />}
          iconColor="bg-amber/10 text-amber border-amber/20"
        />
      </div>

      {/* grafik + ekip arkadaslari */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <OverviewChart />
        </div>
        <div className="lg:col-span-1">
          <TeamSummary />
        </div>
      </div>

      {/* son aktiviteler + yaklasan gorevler + en iyi musteriler */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <RecentActivity />
        <UpcomingTasks />
        <TopCustomers />
      </div>
    </PageContainer>
  )
}
