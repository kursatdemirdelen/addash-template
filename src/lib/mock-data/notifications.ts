import { Locale } from "@/locales/types";

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

export const mockNotificationsTr: Notification[] = [
  {
    id: "n1",
    type: "mention",
    title: "Deniz bir yorumda sizden bahsetti",
    message: "«Yeni kontrol paneli düzeni harika olmuş, @sen — boşluklar ve hiyerarşi çok daha net hissediliyor.»",
    source: "İçerikler · Ölçeklenebilir Tasarım Sistemleri",
    timestamp: "09:42",
    group: "Today",
    read: false,
  },
  {
    id: "n2",
    type: "success",
    title: "Sürüm başarıyla canlıya alındı",
    message: "v1.4.2 üretim derlemesi yayında ve tüm sistem kontrollerinden başarıyla geçti.",
    source: "CI/CD İşlem Hattı",
    timestamp: "08:15",
    group: "Today",
    read: false,
  },
  {
    id: "n3",
    type: "warning",
    title: "Düşük stok uyarısı: USB-C Çoklayıcı 7'si 1 Arada",
    message: "Yalnızca 7 adet kaldı. Yeniden sipariş verme eşiği 10 adettir.",
    source: "Stok Yönetim Sistemi",
    timestamp: "07:03",
    group: "Today",
    read: false,
  },
  {
    id: "n4",
    type: "info",
    title: "Cem Yılmaz ekibe katıldı",
    message: "Cem daveti kabul etti ve kendisine Editör rolü atandı.",
    source: "Ekip Yönetimi",
    timestamp: "Dün, 16:30",
    group: "Yesterday",
    read: true,
  },
  {
    id: "n5",
    type: "error",
    title: "API istek limiti aşıldı",
    message: "Ödeme webhook uç noktası istek sınırına ulaştı. 3 olay yeniden deneme kuyruğuna alındı.",
    source: "API İzleme Servisi",
    timestamp: "Dün, 11:20",
    group: "Yesterday",
    read: true,
  },
  {
    id: "n6",
    type: "system",
    title: "Planlı sistem bakımı tamamlandı",
    message: "Veritabanı şema geçişi 0 hata ile tamamlandı. Kesinti süresi: 4 dakika.",
    source: "Sistem",
    timestamp: "Dün, 02:00",
    group: "Yesterday",
    read: true,
  },
  {
    id: "n7",
    type: "success",
    title: "3. Çeyrek Analitik Raporu hazır",
    message: "Üç aylık performans ve gelir raporunuz indirilmeye hazır (14 sayfa, PDF).",
    source: "Analitik",
    timestamp: "Pzt, 1 Eyl",
    group: "This Week",
    read: true,
  },
  {
    id: "n8",
    type: "mention",
    title: "Elif Kaya yazınıza yanıt verdi",
    message: "«Performans test sonuçları şaşırtıcı — Zustand ölçeklendiğinde gerçekten çok kararlı kalıyor.»",
    source: "İçerikler · 2026'da State Yönetimi",
    timestamp: "Pzt, 1 Eyl",
    group: "This Week",
    read: true,
  },
  {
    id: "n9",
    type: "info",
    title: "Yeni rol oluşturuldu: Analist",
    message: "Burak Demir yalnızca okuma yetkisine sahip yeni bir Analist rolü tanımladı.",
    source: "Roller & Yetkiler",
    timestamp: "Paz, 31 Ağu",
    group: "This Week",
    read: true,
  },
];

export const mockNotificationsEn: Notification[] = [
  {
    id: "n1",
    type: "mention",
    title: "Deniz mentioned you in a comment",
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
    title: "Cem Yılmaz joined the team",
    message: "Cem has accepted the invite and been assigned the Editor role.",
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
    title: "Elif Kaya replied to your post",
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
    message: "Burak Demir created a new Analyst role with read-only data access permissions.",
    source: "Roles & Permissions",
    timestamp: "Sun, Aug 31",
    group: "This Week",
    read: true,
  },
];

export function getMockNotifications(locale: Locale = "tr"): Notification[] {
  return locale === "en" ? mockNotificationsEn : mockNotificationsTr;
}

export const mockNotifications = mockNotificationsTr;
