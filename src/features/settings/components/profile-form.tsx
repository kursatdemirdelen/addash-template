"use client"

import { useState } from "react"
import { siteConfig } from "@/config/site"
import { Avatar } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"
import { Camera, Check } from "lucide-react"

export function ProfileForm() {
  const { t } = useTranslation()
  const [saved, setSaved] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>{t.settings.profile.title}</CardTitle>
          <CardDescription>{t.settings.profile.description}</CardDescription>
        </div>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-5">
          {/* avatar */}
          <div className="flex items-center gap-5">
            <div className="relative group shrink-0">
              <Avatar
                src={siteConfig.user.avatarUrl}
                fallback={siteConfig.user.avatar}
                size="xl"
                className="h-20 w-20 text-lg"
              />
              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center rounded-full bg-ink/0 group-hover:bg-ink/40 transition-colors cursor-pointer"
                aria-label={t.settings.profile.changeAvatar}
                tabIndex={0}
              >
                <Camera className="h-5 w-5 text-paper opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
            <div>
              <p className="text-base font-medium text-ink">{siteConfig.user.name}</p>
              <p className="text-[12px] text-smoke">{siteConfig.user.email}</p>
              <p className="text-[11px] text-smoke/70 font-mono mt-1">{siteConfig.user.role}</p>
              <button
                type="button"
                className="mt-2 inline-flex items-center gap-1.5 text-[12px] text-smoke hover:text-ink transition-colors cursor-pointer"
                tabIndex={0}
              >
                <Camera className="h-3 w-3" />
                {t.settings.profile.changeAvatar}
              </button>
              <p className="text-[10px] text-smoke/50 mt-0.5">{t.settings.profile.avatarHint}</p>
            </div>
          </div>

          <div className="border-t border-parchment/60" />

          {/* form alanlari */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-ink">{t.settings.profile.displayName}</label>
              <Input defaultValue={siteConfig.user.name} />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-ink">{t.settings.profile.email}</label>
              <Input type="email" defaultValue={siteConfig.user.email} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-ink">{t.settings.profile.role}</label>
              <Input defaultValue={siteConfig.user.role} disabled className="bg-sand/50" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-ink">{t.settings.profile.bio}</label>
              <textarea
                defaultValue="Frontend developer, Mersin"
                rows={2}
                className="flex w-full rounded-md border border-parchment bg-paper px-3 py-2 text-sm text-ink placeholder:text-smoke/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink/20 resize-none"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-end gap-3 border-t border-parchment/40 pt-4">
          {saved && (
            <span className="inline-flex items-center gap-1 text-xs text-moss font-medium animate-in fade-in duration-200">
              <Check className="h-3.5 w-3.5" />
              {t.settings.profile.savedSuccess}
            </span>
          )}
          <Button type="submit" variant="primary" size="sm">
            {t.settings.profile.saveChanges}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
