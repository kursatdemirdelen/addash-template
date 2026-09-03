"use client"

import { useEffect } from "react"
import { AlertOctagon, RotateCcw } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Critical root global error caught:", error)
  }, [error])

  return (
    <html lang="en">
      <body className="min-h-screen bg-parchment text-ink font-sans antialiased flex items-center justify-center p-6 m-0">
        <div className="max-w-md w-full bg-paper border border-parchment rounded-lg p-8 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose/10 border border-rose/30 text-rose mb-4">
            <AlertOctagon className="h-6 w-6 stroke-2" />
          </div>

          <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-smoke mb-1.5">
            Error 500
          </p>

          <h1 className="text-2xl font-serif text-ink font-normal mb-2.5">
            Something went wrong
          </h1>

          <p className="text-xs text-smoke leading-relaxed mb-6">
            An unexpected error occurred. Please try reloading the page.
          </p>

          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex items-center gap-2 rounded-full bg-charcoal text-paper px-5 py-2 text-xs font-medium hover:bg-ink transition-colors cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reload Application</span>
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
