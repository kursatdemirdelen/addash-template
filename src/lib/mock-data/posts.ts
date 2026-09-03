export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: { name: string; initials: string; avatarUrl?: string };
  category: string;
  status: "Published" | "Draft" | "Scheduled";
  publishedAt: string;
  wordCount: number;
  readTime: string;
}

export const mockPosts: Post[] = [
  {
    id: "p1",
    title: "Getting Started with Next.js 16 App Router",
    slug: "getting-started-nextjs-16",
    excerpt: "A comprehensive guide to migrating your existing projects to the new App Router paradigm with server components.",
    author: { name: "Sofia Andersson", initials: "SA", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces&q=80" },
    category: "Engineering",
    status: "Published",
    publishedAt: "Sep 1, 2026",
    wordCount: 2840,
    readTime: "12 min",
  },
  {
    id: "p2",
    title: "Design Systems at Scale: Lessons Learned",
    slug: "design-systems-at-scale",
    excerpt: "How we built and maintained a coherent design system across 14 products and 6 engineering teams.",
    author: { name: "Amara Diallo", initials: "AD", avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&h=64&fit=crop&crop=faces&q=80" },
    category: "Design",
    status: "Published",
    publishedAt: "Aug 28, 2026",
    wordCount: 3420,
    readTime: "14 min",
  },
  {
    id: "p3",
    title: "Tailwind CSS v4: What's New and How to Upgrade",
    slug: "tailwind-v4-upgrade-guide",
    excerpt: "Deep-dive into the new @theme directive, native cascade layers, and zero-config approach in Tailwind v4.",
    author: { name: "Mia Chen", initials: "MC", avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop&crop=faces&q=80" },
    category: "Engineering",
    status: "Draft",
    publishedAt: "—",
    wordCount: 1920,
    readTime: "8 min",
  },
  {
    id: "p4",
    title: "The Case for Monorepos in 2026",
    slug: "monorepos-in-2026",
    excerpt: "Turborepo, Nx, and Bun workspaces compared — choosing the right tool for your team's structure.",
    author: { name: "Lucas Becker", initials: "LB", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces&q=80" },
    category: "Infrastructure",
    status: "Scheduled",
    publishedAt: "Sep 10, 2026",
    wordCount: 2100,
    readTime: "9 min",
  },
  {
    id: "p5",
    title: "Building Accessible Forms with React Hook Form",
    slug: "accessible-forms-react-hook-form",
    excerpt: "WCAG 2.2 compliant form patterns with real-time validation, error announcements, and keyboard navigation.",
    author: { name: "James Okafor", initials: "JO", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces&q=80" },
    category: "Accessibility",
    status: "Published",
    publishedAt: "Aug 20, 2026",
    wordCount: 1680,
    readTime: "7 min",
  },
  {
    id: "p6",
    title: "State Management in 2026: Zustand vs Jotai vs Valtio",
    slug: "state-management-2026",
    excerpt: "A practical benchmark comparing the three leading lightweight state managers for React applications.",
    author: { name: "Sofia Andersson", initials: "SA", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces&q=80" },
    category: "Engineering",
    status: "Draft",
    publishedAt: "—",
    wordCount: 3100,
    readTime: "13 min",
  },
  {
    id: "p7",
    title: "Typography for Developer Tools: A Field Guide",
    slug: "typography-developer-tools",
    excerpt: "Why monospace hierarchy, letter-spacing tokens, and editorial type choices matter in technical interfaces.",
    author: { name: "Amara Diallo", initials: "AD", avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&h=64&fit=crop&crop=faces&q=80" },
    category: "Design",
    status: "Scheduled",
    publishedAt: "Sep 15, 2026",
    wordCount: 2250,
    readTime: "10 min",
  },
  {
    id: "p8",
    title: "PostgreSQL Full-Text Search: A Practical Guide",
    slug: "postgres-full-text-search",
    excerpt: "tsvector, tsquery, GIN indexes, and ranking — everything you need to ship production search.",
    author: { name: "Lucas Becker", initials: "LB", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces&q=80" },
    category: "Database",
    status: "Published",
    publishedAt: "Aug 12, 2026",
    wordCount: 4100,
    readTime: "17 min",
  },
];
