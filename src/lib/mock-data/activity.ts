import { ActivityItem } from "@/types/common";

export const mockRecentActivity: ActivityItem[] = [
  {
    id: "act-1",
    type: "user",
    title: "New user registered",
    description: "Elena Rostova accepted an admin invite.",
    timestamp: "12m ago",
    badgeText: "Auth",
  },
  {
    id: "act-2",
    type: "order",
    title: "Order paid (#10231)",
    description: "John Doe completed payment of $240.",
    timestamp: "34m ago",
    badgeText: "Payment",
  },
  {
    id: "act-3",
    type: "refund",
    title: "Refund processed (#10228)",
    description: "Issued $95 refund to Elena Rostova.",
    timestamp: "2h ago",
    badgeText: "Refund",
  },
  {
    id: "act-4",
    type: "security",
    title: "API token rotated",
    description: "Production webhook token refreshed by system.",
    timestamp: "5h ago",
    badgeText: "Security",
  },
  {
    id: "act-5",
    type: "order",
    title: "Order paid (#10229)",
    description: "Marcus Vance completed payment of $480.",
    timestamp: "1d ago",
    badgeText: "Payment",
  },
];
