"use client"

import { useEffect } from "react"
import { useAppStore } from "@/store/app-store"

export function StoreSync() {
  const theme = useAppStore((s) => s.theme)
  const locale = useAppStore((s) => s.locale)

  useEffect(() => {
    const root = document.documentElement
    if (theme && theme !== "warm") {
      root.setAttribute("data-theme", theme)
    } else {
      root.removeAttribute("data-theme")
    }
  }, [theme])

  useEffect(() => {
    if (locale) {
      document.documentElement.lang = locale
    }
  }, [locale])

  return null
}
