export interface RevenuePoint {
  month: string;
  revenue: number;
  orders: number;
  expenses: number;
}

export const mockRevenueData: RevenuePoint[] = [
  { month: "Jan", revenue: 24500, orders: 820, expenses: 14000 },
  { month: "Feb", revenue: 29800, orders: 940, expenses: 15200 },
  { month: "Mar", revenue: 33400, orders: 1050, expenses: 16800 },
  { month: "Apr", revenue: 31200, orders: 980, expenses: 15900 },
  { month: "May", revenue: 38900, orders: 1190, expenses: 17500 },
  { month: "Jun", revenue: 42100, orders: 1240, expenses: 18200 },
  { month: "Jul", revenue: 39500, orders: 1180, expenses: 17800 },
  { month: "Aug", revenue: 45200, orders: 1320, expenses: 19100 },
  { month: "Sep", revenue: 42840, orders: 1284, expenses: 18400 },
];
