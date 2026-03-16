"use client";

import React, { useState } from "react";
import { 
  Users, 
  Search, 
  Plus, 
  Mail, 
  Phone, 
  ChevronRight, 
  ArrowLeft,
  X,
  TrendingUp,
  Activity,
  MoreHorizontal,
  DollarSign,
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
  <div className="flex items-center gap-3 px-4 xl:px-6 border-r border-white/5 last:border-r-0">
    <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B]">
      <Icon className="w-4 h-4 xl:w-5 xl:h-5" />
    </div>
    <div>
      <p className="text-[8px] xl:text-[9px] font-black uppercase tracking-widest text-slate-500 mb-0.5">{label}</p>
      <div className="flex items-center gap-2">
        <h4 className="text-sm xl:text-xl font-bold text-white tracking-tight">{value}</h4>
        {trend && (
          <span className={`text-[8px] xl:text-[9px] font-bold ${trend.includes('+') ? 'text-green-500' : 'text-red-500'}`}>{trend}</span>
        )}
      </div>
    </div>
  </div>
);

export default function ClientesPanel() {
  const [selectedId, setSelectedId] = useState(1);
  const [showDetail, setShowDetail] = useState(false);
  const selectedClient = clientsData.find(c => c.id === selectedId) || clientsData[0];

  const handleSelectClient = (id: number) => {
    setSelectedId(id);
    setShowDetail(true);
  };

  return (
    <div className={`min-h-screen bg-[#111318] text-slate-300 flex flex-col font-sans selection:bg-[#F59E0B]/30 ${dmSans.className}`}>
      
      {/* High Density Header Dashboard */}
      <header className="h-auto min-h-20 py-4 xl:py-0 border-b border-white/5 flex flex-col xl:flex-row items-center bg-[#16191f] px-4 xl:px-8 gap-4">
        <div className="flex items-center justify-between w-full xl:w-auto xl:mr-12">
          <div className="flex items-center gap-4 xl:gap-8">
            <Link href="/servicios/saas-paneles" className="w-9 h-9 xl:w-10 xl:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F59E0B] hover:text-black transition-all group">
              <ArrowLeft className="w-4 h-4 xl:w-5 xl:h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
            <div>
              <h1 className="text-[10px] xl:text-sm font-black text-white uppercase tracking-[0.2em] flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span className="truncate">CRM & Fidelización</span>
              </h1>
            </div>
          </div>
          <button className="xl:hidden p-2 text-slate-500"><MoreHorizontal className="w-5 h-5" /></button>
        </div>

        <div className="hidden xl:flex items-center h-full">
           <HeaderMetric label="Retención" value="84.2%" trend="+2.4%" icon={Target} />
           <HeaderMetric label="Ticket Medio" value="2.450€" trend="-1.5%" icon={DollarSign} />
           <HeaderMetric label="Leads Hoy" value="28" trend="+12" icon={UserPlus} />
        </div>

        <div className="flex flex-col sm:flex-row items-center w-full xl:w-auto ml-auto gap-3">
           <div className="relative group w-full sm:w-64 xl:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500 group-focus-within:text-[#F59E0B] transition-colors" />
              <input type="text" placeholder="Búsqueda..." className="bg-black/40 border border-white/5 rounded-xl pl-10 pr-4 py-2 text-xs outline-none focus:border-[#F59E0B]/50 transition-all w-full h-10 xl:h-11" />
           </div>
           <button className="w-full sm:w-auto bg-[#F59E0B] text-black h-10 xl:h-11 px-5 xl:px-6 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#d98b0a] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#F59E0B]/10">
             <Plus className="w-4 h-4 xl:w-5 xl:h-5" />
             <span className="truncate">Nuevo Cliente</span>
           </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Sidebar Left - Hidden on Tablet/Mobile unless focused */}
        <aside className="hidden xl:block w-72 border-r border-white/5 p-6 space-y-8 bg-[#111318] shrink-0">
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-[#F59E0B] mb-4">Embudo</h3>
              <div className="space-y-1">
                {[
                  { n: "Universo", c: 1422, a: true },
                  { n: "Leads Hot", c: 84 },
                  { n: "Cierre", c: 12 },
                  { n: "VIP", c: 312 },
                  { n: "En Riesgo", c: 8, r: true }
                ].map(f => (
                  <button key={f.n} className={`w-full group flex items-center justify-between px-3 py-2.5 rounded-xl text-[11px] font-bold transition-all ${f.a ? 'bg-white/5 text-white' : 'text-slate-500 hover:text-white hover:bg-white/[0.02]'}`}>
                    <span className="flex items-center gap-2">
                        <div className={`w-1 h-1 rounded-full ${f.r ? 'bg-red-500' : (f.a ? 'bg-[#F59E0B]' : 'bg-slate-700')}`}></div>
                        {f.n}
                    </span>
                    <span className="text-[9px] opacity-40 group-hover:opacity-100">{f.c}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px bg-white/5"></div>

            <div className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Métricas</h3>
                <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                        <p className="text-[8px] font-black text-slate-500 uppercase mb-0.5">Nuevos</p>
                        <p className="text-lg font-black text-white">+14</p>
                    </div>
                    <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-green-500">
                        <p className="text-[8px] font-black text-slate-500 uppercase mb-0.5">Activos</p>
                        <p className="text-lg font-black">09</p>
                    </div>
                </div>
            </div>
          </div>
        </aside>

        {/* Master List Column */}
        <main className={`flex-1 xl:max-w-[420px] xl:w-[420px] border-r border-white/5 flex flex-col bg-[#111318] ${showDetail ? 'hidden md:flex' : 'flex'}`}>
          <div className="p-4 xl:p-6 border-b border-white/5 bg-black/5 flex items-center justify-between shrink-0">
            <h3 className="text-[9px] xl:text-[10px] font-black uppercase tracking-widest text-slate-500">Registros</h3>
            <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {clientsData.map(client => (
              <button 
                key={client.id}
                onClick={() => handleSelectClient(client.id)}
                className={`w-full p-6 xl:p-8 text-left border-b border-white/5 transition-all flex flex-col gap-4 relative ${selectedId === client.id ? 'bg-[#F59E0B]/5 xl:border-l-[6px] xl:border-l-[#F59E0B]' : 'hover:bg-white/[0.02]'}`}
              >
                <div className="flex justify-between items-start">
                   <div className="min-w-0 pr-4">
                       <h4 className="font-black text-base xl:text-lg text-white leading-none mb-1 truncate">{client.name}</h4>
                       <span className="text-[8px] xl:text-[9px] font-black px-1.5 py-0.5 rounded bg-white/5 text-slate-400 uppercase tracking-widest border border-white/5 whitespace-nowrap">{client.type}</span>
                   </div>
                   <span className={`text-[9px] xl:text-[10px] font-black border px-2 py-0.5 xl:px-3 xl:py-1 rounded-full uppercase tracking-tighter shrink-0 ${
                       client.status === 'Activo' ? 'border-green-500/30 text-green-500 bg-green-500/5' : 
                       client.status === 'Pendiente' ? 'border-amber-500/30 text-amber-500 bg-amber-500/5' : 'border-slate-500/30 text-slate-500 bg-white/5'
                   }`}>{client.status}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 xl:gap-6">
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[8px] xl:text-[9px] font-black uppercase tracking-tight text-slate-600">
                           <span>Afinidad</span>
                           <span className="text-[#F59E0B]">{client.engagement}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-[#F59E0B]" style={{ width: `${client.engagement}%` }}></div>
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[8px] xl:text-[9px] font-black uppercase tracking-tight text-slate-600">
                           <span>Actividad</span>
                           <span className="text-white">{client.activity}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-slate-500" style={{ width: `${client.activity}%` }}></div>
                        </div>
                    </div>
                </div>
              </button>
            ))}
          </div>
        </main>

        {/* Detail View Section */}
        <section className={`flex-1 bg-[#16191f] overflow-y-auto p-4 md:p-8 xl:p-12 relative ${showDetail ? 'fixed inset-0 z-50 md:relative' : 'hidden xl:block'}`}>
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#F59E0B]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            {/* Mobile Header / Navigation */}
            <div className="xl:hidden flex items-center justify-between mb-8">
               <button onClick={() => setShowDetail(false)} className="flex items-center gap-2 text-xs font-bold text-[#F59E0B]">
                  <ArrowLeft className="w-4 h-4" /> Volver al listado
               </button>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-between mb-10 md:mb-16 gap-6">
               <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 w-full md:w-auto">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-[2rem] md:rounded-[2.5rem] bg-[#F59E0B] flex items-center justify-center text-3xl md:text-4xl font-black text-black shadow-2xl shadow-[#F59E0B]/20 transform md:-rotate-3 hover:rotate-0 transition-transform cursor-pointer shrink-0">
                    {selectedClient.name.substring(0, 1)}
                  </div>
                  <div className="text-center md:text-left min-w-0">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4 truncate">{selectedClient.name}</h2>
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                        <span className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-slate-400 hover:text-[#F59E0B] transition-colors truncate">
                            <Mail className="w-3.5 h-3.5" /> {selectedClient.email}
                        </span>
                        <div className="hidden md:block w-1 h-1 rounded-full bg-white/10"></div>
                        <span className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-slate-400 hover:text-[#F59E0B] transition-colors whitespace-nowrap">
                            <Phone className="w-3.5 h-3.5" /> {selectedClient.phone}
                        </span>
                    </div>
                  </div>
               </div>
               <div className="flex gap-2 w-full md:w-auto justify-center md:justify-start">
                    <button className="flex-1 md:w-12 md:h-12 py-3 md:py-0 bg-white/5 border border-white/5 rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-white/10 text-white transition-all">
                        <X className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button className="flex-1 md:w-12 md:h-12 py-3 md:py-0 bg-white/5 border border-white/5 rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-white/10 text-white transition-all">
                        <MoreHorizontal className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
               </div>
            </div>

            {/* Interaction Matrix */}
            <div className="bg-black/20 border border-white/5 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 mb-8 md:mb-12">
               <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                   <h3 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#F59E0B] flex items-center gap-2.5">
                    <Activity className="w-3.5 h-3.5" />
                    Mapa de Interacciones
                   </h3>
                   <div className="flex items-center gap-4 md:gap-6 text-[8px] md:text-[9px] font-black text-slate-600 uppercase tracking-widest">
                       <span className="flex items-center gap-1.5">Total: <b className="text-[#F59E0B]">42 eventos</b></span>
                       <span className="flex items-center gap-1.5 text-green-500"><TrendingUp className="w-3 h-3" /> +12%</span>
                   </div>
               </div>
               <div className="grid grid-cols-[repeat(10,1fr)] md:grid-cols-[repeat(15,1fr)] gap-2 mb-6 max-h-[200px] xl:max-h-none overflow-y-auto xl:overflow-visible">
                  {Array.from({ length: 90 }).map((_, i) => {
                    const level = (i % 7 === 0) ? 'high' : ((i % 5 === 0) ? 'mid' : ((i % 3 === 0) ? 'low' : 'none'));
                    return (
                        <div 
                          key={i} 
                          className={`aspect-square rounded-sm border border-white/5 transition-all hover:scale-125 xl:hover:scale-150 hover:z-20 ${
                            level === 'high' ? 'bg-[#F59E0B]' : 
                            level === 'mid' ? 'bg-[#F59E0B]/60' : 
                            level === 'low' ? 'bg-[#F59E0B]/20' : 'bg-white/5'
                          }`}
                        ></div>
                    );
                  })}
               </div>
               <div className="flex items-center gap-3 text-[8px] md:text-[9px] font-black text-slate-700 uppercase tracking-[0.2em]">
                  <span>Mínimo</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-sm bg-white/5"></div>
                    <div className="w-2 h-2 rounded-sm bg-[#F59E0B]/20"></div>
                    <div className="w-2 h-2 rounded-sm bg-[#F59E0B]"></div>
                  </div>
                  <span>Máximo</span>
               </div>
            </div>

            {/* History + Next Action */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-16">
               <div className="bg-[#111318] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-white/5">
                  <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6 md:mb-8">Historial</h4>
                  <div className="space-y-6 md:space-y-8">
                    <div className="relative pl-6 md:pl-8 border-l border-white/5 space-y-1.5">
                      <div className="absolute -left-[4px] md:-left-[5px] top-1.5 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#F59E0B] ring-4 ring-[#F59E0B]/10"></div>
                      <p className="text-xs md:text-sm font-black text-white uppercase tracking-tight">Cierre Propuesta Q3</p>
                      <p className="text-[8px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                          <Clock className="w-2.5 h-2.5" /> Ayer · Juan Marcos
                      </p>
                    </div>
                  </div>
               </div>

               <div className="bg-[#F59E0B]/5 border border-[#F59E0B]/20 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#F59E0B] mb-2">Próxima Acción</h4>
                    <p className="text-lg md:text-2xl font-black text-white italic mb-1 uppercase tracking-tighter">Reunión Revisión LTV</p>
                    <p className="text-[10px] font-bold text-[#F59E0B] tracking-widest uppercase">20 Marzo · 10:00</p>
                  </div>
                  <div className="flex gap-2 mt-6 md:mt-8">
                      <button className="flex-1 py-3 md:py-4 bg-white/10 hover:bg-white/20 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white transition-all">Reagendar</button>
                      <button className="w-10 h-10 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-white/10 text-white transition-all"><ChevronRight className="w-5 h-5 md:w-6 md:h-6" /></button>
                  </div>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button className="w-full sm:flex-[2] py-4 md:py-5 bg-[#F59E0B] text-black rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-[#d98b0a] transition-all shadow-xl shadow-[#F59E0B]/10">
                  Contactar Hoy
                </button>
                <button className="w-full sm:flex-1 py-4 md:py-5 bg-white/5 border border-white/10 text-white rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                  Seguimiento
                </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
