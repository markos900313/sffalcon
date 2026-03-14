"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Zap, 
  Smartphone, 
  CreditCard, 
  Utensils,
  Star,
  Globe
} from "lucide-react";
import LegalLayout from "@/components/LegalLayout";

export default function GourmetOrderPage() {
  return (
    <div className="min-h-screen bg-[#f5f7f8] font-sans selection:bg-orange-500/20 pb-24">
      {/* Integrated Navigation Header */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 h-16 flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
          <Link href="/servicios/aplicaciones-moviles" className="flex items-center gap-2 group text-slate-900 font-bold text-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver
          </Link>
          <span className="text-xs font-black tracking-widest text-orange-600 uppercase">Estudio de Caso · GourmetOrder</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 pt-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center border border-orange-100 text-orange-600 shadow-sm">
              <Zap className="w-8 h-8" />
            </div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tight">GourmetOrder</h1>
            <p className="text-xl text-slate-500 font-medium max-w-2xl">
              Digitaliza la experiencia de tus comensales con pedidos inteligentes, pagos integrados y gestión de sala en tiempo real.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-orange-50 border border-orange-100 rounded-xl">
              <p className="text-[10px] font-black uppercase tracking-widest text-orange-600 mb-1">Sector</p>
              <p className="font-bold text-slate-900">Restauración y Hostelería</p>
            </div>
            <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Plataforma</p>
              <p className="font-bold text-slate-900">App Nativa iOS/Android</p>
            </div>
          </div>
        </div>

        {/* content continues... */}

        {/* Main Screenshot (Login) */}
        <div className="relative rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl mb-24 aspect-square max-w-4xl mx-auto bg-slate-900 group">
          <img 
            src="/gourmet_order_login_3d_1773486611290.png" 
            alt="GourmetOrder Login"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000"
          />
        </div>

        {/* Component Showcase (Menu) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
                <Utensils className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Menú Digital Interactivo</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Presenta tus platos con fotografía profesional, filtros de alérgenos y opciones de personalización para cada pedido.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Fotografías HD de alta carga rápida",
                "Filtros avanzados (Vegano, Sin Gluten)",
                "Complementos y extras inteligentes",
                "Actualizaciones de stock al instante"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl aspect-square bg-black">
            <img 
              src="/gourmet_order_menu_3d_1773486624606.png" 
              alt="GourmetOrder Menu"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Technical Stack section */}
        <div className="bg-slate-900 rounded-[3rem] p-12 text-white mb-24">
          <h2 className="text-3xl font-black mb-12 text-center">Tecnología Detrás del Sabor</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-white/10 rounded-2xl bg-white/5">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-orange-400" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-orange-400 mb-2">Build</p>
              <p className="font-bold">React Native / Expo</p>
            </div>
            <div className="text-center p-6 border border-white/10 rounded-2xl bg-white/5">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-yellow-400 mb-2">Pagos</p>
              <p className="font-bold">Stripe / Apple Pay</p>
            </div>
            <div className="text-center p-6 border border-white/10 rounded-2xl bg-white/5">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-orange-200" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-orange-200 mb-2">Fidelidad</p>
              <p className="font-bold">IA Recommendations</p>
            </div>
            <div className="text-center p-6 border border-white/10 rounded-2xl bg-white/5">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2">Admin</p>
              <p className="font-bold">Dashboard Web Real-time</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center pb-24">
          <h2 className="text-4xl font-black text-slate-900 mb-6">¿Preparado para escalar tu restaurante?</h2>
          <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
            Creamos soluciones de software que no solo funcionan, sino que enamoran a tus clientes.
          </p>
          <a 
            href="mailto:admin@sffalcon.com"
            className="inline-flex items-center gap-2 px-10 py-5 bg-orange-500 text-white rounded-2xl font-black hover:bg-orange-600 transition-colors shadow-xl shadow-orange-200"
          >
            Digitalizar mi negocio
          </a>
        </div>
      </div>
    </div>
  );
}
