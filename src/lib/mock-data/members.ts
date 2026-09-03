import { Locale } from "@/locales/types"

export interface Member {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "away" | "offline"
  lastSeen: string
  avatarUrl?: string
  initials: string
}

export const mockMembersTr: Member[] = [
  {
    id: "m1",
    name: "Deniz Aydın",
    email: "deniz@addash.dev",
    role: "Yönetici",
    status: "active",
    lastSeen: "Az önce",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces&q=80",
    initials: "DA",
  },
  {
    id: "m2",
    name: "Cem Yılmaz",
    email: "cem@addash.dev",
    role: "Editör",
    status: "active",
    lastSeen: "2 dk önce",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces&q=80",
    initials: "CY",
  },
  {
    id: "m3",
    name: "Elif Kaya",
    email: "elif@addash.dev",
    role: "Geliştirici",
    status: "active",
    lastSeen: "8 dk önce",
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&fit=crop&crop=faces&q=80",
    initials: "EK",
  },
  {
    id: "m4",
    name: "Burak Demir",
    email: "burak@addash.dev",
    role: "Analist",
    status: "away",
    lastSeen: "1 saat önce",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces&q=80",
    initials: "BD",
  },
  {
    id: "m5",
    name: "Selin Arslan",
    email: "selin@addash.dev",
    role: "Tasarımcı",
    status: "offline",
    lastSeen: "Dün",
    avatarUrl:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=96&h=96&fit=crop&crop=faces&q=80",
    initials: "SA",
  },
]

export const mockMembersEn: Member[] = [
  {
    id: "m1",
    name: "Deniz Aydın",
    email: "deniz@addash.dev",
    role: "Admin",
    status: "active",
    lastSeen: "Just now",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces&q=80",
    initials: "DA",
  },
  {
    id: "m2",
    name: "Cem Yılmaz",
    email: "cem@addash.dev",
    role: "Editor",
    status: "active",
    lastSeen: "2 min ago",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces&q=80",
    initials: "CY",
  },
  {
    id: "m3",
    name: "Elif Kaya",
    email: "elif@addash.dev",
    role: "Developer",
    status: "active",
    lastSeen: "8 min ago",
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&fit=crop&crop=faces&q=80",
    initials: "EK",
  },
  {
    id: "m4",
    name: "Burak Demir",
    email: "burak@addash.dev",
    role: "Analyst",
    status: "away",
    lastSeen: "1 hr ago",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces&q=80",
    initials: "BD",
  },
  {
    id: "m5",
    name: "Selin Arslan",
    email: "selin@addash.dev",
    role: "Designer",
    status: "offline",
    lastSeen: "Yesterday",
    avatarUrl:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=96&h=96&fit=crop&crop=faces&q=80",
    initials: "SA",
  },
]

export function getMockMembers(locale: Locale = "tr"): Member[] {
  return locale === "en" ? mockMembersEn : mockMembersTr
}

export const mockMembers = mockMembersTr
