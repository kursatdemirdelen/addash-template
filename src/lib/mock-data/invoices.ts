export type InvoiceStatus = "paid" | "pending" | "overdue" | "draft";

export interface Invoice {
  id: string;
  number: string;
  customer: string;
  issued: string;
  due: string;
  amount: number;
  status: InvoiceStatus;
}

export const mockInvoices: Invoice[] = [
  { id: "i1", number: "INV-1042", customer: "Northwind Labs", issued: "2026-10-28", due: "2026-11-27", amount: 4800, status: "pending" },
  { id: "i2", number: "INV-1041", customer: "Acme Logistics", issued: "2026-10-21", due: "2026-11-20", amount: 12450, status: "paid" },
  { id: "i3", number: "INV-1040", customer: "Bluebird Studio", issued: "2026-10-14", due: "2026-10-29", amount: 2150, status: "overdue" },
  { id: "i4", number: "INV-1039", customer: "Helix Health", issued: "2026-10-09", due: "2026-11-08", amount: 9300, status: "paid" },
  { id: "i5", number: "INV-1038", customer: "Orbit Retail", issued: "2026-10-03", due: "2026-10-18", amount: 3720, status: "overdue" },
  { id: "i6", number: "INV-1037", customer: "Kite Finance", issued: "2026-09-29", due: "2026-10-29", amount: 7600, status: "paid" },
  { id: "i7", number: "INV-1036", customer: "Northwind Labs", issued: "2026-09-22", due: "2026-10-22", amount: 4800, status: "paid" },
  { id: "i8", number: "INV-1043", customer: "Fjord Energy", issued: "2026-11-05", due: "2026-12-05", amount: 15900, status: "draft" },
];
