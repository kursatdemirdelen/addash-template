"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { useAppStore } from "@/store/app-store"
import { useTranslation } from "@/hooks/use-translation"
import { THEMES, type ThemeId } from "@/lib/themes"
import { ThemePreview } from "@/components/layout/theme-preview"
import { cn } from "@/lib/utils"

export function AppearanceForm() {
  const { t, locale, setLocale, locales } = useTranslation()
  const theme = useAppStore((s) => s.theme)
  const setTheme = useAppStore((s) => s.setTheme)

  const handleThemeChange = (id: ThemeId) => {
    setTheme(id)
  }

  const handleLocaleChange = (code: typeof locale) => {
    setLocale(code)
  }

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>{t.settings.tabs.appearance}</CardTitle>
          <CardDescription>{t.settings.appearance.themeDesc}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        <section className="space-y-3">
          <h3 className="text-xs font-medium text-ink">{t.settings.appearance.themeTitle}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {THEMES.map((option) => {
              const isActive = theme === option.id
              const label = t.settings.appearance.themes[option.id]
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleThemeChange(option.id)}
                  aria-pressed={isActive}
                  aria-label={label}
                  className={cn(
                    "group text-left rounded-lg border p-2 cursor-pointer transition-colors",
                    isActive
                      ? "border-ink bg-sand/40"
                      : "border-parchment hover:border-ink/40 hover:bg-sand/20"
                  )}
                >
                  <ThemePreview themeId={option.id} className="mb-2" />
                  <span className="text-[12px] font-medium text-ink">{label}</span>
                </button>
              )
            })}
          </div>
        </section>

        <div className="border-t border-parchment/60" />

        <section className="space-y-3">
          <div>
            <h3 className="text-xs font-medium text-ink">{t.settings.appearance.languageTitle}</h3>
            <p className="text-[12px] text-smoke mt-0.5">{t.settings.appearance.languageDesc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {locales.map((item) => {
              const isActive = locale === item.code
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => handleLocaleChange(item.code)}
                  aria-pressed={isActive}
                  className={cn(
                    "flex items-center justify-between rounded-lg border px-4 py-3 text-left cursor-pointer transition-colors",
                    isActive
                      ? "border-ink bg-sand/40"
                      : "border-parchment hover:border-ink/40 hover:bg-sand/20"
                  )}
                >
                  <div>
                    <p className="text-[13px] font-medium text-ink">{item.nativeName}</p>
                    <p className="text-[11px] font-mono text-smoke mt-0.5 uppercase">
                      {item.code}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "h-2 w-2 rounded-full",
                      isActive ? "bg-ink" : "bg-parchment"
                    )}
                  />
                </button>
              )
            })}
          </div>
        </section>
      </CardContent>
    </Card>
  )
}
