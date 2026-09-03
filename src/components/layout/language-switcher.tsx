"use client";

import * as React from "react";
import { Globe, Check } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { locale, setLocale, locales } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

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
          "flex h-8 items-center gap-1.5 rounded-full border border-parchment px-2.5 transition-colors cursor-pointer select-none",
          open
            ? "bg-ink text-paper"
            : "bg-paper text-smoke hover:text-ink hover:bg-sand"
        )}
        title="Change language / Dil değiştir"
        aria-label="Language selector"
      >
        <Globe className="h-3.5 w-3.5" />
        <span className="text-[11px] font-mono font-medium uppercase leading-none">
          {locale}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-10 z-50 w-44 rounded-lg border border-parchment bg-paper no-shadow overflow-hidden">
          <div className="px-3 py-2 border-b border-parchment">
            <p className="text-[10px] font-mono uppercase tracking-[0.08em] text-smoke">
              Language / Dil
            </p>
          </div>
          <div className="p-1.5 space-y-0.5">
            {locales.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLocale(item.code);
                  setOpen(false);
                }}
                className={cn(
                  "w-full flex items-center justify-between rounded-md px-2.5 py-1.5 text-left transition-colors cursor-pointer",
                  locale === item.code ? "bg-sand text-ink" : "hover:bg-sand/60 text-smoke hover:text-ink"
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{item.flag}</span>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-medium leading-tight">
                      {item.nativeName}
                    </span>
                    <span className="text-[10px] font-mono text-smoke leading-none">
                      {item.label}
                    </span>
                  </div>
                </div>
                {locale === item.code && (
                  <Check className="h-3.5 w-3.5 text-ink shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
