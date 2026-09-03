"use client";

import * as React from "react";
import { useAppStore, type Theme } from "@/store/app-store";
import { Palette } from "lucide-react";
import { cn } from "@/lib/utils";

const themes: {
  id: Theme;
  label: string;
  canvas: string;
  ink: string;
  accent: string;
}[] = [
  { id: "warm",   label: "Warm",   canvas: "#dbdad7", ink: "#121212", accent: "#121212" },
  { id: "dark",   label: "Dark",   canvas: "#1e1e1e", ink: "#f0f0f0", accent: "#f0f0f0" },
  { id: "ocean",  label: "Ocean",  canvas: "#daeaf3", ink: "#0c1f2e", accent: "#0ea5e9" },
  { id: "forest", label: "Forest", canvas: "#d8ead8", ink: "#0f2418", accent: "#22c55e" },
  { id: "rose",   label: "Rose",   canvas: "#f2dde0", ink: "#2d1018", accent: "#f43f5e" },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useAppStore();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  // Close on outside click
  React.useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);


  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full border border-parchment transition-colors cursor-pointer",
          open ? "bg-ink text-paper" : "bg-paper text-smoke hover:text-ink hover:bg-sand"
        )}
        title="Change theme"
        aria-label="Theme switcher"
      >
        <Palette className="h-3.5 w-3.5" />
      </button>

      {open && (
        <div className="absolute right-0 top-10 z-50 w-48 rounded-lg border border-parchment bg-paper no-shadow overflow-hidden">
          <div className="px-3 py-2 border-b border-parchment">
            <p className="text-[10px] font-mono uppercase tracking-[0.08em] text-smoke">
              Color Theme
            </p>
          </div>
          <div className="p-2 space-y-0.5">
            {themes.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => { setTheme(t.id); setOpen(false); }}
                className={cn(
                  "w-full flex items-center gap-3 rounded-md px-2.5 py-2 text-left transition-colors cursor-pointer",
                  theme === t.id ? "bg-sand" : "hover:bg-sand/60"
                )}
              >
                {/* Mini palette swatch */}
                <div className="flex items-center gap-1 shrink-0">
                  <span
                    className="h-4 w-4 rounded-full border border-parchment/60"
                    style={{ background: t.canvas }}
                  />
                  <span
                    className="h-4 w-4 rounded-full border border-parchment/60"
                    style={{ background: t.accent }}
                  />
                </div>
                <span className="text-[12px] text-ink">{t.label}</span>
                {theme === t.id && (
                  <span className="ml-auto text-[10px] font-mono text-smoke">active</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
