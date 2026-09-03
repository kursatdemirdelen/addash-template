import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-parchment flex flex-col items-center justify-center p-6 text-center">
      <p className="text-xs font-mono uppercase tracking-[0.1em] text-smoke mb-2">
        Error 404
      </p>
      <h1 className="text-4xl font-serif text-ink font-normal mb-3">
        Ledger page not found
      </h1>
      <p className="text-sm text-smoke max-w-md mb-6">
        The requested record or view does not exist in the active ledger registry.
      </p>
      <Button variant="primary" asChild>
        <Link href="/dashboard" className="flex items-center gap-1.5">
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Return to Dashboard</span>
        </Link>
      </Button>
    </div>
  );
}
