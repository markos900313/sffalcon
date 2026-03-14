"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Calendar, 
  Users, 
  Layout, 
  CheckCircle2,
  ChevronRight,
  ArrowLeft
} from "lucide-react";

const saasExamples = [
  {
    id: "reservas",
    title: "Panel de Reservas",
    subtitle: "Restaurantes y Clínicas",
    description: "Gestión centralizada de citas sin comisiones externas. Control total sobre tu agenda.",
    icon: Calendar,
    href: "/servicios/saas-paneles/reservas",
    features: ["Calendario dinámico", "WhatsApp recordatorios", "Gestión de turnos"],
    color: "from-emerald-900/40 to-emerald-950/20",
    accent: "text-emerald-500",
    border: "hover:border-emerald-500/30"
  },
  {
    id: "clientes",
    title: "Panel de Clientes (CRM)",
    subtitle: "Gestión de Base Propia",
    description: "Toda la información de tus clientes en un solo lugar. Simple, rápido y privado.",
    icon: Users,
    href: "/servicios/saas-paneles/clientes",
    features: ["Buscador inteligente", "Heatmap actividad", "Historial interacción"],
    color: "from-amber-900/40 to-amber-950/20",
    accent: "text-amber-500",
    border: "hover:border-amber-500/30"
  },
  {
    id: "operaciones",
    title: "Panel de Operaciones",
    subtitle: "Gestión de Tareas y Equipo",
    description: "Tableros Kanban para el control interno de tus procesos y productividad del equipo.",
    icon: Layout,
    href: "/servicios/saas-paneles/operaciones",
    features: ["Tablero Kanban", "Carga de trabajo", "Tiempos de entrega"],
    color: "from-violet-900/40 to-violet-950/20",
    accent: "text-violet-500",
    border: "hover:border-violet-500/30"
  }
];

export default function SaasShowcasePage() {
  return (
    <div className="min-h-screen bg-[#f5f7f8] font-sans selection:bg-[#0f3460]/20 pb-20">
      {/* Integrated Navigation Header */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 h-16 flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
          <Link href="/#servicios" className="flex items-center gap-2 group text-slate-900 font-bold text-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver a Servicios
          </Link>
          <span className="text-xs font-black tracking-widest text-[#0f3460] uppercase">Showcase SFFALCON SaaS</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 pt-10">
        {/* Compact Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Optimiza tu rentabilidad con Paneles SaaS</h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Demos funcionales: descubre cómo el software a medida centraliza tu operativa, ahorra costes y profesionaliza tu toma de decisiones.
          </p>
        </div>

        {/* Improved Grid for better "above the fold" visibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {saasExamples.map((example) => (
            <div 
              key={example.id}
              className={`group bg-white rounded-3xl border border-slate-200 shadow-sm transition-all duration-500 overflow-hidden flex flex-col h-full ${example.border}`}
            >
              <div className={`h-2 text-white bg-gradient-to-r ${example.color}`}></div>
              <div className="p-8 flex-1">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <example.icon className="w-6 h-6" />
                </div>
                
                <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${example.accent}`}>{example.subtitle}</p>
                <h2 className="text-xl font-bold text-slate-900 mb-4">{example.title}</h2>
                <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed">
                  {example.description}
                </p>

                <div className="space-y-3 mb-8">
                  {example.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-slate-700 font-bold text-xs uppercase tracking-tight">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${example.accent}`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <Link 
                  href={example.href}
                  className="w-full py-4 bg-[#0f3460] text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-black transition-all group/btn"
                >
                  Ver arquitectura del panel
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Integrated Technical Brief instead of a separate huge section */}
        <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-[#0f1d33] rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
                <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                   Navegación Privada
                </h3>
                <p className="text-slate-400 font-medium mb-8">
                    Nuestros paneles SaaS se alojan en tu propia infraestructura, garantizando que el 100% de los datos te pertenecen.
                </p>
                <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Tailwind"].map(t => (
                        <span key={t} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-blue-400 uppercase tracking-widest leading-none">{t}</span>
                    ))}
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 relative overflow-hidden group shadow-sm">
                <h3 className="text-2xl font-black mb-4 text-[#0f3460]">Impacto de Negocio</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-500">Automatización</span>
                        <span className="text-lg font-black text-slate-900">+80%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full w-[80%] rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                        <span className="text-sm font-bold text-slate-500">Coste Operativo</span>
                        <span className="text-lg font-black text-slate-900">-45%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[45%] rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <footer className="mt-20 border-t border-slate-200 pt-10 pb-10">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
              <p>© 2026 SFFALCON · INNOVACIÓN DIGITAL</p>
              <div className="flex gap-8">
                  <Link href="/terminos" className="hover:text-blue-600 transition-colors">Aviso Legal</Link>
                  <Link href="/privacidad" className="hover:text-blue-600 transition-colors">Privacidad</Link>
              </div>
          </div>
      </footer>
    </div>
  );
}
