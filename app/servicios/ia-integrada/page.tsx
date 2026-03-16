"use client";

import React from "react";
import Link from "next/link";
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
    title: "Agente de Atención",
    subtitle: "Responde a cada cliente al instante",
    description: "Chat automatizado que resuelve dudas, gestiona citas y cualifica leads sin intervención humana.",
    icon: MessageSquare,
    href: "/servicios/ia-integrada/atencion-cliente",
    features: ["Respuesta instantánea", "Traspaso a humano", "Análisis de sentimiento"],
    color: "from-blue-600/20 to-indigo-600/10",
    accent: "text-indigo-600",
    border: "hover:border-indigo-500/30"
  },
  {
    id: "automatizacion",
    title: "Automatización de Procesos",
    subtitle: "Elimina el trabajo manual pesado",
    description: "La IA detecta cuellos de botella y ejecuta tareas repetitivas de forma autónoma y segura.",
    icon: Zap,
    href: "/servicios/ia-integrada/automatizacion",
    features: ["Detección de tareas", "Ejecución autónoma", "Ahorro de horas real"],
    color: "from-lime-600/20 to-emerald-600/10",
    accent: "text-lime-600",
    border: "hover:border-lime-500/30"
  },
  {
    id: "asistente-negocio",
    title: "Asistente de Negocio",
    subtitle: "Toma decisiones basadas en datos",
    description: "Asistente inteligente que analiza tus datos y te da recomendaciones clave para crecer.",
    icon: Bot,
    href: "/servicios/ia-integrada/asistente-negocio",
    features: ["Consulta de datos", "Informes automáticos", "Sugerencias de venta"],
    color: "from-orange-600/20 to-red-600/10",
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
          <Link href="/#servicios" className="flex items-center gap-2 group text-slate-900 font-bold text-sm shrink-0">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Volver a Servicios</span>
            <span className="sm:hidden">Volver</span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {aiExamples.map((example) => (
            <div 
              key={example.id}
              className={`group bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 transition-all duration-500 overflow-hidden flex flex-col h-full ${example.border} hover:shadow-2xl hover:-translate-y-2`}
              style={{ isolation: 'isolate' }}
            >
              <div className={`h-2 bg-gradient-to-r ${example.color} opacity-80`}></div>
              <div className="p-6 md:p-8 flex-1">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  <example.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                
                <p className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1 ${example.accent}`}>{example.subtitle}</p>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{example.title}</h2>
                <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed">
                  {example.description}
                </p>

                <div className="space-y-3 mb-8">
                  {example.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-slate-700 font-bold text-xs uppercase tracking-tight">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${example.accent}`} />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0 mt-auto">
                <Link 
                  href={example.href}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all group/btn shadow-lg shadow-slate-200"
                >
                  Ver IA en acción
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
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
