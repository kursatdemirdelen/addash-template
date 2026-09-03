"use client";

import * as React from "react";
import { AlertOctagon, RotateCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error("Critical root global error caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#dbdad7] text-[#121212] font-sans antialiased flex items-center justify-center p-6 m-0">
        <div className="max-w-md w-full bg-[#ffffff] border border-[#dbdad7] rounded-lg p-8 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f43f5e]/10 border border-[#f43f5e]/30 text-[#f43f5e] mb-4">
            <AlertOctagon className="h-6 w-6 stroke-[2]" />
          </div>

          <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#616161] mb-1.5">
            System Failure • Critical 500
          </p>

          <h1 className="text-2xl font-serif text-[#121212] font-normal mb-2.5">
            Application Shell Failure
          </h1>

          <p className="text-xs text-[#616161] leading-relaxed mb-6">
            A fatal error prevented the core layout framework from initializing.
            Try reloading the system instance.
          </p>

          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex items-center gap-2 rounded-full bg-[#18181b] text-[#ffffff] px-5 py-2 text-xs font-medium hover:bg-[#121212] transition-colors cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reload Application</span>
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
