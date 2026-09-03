import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Locale } from "@/locales/types";

export type Theme = "warm" | "dark" | "ocean" | "forest" | "rose";

interface AppStore {
  sidebarCollapsed: boolean;
  mobileSidebarOpen: boolean;
  theme: Theme;
  locale: Locale;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setMobileSidebarOpen: (open: boolean) => void;
  setTheme: (theme: Theme) => void;
  setLocale: (locale: Locale) => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      sidebarCollapsed: false,
      mobileSidebarOpen: false,
      theme: "warm" as Theme,
      locale: "en" as Locale,
      toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
      setSidebarCollapsed: (collapsed: boolean) => set({ sidebarCollapsed: collapsed }),
      setMobileSidebarOpen: (open: boolean) => set({ mobileSidebarOpen: open }),
      setTheme: (theme: Theme) => {
        const root = document.documentElement;
        if (theme === "warm") {
          root.removeAttribute("data-theme");
        } else {
          root.setAttribute("data-theme", theme);
        }
        set({ theme });
      },
      setLocale: (locale: Locale) => {
        document.documentElement.lang = locale;
        set({ locale });
      },
    }),
    {
      name: "addash-store",
    }
  )
);
