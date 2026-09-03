import { Locale } from "@/locales/types";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  assignee: { name: string; initials: string; avatarUrl?: string };
  label: string;
  dueDate: string;
}

export const mockTasksTr: Task[] = [
  {
    id: "t1",
    title: "Kayıt olma akışını sadeleştir",
    description: "Kullanıcı araştırması bulgularına dayanarak 5 adımlı kayıt sürecini 2 adıma düşür.",
    status: "in-progress",
    priority: "high",
    label: "Tasarım",
    dueDate: "8 Eyl",
    assignee: { name: "Selin Arslan", initials: "SA", avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t2",
    title: "Kimlik doğrulama altyapısını güncelle",
    description: "Oturum güvenliğini artırmak için özel JWT sistemini Clerk altyapısıyla değiştir.",
    status: "todo",
    priority: "high",
    label: "Mühendislik",
    dueDate: "12 Eyl",
    assignee: { name: "Elif Kaya", initials: "EK", avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t3",
    title: "3. Çeyrek değerlendirme raporunu hazırla",
    description: "Q4 planlaması için nelerin iyi çalıştığını, zorlukları ve çıkarılan dersleri özetle.",
    status: "todo",
    priority: "medium",
    label: "Dokümantasyon",
    dueDate: "15 Eyl",
    assignee: { name: "Deniz Aydın", initials: "DA", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t4",
    title: "Playwright ile uçtan uca (E2E) testleri kur",
    description: "Kritik kullanıcı akışlarını kapsa: kayıt olma, ödeme adımı ve ayarlar güncellemesi.",
    status: "in-progress",
    priority: "medium",
    label: "Mühendislik",
    dueDate: "10 Eyl",
    assignee: { name: "Burak Demir", initials: "BD", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t5",
    title: "Blog taslağı: '2026'da State Yönetimi'",
    description: "Zustand, Jotai ve Valtio kütüphanelerini performans ve geliştirici deneyimiyle karşılaştır.",
    status: "in-progress",
    priority: "low",
    label: "İçerik",
    dueDate: "20 Eyl",
    assignee: { name: "Cem Yılmaz", initials: "CY", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t6",
    title: "Erişilebilirlik denetimi — WCAG 2.2",
    description: "axe-core denetimini çalıştır ve tespit edilen tüm Seviye A ve AA uyumsuzluklarını çöz.",
    status: "todo",
    priority: "high",
    label: "Erişilebilirlik",
    dueDate: "18 Eyl",
    assignee: { name: "Selin Arslan", initials: "SA", avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t7",
    title: "README görsellerini ve kılavuzları güncelle",
    description: "Kontrol paneli, analitik ve bildirimler ekran görüntülerini belgelere ekle.",
    status: "done",
    priority: "low",
    label: "Dokümantasyon",
    dueDate: "3 Eyl",
    assignee: { name: "Deniz Aydın", initials: "DA", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t8",
    title: "Görsel yükleme performansını (LCP) optimize et",
    description: "Ekranın üst kısmındaki görsellerde öncelik ipuçlarıyla Next.js Image bileşenine geç.",
    status: "done",
    priority: "medium",
    label: "Performans",
    dueDate: "1 Eyl",
    assignee: { name: "Elif Kaya", initials: "EK", avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t9",
    title: "Analitik sayfasına CSV dışa aktarımı ekle",
    description: "Kullanıcıların filtrelenmiş veri tablolarını CSV dosyası olarak indirmelerine izin ver.",
    status: "todo",
    priority: "medium",
    label: "Mühendislik",
    dueDate: "22 Eyl",
    assignee: { name: "Burak Demir", initials: "BD", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
];

export const mockTasksEn: Task[] = [
  {
    id: "t1",
    title: "Redesign onboarding flow",
    description: "Simplify the 5-step signup to 2 steps based on user research findings.",
    status: "in-progress",
    priority: "high",
    label: "Design",
    dueDate: "Sep 8",
    assignee: { name: "Selin Arslan", initials: "SA", avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t2",
    title: "Migrate auth to Clerk",
    description: "Replace custom JWT system with Clerk for better session management.",
    status: "todo",
    priority: "high",
    label: "Engineering",
    dueDate: "Sep 12",
    assignee: { name: "Elif Kaya", initials: "EK", avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t3",
    title: "Write Q3 retrospective",
    description: "Summarize what worked, what didn't, and key learnings for Q4 planning.",
    status: "todo",
    priority: "medium",
    label: "Documentation",
    dueDate: "Sep 15",
    assignee: { name: "Deniz Aydın", initials: "DA", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t4",
    title: "Set up E2E testing with Playwright",
    description: "Cover critical user flows: signup, checkout, and settings update.",
    status: "in-progress",
    priority: "medium",
    label: "Engineering",
    dueDate: "Sep 10",
    assignee: { name: "Burak Demir", initials: "BD", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t5",
    title: "Draft blog post: 'State management in 2026'",
    description: "Compare Zustand, Jotai, and Valtio with benchmarks and DX notes.",
    status: "in-progress",
    priority: "low",
    label: "Content",
    dueDate: "Sep 20",
    assignee: { name: "Cem Yılmaz", initials: "CY", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t6",
    title: "Accessibility audit — WCAG 2.2",
    description: "Run axe-core audit and resolve all Level A and AA issues.",
    status: "todo",
    priority: "high",
    label: "Accessibility",
    dueDate: "Sep 18",
    assignee: { name: "Selin Arslan", initials: "SA", avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t7",
    title: "Update README with new screenshots",
    description: "Add dashboard, analytics, and notifications screenshots to the README.",
    status: "done",
    priority: "low",
    label: "Documentation",
    dueDate: "Sep 3",
    assignee: { name: "Deniz Aydın", initials: "DA", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t8",
    title: "Optimize image loading — LCP",
    description: "Switch to Next.js Image component with priority hints on above-the-fold images.",
    status: "done",
    priority: "medium",
    label: "Performance",
    dueDate: "Sep 1",
    assignee: { name: "Elif Kaya", initials: "EK", avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
  {
    id: "t9",
    title: "Add CSV export to analytics page",
    description: "Allow users to download filtered data tables as CSV files.",
    status: "todo",
    priority: "medium",
    label: "Engineering",
    dueDate: "Sep 22",
    assignee: { name: "Burak Demir", initials: "BD", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces&q=80" },
  },
];

export function getMockTasks(locale: Locale = "tr"): Task[] {
  return locale === "en" ? mockTasksEn : mockTasksTr;
}

export const mockTasks = mockTasksTr;
