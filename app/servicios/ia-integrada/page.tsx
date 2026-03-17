"use client";

import React from "react";
import Link from "next/link";
import { AIPremiumCard } from '@/components/servicios/AIPremiumCard';
import { 
  ArrowRight, 
  MessageSquare, 
  Zap, 
  Bot, 
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Sparkles
} from "lucide-react";


const aiExamples = [
  {
    id: "atencion-cliente",
    title: "ChatBot IA — Atención al Cliente",
    subtitle: "IA ATENCIÓN",
    description: "Asistente IA para atender clientes 24/7 por chat con respuestas automáticas y escalado a humano.",
    icon: MessageSquare,
    href: "/examples/ia/ejemplo-1.html",
    features: ["Respuestas automáticas IA", "Historial de conversaciones", "Escalado a persona real"],
    color: "indigo",
    accent: "text-indigo-600",
    border: "hover:border-indigo-500/30"
  },
  {
    id: "automatizacion",
    title: "AutoFlow — Automatizaciones IA",
    subtitle: "IA AUTOMATIZACIÓN",
    description: "Panel de automatizaciones que ejecuta tareas en segundo plano con log en tiempo real y métricas.",
    icon: Zap,
    href: "/examples/ia/ejemplo-2.html",
    features: ["Tareas automatizadas 24/7", "Log de acciones en tiempo real", "Métricas de rendimiento"],
    color: "lime",
    accent: "text-lime-600",
    border: "hover:border-lime-500/30"
  },
  {
    id: "asistente-negocio",
    title: "FALCON IA — Copiloto de Negocio",
    subtitle: "IA ESTRATÉGICA",
    description: "Asistente IA que analiza tu negocio, responde preguntas con datos reales y genera informes automáticos.",
    icon: Bot,
    href: "/examples/ia/ejemplo-3.html",
    features: ["Análisis de datos del negocio", "Respuestas con contexto real", "Generación de informes"],
    color: "orange",
    accent: "text-orange-600",
    border: "hover:border-orange-500/30"
  }
];

export default function IaIntegratedShowcase() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-indigo-100 pb-20">
      {/* Navigation Header */}
      {/* Navigation Header */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 h-16 flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group text-slate-900 font-bold text-sm shrink-0">
            <span>Inicio</span>
          </Link>
          <div className="flex items-center gap-2 overflow-hidden">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600 shrink-0" />
            <span className="text-[10px] md:text-xs font-black tracking-widest text-slate-900 uppercase truncate text-right">IA Integrada · SFFALCON</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 pt-12 md:pt-16">
        {/* Header Section */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3 h-3" />
            Tecnología Inteligente para tu Empresa
          </div>
          <h1 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]">
            Deja de perder tiempo en tareas que <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">una IA puede hacer por ti.</span>
          </h1>
          <p className="text-base md:text-xl text-slate-500 font-medium leading-relaxed">
            Demos interactivas: descubre cómo integrar agentes inteligentes en tu operativa diaria para ahorrar cientos de horas al mes.
          </p>
        </div>

        {/* Grid Demos */}
        <div className="grid grid-cols-1 mb-16 md:mb-20">
          {aiExamples.map((example, index) => (
            <AIPremiumCard key={index} example={example as any} />
          ))}
</div>

        {/* Value Proposition */}
        <div className="bg-indigo-600 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-[2.5rem] md:rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-indigo-900/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-3xl font-black mb-6">IA que entiende tu negocio y libera tu tiempo</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Sin cuotas mensuales de API</h4>
                                <p className="text-indigo-100 text-sm opacity-80">Implementamos modelos optimizados que corren en tu propia nube o infraestructura.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <Bot className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Privacidad Total</h4>
                                <p className="text-indigo-100 text-sm opacity-80">Tus datos nunca entrenan modelos de terceros. Todo el procesamiento es privado.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem]">
                    <h4 className="text-xl font-bold mb-6">Impacto Estimado</h4>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-sm font-bold mb-2">
                                <span>Ahorro de Tiempo en Soporte</span>
                                <span>92%</span>
                            </div>
                            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                <div className="bg-white h-full w-[92%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm font-bold mb-2">
                                <span>Precisión en Automatización</span>
                                <span>99.8%</span>
                            </div>
                            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                <div className="bg-white h-full w-[99.8%]"></div>
                            </div>
                        </div>
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
