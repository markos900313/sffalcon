"use client";

import React, { useState, useEffect } from "react";
import { 
  Zap, 
  Settings, 
  Activity, 
  Play, 
  Pause, 
  Plus, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Terminal,
  ArrowLeft,
  RefreshCw,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { JetBrains_Mono, Inter } from "next/font/google";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const initialAutomations = [
  { id: 1, name: "Respuesta de Presupuestos", desc: "IA detecta emails de presupuesto y responde con PDF", status: "activo", lastRun: "hace 12m" },
  { id: 2, name: "Seguimiento de Contratos", desc: "Recordatorios automáticos a clientes pendientes", status: "activo", lastRun: "hace 4h" },
  { id: 3, name: "Carga de Facturas", desc: "Escaneo de facturas y subida a panel contable", status: "activo", lastRun: "hace 1h" },
  { id: 4, name: "Informe Semanal", desc: "Generación y envío del resumen semanal", status: "pausado", lastRun: "ayer" },
];

const initialLogs = [
  { time: "16:10:45", action: "NUEVO EMAIL DETECTADO", details: "Emisor: info@clinica-luz.com", level: "info" },
  { time: "16:11:02", action: "IA ANALIZANDO CONTENIDO", details: "Intención: Solicitud de presupuesto", level: "ai" },
  { time: "16:11:18", action: "EMAIL ENVIADO", details: "Destinatario: info@clinica-luz.com", level: "success" },
  { time: "16:05:30", action: "TAREA CRON EJECUTADA", details: "Sincronización CRM completada", level: "info" },
];

export default function AutomatizacionIa() {
  const [automations, setAutomations] = useState(initialAutomations);
  const [logs, setLogs] = useState(initialLogs);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = {
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        action: "MONITORIZACIÓN IA",
        details: "Escaneando nuevas señales...",
        level: Math.random() > 0.5 ? "info" : "ai"
      };
      setLogs(prev => [newLog, ...prev.slice(0, 8)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen bg-[#0F172A] text-slate-300 flex flex-col ${inter.className}`}>
      {/* Header */}
      <header className="h-auto min-h-16 py-3 md:py-0 border-b border-white/5 bg-[#1E293B]/30 backdrop-blur-md px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-0 z-50">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-4">
             <Link href="/servicios/ia-integrada" className="p-2 hover:bg-white/5 rounded-lg border border-white/10">
                <ArrowLeft className="w-4 h-4 text-slate-500" />
             </Link>
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-lime-500 rounded-lg flex items-center justify-center">
                   <Zap className="w-4 h-4 text-slate-900 fill-slate-900" />
                </div>
                <div>
                   <h1 className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest leading-none">IA Automation</h1>
                   <div className="flex items-center gap-1.5 mt-1">
                      <div className="w-1 h-1 bg-lime-500 rounded-full animate-pulse"></div>
                      <span className="text-[8px] font-black text-lime-500 uppercase tracking-widest">Motor Activo</span>
                   </div>
                </div>
             </div>
          </div>
          <button className="md:hidden bg-lime-500 text-slate-900 p-2 rounded-lg"><Plus className="w-4 h-4" /></button>
        </div>

        <div className="flex items-center justify-center md:justify-end gap-6 md:gap-8 w-full md:w-auto px-2 md:px-0 bg-white/5 md:bg-transparent py-2 md:py-0 rounded-xl">
           <div className="flex flex-col items-center md:items-end">
              <span className="text-sm md:text-xl font-mono font-black text-white leading-none">482</span>
              <span className="text-[7px] md:text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Tareas</span>
           </div>
           <div className="h-6 w-[1px] bg-white/10"></div>
           <div className="flex flex-col items-center md:items-end">
              <span className="text-sm md:text-xl font-mono font-black text-lime-500 leading-none">12.5h</span>
              <span className="text-[7px] md:text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Ahorradas</span>
           </div>
           <div className="h-6 w-[1px] bg-white/10 hidden sm:block"></div>
           <div className="hidden sm:flex flex-col items-end">
              <span className="text-sm md:text-xl font-mono font-black text-white leading-none">99%</span>
              <span className="text-[7px] md:text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Éxito</span>
           </div>
        </div>

        <button className="hidden md:flex px-4 py-2 bg-lime-500 text-slate-900 rounded-xl font-bold text-[10px] hover:bg-white transition-all items-center gap-2 uppercase tracking-widest">
           <Plus className="w-4 h-4" /> Nueva
        </button>
      </header>

      <div className="flex-1 max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row gap-6 p-4 md:p-6 overflow-hidden">
        {/* Automations List */}
        <div className="flex-1 flex flex-col gap-6 overflow-y-auto scrollbar-hide">
           <div className="flex items-center justify-between shrink-0">
              <h2 className="text-[9px] md:text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                 <Settings className="w-3.5 h-3.5" /> Automatizaciones Activas
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 shrink-0">
              {automations.map((item) => (
                 <div key={item.id} className="bg-[#1E293B]/40 border border-white/5 rounded-2xl p-4 md:p-6 hover:border-lime-500/30 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                       <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center ${
                             item.status === 'activo' ? 'bg-lime-500/10 text-lime-500' : 'bg-slate-700/50 text-slate-500'
                          }`}>
                             {item.status === 'activo' ? <Zap className="w-4 h-4 md:w-5 md:h-5" /> : <Pause className="w-4 h-4" />}
                          </div>
                          <div className="min-w-0">
                             <h3 className="text-sm md:text-base font-bold text-white group-hover:text-lime-500 transition-colors uppercase tracking-tight truncate">{item.name}</h3>
                             <p className="text-[10px] md:text-xs text-slate-500 font-medium truncate">{item.desc}</p>
                          </div>
                       </div>
                       <div className="flex gap-1.5 shrink-0">
                          <button className={`p-2 border rounded-lg transition-colors ${
                             item.status === 'activo' ? 'bg-lime-500 border-lime-500 text-slate-900' : 'bg-white/5 border-white/10 text-slate-500'
                          }`}>
                             {item.status === 'activo' ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                          </button>
                       </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                       <div className="flex items-center gap-2 text-[8px] md:text-[9px] font-bold">
                          <span className="text-slate-500 uppercase">Última:</span>
                          <span className="text-slate-300">{item.lastRun}</span>
                       </div>
                       <div className="flex items-center gap-1 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-lime-500 bg-lime-500/5 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-2.5 h-2.5" /> OK
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* Real-time Log & Quick Stats */}
        <div className="lg:w-[400px] flex flex-col gap-6 shrink-0 lg:h-full overflow-hidden">
           {/* Quick Stats Overlay - Modernized and more compact */}
           <div className="bg-[#84CC16] rounded-2xl p-5 text-slate-900 group relative overflow-hidden shrink-0">
              <Activity className="absolute -bottom-2 -right-2 w-16 h-16 opacity-10 group-hover:rotate-12 transition-all" />
              <div className="relative z-10">
                 <h3 className="text-[10px] font-black uppercase tracking-widest mb-3">Salud Core IA</h3>
                 <div className="flex items-end justify-between">
                    <div>
                       <p className="text-2xl font-black font-mono leading-none">Optimal</p>
                       <p className="text-[8px] font-bold uppercase tracking-widest mt-1">CPU: 12.4% | RAM: 2.1GB</p>
                    </div>
                    <Sparkles className="w-5 h-5 animate-pulse" />
                 </div>
              </div>
           </div>

           <div className="flex-1 flex flex-col gap-4 overflow-hidden min-h-[300px] lg:min-h-0">
              <h2 className="text-[9px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2 shrink-0">
                 <Terminal className="w-3.5 h-3.5" /> Live Terminal
              </h2>

              <div className={`flex-1 bg-black/40 border border-white/5 rounded-2xl p-4 md:p-6 font-mono overflow-y-auto scrollbar-hide ${jetbrains.className}`}>
                 <div className="space-y-4">
                    {logs.map((log, i) => (
                       <div key={i} className="text-[10px] md:text-[11px] animate-in slide-in-from-right-2 duration-300">
                          <div className="flex items-center gap-2 mb-1">
                             <span className="text-slate-600">[{log.time}]</span>
                             <span className={`${
                                log.level === 'ai' ? 'text-lime-500' :
                                log.level === 'success' ? 'text-emerald-500' : 'text-blue-400'
                             } font-black uppercase`}>
                                {log.action}
                             </span>
                          </div>
                          <p className="text-slate-400 pl-3 border-l border-white/10 py-0.5 leading-relaxed">{log.details}</p>
                       </div>
                    ))}
                    <div className="flex items-center gap-2 text-lime-500 animate-pulse mt-4">
                       <div className="w-1 h-3 bg-lime-500"></div>
                       <span className="text-[8px] font-black uppercase tracking-widest">Monitorizando...</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
