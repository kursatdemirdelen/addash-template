"use client";

import * as React from "react";
import { siteConfig } from "@/config/site";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";

export function ProfileForm() {
  const { t, locale } = useTranslation();
  const [saved, setSaved] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>{t.settings.profile.title}</CardTitle>
          <CardDescription>{t.settings.profile.description}</CardDescription>
        </div>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-charcoal text-paper text-lg font-medium">
              {siteConfig.user.avatar}
            </div>
            <div>
              <Button type="button" variant="outline" size="sm">
                {locale === "tr" ? "Avatarı Değiştir" : "Change avatar"}
              </Button>
              <p className="text-[11px] text-smoke mt-1">
                {locale === "tr" ? "Önerilen 256x256 monokrom görsel." : "Recommended 256x256 monochrome icon."}
              </p>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-ink">{t.settings.profile.displayName}</label>
            <Input defaultValue={siteConfig.user.name} />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-ink">{t.settings.profile.email}</label>
            <Input type="email" defaultValue={siteConfig.user.email} />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-ink">{t.settings.profile.role}</label>
            <Input defaultValue={siteConfig.user.role} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          {saved && <span className="text-xs text-moss font-medium">{t.settings.profile.savedSuccess}</span>}
          <Button type="submit" variant="primary" size="sm">
            {t.settings.profile.saveChanges}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
