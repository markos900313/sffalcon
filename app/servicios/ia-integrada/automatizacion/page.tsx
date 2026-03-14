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
  ChevronRight,
  Sparkles,
  RefreshCw
} from "lucide-react";
import Link from "next/link";
import { JetBrains_Mono, Inter } from "next/font/google";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const initialAutomations = [
  { id: 1, name: "Respuesta de Presupuestos", desc: "IA detecta emails de presupuesto y responde con PDF adjunto", status: "activo", lastRun: "hace 12m" },
  { id: 2, name: "Seguimiento de Contratos", desc: "Recordatorios automáticos a clientes con contratos pendientes", status: "activo", lastRun: "hace 4h" },
  { id: 3, name: "Carga de Facturas a Contabilidad", desc: "Escaneo de facturas recibidas y subida a panel de gestoría", status: "activo", lastRun: "hace 1h" },
  { id: 4, name: "Informe Semanal de Ventas", desc: "Generación y envío de PDF al equipo todos los lunes", status: "pausado", lastRun: "ayer" },
  { id: 5, name: "Limpieza de Base de Datos", desc: "Eliminación de contactos duplicados y validación de emails", status: "error", lastRun: "hace 2d" },
];

const initialLogs = [
  { time: "16:10:45", action: "NUEVO EMAIL DETECTADO", details: "Emisor: info@clinica-luz.com", level: "info" },
  { time: "16:11:02", action: "IA ANALIZANDO CONTENIDO", details: "Intención detectada: Solicitud de presupuesto", level: "ai" },
  { time: "16:11:15", action: "BORRADOR GENERADO", details: "Basado en catálogo de servicios 2024", level: "ai" },
  { time: "16:11:18", action: "EMAIL ENVIADO", details: "Destinatario: info@clinica-luz.com", level: "success" },
  { time: "16:05:30", action: "TAREA CRON EJECUTADA", details: "Sincronización de CRM completada", level: "info" },
  { time: "15:45:12", action: "MODO MONITORIZACIÓN ACTIVADO", details: "Escuchando canales: Email, WhatsApp, API", level: "info" },
];

export default function AutomatizacionIa() {
  const [automations, setAutomations] = useState(initialAutomations);
  const [logs, setLogs] = useState(initialLogs);

  // Simple animation effect for logs
  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = {
        time: new Date().toLocaleTimeString(),
        action: "MONITORIZACIÓN IA",
        details: "Escaneando nuevas señales de entrada...",
        level: Math.random() > 0.5 ? "info" : "ai"
      };
      setLogs(prev => [newLog, ...prev.slice(0, 15)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen bg-[#0F172A] text-slate-300 flex flex-col ${inter.className}`}>
      {/* Header */}
      <header className="h-16 border-b border-white/5 bg-[#1E293B]/30 backdrop-blur-md px-6 flex items-center justify-between shrink-0 sticky top-0 z-50">
        <div className="flex items-center gap-6">
           <Link href="/servicios/ia-integrada" className="p-2 hover:bg-white/5 rounded-lg transition-colors border border-white/10">
              <ArrowLeft className="w-4 h-4 text-slate-500" />
           </Link>
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-lime-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(132,204,22,0.3)]">
                 <Zap className="w-5 h-5 text-slate-900 fill-slate-900" />
              </div>
              <div>
                 <h1 className="text-sm font-black text-white uppercase tracking-[0.2em]">IA Automation Core</h1>
                 <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-lime-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(132,204,22,1)]"></div>
                    <span className="text-[9px] font-black text-lime-500 uppercase tracking-widest">Motor Activo</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
           <div className="flex flex-col items-end">
              <span className="text-xl font-mono font-black text-white leading-none">482</span>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Tareas Automatizadas Hoy</span>
           </div>
           <div className="h-6 w-[1px] bg-white/10"></div>
           <div className="flex flex-col items-end">
              <span className="text-xl font-mono font-black text-lime-500 leading-none">12.5h</span>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Horas Ahorradas</span>
           </div>
           <div className="h-6 w-[1px] bg-white/10"></div>
           <div className="flex flex-col items-end">
              <span className="text-xl font-mono font-black text-white leading-none">99.2%</span>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Tasa de Éxito</span>
           </div>
        </div>

        <button className="px-5 py-2.5 bg-lime-500 text-slate-900 rounded-xl font-bold text-xs hover:bg-white transition-all shadow-lg shadow-lime-500/10 flex items-center gap-2 uppercase tracking-widest">
           <Plus className="w-4 h-4" />
           Nueva Automatización
        </button>
      </header>

      <div className="flex-1 max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 overflow-hidden">
        {/* Automations List */}
        <div className="lg:col-span-7 flex flex-col gap-6 overflow-y-auto pr-2 scrollbar-hide">
           <div className="flex items-center justify-between">
              <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] flex items-center gap-2">
                 <Settings className="w-4 h-4" />
                 Automatizaciones en Ejecución
              </h2>
              <button className="text-[10px] font-bold text-slate-500 hover:text-white transition-colors uppercase flex items-center gap-1.5">
                 <RefreshCw className="w-3 h-3" />
                 Recargar
              </button>
           </div>

           <div className="space-y-4">
              {automations.map((item) => (
                 <div key={item.id} className="bg-[#1E293B]/40 border border-white/5 rounded-3xl p-6 hover:border-lime-500/30 transition-all group relative overflow-hidden">
                    <div className="flex justify-between items-start mb-4">
                       <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                             item.status === 'activo' ? 'bg-lime-500/10 text-lime-500' :
                             item.status === 'error' ? 'bg-red-500/10 text-red-500' : 'bg-slate-700/50 text-slate-500'
                          }`}>
                             {item.status === 'activo' ? <Zap className="w-5 h-5" /> : item.status === 'error' ? <AlertCircle className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
                          </div>
                          <div>
                             <h3 className="text-base font-bold text-white group-hover:text-lime-500 transition-colors uppercase tracking-tight">{item.name}</h3>
                             <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                          </div>
                       </div>
                       <div className="flex gap-2">
                          <button className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                             <Settings className="w-4 h-4" />
                          </button>
                          <button className={`p-2 border rounded-lg transition-colors ${
                             item.status === 'activo' ? 'bg-lime-500 border-lime-500 text-slate-900 group-hover:bg-white ' : 'bg-white/5 border-white/10 text-slate-500'
                          }`}>
                             {item.status === 'activo' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                          </button>
                       </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                       <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5 text-[10px] font-bold">
                             <Clock className="w-3 h-3 text-slate-500" />
                             <span className="text-slate-500 uppercase">Última ejecución:</span>
                             <span className="text-slate-300">{item.lastRun}</span>
                          </div>
                       </div>
                       <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-lime-500 bg-lime-500/5 px-3 py-1 rounded-full">
                          <CheckCircle2 className="w-3 h-3" />
                          Operativo
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* Real-time Task Log */}
        <div className="lg:col-span-5 flex flex-col gap-6 overflow-hidden">
           <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] flex items-center gap-2 shrink-0">
              <Terminal className="w-4 h-4" />
              Log de Acciones en Tiempo Real
           </h2>

           <div className={`flex-1 bg-black/40 border border-white/5 rounded-[2rem] p-6 font-mono overflow-y-auto scrollbar-hide ${jetbrains.className}`}>
              <div className="space-y-4">
                 {logs.map((log, i) => (
                    <div key={i} className={`text-xs animate-in slide-in-from-right-2 duration-500 delay-[${i*100}ms]`}>
                       <div className="flex items-center gap-3 mb-1">
                          <span className="text-slate-600">[{log.time}]</span>
                          <span className={`${
                             log.level === 'ai' ? 'text-lime-500' :
                             log.level === 'success' ? 'text-emerald-500' : 'text-blue-400'
                          } font-black uppercase`}>
                             {log.action}
                          </span>
                       </div>
                       <p className="text-slate-400 pl-4 border-l border-white/10 py-1">{log.details}</p>
                    </div>
                 ))}
                 <div className="flex items-center gap-2 text-lime-500 animate-pulse mt-8">
                    <div className="w-1.5 h-4 bg-lime-500"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Escaneando transacciones...</span>
                 </div>
              </div>
           </div>

           {/* Quick Stats Overlay */}
           <div className="bg-[#84CC16] rounded-[2rem] p-6 text-slate-900 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                 <Activity className="w-20 h-20" />
              </div>
              <div className="relative z-10">
                 <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-4">Estado del Sistema</h3>
                 <div className="flex items-end justify-between">
                    <div>
                       <p className="text-4xl font-black font-mono leading-none">Healthy</p>
                       <p className="text-[10px] font-bold uppercase tracking-widest mt-2">Carga de CPU IA: 12.4%</p>
                    </div>
                    <div className="w-24 h-12 bg-black/10 rounded-xl flex items-center justify-center border border-black/5">
                       <Sparkles className="w-6 h-6 animate-pulse" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
