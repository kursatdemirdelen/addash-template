import type { Locale } from "@/locales/types";

export type AuditType = "security" | "content" | "billing" | "access";

export interface AuditEntry {
  id: string;
  type: AuditType;
  actor: string;
  action: string;
  target: string;
  time: string;
  ip: string;
}

type Row = Omit<AuditEntry, "id">;

const en: Row[] = [
  { type: "security", actor: "Deniz Aksoy", action: "enabled two-factor authentication for", target: "their account", time: "Today, 11:24", ip: "88.241.12.7" },
  { type: "content", actor: "Elif Kaya", action: "published the post", target: "Scaling Design Systems", time: "Today, 09:52", ip: "78.172.40.3" },
  { type: "access", actor: "Can Demir", action: "changed the role of Mert Yıldız to", target: "Editor", time: "Today, 08:10", ip: "212.58.3.19" },
  { type: "billing", actor: "System", action: "sent the invoice", target: "INV-1042 to Northwind Labs", time: "Yesterday, 17:45", ip: "—" },
  { type: "security", actor: "Mert Yıldız", action: "signed in from a new device:", target: "Chrome on Windows", time: "Yesterday, 14:02", ip: "176.42.99.21" },
  { type: "content", actor: "Elif Kaya", action: "moved the post to drafts:", target: "Q4 Roadmap Notes", time: "Yesterday, 10:31", ip: "78.172.40.3" },
  { type: "access", actor: "Deniz Aksoy", action: "invited", target: "ayse@example.com as Analyst", time: "Mon, 16:20", ip: "88.241.12.7" },
  { type: "billing", actor: "Can Demir", action: "marked the invoice as paid:", target: "INV-1041", time: "Mon, 12:05", ip: "212.58.3.19" },
];

const tr: Row[] = [
  { type: "security", actor: "Deniz Aksoy", action: "hesabı için iki adımlı doğrulamayı açtı", target: "", time: "Bugün, 11:24", ip: "88.241.12.7" },
  { type: "content", actor: "Elif Kaya", action: "yazıyı yayınladı:", target: "Ölçeklenebilir Tasarım Sistemleri", time: "Bugün, 09:52", ip: "78.172.40.3" },
  { type: "access", actor: "Can Demir", action: "Mert Yıldız'ın rolünü değiştirdi:", target: "Editör", time: "Bugün, 08:10", ip: "212.58.3.19" },
  { type: "billing", actor: "Sistem", action: "faturayı gönderdi:", target: "INV-1042 · Northwind Labs", time: "Dün, 17:45", ip: "—" },
  { type: "security", actor: "Mert Yıldız", action: "yeni bir cihazdan giriş yaptı:", target: "Windows üzerinde Chrome", time: "Dün, 14:02", ip: "176.42.99.21" },
  { type: "content", actor: "Elif Kaya", action: "yazıyı taslağa aldı:", target: "4. Çeyrek Yol Haritası Notları", time: "Dün, 10:31", ip: "78.172.40.3" },
  { type: "access", actor: "Deniz Aksoy", action: "davet etti:", target: "ayse@example.com · Analist", time: "Pzt, 16:20", ip: "88.241.12.7" },
  { type: "billing", actor: "Can Demir", action: "faturayı ödendi işaretledi:", target: "INV-1041", time: "Pzt, 12:05", ip: "212.58.3.19" },
];

export function getMockAuditLog(locale: Locale): AuditEntry[] {
  return (locale === "tr" ? tr : en).map((row, index) => ({ id: `a${index}`, ...row }));
}
