"use client";

import React, { useState } from "react";
import { 
  Bot, 
  Send, 
  BarChart3, 
  Users, 
  FileText, 
  Settings, 
  Search, 
  Sparkles, 
  ChevronRight,
  ArrowLeft,
  Database,
  PieChart,
  Target,
  Rocket
} from "lucide-react";
import Link from "next/link";
import { Inter, Lora } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

const initialChat = [
  { 
    id: 1, 
    role: "user", 
    text: "¿Cuáles son mis clientes más rentables este mes?" 
  },
  { 
    id: 2, 
    role: "ia", 
    text: "He analizado las transacciones del mes actual. Estos son tus 3 clientes principales por volumen de facturación:",
    table: [
      { name: "Distribuciones Vega", total: "1.450€", growth: "+12%" },
      { name: "Clínica Dental Sanitas", total: "980€", growth: "+5%" },
      { name: "Restaurante El Faro", total: "870€", growth: "+22%" }
    ]
  },
  { 
    id: 3, 
    role: "user", 
    text: "¿Qué tareas tengo pendientes de alta prioridad?" 
  },
  { 
    id: 4, 
    role: "ia", 
    text: "Tienes 3 tareas críticas que requieren atención inmediata:",
    list: [
      "Revisar contrato Q2 para Distribuciones Vega (Vence en 2 días)",
      "Aprobar presupuesto de marketing para redes sociales",
      "Actualizar inventario de suministros médicos"
    ]
  }
];

export default function AsistenteNegocioIa() {
  const [messages, setMessages] = useState(initialChat);
  const [inputValue, setInputValue] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    setMessages([...messages, { id: Date.now(), role: "user", text: inputValue }]);
    setInputValue("");
    
    // Simulate IA response
    setTimeout(() => {
        setMessages(prev => [...prev, { 
            id: Date.now() + 1, 
            role: "ia", 
            text: "Interesante pregunta. Estoy analizando los datos históricos para darte una respuesta precisa sobre tu negocio. Dame un segundo..." 
        }]);
    }, 1000);
  };

  return (
    <div className={`flex h-screen bg-[#FDFCFB] ${inter.className}`}>
      {/* Sidebar navigation */}
      <aside className="w-72 bg-white border-r border-[#F3E8E2] flex flex-col p-6 shrink-0 z-10">
        <div className="mb-12">
            <Link href="/servicios/ia-integrada" className="inline-flex items-center gap-2 p-2 hover:bg-[#FFF7F2] rounded-xl text-[#EA580C] transition-colors border border-transparent hover:border-[#FFEDD5] mb-8">
               <ArrowLeft className="w-4 h-4" />
               <span className="text-xs font-bold uppercase tracking-widest">Atrás</span>
            </Link>
            <div className="flex items-center gap-3 px-2">
               <div className="w-10 h-10 bg-[#EA580C] rounded-2xl flex items-center justify-center shadow-lg shadow-orange-100">
                  <Bot className="w-6 h-6 text-white" />
               </div>
               <div>
                   <h1 className="text-lg font-black text-[#431407]">Asistente de Negocio</h1>
                   <p className="text-[10px] font-bold text-[#EA580C] uppercase tracking-[0.2em]">Analítica Estratégica · SFFALCON</p>
               </div>
            </div>
        </div>

        <nav className="flex-1 space-y-2">
           <p className="text-[10px] font-black text-[#A8A29E] uppercase tracking-widest px-2 mb-4">Analítica Rápida</p>
           {[
              { label: 'Analizar Ventas', icon: BarChart3 },
              { label: 'Ver Clientes', icon: Users },
              { label: 'Revisar Tareas', icon: Target },
              { label: 'Generar Informe', icon: FileText },
           ].map((item, i) => (
              <button key={i} className="w-full flex items-center justify-between p-3.5 rounded-2xl hover:bg-[#FFF7F2] transition-colors group">
                 <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-[#A8A29E] group-hover:text-[#EA580C] transition-colors" />
                    <span className="text-sm font-bold text-[#431407] group-hover:text-[#EA580C] transition-colors">{item.label}</span>
                 </div>
                 <ChevronRight className="w-4 h-4 text-[#F3E8E2] group-hover:text-[#EA580C] transition-colors" />
              </button>
           ))}
        </nav>

        <div className="mt-auto space-y-4 pt-6 border-t border-[#F3E8E2]">
           <div className="bg-[#FFF7F2] border border-[#FFEDD5] p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                 <div className="w-2 h-2 bg-[#EA580C] rounded-full animate-pulse"></div>
                 <span className="text-[10px] font-black text-[#431407] uppercase tracking-widest leading-none">Contexto Activo</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                 {['CRM', 'Reservas', 'Facturación'].map(it => (
                    <span key={it} className="px-2 py-0.5 bg-white border border-[#FFEDD5] rounded-full text-[9px] font-bold text-[#EA580C]">{it}</span>
                 ))}
              </div>
           </div>
           <button className="flex items-center gap-3 px-2 text-[11px] font-bold text-[#A8A29E] hover:text-[#EA580C] transition-colors">
              <Settings className="w-4 h-4" />
              Configurar indicadores
           </button>
        </div>
      </aside>

      {/* Main chat area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
         {/* Decorative background items */}
         <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-orange-100/30 rounded-full blur-[100px] -z-0"></div>
         <div className="absolute bottom-40 left-20 w-[300px] h-[300px] bg-blue-100/10 rounded-full blur-[100px] -z-0"></div>

         <div className="flex-1 overflow-y-auto p-6 md:p-12 space-y-12 relative z-10 pb-40">
            <div className="max-w-3xl mx-auto space-y-12">
               {messages.map((msg) => (
                  <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                     {msg.role === 'ia' && (
                        <div className="flex items-center gap-2 mb-4">
                           <div className="w-8 h-8 bg-white border border-[#F3E8E2] rounded-xl flex items-center justify-center shadow-sm">
                              <Sparkles className="w-4 h-4 text-[#EA580C]" />
                           </div>
                           <span className="text-[10px] font-black text-[#EA580C] uppercase tracking-widest mt-1">SFFALCON IA</span>
                        </div>
                     )}
                     
                     <div className={`${msg.role === 'user' ? 'inline-block' : 'w-full'}`}>
                        <div className={`p-8 rounded-[2rem] text-lg leading-relaxed shadow-sm ${
                           msg.role === 'user' 
                           ? 'bg-[#431407] text-[#FB923C] rounded-tr-none' 
                           : 'bg-white border border-[#F3E8E2] text-[#431407] rounded-tl-none ' + lora.className
                        }`}>
                           {msg.text}

                           {msg.table && (
                              <div className="mt-8 overflow-hidden rounded-2xl border border-[#F3E8E2]">
                                 <table className={`w-full text-left text-sm ${inter.className}`}>
                                    <thead className="bg-[#FFF7F2] text-[#EA580C] font-black uppercase tracking-widest text-[10px]">
                                       <tr>
                                          <th className="px-6 py-4">Cliente</th>
                                          <th className="px-6 py-4">Facturación</th>
                                          <th className="px-6 py-4">vs Mes Ant.</th>
                                       </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#F3E8E2]">
                                       {msg.table.map((row, i) => (
                                          <tr key={i} className="hover:bg-[#FDFCFB] transition-colors">
                                             <td className="px-6 py-4 font-bold">{row.name}</td>
                                             <td className="px-6 py-4 font-black">{row.total}</td>
                                             <td className="px-6 py-4 text-emerald-600 font-bold">{row.growth}</td>
                                          </tr>
                                       ))}
                                    </tbody>
                                 </table>
                              </div>
                           )}

                           {msg.list && (
                              <div className={`mt-8 space-y-3 ${inter.className}`}>
                                 {msg.list.map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-[#FFF7F2]/50 border border-transparent hover:border-[#FFEDD5] hover:bg-white rounded-2xl transition-all cursor-pointer group">
                                       <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#FFEDD5] group-hover:scale-110 transition-transform">
                                          <Rocket className="w-4 h-4 text-[#EA580C]" />
                                       </div>
                                       <span className="text-sm font-bold text-[#431407] leading-tight">{item}</span>
                                    </div>
                                 ))}
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Bottom area with input */}
         <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 bg-gradient-to-t from-[#FDFCFB] via-[#FDFCFB]/95 to-transparent z-20">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
               <div className="flex flex-wrap justify-center gap-2 mb-6">
                   {['Resumen de ventas hoy', 'Previsión de rentabilidad', 'Análisis de costes'].map(chip => (
                     <button key={chip} onClick={() => setInputValue(chip)} className="px-4 py-2 bg-white border border-[#F3E8E2] hover:border-[#EA580C] hover:bg-[#FFF7F2] rounded-full text-xs font-bold text-[#A8A29E] hover:text-[#EA580C] transition-all whitespace-nowrap">
                        {chip}
                     </button>
                  ))}
               </div>
               
               <form onSubmit={handleSend} className="w-full relative">
                  <div className="flex items-center bg-white border border-[#F3E8E2] rounded-[2rem] p-4 shadow-xl shadow-orange-100/20 focus-within:border-[#EA580C] focus-within:ring-4 focus-within:ring-[#EA580C]/5 transition-all">
                     <div className="w-12 h-12 rounded-full bg-[#FFF7F2] flex items-center justify-center shrink-0 border border-[#FFEDD5] text-[#EA580C]">
                        <Search className="w-5 h-5" />
                     </div>
                     <input 
                        type="text" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="¿En qué área de tu negocio quieres profundizar hoy?" 
                        className="flex-1 bg-transparent px-6 border-none outline-none font-bold text-[#431407] placeholder:text-[#A8A29E] text-lg" 
                     />
                     <button type="submit" className="w-14 h-14 bg-[#431407] hover:bg-[#EA580C] text-white rounded-[1.5rem] flex items-center justify-center transition-all group shrink-0">
                        <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </button>
                  </div>
               </form>
               <p className="mt-4 text-[10px] font-bold text-[#A8A29E] uppercase tracking-widest text-center">
                  IA Generativa de Negocio · SFFALCON Cloud · Datos en Tiempo Real
               </p>
            </div>
         </div>
      </main>
    </div>
  );
}
