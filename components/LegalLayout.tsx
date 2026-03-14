"use client";

import Link from "next/link";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });

interface LegalLayoutProps {
  children: React.ReactNode;
  active: "legal" | "privacidad";
  title: string;
  subtitle: string;
  lastUpdated?: string;
  badgeContent?: string;
  badgeTitle?: string;
  wide?: boolean;
}

export default function LegalLayout({
  children,
  active,
  title,
  subtitle,
  lastUpdated,
  badgeContent,
  badgeTitle,
  wide = false
}: LegalLayoutProps) {
  return (
    <div className={`${inter.variable} ${plusJakarta.variable} font-sans bg-[#f5f7f8] text-slate-900 selection:bg-[#0f3460]/30 min-h-screen`}>
      <style dangerouslySetInnerHTML={{
        __html: `
        .glass-nav {
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(15, 52, 96, 0.08);
        }
        .hero-gradient {
            background: 
              radial-gradient(circle at 100% 0%, rgba(15, 52, 96, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 0% 100%, rgba(15, 52, 96, 0.05) 0%, transparent 50%),
              #f5f7f8;
        }
        .text-gradient {
            background: linear-gradient(135deg, #0f3460 0%, #1a508b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
      `}} />

      <Navbar />

      <main className="relative pt-32 pb-20 md:pt-48 md:pb-32 hero-gradient overflow-hidden">
        <div className={`${wide ? 'max-w-6xl' : 'max-w-4xl'} mx-auto px-4 sm:px-6 lg:px-8 relative z-10`}>

          {/* Header */}
          <div className="mb-16 pb-16 border-b border-slate-200">
            {badgeTitle && (
              <span className="text-[10px] text-[#0f3460] font-black uppercase tracking-[0.3em] mb-4 block">
                Documento legal · SFFALCON
              </span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-plus-jakarta font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
              {title} <span className="text-gradient">{subtitle}</span>
            </h1>
            {lastUpdated && (
              <div className="flex flex-wrap gap-6 text-xs text-slate-500 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Última actualización: {lastUpdated}
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  España · UE
                </span>
              </div>
            )}
          </div>

          {/* Badge Note */}
          {badgeTitle && badgeContent && (
            <div className="mb-12 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  className="w-5 h-5 text-[#0f3460]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-slate-900 text-sm font-black mb-1">
                  {badgeTitle}
                </p>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  {badgeContent}
                </p>
              </div>
            </div>
          )}

          {children}
        </div>
      </main>

      <Footer active={active} />
      <WhatsAppButton />
    </div>
  );
}
