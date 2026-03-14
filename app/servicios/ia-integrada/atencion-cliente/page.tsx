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
      <header className="h-20 border-b border-slate-100 px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-6">
          <Link href="/servicios/ia-integrada" className="p-2 hover:bg-slate-50 rounded-lg transition-colors border border-slate-100">
            <ArrowLeft className="w-4 h-4 text-slate-500" />
          </Link>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                <Bot className="w-6 h-6 text-white" />
             </div>
             <div>
                <h1 className="text-lg font-black text-slate-900 leading-tight">Asistente Inteligente de Soporte</h1>
                <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Estado: Agente Optimizado · 24/7</p>
             </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
           <div className="px-4 py-2 border border-slate-100 rounded-2xl flex flex-col items-center">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Conversaciones Hoy</span>
              <span className="text-xl font-black text-slate-900">124</span>
           </div>
           <div className="px-4 py-2 border border-slate-100 rounded-2xl flex flex-col items-center">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Respondidas por IA</span>
              <span className="text-xl font-black text-indigo-600">92%</span>
           </div>
           <div className="px-4 py-2 border border-slate-100 rounded-2xl flex flex-col items-center">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Tiempo Medio</span>
              <span className="text-xl font-black text-emerald-500">1.2s</span>
           </div>
        </div>
        
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center gap-2">
            <UserCheck className="w-4 h-4" />
            <span className="hidden sm:inline">Tomar Control del Chat</span>
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Conversations */}
        <aside className="w-[320px] border-r border-slate-100 flex flex-col shrink-0 bg-[#F8FAFC]">
          <div className="p-4 border-b border-slate-100 bg-white">
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" placeholder="Buscar conversación..." className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-10 pr-4 py-2 text-sm outline-none focus:border-indigo-500 transition-all font-medium" />
             </div>
          </div>
          <div className="flex-1 overflow-y-auto">
             {contacts.map((contact) => (
                <button 
                  key={contact.id} 
                  onClick={() => setActiveChat(contact)}
                  className={`w-full p-4 flex gap-4 hover:bg-white transition-all border-b border-slate-100 relative group ${activeChat.id === contact.id ? 'bg-white' : ''}`}
                >
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 border-2 border-white shadow-sm">
                        {contact.name[0]}
                    </div>
                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${contact.status === 'ia' ? 'bg-indigo-500' : 'bg-emerald-500'}`}></div>
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                       <h3 className="font-bold text-slate-900 text-sm truncate">{contact.name}</h3>
                       <span className="text-[10px] text-slate-400">{contact.time}</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate font-medium">{contact.lastMsg}</p>
                    <div className="mt-2 flex items-center justify-between">
                       <span className={`text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded ${contact.status === 'ia' ? 'bg-indigo-50 text-indigo-500' : 'bg-emerald-50 text-emerald-500'}`}>
                          {contact.status === 'ia' ? 'IA EN CONTROL' : 'GESTIÓN HUMANA'}
                       </span>
                    </div>
                  </div>
                  {activeChat.id === contact.id && <div className="absolute right-0 top-0 bottom-0 w-1 bg-indigo-600"></div>}
                </button>
             ))}
          </div>
        </aside>

        {/* Center: Conversation */}
        <main className="flex-1 flex flex-col bg-white">
           <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">
                    {activeChat.name[0]}
                 </div>
                 <div>
                    <h2 className="font-bold text-slate-900">{activeChat.name}</h2>
                    <p className="text-xs text-emerald-500 font-bold flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                      Cliente en línea
                    </p>
                 </div>
              </div>
              <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400"><MoreVertical className="w-5 h-5" /></button>
           </div>

           <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((msg) => (
                 <div key={msg.id} className={`flex ${msg.sender === 'cliente' ? 'justify-start' : 'justify-end animate-in fade-in slide-in-from-bottom-2 duration-300'}`}>
                    <div className={`max-w-[80%] lg:max-w-[60%] flex flex-col ${msg.sender === 'cliente' ? 'items-start' : 'items-end'}`}>
                       <div className={`p-4 rounded-3xl text-sm font-medium leading-relaxed relative ${
                         msg.sender === 'cliente' 
                         ? 'bg-slate-100 text-slate-900 rounded-tl-sm' 
                         : 'bg-indigo-600 text-white rounded-tr-sm shadow-xl shadow-indigo-100'
                       }`}>
                          {msg.text}
                          
                          {msg.isAI && (
                             <div className="absolute -top-6 right-0 flex items-center gap-1.5 text-indigo-600 font-black text-[9px] uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded-md">
                                <Sparkles className="w-2.5 h-2.5" />
                                Respuesta generada por IA
                             </div>
                          )}
                       </div>
                       <span className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-widest">{msg.time}</span>
                    </div>
                 </div>
              ))}
              {activeChat.status === 'ia' && (
                 <div className="flex justify-start">
                    <div className="bg-indigo-50 px-4 py-2 rounded-2xl border border-indigo-100 flex items-center gap-3">
                       <Bot className="w-4 h-4 text-indigo-500 animate-bounce" />
                       <span className="text-xs font-bold text-indigo-600">La IA está escribiendo...</span>
                    </div>
                 </div>
              )}
           </div>

           <div className="p-6 border-t border-slate-100">
              <form onSubmit={handleSendMessage} className="flex gap-4">
                 <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 flex items-center gap-4 focus-within:border-indigo-600 transition-all">
                    <input 
                       type="text" 
                       value={inputText}
                       onChange={(e) => setInputText(e.target.value)}
                       placeholder="¿Cómo puedo ayudar a tu negocio hoy?" 
                       className="flex-1 bg-transparent outline-none text-sm font-medium text-slate-900" 
                    />
                    <div className="flex items-center gap-3 text-slate-400">
                       <Zap className="w-5 h-5 cursor-pointer hover:text-indigo-600 transition-colors" />
                       <Clock className="w-5 h-5 cursor-pointer hover:text-indigo-600 transition-colors" />
                    </div>
                 </div>
                 <button type="submit" className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center hover:bg-black transition-all shadow-lg shadow-indigo-100">
                    <Send className="w-6 h-6" />
                 </button>
              </form>
           </div>
        </main>

        {/* Right Sidebar: Client Profile */}
        <aside className="w-[340px] border-l border-slate-100 flex flex-col p-8 shrink-0 hidden xl:flex">
           <div className="flex flex-col items-center mb-10">
              <div className="w-24 h-24 bg-slate-100 rounded-[2.5rem] flex items-center justify-center mb-4 border-2 border-slate-50 relative">
                 <User className="w-12 h-12 text-slate-300" />
                 <div className="absolute top-0 right-0 w-8 h-8 bg-indigo-500 rounded-full border-4 border-white flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                 </div>
              </div>
              <h2 className="text-xl font-black text-slate-900">{activeChat.name}</h2>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">ID Cliente: #88241</p>
           </div>

           <div className="space-y-8">
              <div>
                 <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Información de contacto</h3>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center"><Phone className="w-4 h-4 text-slate-400" /></div>
                       <span className="text-xs font-bold text-slate-700">+34 912 345 678</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center"><Mail className="w-4 h-4 text-slate-400" /></div>
                       <span className="text-xs font-bold text-slate-700">carlos.m@example.com</span>
                    </div>
                 </div>
              </div>

              <div className="p-6 bg-[#4F46E5] rounded-[2.5rem] text-white">
                 <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-4">Métricas IA</h3>
                 <div className="grid grid-cols-2 gap-6">
                    <div>
                       <p className="text-2xl font-black">12</p>
                       <p className="text-[9px] font-bold opacity-70 uppercase tracking-tighter">Consultas / Mes</p>
                    </div>
                    <div>
                       <p className="text-2xl font-black">100%</p>
                       <p className="text-[9px] font-bold opacity-70 uppercase tracking-tighter">Acierto IA</p>
                    </div>
                 </div>
              </div>

              <div>
                 <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Próxima cita</h3>
                 <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-center gap-4">
                    <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center"><Calendar className="w-5 h-5 text-indigo-600" /></div>
                    <div>
                       <p className="text-xs font-black text-slate-900">Limpieza Dental</p>
                       <p className="text-[10px] font-bold text-slate-500 uppercase">Mañana - 16:30 h</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="mt-auto pt-8">
              <button className="w-full py-4 border border-slate-200 rounded-2xl text-[11px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-50 transition-all">Ver historial completo</button>
           </div>
        </aside>
      </div>
    </div>
  );
}
