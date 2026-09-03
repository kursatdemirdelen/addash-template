"use client";

import * as React from "react";
import { mockTasks, type Task } from "@/lib/mock-data/tasks";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Plus, Flag } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

const PRIORITY_COLOR: Record<Task["priority"], string> = {
  high:   "text-rose",
  medium: "text-amber",
  low:    "text-smoke",
};

const LABEL_COLOR: Record<string, string> = {
  Design:        "bg-violet/10 text-violet border-violet/20",
  Engineering:   "bg-sky/10 text-sky border-sky/20",
  Documentation: "bg-amber/10 text-amber border-amber/20",
  Content:       "bg-moss/10 text-moss border-moss/20",
  Accessibility: "bg-rose/10 text-rose border-rose/20",
  Performance:   "bg-ink/10 text-ink border-parchment",
};

export function TasksPage() {
  const { t } = useTranslation();
  const [tasks] = React.useState(mockTasks);

  const columns = [
    { id: "todo" as const,        label: t.tasks.todo,       color: "bg-smoke/20" },
    { id: "in-progress" as const, label: t.tasks.inProgress, color: "bg-amber/20" },
    { id: "done" as const,        label: t.tasks.done,       color: "bg-moss/20"  },
  ];

  const byStatus = (status: Task["status"]) => tasks.filter((t) => t.status === status);

  return (
    <PageContainer className="space-y-6">
      <PageHeader
        title={t.tasks.title}
        description={t.tasks.description}
        action={
          <Button variant="primary" size="sm">
            <Plus className="h-3.5 w-3.5 mr-1.5" />
            {t.tasks.newTask}
          </Button>
        }
      />

      {/* Kanban Board */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {columns.map((col) => {
          const items = byStatus(col.id);
          return (
            <div key={col.id} className="space-y-3">
              {/* Column Header */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className={cn("h-2 w-2 rounded-full", col.color.replace("/20",""))} />
                  <span className="text-[12px] font-medium text-ink">{col.label}</span>
                  <span className="text-[11px] font-mono text-smoke">{items.length}</span>
                </div>
              </div>

              {/* Column Cards */}
              <div className="space-y-2.5">
                {items.map((task) => (
                  <Card
                    key={task.id}
                    className="p-4 space-y-3 hover:border-ink/40 transition-colors cursor-pointer"
                  >
                    {/* Tags */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span
                        className={cn(
                          "px-2 py-0.5 rounded-full text-[10px] font-mono border",
                          LABEL_COLOR[task.label] ?? "bg-sand text-smoke border-parchment"
                        )}
                      >
                        {task.label}
                      </span>
                    </div>

                    {/* Title */}
                    <p className="text-[13px] font-medium text-ink leading-snug">
                      {task.title}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-1 text-[11px] text-smoke border-t border-parchment/60">
                      <div className="flex items-center gap-1.5 font-mono">
                        <Flag className={cn("h-3 w-3", PRIORITY_COLOR[task.priority])} />
                        <span className="capitalize">{t.tasks.priority[task.priority]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-smoke/70">{task.dueDate}</span>
                        <Avatar
                          src={task.assignee.avatarUrl}
                          fallback={task.assignee.initials}
                          size="sm"
                        />
                      </div>
                    </div>
                  </Card>
                ))}

                {items.length === 0 && (
                  <div className="rounded-lg border border-dashed border-parchment p-8 text-center text-xs text-smoke font-mono">
                    {t.tasks.noTasks}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </PageContainer>
  );
}
