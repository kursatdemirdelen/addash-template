import { Locale } from "@/locales/types";

export interface Message {
  id: string;
  from: { name: string; initials: string; avatarUrl?: string };
  subject: string;
  preview: string;
  timestamp: string;
  read: boolean;
  starred: boolean;
  label?: "urgent" | "team" | "client" | "system";
}

export const mockMessagesTr: Message[] = [
  {
    id: "msg1",
    from: { name: "Deniz Aydın", initials: "DA", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces&q=80" },
    subject: "Q3 Tasarım İncelemesi — Son Geri Bildirimler",
    preview: "Merhaba, dünkü tasarım incelemesinden alınan notları ve açıklamalı PDF dosyasını ekledim. Ana başlıklar: mobil gezinmedeki boşlukları azaltmak ve kart başlıklarındaki tipografiyi netleştirmek...",
    timestamp: "09:42", read: false, starred: true, label: "team",
  },
  {
    id: "msg2",
    from: { name: "Burak Demir", initials: "BD", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces&q=80" },
    subject: "Playwright E2E test PR'ı incelemeye hazır",
    preview: "Selamlar, uçtan uca test kurulumu için taslak PR açtım. Kayıt olma, dashboard navigasyonu ve ayarlar güncellemelerini kapsıyor. İnceleyebilirseniz sevinirim...",
    timestamp: "08:15", read: false, starred: false, label: "team",
  },
  {
    id: "msg3",
    from: { name: "Stripe", initials: "ST" },
    subject: "Aksiyon Gerekli: Banka hesabınızı doğrulayın",
    preview: "Ödemelerin kesintisiz aktarılması için bağlı banka hesabınızı 10 Eylül tarihine kadar doğrulamanız gerekmektedir. İşlemi tamamlamak için Stripe panelinize giriş yapın...",
    timestamp: "Dün", read: false, starred: false, label: "urgent",
  },
  {
    id: "msg4",
    from: { name: "Selin Arslan", initials: "SA", avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&h=64&fit=crop&crop=faces&q=80" },
    subject: "Kullanıcı karşılama akışı — yeni tel kafes tasarımları",
    preview: "Konuştuğumuz 2 adımlı akış üzerinde çalıştım. Ana değişiklik, e-posta doğrulamasını kayıt akışını tıkamadan kayıt sonrasına taşımak oldu. Video kaydı ektedir...",
    timestamp: "Dün", read: true, starred: true, label: "team",
  },
  {
    id: "msg5",
    from: { name: "Acme Corp.", initials: "AC" },
    subject: "YNT: Yıllık abonelik yenileme teklifi",
    preview: "Fiyat teklifi için teşekkür ederiz. 25 kişilik ekip için Kurumsal (Enterprise) paket ile devam etmek istiyoruz. Güncel sözleşmeyi hukuk birimimize iletebilir misiniz...",
    timestamp: "Pzt", read: true, starred: false, label: "client",
  },
  {
    id: "msg6",
    from: { name: "GitHub", initials: "GH" },
    subject: "Güvenlik uyarısı: Dependabot 3 güvenlik açığı buldu",
    preview: "Dependabot bağımlılıklarınızda 3 güvenlik açığı tespit etti (1 kritik, 2 orta seviye). Etkilenen paketleri inceleyip güncellemeniz önerilir...",
    timestamp: "Pzt", read: true, starred: false, label: "system",
  },
  {
    id: "msg7",
    from: { name: "Elif Kaya", initials: "EK", avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop&crop=faces&q=80" },
    subject: "LCP optimizasyonu birleştirildi (merged) ✓",
    preview: "Tüm görsel bileşenleri Next/Image ve öncelik ipuçlarıyla güncellendi. Lighthouse skoru dashboard sayfasında 72'den 94'e çıktı. İlgili görevi kapatıyorum!",
    timestamp: "Paz", read: true, starred: false, label: "team",
  },
];

export const mockMessagesEn: Message[] = [
  {
    id: "msg1",
    from: { name: "Deniz Aydın", initials: "DA", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces&q=80" },
    subject: "Q3 Design review — final feedback",
    preview: "Hi, I've attached the final annotated PDF from yesterday's design review. The main takeaways are: reduce spacing on mobile nav, swap the serif heading for the dashboard card titles...",
    timestamp: "9:42 am", read: false, starred: true, label: "team",
  },
  {
    id: "msg2",
    from: { name: "Burak Demir", initials: "BD", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces&q=80" },
    subject: "Playwright setup PR is ready for review",
    preview: "Hey, opened a draft PR for the E2E test setup. Covered signup, dashboard navigation, and settings. Would appreciate a review before I convert to ready...",
    timestamp: "8:15 am", read: false, starred: false, label: "team",
  },
  {
    id: "msg3",
    from: { name: "Stripe", initials: "ST" },
    subject: "Action required: Verify your bank account",
    preview: "To continue processing payouts, please verify your connected bank account by September 10. Log in to your Stripe dashboard to complete this step...",
    timestamp: "Yesterday", read: false, starred: false, label: "urgent",
  },
  {
    id: "msg4",
    from: { name: "Selin Arslan", initials: "SA", avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&h=64&fit=crop&crop=faces&q=80" },
    subject: "Onboarding flow — new wireframes attached",
    preview: "I've iterated on the 2-step flow we discussed. The main change is moving email verification to post-signup rather than blocking it. Loom walkthrough is attached...",
    timestamp: "Yesterday", read: true, starred: true, label: "team",
  },
  {
    id: "msg5",
    from: { name: "Acme Corp.", initials: "AC" },
    subject: "RE: Annual subscription renewal",
    preview: "Thanks for the quote. We'd like to proceed with the Enterprise tier for 25 seats. Please send over the updated contract to our legal team at legal@acmecorp.com...",
    timestamp: "Mon", read: true, starred: false, label: "client",
  },
  {
    id: "msg6",
    from: { name: "GitHub", initials: "GH" },
    subject: "Security alert: Dependabot found 3 vulnerabilities",
    preview: "Dependabot has found 3 vulnerabilities in your dependencies. 1 critical, 2 moderate. Review and update affected packages at your earliest convenience...",
    timestamp: "Mon", read: true, starred: false, label: "system",
  },
  {
    id: "msg7",
    from: { name: "Elif Kaya", initials: "EK", avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop&crop=faces&q=80" },
    subject: "LCP optimization — merged ✓",
    preview: "All image components are now using Next/Image with priority hints. Lighthouse score went from 72 to 94 on the dashboard route. Closing the ticket!",
    timestamp: "Sun", read: true, starred: false, label: "team",
  },
];

export function getMockMessages(locale: Locale = "tr"): Message[] {
  return locale === "en" ? mockMessagesEn : mockMessagesTr;
}

export const mockMessages = mockMessagesTr;
