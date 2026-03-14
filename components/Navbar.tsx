"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-[#0f3460] p-2 rounded-lg flex items-center justify-center shadow-lg shadow-[#0f3460]/20">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                <path d="M21 3L12.5 8.5L9 4L3 7l4 3.5L3 21l7-4 1.5 3.5L21 3z" />
              </svg>
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900">SFFALCON</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-sm font-semibold text-slate-600 hover:text-[#0f3460] transition-colors" href="/#servicios">Servicios</Link>
            <Link className="text-sm font-semibold text-slate-600 hover:text-[#0f3460] transition-colors" href="/#transformación">Transformación</Link>
            <Link className="text-sm font-semibold text-slate-600 hover:text-[#0f3460] transition-colors" href="/#proceso">Proceso</Link>
            <Link className="bg-[#0f3460] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-[#0f3460]/30 transition-all active:scale-95" href="https://admin.sffalcon.com">
              Conectar Admin
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-slate-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 flex flex-col space-y-4">
            <Link href="/#servicios" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold text-slate-600 hover:text-[#0f3460] px-2">Servicios</Link>
            <Link href="/#transformación" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold text-slate-600 hover:text-[#0f3460] px-2">Transformación</Link>
            <Link href="/#proceso" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold text-slate-600 hover:text-[#0f3460] px-2">Proceso</Link>
            <Link href="https://admin.sffalcon.com" onClick={() => setIsMenuOpen(false)} className="bg-[#0f3460] text-white px-6 py-2.5 rounded-full text-sm font-bold w-max ml-2 mt-2">Conectar Admin</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
