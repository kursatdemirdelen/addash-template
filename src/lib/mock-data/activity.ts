import { ActivityItem } from "@/types/common"
import { Locale } from "@/locales/types"

export const mockRecentActivityTr: ActivityItem[] = [
  {
    id: "act-1",
    type: "user",
    title: "Yeni kullanıcı kaydoldu",
    description: "Zeynep Erdoğan yönetici davetini kabul etti.",
    timestamp: "12 dk önce",
    badgeText: "Yetki",
  },
  {
    id: "act-2",
    type: "order",
    title: "Sipariş ödendi (#10231)",
    description: "Mehmet Kara $240 tutarında ödeme yaptı.",
    timestamp: "34 dk önce",
    badgeText: "Ödeme",
  },
  {
    id: "act-3",
    type: "refund",
    title: "İade tamamlandı (#10228)",
    description: "Elif Arslan hesabına $95 iade edildi.",
    timestamp: "2 saat önce",
    badgeText: "İade",
  },
  {
    id: "act-4",
    type: "security",
    title: "API anahtarı yenilendi",
    description: "Canlı ortam webhook token'ı otomatik döndürüldü.",
    timestamp: "5 saat önce",
    badgeText: "Güvenlik",
  },
  {
    id: "act-5",
    type: "order",
    title: "Sipariş ödendi (#10229)",
    description: "Laura Schmidt $480 tutarında ödeme yaptı.",
    timestamp: "1 gün önce",
    badgeText: "Ödeme",
  },
]

export const mockRecentActivityEn: ActivityItem[] = [
  {
    id: "act-1",
    type: "user",
    title: "New user joined",
    description: "Zeynep Erdoğan accepted an admin invite.",
    timestamp: "12m ago",
    badgeText: "Auth",
  },
  {
    id: "act-2",
    type: "order",
    title: "Payment received (#10231)",
    description: "Mehmet Kara paid $240.",
    timestamp: "34m ago",
    badgeText: "Payment",
  },
  {
    id: "act-3",
    type: "refund",
    title: "Refund completed (#10228)",
    description: "$95 refunded to Elif Arslan.",
    timestamp: "2h ago",
    badgeText: "Refund",
  },
  {
    id: "act-4",
    type: "security",
    title: "API token rotated",
    description: "Production webhook token auto-rotated.",
    timestamp: "5h ago",
    badgeText: "Security",
  },
  {
    id: "act-5",
    type: "order",
    title: "Payment received (#10229)",
    description: "Laura Schmidt paid $480.",
    timestamp: "1d ago",
    badgeText: "Payment",
  },
]

export function getMockRecentActivity(locale: Locale = "tr"): ActivityItem[] {
  return locale === "en" ? mockRecentActivityEn : mockRecentActivityTr
}

export const mockRecentActivity = mockRecentActivityTr
