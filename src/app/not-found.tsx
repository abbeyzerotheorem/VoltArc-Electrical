import Link from "next/link";
import { Zap } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-8">
          <Zap className="h-8 w-8 text-amber-500" />
        </div>
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-slate-400 mb-2">Page Not Found</p>
        <p className="text-sm text-slate-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-amber-400 transition-colors min-h-[48px]"
          >
            Back to Home
          </Link>
          <a
            href="tel:5125550147"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-700 px-6 py-3 text-sm font-bold text-white hover:border-amber-500 hover:text-amber-500 transition-colors min-h-[48px]"
          >
            Call (512) 555-0147
          </a>
        </div>
      </div>
    </div>
  );
}
