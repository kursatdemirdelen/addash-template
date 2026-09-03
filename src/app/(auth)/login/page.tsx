"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { BrandMark } from "@/components/layout/brand-mark";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 400);
  };

  return (
    <div className="min-h-screen w-full bg-parchment flex flex-col items-center justify-center p-4">
      {/* Brand Header */}
      <div className="flex items-center gap-2 mb-8">
        <BrandMark className="h-9 w-9 text-[19px]" />
        <span className="font-serif text-2xl font-normal text-ink tracking-tight">
          {siteConfig.name}
        </span>
      </div>

      {/* Login Card */}
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center pb-2">
          <div className="w-full">
            <CardTitle className="text-lg font-serif">Çalışma Alanına Giriş Yap</CardTitle>
            <CardDescription className="text-xs text-smoke mt-1">
              Yönetim paneline erişmek için bilgilerinizi girin.
            </CardDescription>
          </div>
        </CardHeader>

        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-ink">E-posta Adresi</label>
              <Input
                type="email"
                defaultValue={siteConfig.user.email}
                required
                placeholder="ornek@sirket.com"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-ink">Şifre</label>
                <a href="#" className="text-[11px] text-smoke hover:underline">
                  Unuttum?
                </a>
              </div>
              <Input
                type="password"
                defaultValue="password123"
                required
                placeholder="••••••••••••"
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-2 pt-2">
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full"
              disabled={loading}
            >
              {loading ? (
                "Giriş Yapılıyor..."
              ) : (
                <span className="flex items-center justify-center gap-1.5">
                  <span>Giriş Yap</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              )}
            </Button>
            <p className="text-[11px] text-center text-smoke mt-2">
              Demo Erişimi: Doğrudan &ldquo;Giriş Yap&rdquo; butonuna tıklayabilirsiniz.
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
