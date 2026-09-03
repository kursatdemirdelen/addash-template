"use client"

import * as React from "react"
import { useAppStore } from "@/store/app-store"
import { THEMES } from "@/lib/themes"
import { useTranslation } from "@/hooks/use-translation"
import { cn } from "@/lib/utils"

const ThemeSwatch = ({
  canvas,
  ink,
  size = "md",
}: {
  canvas: string
  ink: string
  size?: "sm" | "md"
}) => (
  <span
    className={cn(
      "relative shrink-0 overflow-hidden rounded-full border border-ink/25",
      size === "md" ? "h-4 w-4" : "h-3.5 w-3.5"
    )}
    style={{ background: canvas }}
    aria-hidden
  >
    <span
      className="absolute inset-y-0 right-0 w-1/2"
      style={{ background: ink }}
    />
  </span>
)

export function ThemeSwitcher({
  menuSide = "bottom",
  bare = false,
}: {
  menuSide?: "bottom" | "right"
  bare?: boolean
}) {
  const { t } = useTranslation()
  const theme = useAppStore((s) => s.theme)
  const setTheme = useAppStore((s) => s.setTheme)
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)
  const current = THEMES.find((item) => item.id === theme) ?? THEMES[0]

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  React.useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [open])

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={handleToggle}
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full transition-colors cursor-pointer",
          bare
            ? open
              ? "bg-sand"
              : "hover:bg-sand/60"
            : open
              ? "border border-parchment bg-sand"
              : "border border-parchment bg-paper hover:bg-sand"
        )}
        title={t.settings.appearance.themeTitle}
        aria-label={t.settings.appearance.themeTitle}
        aria-expanded={open}
      >
        <ThemeSwatch canvas={current.canvas} ink={current.ink} />
      </button>

      {open && (
        <div
          className={cn(
            "absolute z-50 w-40 rounded-lg border border-parchment bg-paper no-shadow p-1",
            menuSide === "right" ? "left-full top-0 ml-2" : "right-0 top-10"
          )}
        >
          {THEMES.map((option) => {
            const isActive = theme === option.id
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  setTheme(option.id)
                  setOpen(false)
                }}
                aria-pressed={isActive}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-left cursor-pointer transition-colors",
                  isActive ? "bg-sand text-ink" : "text-smoke hover:bg-sand/50 hover:text-ink"
                )}
              >
                <ThemeSwatch canvas={option.canvas} ink={option.ink} size="sm" />
                <span className="text-[12px]">
                  {t.settings.appearance.themes[option.id]}
                </span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
