"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Shield, 
  Clock, 
  LineChart, 
  Lock,
  MessageSquare,
  Users
} from "lucide-react";
import LegalLayout from "@/components/LegalLayout";

export default function LuminaCRMPage() {
  return (
    <div className="min-h-screen bg-[#f5f7f8] font-sans selection:bg-blue-600/20 pb-24">
      {/* Integrated Navigation Header */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 h-16 flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
          <Link href="/servicios/aplicaciones-moviles" className="flex items-center gap-2 group text-slate-900 font-bold text-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver
          </Link>
          <span className="text-xs font-black tracking-widest text-blue-600 uppercase">Estudio de Caso · Lumina CRM</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 pt-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 text-blue-600 shadow-sm">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tight">Lumina CRM</h1>
            <p className="text-xl text-slate-500 font-medium max-w-2xl">
              La plataforma definitiva para la gestión de clínicas médicas y centros de salud de alto rendimiento.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-blue-50 border border-blue-100 rounded-xl">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1">Sector</p>
              <p className="font-bold text-slate-900">Salud y Bienestar</p>
            </div>
            <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Plataforma</p>
              <p className="font-bold text-slate-900">Nativa / Web</p>
            </div>
          </div>
        </div>

        {/* content continues... */}

                {/* Detalle de Arquitectura */}
                <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 md:p-12 mb-16">
                    <h2 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-4">
                        <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
                        Vistas de la Plataforma
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <div className="space-y-6">
                            <div 
                                className="aspect-video bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 shadow-lg relative group"
                                style={{ isolation: 'isolate', WebkitMaskImage: '-webkit-radial-gradient(white, black)', transform: 'translateZ(0)' }}
                            >
                                <img 
                                    src="/lumina_crm_dashboard_3d_1773486583538.png" 
                                    alt="Lumina Dashboard" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <p className="text-white text-xs font-bold uppercase tracking-widest">Panel de Control General</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                Interfaz diseñada por fases para que el equipo administrativo gestione citas y pacientes sin errores.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div 
                                className="aspect-video bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 shadow-lg relative group"
                                style={{ isolation: 'isolate', WebkitMaskImage: '-webkit-radial-gradient(white, black)', transform: 'translateZ(0)' }}
                            >
                                <img 
                                    src="/lumina_crm_patient_3d_1773486598508.png" 
                                    alt="Lumina Patient" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <p className="text-white text-xs font-bold uppercase tracking-widest">Ficha Médica 360º</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                Visualización cronológica de antecedentes y tratamientos en una sola vista optimizada.
                            </p>
                        </div>
                    </div>
                </div>


        {/* Technical Stack section */}
        <div className="bg-slate-900 rounded-[3rem] p-12 text-white mb-24">
          <h2 className="text-3xl font-black mb-12 text-center">Tecnología de Vanguardia</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-white/10 rounded-2xl bg-white/5">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2">Back-end</p>
              <p className="font-bold">FastAPI / Go</p>
            </div>
            <div className="text-center p-6 border border-white/10 rounded-2xl bg-white/5">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-green-400 mb-2">Seguridad</p>
              <p className="font-bold">AWS KMS / AES-256</p>
            </div>
            <div className="text-center p-6 border border-white/10 rounded-2xl bg-white/5">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-indigo-400" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-2">Front-end</p>
              <p className="font-bold">Next.js / Flutter</p>
            </div>
            <div className="text-center p-6 border border-white/10 rounded-2xl bg-white/5">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-orange-400" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-orange-400 mb-2">DB</p>
              <p className="font-bold">PostgreSQL / Redis</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center pb-24">
          <h2 className="text-4xl font-black text-slate-900 mb-6">¿Quieres algo similar para tu negocio?</h2>
          <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
            Creamos software robusto, seguro y escalable diseñado específicamente para tus necesidades operativas.
          </p>
          <a 
            href="mailto:admin@sffalcon.com"
            className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-colors shadow-xl shadow-blue-200"
          >
            Hablar con un experto
          </a>
        </div>
      </div>
    </div>
  );
}
