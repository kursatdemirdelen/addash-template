"use client"

import * as React from "react"
import { Globe, Check } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { cn } from "@/lib/utils"

export function LanguageSwitcher({
  compact = false,
  menuSide = "bottom",
  bare = false,
}: {
  compact?: boolean
  menuSide?: "bottom" | "right"
  bare?: boolean
}) {
  const { t, locale, setLocale, locales } = useTranslation()
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={handleToggle}
        className={cn(
          "flex h-8 items-center rounded-full transition-colors cursor-pointer select-none",
          compact ? "w-8 justify-center" : "gap-1.5 px-2.5",
          bare
            ? open
              ? "bg-sand text-ink"
              : "text-smoke hover:text-ink hover:bg-sand/60"
            : open
              ? "border border-parchment bg-ink text-paper"
              : "border border-parchment bg-paper text-smoke hover:text-ink hover:bg-sand"
        )}
        title={t.settings.appearance.languageTitle}
        aria-label={t.settings.appearance.languageTitle}
      >
        <Globe className="h-3.5 w-3.5" />
        {!compact && (
          <span className="text-[11px] font-mono font-medium uppercase leading-none">
            {locale}
          </span>
        )}
      </button>

      {open && (
        <div
          className={cn(
            "absolute z-50 w-44 rounded-lg border border-parchment bg-paper no-shadow overflow-hidden",
            menuSide === "right" ? "left-full top-0 ml-2" : "right-0 top-10"
          )}
        >
          <div className="px-3 py-2 border-b border-parchment">
            <p className="text-[10px] font-mono uppercase tracking-[0.08em] text-smoke">
              {t.settings.appearance.languageTitle}
            </p>
          </div>
          <div className="p-1.5 space-y-0.5">
            {locales.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLocale(item.code)
                  setOpen(false)
                }}
                className={cn(
                  "w-full flex items-center justify-between rounded-md px-2.5 py-1.5 text-left transition-colors cursor-pointer",
                  locale === item.code
                    ? "bg-sand text-ink"
                    : "hover:bg-sand/60 text-smoke hover:text-ink"
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
  )
}
