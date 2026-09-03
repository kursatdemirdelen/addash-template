# Addash — Architecture & Engineering Guide

This document details the architectural decisions, design patterns, state management, and code organization of the **Addash** admin starter template.

---

## 🏛️ Core Principles

1. **Feature-Sliced Hierarchy (`src/features/`)**:
   - Each business domain (Tasks, Messages, Files, Users, etc.) lives in its own dedicated directory.
   - A feature directory contains its own components, local state, schemas, and helpers.
   - Pages in `src/app/` act purely as route entry points and delegate all layout and view logic to feature modules.

2. **Zero Unnecessary Dependencies**:
   - Built on standard web APIs, Next.js 16 App Router, React 19, and Tailwind CSS v4.
   - Icons: `lucide-react`.
   - Forms & Validation: `react-hook-form` + `zod`.
   - State & Persistence: `zustand` with `persist` middleware.
   - Charts: `recharts`.
   - Tables: `@tanstack/react-table`.

3. **Performance First**:
   - Zero full-screen GPU blur filters on interactive overlays (`CommandMenu` and `Dialog` use hardware-accelerated transforms and opacity).
   - Zero unnecessary re-renders; static command lists and navigational trees are memoized or defined outside component lifecycles.
   - CSS-first theming: theme switching modifies CSS variables on `<html data-theme="...">` without re-rendering or recalculating JavaScript styles.

---

## 🎨 Theme & Styling Architecture

Tailwind CSS v4 introduces `@theme` inside CSS. All tokens are declared directly in `src/app/globals.css`:

### 1. Canvas & Surface Tokens (Theme-Mutable)
These tokens adapt whenever the user switches between `Warm`, `Dark`, `Ocean`, `Forest`, or `Rose`:
- `--color-parchment`: Canvas background and hairline borders.
- `--color-paper`: Elevated surfaces (Cards, Inputs, Dialogs).
- `--color-sand`: Tonal contrast, table headers, hover states.
- `--color-ink`: Primary typography and dark icons.
- `--color-smoke`: Secondary labels, timestamps, subdued borders.
- `--color-charcoal`: Solid button fills and header logo.

### 2. Semantic Role & Status Tokens (Theme-Immutable)
To prevent confusing UI states (e.g. an "Active" badge turning red in a rose theme), semantic colors are **never overridden** by theme selectors:
- `--color-moss` (`#22c55e`): Green — `Active` status, `Member` role, positive trends, operational indicators.
- `--color-amber` (`#f59e0b`): Amber — `Invited` status, `Analyst` role, warnings.
- `--color-rose` (`#f43f5e`): Red — `Suspended` status, errors, danger zone.
- `--color-sky` (`#0ea5e9`): Blue — `Trial` status, `Editor` role, links.
- `--color-violet` (`#8b5cf6`): Purple — `Admin` role, enterprise tiers.
- `slate-500` (`#64748b`): Slate — `Viewer` role, `Inactive` status.

---

## 🌐 Type-Safe Internationalization (i18n)

### Why Client-Side Dictionary instead of URL Routing?
In administrative dashboards, users frequently switch language preferences without wanting their browser history corrupted or their current search/filter states discarded. Addash uses a reactive Zustand store backed by `localStorage`:

```
src/locales/
├── types.ts      # Dictionary interface (100% type-checked keys)
├── en.ts         # English translation dictionary
├── tr.ts         # Turkish translation dictionary
└── index.ts      # Dictionary lookup map & locale list
```

### Usage Pattern
```tsx
import { useTranslation } from "@/hooks/use-translation";

export function ExampleWidget() {
  const { t, locale } = useTranslation();
  return <h2>{t.tasks.title}</h2>;
}
```

### Adding a New Language (e.g., German / `de`)
1. Create `src/locales/de.ts` implementing `Dictionary`.
2. Register `de` in `src/locales/index.ts`:
   ```ts
   import { de } from "./de";
   export const dictionaries: Record<Locale, Dictionary> = { en, tr, de };
   ```
3. Add `{ code: "de", label: "German", nativeName: "Deutsch", flag: "🇩🇪" }` to `locales`.

---

## 🧭 Navigation & Breadcrumb System

Centralized in `src/config/navigation.ts`:
- `getNavigationConfig(t: Dictionary)` generates the localized 4-tier navigation model:
  - **Overview**: Dashboard, Analytics
  - **Workspace**: Tasks, Messages, Files
  - **Operations**: Posts, Products, Customers
  - **Administration**: Team, Roles, Notifications, Settings
- `Breadcrumbs` component automatically maps URL segments to localized titles dynamically.

---

## 💾 State Management (`src/store/app-store.ts`)

Zustand handles global client state with automatic `localStorage` persistence:
- `sidebarCollapsed: boolean` — Desktop sidebar collapse state.
- `mobileSidebarOpen: boolean` — Mobile drawer state.
- `theme: "warm" | "dark" | "ocean" | "forest" | "rose"` — Active palette.
- `locale: "en" | "tr"` — Active language.

---

## 📊 Standardized UI Patterns Included

| Pattern | Route | Component Highlights |
|---|---|---|
| **Operational Throughput** | `/dashboard` | `OverviewChart`, `WelcomeCard`, `StatCard` with sparklines |
| **Financial Scorecard & Breakdown** | `/analytics` | 6-card scorecard, dual charts, monthly table with margins |
| **Kanban Board** | `/tasks` | Multi-lane cards, priority indicators, assignee avatars |
| **Split-View Inbox** | `/messages` | Thread search, read/unread states, quick reply bar |
| **Cloud Storage** | `/files` | List/Grid view toggle, storage quota bar, file-type icons |
| **CMS / Blog Management** | `/posts` | Filter tabs, reading metrics, author metadata |
| **Catalog & Inventory** | `/products` | Image previews, stock progress bars, status badges |
| **CRM Directory** | `/customers` | Account tiers, MRR metrics, contact action buttons |
| **RBAC Directory** | `/users` | Filterable data table, role badges, status pills, user detail |
| **Permissions Matrix** | `/roles` | Grouped permission matrix, role summary cards |
| **Timeline Feed** | `/notifications` | Time-grouped alerts, click-to-read, type badges |
| **Settings & Security** | `/settings` | Profile forms, passkey management, destructive danger zone |
