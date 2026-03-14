"use client";

import React, { useState } from "react";
import { 
  Users, 
  Search, 
  Plus, 
  Mail, 
  Phone, 
  Calendar,
  ChevronRight,
  ArrowLeft,
  X,
  TrendingUp,
  Activity,
  MoreHorizontal,
  DollarSign,
  TrendingDown,
  UserPlus,
  Clock,
  Target
} from "lucide-react";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: 'Activo' | 'Inactivo' | 'Pendiente';
  type: 'Corporativo' | 'Particular';
  engagement: number;
  value: number;
  activity: number;
}

const clientsData: Client[] = [
  { id: 1, name: "Alejandro Ruiz", email: "aruiz@media.com", phone: "+34 612 345 678", status: "Activo", type: "Corporativo", engagement: 92, value: 78, activity: 85 },
  { id: 2, name: "Maria Garcia", email: "maria.g@gmail.com", phone: "+34 678 901 234", status: "Inactivo", type: "Particular", engagement: 45, value: 30, activity: 12 },
  { id: 3, name: "Innova Tech S.L.", email: "info@innovatech.es", phone: "+34 912 345 678", status: "Activo", type: "Corporativo", engagement: 88, value: 95, activity: 90 },
  { id: 4, name: "Juan Pardo", email: "juan.p@outlook.es", phone: "+34 654 321 098", status: "Pendiente", type: "Particular", engagement: 12, value: 15, activity: 5 },
];

const HeaderMetric = ({ label, value, trend, icon: Icon }: any) => (
  <div className="flex items-center gap-4 px-6 border-r border-white/5 last:border-r-0">
    <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B]">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-0.5">{label}</p>
      <div className="flex items-center gap-2">
        <h4 className="text-xl font-bold text-white tracking-tight">{value}</h4>
        {trend && (
          <span className={`text-[9px] font-bold ${trend.includes('+') ? 'text-green-500' : 'text-red-500'}`}>{trend}</span>
        )}
      </div>
    </div>
  </div>
);

export default function ClientesPanel() {
  const [selectedId, setSelectedId] = useState(1);
  const selectedClient = clientsData.find(c => c.id === selectedId) || clientsData[0];

  return (
    <div className={`min-h-screen bg-[#111318] text-slate-300 flex flex-col font-sans selection:bg-[#F59E0B]/30 ${dmSans.className}`}>
      
      {/* High Density Header Dashboard - CRM Edition */}
      <header className="h-20 border-b border-white/5 flex items-center bg-[#16191f] px-8">
        <div className="flex items-center gap-8 mr-12">
          <Link href="/servicios/saas-paneles" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F59E0B] hover:text-black transition-all group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
          <div>
            <h1 className="text-sm font-black text-white uppercase tracking-[0.2em] flex items-center gap-3">
              <Users className="w-4 h-4 text-[#F59E0B]" />
              Gestor de Clientes y Fidelización
            </h1>
          </div>
        </div>

        <div className="hidden lg:flex items-center h-full">
           <HeaderMetric label="Retención Global" value="84.2%" trend="+2.4%" icon={Target} />
           <HeaderMetric label="Valor Medio Cliente" value="2.450 €" trend="-1.5%" icon={DollarSign} />
           <HeaderMetric label="Leads Generados Hoy" value="28" trend="+12" icon={UserPlus} />
        </div>

        <div className="ml-auto flex items-center gap-4">
           <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-[#F59E0B] transition-colors" />
              <input type="text" placeholder="Búsqueda global..." className="bg-black/40 border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-xs outline-none focus:border-[#F59E0B]/50 transition-all w-72 h-11" />
           </div>
           <button className="bg-[#F59E0B] text-black h-11 px-6 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#d98b0a] transition-all flex items-center gap-3 shadow-lg shadow-[#F59E0B]/10">
             <Plus className="w-5 h-5" />
             Añadir a la Base de Datos
           </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* Sidebar Left: Optimized with more metrics */}
        <aside className="w-72 border-r border-white/5 p-6 space-y-8 bg-[#111318]">
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-[#F59E0B] mb-4">Embudo de Relación</h3>
              <div className="space-y-1">
                {[
                  { n: "Todo el Universo", c: 1422, a: true },
                  { n: "Potenciales (Hot Leads)", c: 84 },
                  { n: "Negociando Cierre", c: 12 },
                  { n: "Clientes VIP", c: 312 },
                  { n: "Cuentas en Riesgo", c: 8, r: true }
                ].map(f => (
                  <button key={f.n} className={`w-full group flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${f.a ? 'bg-white/5 text-white' : 'text-slate-500 hover:text-white hover:bg-white/[0.02]'}`}>
                    <span className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${f.r ? 'bg-red-500' : (f.a ? 'bg-[#F59E0B]' : 'bg-slate-700')}`}></div>
                        {f.n}
                    </span>
                    <span className="text-[10px] opacity-40 group-hover:opacity-100">{f.c}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px bg-white/5"></div>

            <div className="space-y-5">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Métricas del Período</h3>
                <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                        <p className="text-[9px] font-black text-slate-500 uppercase mb-1">Nuevos/Mes</p>
                        <p className="text-xl font-black text-white">+14</p>
                    </div>
                    <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl text-green-500">
                        <p className="text-[9px] font-black text-slate-500 uppercase mb-1">Activados</p>
                        <p className="text-xl font-black">09</p>
                    </div>
                </div>
                <div className="p-5 bg-[#F59E0B]/5 border border-[#F59E0B]/10 rounded-[2rem] relative overflow-hidden group">
                   <div className="relative z-10">
                      <p className="text-[10px] font-black text-[#F59E0B] uppercase tracking-widest mb-1">Salud de Base (LTV)</p>
                      <h4 className="text-2xl font-black text-white mb-2">Excelente</h4>
                      <p className="text-[10px] text-slate-500 font-bold leading-relaxed">Crecimiento estimado del 24.5% vs trimestre anterior</p>
                   </div>
                   <Activity className="absolute -bottom-4 -right-4 w-20 h-20 text-[#F59E0B]/5 group-hover:text-[#F59E0B]/10 transition-colors" />
                </div>
            </div>
          </div>
        </aside>

        {/* Column 2: Master List with descriptive progress bars */}
        <main className="w-[420px] border-r border-white/5 flex flex-col bg-[#111318]">
          <div className="p-6 border-b border-white/5 bg-black/5 flex items-center justify-between">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Listado Maestro de Registros</h3>
            <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {clientsData.map(client => (
              <button 
                key={client.id}
                onClick={() => setSelectedId(client.id)}
                className={`w-full p-8 text-left border-b border-white/5 transition-all flex flex-col gap-4 relative ${selectedId === client.id ? 'bg-[#F59E0B]/5 border-l-[6px] border-l-[#F59E0B]' : 'hover:bg-white/[0.02]'}`}
              >
                <div className="flex justify-between items-start">
                   <div>
                       <h4 className="font-black text-lg text-white leading-none mb-1">{client.name}</h4>
                       <span className="text-[9px] font-black px-2 py-0.5 rounded-md bg-white/5 text-slate-400 uppercase tracking-widest border border-white/5">{client.type}</span>
                   </div>
                   <span className={`text-[10px] font-black border px-3 py-1 rounded-full uppercase tracking-tighter ${
                       client.status === 'Activo' ? 'border-green-500/30 text-green-500 bg-green-500/5' : 
                       client.status === 'Pendiente' ? 'border-amber-500/30 text-amber-500 bg-amber-500/5' : 'border-slate-500/30 text-slate-500 bg-white/5'
                   }`}>{client.status}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-tight text-slate-600">
                           <span>Afinidad (LTV)</span>
                           <span className="text-[#F59E0B]">{client.engagement}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-[#F59E0B]" style={{ width: `${client.engagement}%` }}></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-tight text-slate-600">
                           <span>Nivel Actividad</span>
                           <span className="text-white">{client.activity}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-slate-500" style={{ width: `${client.activity}%` }}></div>
                        </div>
                    </div>
                </div>
              </button>
            ))}
          </div>
        </main>

        {/* Column 3: Redefined Detail View with improved interaction */}
        <section className="flex-1 bg-[#16191f] overflow-y-auto p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F59E0B]/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-start justify-between mb-16">
               <div className="flex items-center gap-10">
                  <div className="w-28 h-28 rounded-[2.5rem] bg-[#F59E0B] flex items-center justify-center text-4xl font-black text-black shadow-2xl shadow-[#F59E0B]/20 transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                    {selectedClient.name.substring(0, 1)}
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <h2 className="text-5xl font-black text-white tracking-tighter">{selectedClient.name}</h2>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2.5 text-xs font-bold text-slate-400 group cursor-pointer hover:text-[#F59E0B] transition-colors">
                            <Mail className="w-4.5 h-4.5" /> {selectedClient.email}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                        <span className="flex items-center gap-2.5 text-xs font-bold text-slate-400 group cursor-pointer hover:text-[#F59E0B] transition-colors">
                            <Phone className="w-4.5 h-4.5" /> {selectedClient.phone}
                        </span>
                    </div>
                  </div>
               </div>
               <div className="flex gap-3">
                    <button className="w-12 h-12 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 text-white transition-all">
                        <X className="w-6 h-6" />
                    </button>
                    <button className="w-12 h-12 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 text-white transition-all">
                        <MoreHorizontal className="w-6 h-6" />
                    </button>
               </div>
            </div>

            {/* Heatmap Activity Refined with Context */}
            <div className="bg-black/20 border border-white/5 rounded-[3rem] p-10 mb-12">
               <div className="flex items-center justify-between mb-8">
                   <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F59E0B] flex items-center gap-3">
                    <Activity className="w-4 h-4" />
                    Mapa de Interacciones (90 Días)
                   </h3>
                   <div className="flex items-center gap-6 text-[9px] font-black text-slate-600 uppercase tracking-widest">
                       <span className="flex items-center gap-2">Total: <b className="text-[#F59E0B]">42 eventos</b></span>
                       <span className="flex items-center gap-2">Tendencia: <TrendingUp className="w-3 h-3 text-green-500" /> +12%</span>
                   </div>
               </div>
               <div className="grid grid-cols-[repeat(15,1fr)] gap-2 mb-6">
                  {Array.from({ length: 90 }).map((_, i) => {
                    const level = (i % 7 === 0) ? 'high' : ((i % 5 === 0) ? 'mid' : ((i % 3 === 0) ? 'low' : 'none'));
                    const dateStr = new Date(Date.now() - (89 - i) * 24 * 60 * 60 * 1000).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
                    return (
                        <div 
                          key={i} 
                          title={`${dateStr}: ${level === 'none' ? 'Sin actividad' : 'Actividad ' + level}`}
                          className={`aspect-square rounded-sm border border-white/5 transition-all hover:scale-150 hover:z-20 cursor-help ${
                            level === 'high' ? 'bg-[#F59E0B]' : 
                            level === 'mid' ? 'bg-[#F59E0B]/60' : 
                            level === 'low' ? 'bg-[#F59E0B]/20' : 'bg-white/5'
                          }`}
                        ></div>
                    );
                  })}
               </div>
               <div className="flex items-center gap-4 text-[9px] font-black text-slate-700 uppercase tracking-[0.2em]">
                  <span>Mínimo</span>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-sm bg-white/5"></div>
                    <div className="w-2.5 h-2.5 rounded-sm bg-[#F59E0B]/20"></div>
                    <div className="w-2.5 h-2.5 rounded-sm bg-[#F59E0B]/60"></div>
                    <div className="w-2.5 h-2.5 rounded-sm bg-[#F59E0B]"></div>
                  </div>
                  <span>Máximo</span>
               </div>
            </div>

            {/* Dual Action History + Scheduling */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
               <div className="bg-[#111318] rounded-[2.5rem] p-10 border border-white/5">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8">Historial de Interacciones</h4>
                  <div className="space-y-8">
                    <div className="relative pl-8 border-l border-white/5 space-y-2">
                      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#F59E0B] ring-4 ring-[#F59E0B]/10"></div>
                      <p className="text-sm font-black text-white leading-tight uppercase tracking-tight">Cierre de Propuesta Q3</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                          <Clock className="w-3 h-3" /> Ayer · Juan Marcos
                      </p>
                    </div>
                    <div className="relative pl-8 border-l border-white/5 space-y-2 opacity-50 group hover:opacity-100 transition-opacity">
                      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20"></div>
                      <p className="text-sm font-black text-white leading-tight uppercase tracking-tight">Ticket Soporte: Integración API</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">12 Feb 2026 · Maria T.</p>
                    </div>
                  </div>
               </div>

               <div className="bg-[#F59E0B]/5 border border-[#F59E0B]/20 rounded-[2.5rem] p-10 flex flex-col justify-between group">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#F59E0B] mb-2">Siguiente Acción Programada</h4>
                    <p className="text-2xl font-black text-white italic mb-1 uppercase tracking-tighter">Reunión Revisión LTV</p>
                    <p className="text-xs font-bold text-[#F59E0B] tracking-widest uppercase">Viernes, 20 Marzo · 10:00</p>
                  </div>
                  <div className="flex gap-3 mt-8">
                      <button className="flex-1 py-4 bg-white/10 hover:bg-white/20 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white transition-all">Reagendar</button>
                      <button className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 text-white transition-all"><ChevronRight className="w-6 h-6" /></button>
                  </div>
               </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <button className="flex-[2] py-5 bg-[#F59E0B] text-black rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-[#d98b0a] transition-all shadow-2xl shadow-[#F59E0B]/20">
                  Contactar con el cliente hoy
                </button>
                <button className="flex-1 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                  Programar Seguimiento
                </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
