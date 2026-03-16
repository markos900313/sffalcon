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
  Target,
  Rocket,
  Menu,
  X
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
    text: "Estos son tus 3 clientes principales por volumen este mes:",
    table: [
      { name: "Distribuciones Vega", total: "1.450€", growth: "+12%" },
      { name: "Clínica Sanitas", total: "980€", growth: "+5%" },
      { name: "Res. El Faro", total: "870€", growth: "+22%" }
    ]
  },
  { 
    id: 3, 
    role: "user", 
    text: "¿Qué tareas críticas tengo hoy?" 
  },
  { 
    id: 4, 
    role: "ia", 
    text: "Tienes 3 prioridades inmediatas:",
    list: [
      "Vencimiento contrato Vega (2 días)",
      "Aprobar presupuesto marketing",
      "Inventario suministros médicos"
    ]
  }
];

export default function AsistenteNegocioIa() {
  const [messages, setMessages] = useState(initialChat);
  const [inputValue, setInputValue] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    setMessages([...messages, { id: Date.now(), role: "user", text: inputValue }]);
    setInputValue("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        role: "ia", 
        text: "Analizando datos históricos... Dame un segundo para darte una perspectiva precisa." 
      }]);
    }, 1000);
  };

  return (
    <div className={`flex h-screen bg-[#FDFCFB] ${inter.className}`}>
      {/* Sidebar navigation */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-[#F3E8E2] flex flex-col p-6 transition-transform duration-300 xl:relative xl:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button onClick={() => setIsSidebarOpen(false)} className="xl:hidden absolute top-4 right-4 p-2 text-slate-400">
          <X className="w-6 h-6" />
        </button>
        
        <div className="mb-10">
            <Link href="/servicios/ia-integrada" className="inline-flex items-center gap-2 p-2 hover:bg-[#FFF7F2] rounded-xl text-[#EA580C] transition-colors border border-transparent hover:border-[#FFEDD5] mb-8">
               <ArrowLeft className="w-4 h-4" />
               <span className="text-[10px] font-bold uppercase tracking-widest">Atrás</span>
            </Link>
            <div className="flex items-center gap-3 px-2">
               <div className="w-10 h-10 bg-[#EA580C] rounded-2xl flex items-center justify-center shadow-lg shadow-orange-100">
                  <Bot className="w-5 h-5 text-white" />
               </div>
               <div>
                   <h1 className="text-sm md:text-base font-black text-[#431407]">Business IA</h1>
                   <p className="text-[9px] font-bold text-[#EA580C] uppercase tracking-[0.2em]">Analítica SFFALCON</p>
               </div>
            </div>
        </div>

        <nav className="flex-1 space-y-1">
           <p className="text-[9px] font-black text-[#A8A29E] uppercase tracking-widest px-2 mb-4">Herramientas</p>
           {[
              { label: 'Analizar Ventas', icon: BarChart3 },
              { label: 'Ver Clientes', icon: Users },
              { label: 'Revisar Tareas', icon: Target },
              { label: 'Generar Informe', icon: FileText },
           ].map((item, i) => (
              <button key={i} className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-[#FFF7F2] transition-colors group">
                 <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-[#A8A29E] group-hover:text-[#EA580C]" />
                    <span className="text-xs font-bold text-[#431407] group-hover:text-[#EA580C]">{item.label}</span>
                 </div>
                 <ChevronRight className="w-3.5 h-3.5 text-[#F3E8E2] group-hover:text-[#EA580C]" />
              </button>
           ))}
        </nav>

        <div className="mt-auto space-y-4 pt-6 border-t border-[#F3E8E2]">
           <button className="flex items-center gap-3 px-2 text-[10px] font-bold text-[#A8A29E] hover:text-[#EA580C]">
              <Settings className="w-4 h-4" /> Configuración
           </button>
        </div>
      </aside>

      {/* Main chat area */}
      <main className="flex-1 flex flex-col relative overflow-hidden h-full">
         <header className="xl:hidden h-16 border-b border-[#F3E8E2] bg-white px-4 flex items-center justify-between shrink-0">
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-[#431407]"><Menu className="w-6 h-6" /></button>
            <span className="text-[10px] font-black text-[#EA580C] uppercase tracking-widest">Business Assistant</span>
            <div className="w-10"></div>
         </header>

         <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 relative z-10 pb-48 md:pb-56">
            <div className="max-w-3xl mx-auto space-y-8">
               {messages.map((msg) => (
                  <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                     {msg.role === 'ia' && (
                        <div className="flex items-center gap-2 mb-3">
                           <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
                           <span className="text-[9px] font-black text-[#EA580C] uppercase tracking-widest">SFFALCON IA</span>
                        </div>
                     )}
                     
                     <div className={`${msg.role === 'user' ? 'ml-auto' : 'w-full'}`}>
                        <div className={`p-5 md:p-8 rounded-2xl md:rounded-[2.5rem] text-sm md:text-base leading-relaxed shadow-sm ${
                           msg.role === 'user' 
                           ? 'bg-[#431407] text-[#FB923C] rounded-tr-none max-w-[90%] md:max-w-[80%]' 
                           : 'bg-white border border-[#F3E8E2] text-[#431407] rounded-tl-none ' + lora.className
                        }`}>
                           {msg.text}

                           {msg.table && (
                              <div className="mt-6 overflow-x-auto rounded-xl border border-[#F3E8E2]">
                                 <table className={`w-full text-left text-[11px] md:text-sm ${inter.className}`}>
                                    <thead className="bg-[#FFF7F2] text-[#EA580C] font-black uppercase tracking-widest text-[8px] md:text-[10px]">
                                       <tr>
                                          <th className="px-3 py-3 md:px-5 md:py-4">Cliente</th>
                                          <th className="px-3 py-3 md:px-5 md:py-4">Total</th>
                                          <th className="hidden xs:table-cell px-3 py-3 md:px-5 md:py-4">Varia.</th>
                                       </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#F3E8E2]">
                                       {msg.table.map((row, i) => (
                                          <tr key={i}>
                                             <td className="px-3 py-3 md:px-5 md:py-4 font-bold">{row.name}</td>
                                             <td className="px-3 py-3 md:px-5 md:py-4 font-black">{row.total}</td>
                                             <td className="hidden xs:table-cell px-3 py-3 md:px-5 md:py-4 text-emerald-600 font-bold">{row.growth}</td>
                                          </tr>
                                       ))}
                                    </tbody>
                                 </table>
                              </div>
                           )}

                           {msg.list && (
                              <div className={`mt-6 space-y-2.5 ${inter.className}`}>
                                 {msg.list.map((item, i) => (
                                    <div key={i} className="flex gap-3 p-3 bg-[#FFF7F2]/50 border border-transparent rounded-xl">
                                       <Rocket className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
                                       <span className="text-[11px] md:text-xs font-bold text-[#431407]">{item}</span>
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
         <div className="absolute bottom-0 left-0 right-0 p-4 md:p-10 bg-gradient-to-t from-[#FDFCFB] via-[#FDFCFB]/95 to-transparent z-20">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
               <div className="flex overflow-x-auto w-full gap-2 mb-4 no-scrollbar pb-2 mask-linear-right">
                   {['Ventas hoy', 'ROI estimado', 'Costes fijos'].map(chip => (
                     <button key={chip} onClick={() => setInputValue(chip)} className="shrink-0 px-3 py-1.5 bg-white border border-[#F3E8E2] rounded-full text-[10px] font-bold text-[#A8A29E] hover:text-[#EA580C] hover:border-[#EA580C] transition-all">
                        {chip}
                     </button>
                  ))}
               </div>
               
               <form onSubmit={handleSend} className="w-full relative">
                  <div className="flex items-center bg-white border border-[#F3E8E2] rounded-2xl md:rounded-[2.5rem] p-2 md:p-3 shadow-xl shadow-orange-100/10 focus-within:border-[#EA580C] transition-all">
                     <input 
                        type="text" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Preguntas sobre tu negocio..." 
                        className="flex-1 bg-transparent px-4 md:px-6 border-none outline-none font-bold text-[#431407] text-sm md:text-lg" 
                     />
                     <button type="submit" className="w-10 h-10 md:w-14 md:h-14 bg-[#431407] text-white rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-[#EA580C] transition-all shrink-0">
                        <Send className="w-4 h-4 md:w-5 md:h-5" />
                     </button>
                  </div>
               </form>
               <p className="mt-3 text-[8px] md:text-[9px] font-bold text-[#A8A29E] uppercase tracking-widest text-center">
                  IA Generativa SFFALCON Cloud · 2026
               </p>
            </div>
         </div>
      </main>
    </div>
  );
}
