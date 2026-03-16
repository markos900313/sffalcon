"use client";

import React, { useState } from "react";
import { 
  Plus, 
  Clock, 
  ChevronRight, 
  ChevronLeft,
  ArrowLeft,
  X,
  MoreHorizontal,
  BarChart2,
  Zap,
  CheckCircle,
  Timer,
  Users,
  AlertCircle,
  Bell,
  Search,
  Settings
} from "lucide-react";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const initialTasks = [
  { id: 1, title: "Optimización de Inventario Logístico", user: "Marcos G.", priority: "Alta", deadline: "2 días", status: "pendiente", progress: 0, updated: "hace 2h" },
  { id: 2, title: "Auditoría de Cumplimiento Contractual", user: "Sara L.", priority: "Media", deadline: "5 días", status: "en-proceso", progress: 65, updated: "hace 5h" },
  { id: 3, title: "Mantenimiento servidores cloud", user: "Alex T.", priority: "Alta", deadline: "Hoy", status: "completado", progress: 100, updated: "hace 10m" },
  { id: 4, title: "Refuerzo en la Estrategia de Cierre", user: "Marcos G.", priority: "Baja", deadline: "12 días", status: "pendiente", progress: 0, updated: "hace 1d" },
  { id: 5, title: "Auditoría mensual logística", user: "Sara L.", priority: "Alta", deadline: "8 días", status: "en-proceso", progress: 30, updated: "hace 3h" },
];

const resourceLoad = [
  { name: "Marcos G.", load: 60 },
  { name: "Sara L.", load: 85 },
  { name: "Alex T.", load: 25 },
  { name: "SFFALCON", load: 45 },
];

export default function OperacionesPanel() {
  const [tasks, setTasks] = useState(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const moveTask = (id: number, newStatus: string) => {
    setTasks(tasks.map(t => t.id === id ? { 
      ...t, 
      status: newStatus, 
      progress: newStatus === 'completado' ? 100 : (newStatus === 'en-proceso' ? 50 : 0),
      updated: "Justo ahora"
    } : t));
  };

  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case 'Alta': return { border: 'border-l-[3px] border-l-[#EF4444]', badgeBg: 'bg-[#FEF2F2]', badgeText: 'text-[#DC2626]' };
      case 'Media': return { border: 'border-l-[3px] border-l-[#F59E0B]', badgeBg: 'bg-[#FFFBEB]', badgeText: 'text-[#D97706]' };
      case 'Baja': return { border: 'border-l-[3px] border-l-[#94A3B8]', badgeBg: 'bg-[#F8FAFC]', badgeText: 'text-[#64748B]' };
      default: return { border: 'border-l-[3px] border-l-[#94A3B8]', badgeBg: 'bg-[#F8FAFC]', badgeText: 'text-[#64748B]' };
    }
  };

  const TaskCard = ({ task, status }: any) => {
    const styles = getPriorityStyles(task.priority);
    const initials = task.user.split(' ').map((n: string) => n[0]).join('');

    return (
      <div className={`bg-white rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-[#E8ECF4] ${styles.border} group transition-all`}>
        <div className="flex justify-between items-start mb-3">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${styles.badgeBg} ${styles.badgeText} uppercase tracking-wider`}>
            {task.priority}
          </span>
          <button className="text-[#64748B] hover:text-[#0F172A] transition-colors"><MoreHorizontal className="w-4 h-4" /></button>
        </div>

        <h4 className="text-sm font-semibold text-[#0F172A] mb-4 leading-tight group-hover:text-[#7C3AED] transition-colors">
          {task.title}
        </h4>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center text-[10px] text-[#64748B] font-bold uppercase tracking-wider">
            <span>Progreso</span>
            <span className="text-[#0F172A]">{task.progress}%</span>
          </div>
          <div className="w-full bg-[#E2E8F0] h-1.5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#7C3AED] rounded-full transition-all duration-700" 
              style={{ width: `${task.progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[#E8ECF4]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[9px] font-bold text-[#7C3AED] border border-[#DDD6FE]">
              {initials}
            </div>
            <div className="text-[10px]">
              <p className={`flex items-center gap-1 font-medium ${task.deadline === 'Hoy' ? 'text-[#EF4444]' : 'text-[#64748B]'}`}>
                <Clock className="w-2.5 h-2.5" /> {task.deadline}
              </p>
            </div>
          </div>
          <div className="flex gap-1.5">
            {status !== 'pendiente' && (
              <button onClick={() => moveTask(task.id, status === 'en-proceso' ? 'pendiente' : 'en-proceso')} className="w-6 h-6 flex items-center justify-center border border-[#E8ECF4] hover:bg-[#F8F9FC] rounded-md transition-all text-[#64748B]"><ChevronLeft className="w-3.5 h-3.5" /></button>
            )}
            {status !== 'completado' && (
              <button onClick={() => moveTask(task.id, status === 'pendiente' ? 'en-proceso' : 'completado')} className="w-6 h-6 flex items-center justify-center bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-md transition-all"><ChevronRight className="w-3.5 h-3.5" /></button>
            )}
          </div>
        </div>
        <div className="mt-2 text-[9px] text-[#64748B] font-medium flex items-center gap-1">
          <Timer className="w-2.5 h-2.5" /> Actualizado {task.updated}
        </div>
      </div>
    );
  };

  const Column = ({ title, status, tasks: colTasks, icon: Icon }: any) => (
    <div className="flex-1 min-w-[300px] xs:min-w-[320px] bg-[#F1F5F9] rounded-2xl p-3 md:p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${
            status === 'pendiente' ? 'bg-[#64748B]' :
            status === 'en-proceso' ? 'bg-[#7C3AED]' : 'bg-[#10B981]'
          }`}></div>
          <h3 className="text-[12px] font-bold text-[#0F172A] uppercase tracking-wider">{title}</h3>
          <span className="text-[10px] bg-white border border-[#E8ECF4] px-2 py-0.5 rounded-full font-bold text-[#64748B]">
            {colTasks.length}
          </span>
        </div>
        <button className="text-[#64748B] hover:text-[#0F172A]"><Plus className="w-4 h-4" /></button>
      </div>

      <div className="space-y-3 flex-1 overflow-y-auto scrollbar-hide">
        {colTasks.map((task: any) => (
          <TaskCard key={task.id} task={task} status={status} />
        ))}
      </div>
      
      {status === 'pendiente' && (
        <button 
          onClick={() => setIsModalOpen(true)}
          className="mt-3 w-full py-3 border-2 border-dashed border-[#7C3AED] rounded-xl flex items-center justify-center gap-2 text-[#7C3AED] hover:bg-[#F5F3FF] transition-all text-[12px] font-bold"
        >
          <Plus className="w-4 h-4" />
          Asignar prioridad
        </button>
      )}
    </div>
  );

  return (
    <div className={`min-h-screen bg-white text-[#0F172A] font-sans selection:bg-[#7C3AED]/10 ${inter.className}`}>
      {/* Topbar */}
      <nav className="h-auto min-h-16 py-3 md:py-0 border-b border-[#E8ECF4] sticky top-0 bg-white/80 backdrop-blur-md z-40 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
          <Link href="/servicios/saas-paneles" className="p-2 hover:bg-[#F8F9FC] rounded-lg transition-colors border border-[#E8ECF4] shrink-0">
            <ArrowLeft className="w-4 h-4 text-[#64748B]" />
          </Link>
          <div className="flex flex-col min-w-0">
             <div className="flex items-center gap-2 text-[9px] md:text-[11px] font-bold text-[#64748B] uppercase tracking-widest truncate">
                <span>Operaciones</span>
                <ChevronRight className="w-3 h-3" />
                <span className="text-[#0F172A] truncate">Panel</span>
             </div>
             <h1 className="text-sm md:text-lg font-black text-[#0F172A] truncate leading-tight">Gestión Procesos</h1>
          </div>
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <div className="flex items-center gap-2 md:gap-3">
             <div className="px-2 md:px-3 py-1.5 bg-[#F5F3FF] border border-[#DDD6FE] rounded-lg flex items-center gap-1.5">
                <BarChart2 className="w-3 h-3 text-[#7C3AED]" />
                <span className="text-[8px] md:text-[10px] font-black text-[#7C3AED] uppercase tracking-wider">68%</span>
             </div>
             <div className="px-2 md:px-3 py-1.5 bg-[#ECFDF5] border border-[#A7F3D0] rounded-lg flex items-center gap-1.5">
                <CheckCircle className="w-3 h-3 text-[#10B981]" />
                <span className="text-[8px] md:text-[10px] font-black text-[#10B981] uppercase tracking-wider">99%</span>
             </div>
          </div>
          <div className="h-8 w-[1px] bg-[#E8ECF4]"></div>
          <div className="flex items-center gap-4">
             <button className="p-2 text-[#64748B] hover:text-[#0F172A] transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#EF4444] rounded-full border-2 border-white"></span>
             </button>
             <div className="flex items-center gap-3 pl-2 border-l border-[#E8ECF4]">
                <div className="text-right hidden sm:block">
                   <p className="text-[12px] font-bold text-[#0F172A] leading-none">Marco Falcón</p>
                   <p className="text-[10px] font-medium text-[#64748B] mt-1">Admin</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-sm border-2 border-[#F5F3FF] shadow-sm">
                   MF
                </div>
             </div>
          </div>
        </div>
      </nav>

      <div className="max-w-[1600px] mx-auto flex flex-col xl:flex-row">
        <main className="flex-1 p-4 md:p-6 overflow-hidden">
          {/* Summary Strip */}
          <div className="bg-[#F8F9FC] border border-[#E8ECF4] rounded-xl px-4 md:px-6 py-4 flex flex-wrap items-center justify-between gap-4 md:gap-6 mb-6 md:mb-8 text-[10px] md:text-sm font-bold uppercase tracking-wider">
             <div className="flex items-center gap-2">
                <span className="text-[#64748B]">Activas:</span>
                <span className="text-[#0F172A]">5</span>
             </div>
             <div className="h-4 w-[1px] bg-[#E8ECF4] hidden sm:block"></div>
             <div className="flex items-center gap-2">
                <span className="text-[#64748B]">Hoy:</span>
                <span className="text-[#10B981]">14</span>
             </div>
             <div className="h-4 w-[1px] bg-[#E8ECF4] hidden sm:block"></div>
             <div className="flex items-center gap-2">
                <span className="text-[#64748B]">Riesgo:</span>
                <span className="text-[#EF4444]">3</span>
             </div>
             <div className="h-4 w-[1px] bg-[#E8ECF4] hidden lg:block"></div>
             <div className="flex items-center gap-2">
                <span className="text-[#64748B]">Equipo:</span>
                <span className="flex items-center gap-1.5 text-[#0F172A]"><Users className="w-3.5 h-3.5 text-[#7C3AED]" /> 4</span>
             </div>
          </div>

          {/* Board */}
          <div className="flex gap-4 md:gap-6 h-[calc(100vh-280px)] min-h-[500px] overflow-x-auto pb-4 scrollbar-hide">
             <Column title="Por hacer" status="pendiente" tasks={tasks.filter(t => t.status === 'pendiente')} icon={Clock} />
             <Column title="En proceso" status="en-proceso" tasks={tasks.filter(t => t.status === 'en-proceso')} icon={Zap} />
             <Column title="Finalizado" status="completado" tasks={tasks.filter(t => t.status === 'completado')} icon={CheckCircle} />
          </div>
        </main>

        {/* Resource Sidebar */}
        <aside className="w-full xl:w-72 border-t xl:border-t-0 xl:border-l border-[#E8ECF4] p-6 bg-[#F8F9FC]/50 min-h-[auto] xl:min-h-[calc(100vh-64px)]">
           <div className="mb-8">
              <h3 className="text-xs font-black text-[#0F172A] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                 <AlertCircle className="w-4 h-4 text-[#7C3AED]" />
                 Carga de Equipo
              </h3>
              <div className="space-y-6">
                 {resourceLoad.map((person, i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex justify-between items-center text-[12px] font-bold">
                          <span className="text-[#0F172A]">{person.name}</span>
                          <span className={person.load > 80 ? 'text-[#EF4444]' : 'text-[#64748B]'}>{person.load}%</span>
                       </div>
                       <div className="w-full bg-[#E2E8F0] h-1.5 rounded-full overflow-hidden">
                          <div 
                             className={`h-full rounded-full transition-all duration-1000 ${person.load > 80 ? 'bg-[#EF4444]' : 'bg-[#7C3AED]'}`} 
                             style={{ width: `${person.load}%` }}
                          ></div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="pt-8 border-t border-[#E8ECF4] mt-8">
              <h3 className="text-xs font-black text-[#0F172A] uppercase tracking-[0.2em] mb-6">
                 Atajos Rápidos
              </h3>
              <div className="space-y-2">
                 {[
                    { label: 'Configuración', icon: Settings },
                    { label: 'Buscar tarea', icon: Search },
                    { label: 'Vista de equipo', icon: Users },
                 ].map((item, i) => (
                    <button key={i} className="w-full flex items-center gap-3 p-2.5 rounded-lg hover:bg-white border border-transparent hover:border-[#E8ECF4] transition-all text-[13px] font-medium text-[#64748B] hover:text-[#0F172A]">
                       <item.icon className="w-4 h-4" />
                       {item.label}
                    </button>
                 ))}
              </div>
           </div>
        </aside>
      </div>

      {/* Modal: New Task */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#0F172A]/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl p-6 md:p-8 shadow-2xl relative border border-[#E8ECF4]">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-bold text-[#0F172A]">Asignar prioridad</h3>
                <p className="text-xs text-[#64748B] font-medium mt-1">Define el objetivo y asigna recursos.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="p-2 hover:bg-[#F8F9FC] rounded-lg border border-[#E8ECF4] text-[#64748B] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form className="space-y-6">
              <div>
                 <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-2">Título de la tarea</label>
                 <input 
                    type="text" 
                    className="w-full bg-[#F8F9FC] border border-[#E8ECF4] rounded-xl px-4 py-3 outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition-all font-semibold text-[#0F172A]" 
                    placeholder="Ej: Auditoría servidores" 
                 />
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-2">Responsable</label>
                    <select className="w-full bg-[#F8F9FC] border border-[#E8ECF4] rounded-xl px-4 py-3 outline-none focus:border-[#7C3AED] transition-all font-semibold text-[#0F172A] appearance-none cursor-pointer">
                      <option>Marcos G.</option>
                      <option>Sara L.</option>
                      <option>Alex T.</option>
                    </select>
                 </div>
                 <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-2">Prioridad</label>
                    <select className="w-full bg-[#F8F9FC] border border-[#E8ECF4] rounded-xl px-4 py-3 outline-none focus:border-[#7C3AED] transition-all font-semibold text-[#0F172A] appearance-none cursor-pointer">
                      <option>Alta</option>
                      <option>Media</option>
                      <option>Baja</option>
                    </select>
                 </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-[#7C3AED] text-white rounded-xl font-bold text-sm hover:bg-[#6D28D9] transition-all shadow-lg shadow-[#7C3AED]/20"
              >
                Crear tarea
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
