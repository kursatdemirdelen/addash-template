export type OrderStatus = "Paid" | "Pending" | "Refunded" | "Cancelled";

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  status: OrderStatus;
  amount: number;
  itemsCount: number;
  date: string;
  paymentMethod: string;
}
