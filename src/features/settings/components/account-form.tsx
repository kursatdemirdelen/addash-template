"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";

export function AccountForm() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div>
            <CardTitle>{t.settings.account.securityTitle}</CardTitle>
            <CardDescription>{t.settings.account.securityDesc}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-ink">{t.settings.account.currentPasskey}</label>
            <Input type="password" placeholder="••••••••••••" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-ink">{t.settings.account.newPasskey}</label>
            <Input type="password" placeholder="••••••••••••" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="primary" size="sm">
            {t.settings.account.updatePasskey}
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-rose/30 bg-rose/5">
        <CardHeader className="border-rose/20">
          <div>
            <CardTitle className="text-rose">{t.settings.account.dangerZone}</CardTitle>
            <CardDescription>{t.settings.account.dangerDesc}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-smoke">{t.settings.account.dangerWarning}</p>
          <Button variant="destructive" size="sm" className="w-full sm:w-auto shrink-0">
            {t.settings.account.deleteWorkspace}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
