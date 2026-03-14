import React from "react";
import Link from "next/link";

interface FooterProps {
  active?: "legal" | "privacy" | null;
}

export function Footer({ active = null }: FooterProps) {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-[#0f3460] p-2 rounded-lg flex items-center justify-center shadow-lg shadow-[#0f3460]/20">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                <path d="M21 3L12.5 8.5L9 4L3 7l4 3.5L3 21l7-4 1.5 3.5L21 3z" />
              </svg>
            </div>
            <span className="text-lg font-black tracking-tighter text-slate-900">
              SFFALCON
            </span>
          </Link>
          <div className="flex gap-8">
            <Link
              className={`text-sm font-semibold transition-colors ${
                active === "legal"
                  ? "text-[#0f3460]"
                  : "text-slate-500 hover:text-[#0f3460]"
              }`}
              href="/terminos"
            >
              Legal
            </Link>
            <Link
              className={`text-sm font-semibold transition-colors ${
                active === "privacy"
                  ? "text-[#0f3460]"
                  : "text-slate-500 hover:text-[#0f3460]"
              }`}
              href="/privacidad"
            >
              Privacidad
            </Link>
          </div>
          <div className="text-sm font-bold text-slate-400">© 2026 SFFALCON</div>
        </div>
      </div>
    </footer>
  );
}

