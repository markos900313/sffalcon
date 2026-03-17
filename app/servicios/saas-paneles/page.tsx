"use client";

import React from "react";
import Link from "next/link";
import { SaaSPremiumCard } from '@/components/servicios/SaaSPremiumCard';
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
    title: "TableManager \u2014 Panel Reservas",
    subtitle: "SAAS HOSTELERÍA",
    description: "Panel de gestión de reservas para restaurantes y negocios con métricas, tabla de reservas y estado del servicio.",
    icon: Calendar,
    href: "/examples/saas/ejemplo-1.html",
    features: ["Métricas en tiempo real", "Tabla de reservas completa", "Control de ocupación"],
    color: "from-emerald-900/40 to-emerald-950/20",
    accent: "text-emerald-500",
    border: "hover:border-emerald-500/30"
  },
  {
    id: "clientes",
    title: "ClientHub \u2014 CRM de Clientes",
    subtitle: "SAAS CRM",
    description: "Panel de gestión de clientes con base de datos privada, historial de actividad y seguimiento comercial.",
    icon: Users,
    href: "/examples/saas/ejemplo-2.html",
    features: ["Base de clientes propia", "Historial y actividad", "Pipeline de ventas"],
    color: "from-amber-900/40 to-amber-950/20",
    accent: "text-amber-500",
    border: "hover:border-amber-500/30"
  },
  {
    id: "operaciones",
    title: "OpsFlow \u2014 Panel Operaciones",
    subtitle: "SAAS EQUIPOS",
    description: "Panel de operaciones estilo Kanban para gestionar tareas, equipo y flujos de trabajo sin herramientas externas.",
    icon: Layout,
    href: "/examples/saas/ejemplo-3.html",
    features: ["Tablero Kanban completo", "Carga de trabajo por persona", "Seguimiento de progreso"],
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
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group text-slate-900 font-bold text-sm shrink-0">
            <span>Inicio</span>
          </Link>
          <span className="text-[10px] md:text-xs font-black tracking-widest text-[#0f3460] uppercase truncate text-right">Showcase SaaS · SFFALCON</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 pt-10">
        {/* Compact Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Optimiza tu rentabilidad con Paneles SaaS</h1>
          <p className="text-base md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Demos funcionales: descubre cómo el software a medida centraliza tu operativa, ahorra costes y profesionaliza tus decisiones.
          </p>
        </div>

        {/* Improved Grid for better "above the fold" visibility */}
        <div className="grid grid-cols-1 mb-16">
          {saasExamples.map((example, index) => (
            <SaaSPremiumCard key={index} example={example as any} />
          ))}
</div>

        {/* Integrated Technical Brief */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#0f1d33] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
                <h3 className="text-xl md:text-2xl font-black mb-4">
                   Navegación Privada
                </h3>
                <p className="text-sm md:text-base text-slate-400 font-medium mb-8 leading-relaxed">
                    Nuestros paneles SaaS se alojan en tu propia infraestructura, garantizando que el 100% de los datos te pertenecen.
                </p>
                <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Tailwind"].map(t => (
                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold text-blue-400 uppercase tracking-widest leading-none">{t}</span>
                    ))}
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group shadow-sm">
                <h3 className="text-xl md:text-2xl font-black mb-6 text-[#0f3460]">Impacto de Negocio</h3>
                <div className="space-y-5">
                    <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider">Automatización</span>
                        <span className="text-base md:text-lg font-black text-slate-900">+80%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full w-[80%] rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                        <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider">Coste Operativo</span>
                        <span className="text-base md:text-lg font-black text-slate-900">-45%</span>
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
