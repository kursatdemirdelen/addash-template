"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userFormSchema, UserFormValues } from "../schemas/user-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useTranslation } from "@/hooks/use-translation";

export function UserForm({
  defaultValues,
  onSubmitSuccess,
}: {
  defaultValues?: Partial<UserFormValues>;
  onSubmitSuccess?: () => void;
}) {
  const router = useRouter();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

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
      status: defaultValues?.status || "active",
    },
  });

  const onSubmit = async (data: UserFormValues) => {
    setIsSubmitting(true);
    // Simulate brief API latency
    await new Promise((res) => setTimeout(res, 400));
    setIsSubmitting(false);
    alert(`${data.name} (${data.role})`);
    if (onSubmitSuccess) {
      onSubmitSuccess();
    } else {
      router.push("/users");
    }
  };

  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <div>
          <CardTitle>{t.team.form.title}</CardTitle>
          <CardDescription>{t.team.form.subtitle}</CardDescription>
        </div>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-ink">{t.team.form.name}</label>
            <Input
              {...register("name")}
              placeholder="e.g. Elena Rostova"
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-[11px] text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-ink">{t.team.form.email}</label>
            <Input
              type="email"
              {...register("email")}
              placeholder="elena@company.com"
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-[11px] text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-ink">{t.team.form.role}</label>
              <select
                {...register("role")}
                className="flex h-8 w-full rounded-lg border border-parchment bg-paper px-3 py-1 text-[13px] text-ink focus:border-ink focus:outline-none cursor-pointer"
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
                placeholder="Product, Security, etc."
                className={errors.department ? "border-red-500" : ""}
              />
              {errors.department && (
                <p className="text-[11px] text-red-600">
                  {errors.department.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-ink">{t.team.detail.accountStatus}</label>
            <select
              {...register("status")}
              className="flex h-8 w-full rounded-lg border border-parchment bg-paper px-3 py-1 text-[13px] text-ink focus:border-ink focus:outline-none cursor-pointer"
            >
              <option value="active">{t.common.active}</option>
              <option value="inactive">{t.common.inactive}</option>
              <option value="invited">{t.common.invited}</option>
              <option value="suspended">{t.common.suspended}</option>
            </select>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end gap-2">
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
          >
            {isSubmitting ? t.common.loading : t.team.form.submit}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
