"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { userFormSchema, UserFormValues } from "../schemas/user-schema"
import { PageContainer } from "@/components/layout/page-container"
import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useTranslation } from "@/hooks/use-translation"
import { ArrowLeft, UserPlus } from "lucide-react"
import Link from "next/link"

export function UserForm({
  defaultValues,
  onSubmitSuccess,
}: {
  defaultValues?: Partial<UserFormValues>
  onSubmitSuccess?: () => void
}) {
  const router = useRouter()
  const { t, locale } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: defaultValues?.name || "",
      email: defaultValues?.email || "",
      role: defaultValues?.role || "Member",
      department: defaultValues?.department || "Engineering",
      status: defaultValues?.status || "invited",
    },
  })

  const handleFormSubmit = async (data: UserFormValues) => {
    setIsSubmitting(true)
    await new Promise((res) => setTimeout(res, 400))
    setIsSubmitting(false)
    alert(`${data.name} (${data.role})`)
    if (onSubmitSuccess) {
      onSubmitSuccess()
    } else {
      router.push("/users")
    }
  }

  return (
    <PageContainer>
      <PageHeader
        title={t.team.form.title}
        description={t.team.form.subtitle}
        action={
          <Button variant="outline" size="sm" asChild>
            <Link href="/users" className="flex items-center gap-1">
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>{t.team.detail.back}</span>
            </Link>
          </Button>
        }
      />

      <Card className="max-w-2xl">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <CardContent className="p-6 space-y-5">
            {/* isim + email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-ink">{t.team.form.name}</label>
                <Input
                  {...register("name")}
                  placeholder={locale === "tr" ? "Örn: Deniz Aydın" : "e.g. Deniz Aydın"}
                  className={errors.name ? "border-rose" : ""}
                />
                {errors.name && (
                  <p className="text-[11px] text-rose">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-ink">{t.team.form.email}</label>
                <Input
                  type="email"
                  {...register("email")}
                  placeholder={locale === "tr" ? "deniz@sirket.com" : "deniz@company.com"}
                  className={errors.email ? "border-rose" : ""}
                />
                {errors.email && (
                  <p className="text-[11px] text-rose">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* rol + departman */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-ink">{t.team.form.role}</label>
                <select
                  {...register("role")}
                  className="flex h-8 w-full rounded-lg border border-parchment bg-paper px-3 py-1 text-[13px] text-ink focus:border-ink focus:outline-none cursor-pointer transition-colors"
                >
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Analyst">Analyst</option>
                  <option value="Member">Member</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-ink">{t.team.form.department}</label>
                <Input
                  {...register("department")}
                  placeholder={locale === "tr" ? "Ürün, Mühendislik, vb." : "Product, Engineering, etc."}
                  className={errors.department ? "border-rose" : ""}
                />
                {errors.department && (
                  <p className="text-[11px] text-rose">{errors.department.message}</p>
                )}
              </div>
            </div>

            {/* durum */}
            <div className="space-y-1.5 max-w-xs">
              <label className="text-xs font-medium text-ink">{t.team.detail.accountStatus}</label>
              <select
                {...register("status")}
                className="flex h-8 w-full rounded-lg border border-parchment bg-paper px-3 py-1 text-[13px] text-ink focus:border-ink focus:outline-none cursor-pointer transition-colors"
              >
                <option value="active">{t.common.active}</option>
                <option value="inactive">{t.common.inactive}</option>
                <option value="invited">{t.common.invited}</option>
                <option value="suspended">{t.common.suspended}</option>
              </select>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end gap-2 border-t border-parchment/40 pt-4">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => router.push("/users")}
            >
              {t.common.cancel}
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="sm"
              disabled={isSubmitting}
              className="gap-1.5"
            >
              <UserPlus className="h-3.5 w-3.5" />
              {isSubmitting ? t.common.loading : t.team.form.submit}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </PageContainer>
  )
}
