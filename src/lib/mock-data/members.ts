export interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "away" | "offline";
  lastSeen: string;
  avatarUrl?: string;
  initials: string;
}

export const mockMembers: Member[] = [
  {
    id: "m1",
    name: "Sofia Andersson",
    email: "sofia@example.com",
    role: "Administrator",
    status: "active",
    lastSeen: "Just now",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces&q=80",
    initials: "SA",
  },
  {
    id: "m2",
    name: "James Okafor",
    email: "james@example.com",
    role: "Editor",
    status: "active",
    lastSeen: "2 min ago",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces&q=80",
    initials: "JO",
  },
  {
    id: "m3",
    name: "Mia Chen",
    email: "mia@example.com",
    role: "Developer",
    status: "active",
    lastSeen: "15 min ago",
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&fit=crop&crop=faces&q=80",
    initials: "MC",
  },
  {
    id: "m4",
    name: "Lucas Becker",
    email: "lucas@example.com",
    role: "Analyst",
    status: "away",
    lastSeen: "1 hr ago",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces&q=80",
    initials: "LB",
  },
  {
    id: "m5",
    name: "Amara Diallo",
    email: "amara@example.com",
    role: "Designer",
    status: "offline",
    lastSeen: "Yesterday",
    avatarUrl:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=96&h=96&fit=crop&crop=faces&q=80",
    initials: "AD",
  },
];
