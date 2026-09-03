export interface PaginationState {
  pageIndex: number;
  pageSize: number;
}

export interface ActivityItem {
  id: string;
  type: "user" | "order" | "refund" | "security";
  title: string;
  description: string;
  timestamp: string;
  badgeText?: string;
}

export interface StatMetric {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  caption?: string;
}
