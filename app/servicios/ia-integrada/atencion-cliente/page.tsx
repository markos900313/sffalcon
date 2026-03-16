"use client";

import React, { useState } from "react";
import { 
  MessageSquare, 
  Send, 
  MoreVertical, 
  Search, 
  User, 
  Clock, 
  ChevronRight,
  ArrowLeft,
  Bot,
  UserCheck,
  Zap,
  Phone,
  Mail,
  Calendar,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const contacts = [
  { id: 1, name: "Carlos Martínez", lastMsg: "Gracias por la información.", time: "14:20", status: "ia" },
  { id: 2, name: "Clínica Dental Sanitas", lastMsg: "¿Tienen citas para mañana?", time: "14:15", status: "ia" },
  { id: 3, name: "María Rodríguez", lastMsg: "Hola, necesito cancelar mi reserva.", time: "13:50", status: "ia" },
  { id: 4, name: "Juan Pérez", lastMsg: "El menú de ayer estuvo increíble.", time: "12:30", status: "humano" },
  { id: 5, name: "Elena Gómez", lastMsg: "¿Cuál es el horario de atención?", time: "11:00", status: "ia" },
];

const initialMessages = [
  { id: 1, sender: "cliente", text: "Hola, me gustaría saber si tienen disponibilidad para una limpieza dental mañana por la tarde.", time: "14:12" },
  { id: 2, sender: "ia", text: "¡Hola! Un placer saludarte. Sí, actualmente tenemos disponibilidad mañana a las 16:30 y a las 18:00. ¿Alguna de estas horas te vendría bien?", time: "14:12", isAI: true },
  { id: 3, sender: "cliente", text: "La de las 16:30 me viene perfecto.", time: "14:14" },
  { id: 4, sender: "ia", text: "Excelente elección. He reservado tu limpieza dental para mañana a las 16:30. Te enviaremos un recordatorio por WhatsApp 2 horas antes. ¿Puedo ayudarte con algo más?", time: "14:15", isAI: true },
];

export default function AtencionClienteIa() {
  const [activeChat, setActiveChat] = useState(contacts[1]);
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    const newMsg = { id: Date.now(), sender: "humano", text: inputText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages([...messages, newMsg]);
    setInputText("");
  };

  return (
    <div className={`flex flex-col h-screen bg-white ${inter.className}`}>
      {/* Header with metrics */}
      <header className="h-16 md:h-20 border-b border-slate-100 px-4 md:px-6 flex items-center justify-between shrink-0 bg-white">
        <div className="flex items-center gap-2 md:gap-6">
          <Link href="/servicios/ia-integrada" className="p-2 hover:bg-slate-50 rounded-lg transition-colors border border-slate-100">
            <ArrowLeft className="w-4 h-4 text-slate-500" />
          </Link>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                <Bot className="w-4 h-4 md:w-6 md:h-6 text-white" />
             </div>
             <div className="hidden xs:block">
                <h1 className="text-sm md:text-lg font-black text-slate-900 leading-tight">Agente IA</h1>
                <p className="text-[8px] md:text-[10px] font-bold text-indigo-600 uppercase tracking-widest whitespace-nowrap">Estado: 24/7</p>
             </div>
          </div>
        </div>

        <div className="hidden md:flex lg:flex items-center gap-4">
           <div className="px-3 py-1.5 border border-slate-100 rounded-2xl flex flex-col items-center">
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Conv. Hoy</span>
              <span className="text-base font-black text-slate-900">124</span>
           </div>
           <div className="px-3 py-1.5 border border-slate-100 rounded-2xl flex flex-col items-center">
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Eficiencia</span>
              <span className="text-base font-black text-indigo-600">92%</span>
           </div>
        </div>
        
        <button className="px-3 md:px-6 py-2 md:py-3 bg-indigo-600 text-white rounded-xl md:rounded-2xl font-bold text-[10px] md:text-sm hover:bg-indigo-700 transition-all shadow-lg flex items-center gap-2">
            <UserCheck className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span className="hidden sm:inline">Tomar Control</span>
            <span className="sm:hidden">Gestionar</span>
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Sidebar: Conversations - Visible only on Desktop/Tablet landscape */}
        <aside className="hidden lg:flex w-[300px] border-r border-slate-100 flex-col shrink-0 bg-[#F8FAFC]">
          <div className="p-4 border-b border-slate-100 bg-white text-center">
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Canales Activos</span>
          </div>
          <div className="flex-1 overflow-y-auto">
             {contacts.map((contact) => (
                <button 
                  key={contact.id} 
                  onClick={() => setActiveChat(contact)}
                  className={`w-full p-4 flex gap-4 hover:bg-white transition-all border-b border-slate-100 relative group ${activeChat.id === contact.id ? 'bg-white' : ''}`}
                >
                  <div className="relative shrink-0">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 border-2 border-white shadow-sm">
                        {contact.name[0]}
                    </div>
                    <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${contact.status === 'ia' ? 'bg-indigo-500' : 'bg-emerald-500'}`}></div>
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                       <h3 className="font-bold text-slate-900 text-[13px] truncate">{contact.name}</h3>
                       <span className="text-[9px] text-slate-400">{contact.time}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">{contact.lastMsg}</p>
                  </div>
                </button>
             ))}
          </div>
        </aside>

        {/* Center: Conversation */}
        <main className="flex-1 flex flex-col bg-white">
           <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white/50 backdrop-blur-sm sticky top-0 z-10">
              <div className="flex items-center gap-3">
                 <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600 text-sm">
                    {activeChat.name[0]}
                 </div>
                 <div>
                    <h2 className="font-bold text-slate-900 text-sm md:text-base">{activeChat.name}</h2>
                    <p className="text-[10px] text-emerald-500 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                      En línea
                    </p>
                 </div>
              </div>
              <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400"><MoreVertical className="w-5 h-5" /></button>
           </div>

           <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
              {messages.map((msg) => (
                 <div key={msg.id} className={`flex ${msg.sender === 'cliente' ? 'justify-start' : 'justify-end animate-in fade-in slide-in-from-bottom-2 duration-300'}`}>
                    <div className={`max-w-[90%] sm:max-w-[80%] lg:max-w-[60%] flex flex-col ${msg.sender === 'cliente' ? 'items-start' : 'items-end'}`}>
                       {msg.isAI && (
                          <div className="flex items-center gap-1.5 text-indigo-600 font-black text-[8px] uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded-md mb-2">
                             <Sparkles className="w-2.5 h-2.5" />
                             IA Agent
                          </div>
                       )}
                       <div className={`p-4 rounded-2xl md:rounded-3xl text-xs md:text-sm font-medium leading-relaxed shadow-sm ${
                         msg.sender === 'cliente' 
                         ? 'bg-slate-100 text-slate-900 rounded-tl-sm' 
                         : 'bg-indigo-600 text-white rounded-tr-sm shadow-indigo-100'
                       }`}>
                          {msg.text}
                       </div>
                       <span className="text-[9px] text-slate-400 mt-2 font-bold uppercase tracking-widest px-2">{msg.time}</span>
                    </div>
                 </div>
              ))}
              {activeChat.status === 'ia' && (
                 <div className="flex justify-start">
                    <div className="bg-indigo-50 px-4 py-2 rounded-2xl border border-indigo-100 flex items-center gap-3">
                       <Bot className="w-4 h-4 text-indigo-500 animate-bounce" />
                       <span className="text-[10px] font-bold text-indigo-600">IA escribiendo...</span>
                    </div>
                 </div>
              )}
           </div>

           <div className="p-4 md:p-6 border-t border-slate-100 bg-white">
              <form onSubmit={handleSendMessage} className="flex gap-2 md:gap-4">
                 <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 flex items-center gap-3 focus-within:border-indigo-600 transition-all">
                    <input 
                       type="text" 
                       value={inputText}
                       onChange={(e) => setInputText(e.target.value)}
                       placeholder="Escribir..." 
                       className="flex-1 bg-transparent outline-none text-xs md:text-sm font-medium text-slate-900" 
                    />
                 </div>
                 <button type="submit" className="w-12 h-12 md:w-14 md:h-14 bg-indigo-600 text-white rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-black transition-all shadow-lg active:scale-95">
                    <Send className="w-5 h-5 md:w-6 md:h-6" />
                 </button>
              </form>
           </div>
        </main>

        {/* Right Sidebar: Client Profile - Only XL screens */}
        <aside className="hidden xl:flex w-[300px] border-l border-slate-100 flex-col p-8 shrink-0 bg-slate-50/50">
           <div className="flex flex-col items-center mb-10">
              <div className="w-20 h-20 bg-slate-100 rounded-[2rem] flex items-center justify-center mb-4 border-2 border-white shadow-sm">
                 <User className="w-10 h-10 text-slate-300" />
              </div>
              <h2 className="text-lg font-black text-slate-900">{activeChat.name}</h2>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">ID: #88241</p>
           </div>

           <div className="space-y-6">
              <div className="p-6 bg-indigo-600 rounded-[2rem] text-white shadow-xl shadow-indigo-100">
                 <p className="text-[9px] font-bold opacity-60 uppercase tracking-widest mb-4">Eficiencia IA</p>
                 <div className="flex items-end justify-between">
                    <span className="text-3xl font-black">100%</span>
                    <Sparkles className="w-5 h-5 mb-1" />
                 </div>
              </div>

              <div>
                 <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">Próxima acción</h3>
                 <div className="bg-white border border-slate-100 p-4 rounded-xl flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center"><Calendar className="w-5 h-5 text-indigo-600" /></div>
                    <div>
                       <p className="text-[11px] font-black text-slate-900 truncate">Limpieza Dental</p>
                       <p className="text-[9px] font-bold text-slate-500 uppercase">Mañana - 16:30</p>
                    </div>
                 </div>
              </div>
           </div>
        </aside>
      </div>
    </div>
  );
}
