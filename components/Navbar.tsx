"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

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
            <Link className="text-sm font-semibold text-slate-600 hover:text-[#0f3460] transition-colors" href="/">Inicio</Link>
            <Link className="text-sm font-semibold text-slate-600 hover:text-[#0f3460] transition-colors" href="/servicios">Servicios</Link>
            <Link className="text-sm font-semibold text-slate-600 hover:text-[#0f3460] transition-colors" href="/transformacion">Transformación</Link>
            <Link className="text-sm font-semibold text-slate-600 hover:text-[#0f3460] transition-colors" href="/proceso">Proceso</Link>
            <div className="relative group">
              <button className="bg-[#0f3460] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-[#0f3460]/30 transition-all active:scale-95 flex items-center gap-1.5">
                Productos
                <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden flex flex-col p-1.5">
                <Link href="https://admin.sffalcon.com" className="px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-[#0f3460] rounded-xl transition-colors">
                  SFFALCON Admin
                </Link>
                <Link href="https://app.sffalcon.com" className="px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-[#0f3460] rounded-xl transition-colors">
                  SFFALCON App
                </Link>
              </div>
            </div>
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
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold text-slate-600 hover:text-[#0f3460] px-2">Inicio</Link>
            <Link href="/servicios" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold text-slate-600 hover:text-[#0f3460] px-2">Servicios</Link>
            <Link href="/transformacion" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold text-slate-600 hover:text-[#0f3460] px-2">Transformación</Link>
            <Link href="/proceso" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold text-slate-600 hover:text-[#0f3460] px-2">Proceso</Link>
            <div className="pt-2 flex flex-col gap-2">
              <span className="text-xs font-bold text-slate-400 px-2 uppercase tracking-wider">Productos</span>
              <Link href="https://admin.sffalcon.com" onClick={() => setIsMenuOpen(false)} className="bg-[#0f3460] text-white px-6 py-2.5 rounded-full text-sm font-bold w-max ml-2">SFFALCON Admin</Link>
              <Link href="https://app.sffalcon.com" onClick={() => setIsMenuOpen(false)} className="bg-[#0f3460] text-white px-6 py-2.5 rounded-full text-sm font-bold w-max ml-2">SFFALCON App</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
