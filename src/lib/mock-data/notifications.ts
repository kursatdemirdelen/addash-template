export interface Notification {
  id: string;
  type: "info" | "success" | "warning" | "error" | "mention" | "system";
  title: string;
  message: string;
  source: string;
  timestamp: string;
  group: "Today" | "Yesterday" | "This Week";
  read: boolean;
}

export const mockNotifications: Notification[] = [
  {
    id: "n1",
    type: "mention",
    title: "Sofia mentioned you in a comment",
    message: "«Great work on the new dashboard layout, @you — the spacing feels much cleaner.»",
    source: "Posts · Design Systems at Scale",
    timestamp: "9:42 am",
    group: "Today",
    read: false,
  },
  {
    id: "n2",
    type: "success",
    title: "Build deployed successfully",
    message: "Production build v1.4.2 is live and passing all health checks.",
    source: "CI/CD Pipeline",
    timestamp: "8:15 am",
    group: "Today",
    read: false,
  },
  {
    id: "n3",
    type: "warning",
    title: "Low stock alert: USB-C Hub 7-in-1",
    message: "Only 7 units remaining. Reorder threshold is 10.",
    source: "Inventory System",
    timestamp: "7:03 am",
    group: "Today",
    read: false,
  },
  {
    id: "n4",
    type: "info",
    title: "James Okafor joined the team",
    message: "James has accepted the invite and been assigned the Editor role.",
    source: "Team Management",
    timestamp: "Yesterday, 4:30 pm",
    group: "Yesterday",
    read: true,
  },
  {
    id: "n5",
    type: "error",
    title: "API rate limit exceeded",
    message: "Stripe webhook endpoint hit the rate limit. 3 events were queued for retry.",
    source: "API Monitor",
    timestamp: "Yesterday, 11:20 am",
    group: "Yesterday",
    read: true,
  },
  {
    id: "n6",
    type: "system",
    title: "Scheduled maintenance completed",
    message: "The database migration completed successfully with 0 errors. Downtime: 4 minutes.",
    source: "System",
    timestamp: "Yesterday, 2:00 am",
    group: "Yesterday",
    read: true,
  },
  {
    id: "n7",
    type: "success",
    title: "Q3 Analytics report ready",
    message: "Your quarterly performance report is ready to download. 14 pages, PDF.",
    source: "Analytics",
    timestamp: "Mon, Sep 1",
    group: "This Week",
    read: true,
  },
  {
    id: "n8",
    type: "mention",
    title: "Mia Chen replied to your post",
    message: "«The benchmark numbers are surprising — Zustand really does hold up at scale.»",
    source: "Posts · State Management in 2026",
    timestamp: "Mon, Sep 1",
    group: "This Week",
    read: true,
  },
  {
    id: "n9",
    type: "info",
    title: "New role created: Analyst",
    message: "Lucas Becker created a new Analyst role with read-only data access permissions.",
    source: "Roles & Permissions",
    timestamp: "Sun, Aug 31",
    group: "This Week",
    read: true,
  },
];
