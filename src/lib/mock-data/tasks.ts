export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  assignee: { name: string; initials: string; avatarUrl?: string };
  label: string;
  dueDate: string;
}

export const mockTasks: Task[] = [
  {
    id: "t1", title: "Redesign onboarding flow",
    description: "Simplify the 5-step signup to 2 steps based on user research findings.",
    status: "in-progress", priority: "high", label: "Design",
    dueDate: "Sep 8",
    assignee: { name: "Amara Diallo", initials: "AD", avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t2", title: "Migrate auth to Clerk",
    description: "Replace custom JWT system with Clerk for better session management.",
    status: "todo", priority: "high", label: "Engineering",
    dueDate: "Sep 12",
    assignee: { name: "Mia Chen", initials: "MC", avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t3", title: "Write Q3 retrospective",
    description: "Summarize what worked, what didn't, and key learnings for Q4 planning.",
    status: "todo", priority: "medium", label: "Documentation",
    dueDate: "Sep 15",
    assignee: { name: "Sofia Andersson", initials: "SA", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t4", title: "Set up E2E testing with Playwright",
    description: "Cover critical user flows: signup, checkout, and settings update.",
    status: "in-progress", priority: "medium", label: "Engineering",
    dueDate: "Sep 10",
    assignee: { name: "Lucas Becker", initials: "LB", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t5", title: "Draft blog post: 'State management in 2026'",
    description: "Compare Zustand, Jotai, and Valtio with benchmarks and DX notes.",
    status: "in-progress", priority: "low", label: "Content",
    dueDate: "Sep 20",
    assignee: { name: "James Okafor", initials: "JO", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t6", title: "Accessibility audit — WCAG 2.2",
    description: "Run axe-core audit and resolve all Level A and AA issues.",
    status: "todo", priority: "high", label: "Accessibility",
    dueDate: "Sep 18",
    assignee: { name: "Amara Diallo", initials: "AD", avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t7", title: "Update README with new screenshots",
    description: "Add dashboard, analytics, and notifications screenshots to the README.",
    status: "done", priority: "low", label: "Documentation",
    dueDate: "Sep 3",
    assignee: { name: "Sofia Andersson", initials: "SA", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t8", title: "Optimize image loading — LCP",
    description: "Switch to Next.js Image component with priority hints on above-the-fold images.",
    status: "done", priority: "medium", label: "Performance",
    dueDate: "Sep 1",
    assignee: { name: "Mia Chen", initials: "MC", avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t9", title: "Add CSV export to analytics page",
    description: "Allow users to download filtered data tables as CSV files.",
    status: "todo", priority: "medium", label: "Engineering",
    dueDate: "Sep 22",
    assignee: { name: "Lucas Becker", initials: "LB", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
];
