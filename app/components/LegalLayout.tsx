import React from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

interface LegalLayoutProps {
  title: string;
  highlight: string;
  badgeText: string;
  metaItems: string[];
  activeFooter?: "legal" | "privacy" | null;
  children: React.ReactNode;
}

export function LegalLayout({
  title,
  highlight,
  badgeText,
  metaItems,
  activeFooter = null,
  children,
}: LegalLayoutProps) {
  return (
    <div
      className={`${inter.variable} ${plusJakarta.variable} font-sans bg-[#f5f7f8] text-slate-900 min-h-screen`}
    >
      <Navbar variant="legal" />
      <main className="pt-28 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[11px] text-[#0f3460] font-black uppercase tracking-[0.3em] mb-4 block">
              {badgeText}
            </span>
            <h1 className="text-4xl md:text-5xl font-plus-jakarta font-extrabold mb-4 leading-tight">
              {title}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f3460] to-[#1a508b]">
                {highlight}
              </span>
            </h1>
            <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-medium">
              {metaItems.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0f3460]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-8">{children}</div>

          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-slate-500 text-xs font-bold tracking-wider">
                © 2026 SFFALCON. Todos los derechos reservados.
              </p>
              <p className="text-slate-400 text-[11px] mt-1">
                sffalcon.com · España
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer active={activeFooter} />
    </div>
  );
}

