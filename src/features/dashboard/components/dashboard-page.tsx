"use client";

import { PageContainer } from "@/components/layout/page-container";
import { StatCard } from "@/components/data-display/stat-card";
import { WelcomeCard } from "./welcome-card";
import { OverviewChart } from "./overview-chart";
import { ActiveMembers } from "./active-members";
import { RecentActivity } from "./recent-activity";
import { useTranslation } from "@/hooks/use-translation";
import { CheckSquare, Users, FolderOpen, Activity } from "lucide-react";

export function DashboardPage() {
  const { t } = useTranslation();

  return (
    <PageContainer className="space-y-8">
      {/* 1. Welcome Header */}
      <WelcomeCard />

      {/* 2. Generalized KPI Stats with Icons & Accent Tones */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title={t.dashboard.activeTasksTitle}
          value="28"
          change="+12.5%"
          trend="up"
          caption={t.dashboard.activeTasksCaption}
          sparkline={[14, 18, 16, 22, 20, 25, 24, 27, 28]}
          icon={<CheckSquare className="h-3.5 w-3.5" />}
          iconColor="bg-sky/10 text-sky border-sky/20"
        />
        <StatCard
          title={t.dashboard.teamMembersTitle}
          value="18"
          change="+3 new"
          trend="up"
          caption={t.dashboard.teamMembersCaption}
          sparkline={[10, 11, 12, 13, 15, 15, 16, 17, 18]}
          icon={<Users className="h-3.5 w-3.5" />}
          iconColor="bg-moss/10 text-moss border-moss/20"
        />
        <StatCard
          title={t.dashboard.cloudStorageTitle}
          value="18.4 GB"
          change="36.8%"
          trend="neutral"
          caption={t.dashboard.cloudStorageCaption}
          sparkline={[8, 10, 12, 13, 14, 16, 17, 18, 18.4]}
          icon={<FolderOpen className="h-3.5 w-3.5" />}
          iconColor="bg-amber/10 text-amber border-amber/20"
        />
        <StatCard
          title={t.dashboard.systemUptimeTitle}
          value="99.98%"
          change="+0.04%"
          trend="up"
          caption={t.dashboard.systemUptimeCaption}
          sparkline={[99.8, 99.85, 99.9, 99.92, 99.95, 99.95, 99.97, 99.98, 99.98]}
          icon={<Activity className="h-3.5 w-3.5" />}
          iconColor="bg-violet/10 text-violet border-violet/20"
        />
      </div>

      {/* 3. Chart + Active Members */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <OverviewChart />
        </div>
        <div className="lg:col-span-1">
          <ActiveMembers />
        </div>
      </div>

      {/* 4. Recent Activity */}
      <RecentActivity />
    </PageContainer>
  );
}
