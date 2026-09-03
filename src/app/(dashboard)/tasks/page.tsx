import type { Metadata } from "next";
import { TasksPage } from "@/features/tasks/components/tasks-page";

export const metadata: Metadata = {
  title: "Görevler",
  description: "Kanban görev takip panosu ve operasyonel iş akışları.",
};

export default function Page() {
  return <TasksPage />;
}
