"use client";

import React, { useState } from "react";
import { 
  Calendar, 
  Clock, 
  Users, 
  Plus, 
  CheckCircle2, 
  MessageCircle,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  X,
  MapPin,
  TrendingDown,
  TrendingUp,
  AlertCircle,
  LucideIcon
} from "lucide-react";
import Link from "next/link";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });

interface Reservation {
  id: number;
  name: string;
  time: string;
  guests: number;
  status: 'Confirmada' | 'Pendiente' | 'Cancelada';
  phone: string;
  waStatus: 'enviado' | 'pendiente' | 'no-enviado';
}

const reservationsData: Reservation[] = [
  { id: 1, name: "Carlos Mendoza", time: "14:30", guests: 4, status: "Confirmada", phone: "+34 600 000 001", waStatus: 'enviado' },
  { id: 2, name: "Lucía Fernández", time: "16:00", guests: 2, status: "Pendiente", phone: "+34 600 000 002", waStatus: 'pendiente' },
  { id: 3, name: "Marta Sánchez", time: "21:30", guests: 3, status: "Confirmada", phone: "+34 600 000 003", waStatus: 'no-enviado' },
  { id: 4, name: "Diego García", time: "12:00", guests: 2, status: "Pendiente", phone: "+34 600 000 004", waStatus: 'pendiente' },
  { id: 5, name: "Elena Rivas", time: "19:00", guests: 5, status: "Confirmada", phone: "+34 600 000 005", waStatus: 'enviado' },
];

const hours = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const MetricHeader = ({ label, value, trend, trendIcon: TrendIcon, color = "text-[#10B981]", subValue }: any) => (
  <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex-1 min-w-[180px]">
    <p className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-2">{label}</p>
    <div className="flex items-end justify-between">
      <div>
        <h4 className={`text-2xl font-black ${color}`}>{value}</h4>
        {subValue && <p className="text-[10px] text-white/30 font-bold uppercase mt-1">{subValue}</p>}
      </div>
      {trend && (
        <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/5 ${trend.includes('+') ? 'text-green-400' : 'text-red-400'}`}>
          {TrendIcon && <TrendIcon className="w-3 h-3" />}
          {trend}
        </div>
      )}
    </div>
  </div>
);

export default function ReservasPanel() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-[#0D1F1A] text-slate-100 p-4 md:p-8 font-sans selection:bg-[#10B981]/30 ${lora.className}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Sidebar-Style Top (Compact) */}
        <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
            <Link 
              href="/servicios/saas-paneles"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#10B981] hover:text-white transition-all group shrink-0"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
            <div className="h-6 w-px bg-white/10 hidden xs:block"></div>
            <h1 className="text-[10px] md:text-sm font-black text-white uppercase tracking-[0.2em] opacity-80 leading-tight">Control de Reservas e Inventario</h1>
        </div>

        {/* Dashboard Header - Internal Ops Style */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 md:mb-12">
          <div className="xs:col-span-2 lg:col-span-2 flex flex-col justify-center mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">Gourmet Experience</h2>
            <p className="text-[#10B981] font-bold tracking-[0.1em] uppercase text-[10px] md:text-xs flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                Turno de Tarde · 14 Mar 2026
            </p>
          </div>
          <MetricHeader label="Aforo Actual" value="82%" subValue="78 / 95 PAX" trend="+12%" trendIcon={TrendingUp} />
          <MetricHeader label="Reservas Hoy" value="24" subValue="14 Confirmadas" />
          <MetricHeader label="Cancelaciones" value="2" trend="-4%" trendIcon={TrendingDown} color="text-red-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Próxima Apertura Metric */}
            <div className="bg-[#10B981] rounded-[2rem] p-6 text-white flex flex-col justify-between relative overflow-hidden group">
                <Clock className="absolute top-2 right-2 w-24 h-24 opacity-10 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-1">Próxima Reserva</p>
                   <h4 className="text-3xl font-black">15:30</h4>
                </div>
                <div className="mt-4">
                   <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-2 italic">Faltan 22 min</p>
                   <div className="w-full bg-black/20 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-white h-full w-[45%]"></div>
                   </div>
                </div>
            </div>

            {/* Turnos Status Dashboard */}
            <div className="lg:col-span-3 bg-white/5 border border-white/5 rounded-[2rem] p-6 flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981]">Resumen Turnos</span>
                        <span className="text-[10px] font-bold text-white/40 uppercase">Viernes 14</span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-10 bg-white/20 rounded-full"></div>
                                <div>
                                    <p className="text-xs font-black text-white uppercase tracking-wider">Servicio Comida</p>
                                    <p className="text-[9px] font-bold text-white/30 uppercase">12:00 - 17:00</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 rounded-md text-[9px] font-black uppercase">Activo</span>
                        </div>
                        <div className="flex items-center justify-between opacity-50">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-10 bg-white/10 rounded-full"></div>
                                <div>
                                    <p className="text-xs font-black text-white uppercase tracking-wider">Servicio Cena</p>
                                    <p className="text-[9px] font-bold text-white/30 uppercase">20:00 - 01:30</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 bg-white/5 text-white/40 border border-white/10 rounded-md text-[9px] font-black uppercase tracking-widest">En pausa</span>
                        </div>
                    </div>
                </div>
                <div className="md:w-px bg-white/5"></div>
                <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                            <AlertCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-orange-400">Stock Crítico</p>
                            <p className="text-xs text-white/60 font-medium">Falta Solomillo (Turno Cena)</p>
                        </div>
                    </div>
                    <button className="w-full py-3 bg-white/5 border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Ver Inventario Completo</button>
                </div>
            </div>
        </div>

        {/* Timeline Horizontal Refined */}
        <div className="mb-12 md:mb-16 bg-[#0D1614] border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8 md:mb-10">
                <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#10B981]">Control de Mesa y Flujo</h2>
                <div className="flex gap-4 w-full sm:w-auto">
                    <button onClick={() => setIsModalOpen(true)} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-[#10B981] text-white rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest shadow-lg shadow-[#10B981]/20 hover:scale-105 transition-all">
                       <Plus className="w-4 h-4" /> Registrar
                    </button>
                    <div className="flex gap-1">
                        <button className="w-10 h-10 border border-white/5 bg-white/5 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all"><ChevronLeft className="w-4 h-4" /></button>
                        <button className="w-10 h-10 border border-white/5 bg-white/5 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all"><ChevronRight className="w-4 h-4" /></button>
                    </div>
                </div>
            </div>
            
            <div className="relative overflow-x-auto pb-6 scrollbar-hide">
                <div className="flex gap-4 min-w-[1400px]">
                    {hours.map(hour => {
                        const res = reservationsData.find(r => r.time.startsWith(hour.split(":")[0]));
                        return (
                            <div key={hour} className="flex-1 border-l border-white/5 pt-2 group">
                                <span className="text-[9px] font-black text-white/20 block mb-6 px-2">{hour}</span>
                                {res ? (
                                    <div className={`mx-2 p-5 rounded-3xl border transition-all relative overflow-hidden group/card ${
                                        res.status === 'Confirmada' ? 'bg-[#10B981]/10 border-[#10B981]/30 hover:border-[#10B981]' : 'bg-orange-500/10 border-orange-500/30 hover:border-orange-500'
                                    }`}>
                                        <div className={`absolute top-0 right-0 w-12 h-12 ${res.status === 'Confirmada' ? 'bg-[#10B981]/5' : 'bg-orange-500/5'} rounded-bl-[2rem] -mr-4 -mt-4`}></div>
                                        <div className="flex items-center justify-between mb-3 relative z-10">
                                            <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${
                                                res.status === 'Confirmada' ? 'bg-[#10B981] text-white' : 'bg-orange-500 text-white'
                                            }`}>
                                                {res.status}
                                            </span>
                                            <span className="text-[10px] font-bold text-white/30">{res.time}</span>
                                        </div>
                                        <p className="font-bold text-sm text-white mb-3 tracking-tight truncate">{res.name}</p>
                                        <div className="flex items-center gap-3 text-[10px] uppercase font-black tracking-widest text-[#10B981]">
                                            <Users className="w-3.5 h-3.5" />
                                            {res.guests} PAX
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mx-2 h-28 border-2 border-dashed border-white/5 rounded-[2rem] group-hover:border-[#10B981]/20 transition-all flex items-center justify-center italic text-[#10B981]/10 uppercase font-black text-[9px] tracking-widest">Libre</div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

        {/* Listado Principal - Occupies Full Width more efficiently */}
        <div className="space-y-6 mb-20">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#10B981] mb-6 md:mb-8">Operativa en Vivo</h3>
            <div className="grid gap-4">
                {reservationsData.map(res => (
                   <div key={res.id} className="bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-[2.5rem] p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between group hover:bg-white/[0.04] hover:border-[#10B981]/30 transition-all">
                       <div className="flex items-center gap-4 md:gap-8 mb-6 md:mb-0">
                           <div className="w-20 h-20 bg-black/40 rounded-3xl flex flex-col items-center justify-center border border-white/5 relative overflow-hidden">
                               <div className={`absolute top-0 left-0 w-full h-1 ${res.status === 'Confirmada' ? 'bg-[#10B981]' : 'bg-orange-500'}`}></div>
                               <span className="text-lg font-black text-white leading-none mb-1">{res.time}</span>
                               <span className="text-[9px] uppercase font-black tracking-[0.2em] opacity-30">TURNO</span>
                           </div>
                           <div>
                               <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-1">
                                    <h4 className="text-lg md:text-2xl font-bold text-white leading-tight">{res.name}</h4>
                                    <span className={`px-2 md:px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-widest ${res.status === 'Confirmada' ? 'text-[#10B981]' : 'text-orange-500'}`}>
                                        Mesa {res.id + 4}
                                    </span>
                               </div>
                               <div className="flex flex-wrap items-center gap-6">
                                  <span className="flex items-center gap-2 text-[10px] text-white/40 uppercase font-black tracking-widest">
                                      <Users className="w-3.5 h-3.5 text-[#10B981]" /> {res.guests} Personas
                                  </span>
                                  <span className="flex items-center gap-2 text-[10px] text-white/40 uppercase font-black tracking-widest">
                                      <MapPin className="w-3.5 h-3.5 text-[#10B981]" /> Salón Principal
                                  </span>
                                  <span className="flex items-center gap-2 text-[10px] text-white/40 uppercase font-black tracking-widest">
                                      <Clock className="w-3.5 h-3.5 text-[#10B981]" /> Prep. 15 min antes
                                  </span>
                               </div>
                           </div>
                       </div>
                       
                       <div className="flex grid grid-cols-2 md:flex items-center gap-3 md:gap-4 border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                            <div className="flex flex-col items-start md:items-end gap-1 px-2 md:px-4">
                                <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white/20">Notificación</p>
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${
                                        res.waStatus === 'enviado' ? 'bg-[#10B981]' :
                                        res.waStatus === 'pendiente' ? 'bg-orange-400' : 'bg-slate-600'
                                    }`}></div>
                                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-tight text-white/60">{res.waStatus.replace('-', ' ')}</span>
                                </div>
                            </div>
                            <button className={`col-span-1 flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all border ${
                                res.waStatus === 'enviado' ? 'bg-[#10B981]/5 border-[#10B981]/20 text-[#10B981] opacity-50 cursor-not-allowed' : 'bg-white/5 border-white/5 hover:border-[#10B981]/50 text-white'
                            }`}>
                                <MessageCircle className={`w-4 h-4 md:w-5 md:h-5 ${res.waStatus === 'enviado' ? 'text-[#10B981]' : 'text-white/40'}`} />
                                <span className="hidden xs:inline">{res.waStatus === 'enviado' ? 'Enviado' : 'WhatsApp'}</span>
                                <span className="xs:hidden">WA</span>
                            </button>
                            <button className="col-start-2 w-full md:w-14 h-12 md:h-14 bg-white/5 border border-white/5 rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all">
                                <MoreVertical className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                       </div>
                   </div>
                ))}
            </div>
        </div>

        {/* Modal Simulado */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-[#0D1614] border border-white/10 w-full max-w-md rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#10B981]/5 rounded-full blur-[100px]"></div>
              <div className="flex justify-between items-center mb-10 md:mb-12 relative z-10">
                <h3 className="text-xl md:text-3xl font-bold italic text-white uppercase">Registro</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 md:p-3 hover:bg-white/5 rounded-xl transition-colors border border-white/10">
                  <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
              </div>
              <div className="space-y-6 relative z-10">
                <div className="space-y-3">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#10B981] px-1">Cliente Principal</label>
                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 outline-none focus:border-[#10B981] transition-colors font-bold text-white uppercase placeholder:text-white/10 text-sm" placeholder="NOMBRE COMPLETO" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#10B981] px-1">Hora</label>
                        <select className="w-full bg-black/40 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 outline-none focus:border-[#10B981] transition-colors font-bold appearance-none text-white uppercase text-sm">
                            {hours.map(h => <option key={h} className="bg-[#0D1614]">{h}</option>)}
                        </select>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#10B981] px-1">PAX</label>
                        <input type="number" defaultValue={2} className="w-full bg-black/40 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 outline-none focus:border-[#10B981] transition-colors font-bold text-white text-sm" />
                    </div>
                </div>
                <button className="w-full py-4 md:py-5 bg-[#10B981] text-white rounded-full font-black text-base md:text-lg hover:bg-[#059669] transition-all shadow-xl shadow-[#10B981]/20 mt-6 uppercase tracking-[0.2em]">
                  Inscribir
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
