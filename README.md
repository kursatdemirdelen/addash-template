# Addash — Modern Admin Dashboard Starter

<div align="left">
  <a href="README.md"><strong>English</strong></a> · <a href="README.tr.md"><strong>Türkçe</strong></a>
</div>

<br />

A fast, minimal, multi-purpose admin dashboard starter template built with **Next.js 16 (Turbopack)**, **React 19**, and **Tailwind CSS v4**. Free and open-source under the MIT license.

> Designed to be the cleanest, most extensible starting point for any administrative interface — SaaS applications, internal tools, analytics suites, content management systems, CRM directories, or client portals.

---

## ✨ Features & 13 Real-World UI Patterns

Addash is designed as a comprehensive collection of modern, production-grade UI patterns:

1. **Dashboard (`/dashboard`)** — Operational throughput overview, team pulse counters, customizable metric cards with sparklines, active team avatars, and real-time event feeds.
2. **Analytics (`/analytics`)** — In-depth reporting suite with a 6-indicator horizontal scorecard, dual charts (area revenue trend + stacked monthly breakdown), and period tables with margin progress bars.
3. **Tasks (`/tasks`)** — Kanban board pattern with multi-column status lanes (To Do, In Progress, Done), priority tags, assignee avatars, and due date tracking.
4. **Messages (`/messages`)** — Split-view inbox pattern with search filtering, read/unread states, starred items, message labels, and inline quick reply.
5. **Files (`/files`)** — Cloud storage manager with list/grid view toggle, quota progress bar, file-type icons, and sharing indicators.
6. **Posts (`/posts`)** — CMS and blog management table with status tabs (Published, Draft, Scheduled), word count, reading time, and author metadata.
7. **Products (`/products`)** — E-commerce / catalog view with thumbnail previews, inventory progress bars, and stock level badges.
8. **Customers (`/customers`)** — CRM directory with account tiers (Enterprise, Pro, Starter), MRR tracking, status indicators, and contact actions.
9. **Team Management (`/users`)** — Member roster with search, sorting, status pills, and detail view drawers.
10. **Roles & Permissions (`/roles`)** — Role summary cards with a full grouped RBAC permission matrix.
11. **Notifications (`/notifications`)** — Timeline grouped notification center (Today, Yesterday, This Week) with click-to-read actions and category badges.
12. **Settings (`/settings`)** — Tabbed configuration for public profiles, account passkeys, and destructive danger zones.
13. **System States & Edge Cases (`/states`)** — Broadsheet error boundaries (`error.tsx`), access restriction (`/forbidden`), loading skeletons (`loading.tsx`), empty state presets, and settlement receipts (`/success`).

---

## 🎨 Design System & 5 Prebuilt Themes

Built on an intentional broadsheet-inspired design system with hairline borders, zero artificial drop shadows, and high-contrast typography:

| Token | Default Hex | Semantic Role |
|---|---|---|
| `parchment` | `#dbdad7` | Canvas background and hairline 1px borders |
| `paper` | `#ffffff` | Elevated surfaces, card backgrounds |
| `sand` | `#e6e4e0` | Hover states, segmented controls, table headers |
| `ink` | `#121212` | High-contrast primary text and brand accents |
| `smoke` | `#616161` | Secondary labels, timestamps, subtle borders |
| `charcoal` | `#18181b` | Primary dark button fills |
| `moss` | `#22c55e` | Active status, success indicators, Member role |
| `amber` | `#f59e0b` | Warnings, pending states, Analyst role |
| `rose` | `#f43f5e` | Errors, high priority, danger zone |
| `sky` | `#0ea5e9` | Informational badges, links, Editor role |
| `violet` | `#8b5cf6` | Admin role, featured badges, enterprise tier |

### 🌗 Instant Theme Switching
Switch themes on the fly using the built-in palette switcher in the header, or set `data-theme` on `<html>`:

- **Warm** (Default) — Creamy parchment paper with rich ink typography.
- **Dark** — Sleek, deep charcoal with crisp borders and zero glare.
- **Ocean** — Slate and maritime blue tones.
- **Forest** — Muted pine and organic sage accents.
- **Rose** — Editorial blush canvas with warm burgundy contrast.

> **Semantic Stability**: Themes only adjust surface and background tokens (`parchment`, `paper`, `sand`, `ink`, `smoke`). Semantic status colors (Active = Green, Suspended = Red, etc.) remain constant across all themes.

---

## 🌐 End-to-End Internationalization (i18n)

Addash includes a lightweight, zero-dependency, and fully type-safe internationalization system:
- **Languages**: English (`EN`) and Turkish (`TR`) supported out of the box.
- **Header Switcher**: Quick Globe toggle button (`[ 🌐 EN ]` / `[ 🌐 TR ]`) in the top navigation bar.
- **Zero Page Reloads**: Driven by reactive Zustand state and persisted in `localStorage`.
- **Complete Coverage**: Every page, breadcrumb, table header, pagination indicator, and form label dynamically adapts.
- **Extensible**: Add a new language in minutes by creating a single dictionary in `src/locales/` satisfying the `Dictionary` TypeScript interface.

---

## 🚀 Fast Command Palette (`⌘K` / `/`)

Press `⌘K` (or `Ctrl+K` / click "Quick jump…") to open the keyboard-navigable command palette:
- **Keyboard navigation**: `↑` / `↓` ok tuşları ile gezin, `Enter` ile seç, `ESC` ile kapat.
- **Fuzzy & Keyword search**: Jump directly to any of the 12 pages using English or Turkish keywords (*"tasks"*, *"görev"*, *"katalog"*, *"analytics"*, vb.).
- **Hardware-accelerated**: Engineered with zero backdrop-blur overhead for buttery-smooth 60+ FPS performance.

---

## 📁 Project Architecture

```
src/
├── app/                    # Next.js 16 App Router (19 routes)
│   ├── (auth)/login/       # Authentication route
│   └── (dashboard)/        # Dashboard workspace routes
│       ├── dashboard/      # Throughput overview
│       ├── analytics/      # Deep-dive charts & period table
│       ├── tasks/          # Kanban board
│       ├── messages/       # Split-view inbox
│       ├── files/          # File manager & storage
│       ├── posts/          # Content & CMS
│       ├── products/       # Catalog & inventory
│       ├── customers/      # CRM & client directory
│       ├── users/          # Team member roster & details
│       ├── roles/          # RBAC permission matrix
│       ├── notifications/  # Notification center
│       └── settings/       # Profile, account, security
├── components/
│   ├── ui/                 # Primitives (Button, Card, Badge, RoleBadge, Dialog...)
│   ├── layout/             # AppShell, Sidebar, Header, ThemeSwitcher, LanguageSwitcher
│   ├── data-display/       # StatCard, DataTable, Metric
│   └── navigation/         # NavItem, Breadcrumbs, UserMenu
├── features/               # Feature-sliced modules (pages, tables, widgets)
├── config/
│   ├── site.ts             # Global identity & user profile
│   ├── navigation.ts       # Localized sidebar menu structure
│   └── roles.ts            # Centralized RBAC role definitions
├── hooks/
│   └── use-translation.ts  # Type-safe i18n hook
├── locales/                # Dictionaries (en.ts, tr.ts, types.ts)
├── lib/
│   ├── utils.ts            # Class merging (cn) & formatters
│   └── mock-data/          # Modular datasets
├── store/
│   └── app-store.ts        # Zustand: sidebar, theme & locale persistence
└── types/                  # Shared TypeScript interfaces
```

---

## 🛠️ Quickstart

### Prerequisites
- **Node.js**: v18.18.0 or higher
- **Package Manager**: npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/addash-template.git
cd addash-template

# Install dependencies
npm install

# Start development server (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 🤝 Contributing & Customization

Addash is purposefully designed for pair programming and open-source contribution:
- To customize themes, edit `src/app/globals.css`.
- To add new languages, create `src/locales/[lang].ts` and register it in `src/locales/index.ts`.
- To add new domain pages, duplicate any module in `src/features/` and add its route to `src/config/navigation.ts`.

---

## 👨‍💻 Author

Crafted with care by **[Ahmet Kürşat](https://ahmetkursat.com)**.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
