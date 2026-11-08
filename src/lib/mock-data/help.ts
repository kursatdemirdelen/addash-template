import type { Locale } from "@/locales/types";

export type HelpCategoryId = "start" | "billing" | "security" | "integrations";

export interface HelpCategory {
  id: HelpCategoryId;
  title: string;
  description: string;
  articles: number;
}

export interface HelpFaq {
  id: string;
  question: string;
  answer: string;
}

const categories: Record<Locale, HelpCategory[]> = {
  en: [
    { id: "start", title: "Getting started", description: "Set up your workspace and invite your team.", articles: 12 },
    { id: "billing", title: "Billing", description: "Plans, invoices and payment methods.", articles: 8 },
    { id: "security", title: "Security", description: "Two-factor sign-in, roles and audit trail.", articles: 9 },
    { id: "integrations", title: "Integrations", description: "Connect the tools your team already uses.", articles: 6 },
  ],
  tr: [
    { id: "start", title: "Başlarken", description: "Çalışma alanını kur, ekibini davet et.", articles: 12 },
    { id: "billing", title: "Ödeme", description: "Planlar, faturalar ve ödeme yöntemleri.", articles: 8 },
    { id: "security", title: "Güvenlik", description: "İki adımlı giriş, roller ve denetim kaydı.", articles: 9 },
    { id: "integrations", title: "Entegrasyonlar", description: "Ekibinin kullandığı araçları bağla.", articles: 6 },
  ],
};

const faqs: Record<Locale, Omit<HelpFaq, "id">[]> = {
  en: [
    { question: "How do I invite a teammate?", answer: "Open Team, choose Invite, enter an email and pick a role. They get a link that is valid for seven days." },
    { question: "Can I change a role later?", answer: "Yes. Open Roles, find the person and pick a new role. The change applies the next time they load a page." },
    { question: "Where can I download my invoices?", answer: "Open Invoices and use the row menu of any invoice. Paid invoices can also be exported as a PDF." },
    { question: "How do I turn on two-factor sign-in?", answer: "Go to Settings, then Account, and switch on two-factor authentication. You will be asked to confirm with a passkey." },
    { question: "Is my activity recorded?", answer: "Security, content, billing and access events are listed in the Audit log with the time and the IP address." },
  ],
  tr: [
    { question: "Bir ekip arkadaşını nasıl davet ederim?", answer: "Ekip sayfasında Davet et'i seç, e-postayı yaz ve bir rol belirle. Gönderilen bağlantı yedi gün geçerli." },
    { question: "Bir rolü sonradan değiştirebilir miyim?", answer: "Evet. Roller sayfasında kişiyi bul ve yeni bir rol seç. Değişiklik kişi sayfayı bir sonraki yüklediğinde geçerli olur." },
    { question: "Faturalarımı nereden indirebilirim?", answer: "Faturalar sayfasında her faturanın satır menüsünü kullan. Ödenmiş faturalar PDF olarak da alınabilir." },
    { question: "İki adımlı girişi nasıl açarım?", answer: "Ayarlar'dan Hesap'a git ve iki adımlı doğrulamayı aç. Bir geçiş anahtarıyla onaylaman istenir." },
    { question: "Yaptıklarım kaydediliyor mu?", answer: "Güvenlik, içerik, ödeme ve erişim olayları zamanı ve IP adresiyle Denetim kaydı'nda listelenir." },
  ],
};

export function getMockHelp(locale: Locale) {
  return {
    categories: categories[locale],
    faqs: faqs[locale].map((faq, index) => ({ id: `f${index}`, ...faq })),
  };
}
