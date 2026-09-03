"use client";

import { useAppStore } from "@/store/app-store";
import { getDictionary, locales, type Locale, type Dictionary } from "@/locales";

export function useTranslation(): {
  t: Dictionary;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  locales: typeof locales;
} {
  const { locale, setLocale } = useAppStore();
  const t = getDictionary(locale);

  return {
    t,
    locale,
    setLocale,
    locales,
  };
}
