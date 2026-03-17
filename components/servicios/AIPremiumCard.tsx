import React from 'react';
import Link from 'next/link';
import { Layout, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

interface Example {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  features: string[];
  href: string;
}

export function AIPremiumCard({ example }: { example: Example }) {
  const getAiColors = (colorClass: string) => {
    if (colorClass.includes('indigo')) return { orb: 'bg-indigo-500/20', fill: 'bg-indigo-500', raw: 'indigo-500', light: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-500/20' };
    if (colorClass.includes('lime')) return { orb: 'bg-lime-500/20', fill: 'bg-lime-500', raw: 'lime-500', light: 'bg-lime-50', text: 'text-lime-600', border: 'border-lime-500/20' };
    return { orb: 'bg-orange-500/20', fill: 'bg-orange-500', raw: 'orange-500', light: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-500/20' };
  };
  const aiColor = getAiColors(example.color);

  return (
    <div className="group bg-white rounded-[1.5rem] border border-slate-200 p-6 md:p-8 hover:border-slate-300 transition-all duration-300 hover:shadow-xl flex flex-col lg:flex-row gap-8 mb-8 relative overflow-hidden">
      {/* Columna Izquierda */}
      <div className="flex-1 lg:w-[55%] flex flex-col justify-center relative z-10">
        <div className="mb-4">
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${aiColor.light} ${aiColor.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${aiColor.fill} animate-pulse`} />
            {example.subtitle}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">{example.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-lg">
          {example.description}
        </p>

        <div className="mb-8">
          <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
            <Zap className="w-3 h-3" /> Capacidades IA
          </h4>
          <ul className="space-y-2.5 sm:columns-2 gap-6">
            {example.features.map((feature, fIndex) => (
              <li key={fIndex} className="flex items-start gap-2.5 break-inside-avoid">
                <CheckCircle2 className={`w-3.5 h-3.5 ${aiColor.text} shrink-0 mt-0.5`} />
                <span className="text-xs font-semibold text-slate-700 leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-slate-100 flex items-center">
          <Link
            href={example.href}
            target="_blank"
            className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-all duration-300 hover:shadow-lg active:scale-95 w-full sm:w-auto"
          >
            Ver IA en acción
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Columna Derecha - MOCK VISUAL */}
      <div className="flex lg:w-[45%] relative items-center justify-center p-6 bg-slate-50/50 rounded-2xl overflow-hidden lg:min-h-[380px]">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] ${aiColor.orb} blur-[60px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700`} />
        
        <div className="relative w-full max-w-[320px] h-[340px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform lg:-rotate-[2deg] group-hover:rotate-0 transition-transform duration-500 ease-out z-10 flex flex-col mx-auto isolate" style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>
          
          {/* Chat Header */}
          <div className="p-4 bg-slate-900 text-white flex items-center gap-3 shrink-0 shadow-md rounded-t-2xl">
             <div className={`w-10 h-10 rounded-xl ${aiColor.fill} flex items-center justify-center shadow-lg relative`}>
               <div className="w-4 h-4 bg-white/90 rounded-sm" />
               <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full" />
             </div>
             <div className="flex-1">
               <div className="w-20 h-2.5 bg-slate-100 rounded-full mb-1.5" />
               <div className="w-12 h-1.5 bg-slate-400 rounded-full" />
             </div>
             <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center">
               <div className="w-1 h-2 bg-slate-500 rounded-full" />
             </div>
          </div>
          
          {/* Chat Body */}
          <div className="flex-1 p-4 flex flex-col gap-4 bg-slate-50/50">
             {/* UI Msg */}
             <div className="flex gap-2 justify-end group-hover:-translate-y-1 transition-transform duration-500">
               <div className="bg-slate-900 text-white rounded-xl rounded-tr-none p-3 w-[85%] shadow-sm relative">
                 <div className="w-full h-2 bg-slate-200/80 rounded-full mb-2" />
                 <div className="w-3/4 h-2 bg-slate-200/80 rounded-full" />
               </div>
             </div>
             
             {/* AI Msg */}
             <div className="flex gap-2 group-hover:-translate-y-1 transition-transform duration-500 delay-100">
               <div className={`w-8 h-8 rounded-lg ${aiColor.fill} shrink-0 flex items-center justify-center shadow-md mt-1`}>
                  <div className="w-3 h-3 bg-white/90 rounded-sm" />
               </div>
               <div className="bg-white border border-slate-100 rounded-xl rounded-tl-none p-4 flex-1 shadow-sm relative">
                 <div className="w-full h-2 bg-slate-200 rounded-full mb-2" />
                 <div className="w-5/6 h-2 bg-slate-200 rounded-full mb-2" />
                 <div className="w-4/6 h-2 bg-slate-200 rounded-full mb-4" />
                 
                 {/* Actionable Mock Widget inside Chat */}
                 <div className={`${aiColor.light} border ${aiColor.border} rounded-lg p-3 flex gap-3 items-center`}>
                    <div className={`w-8 h-8 rounded-lg ${aiColor.fill} opacity-90 shrink-0 flex items-center justify-center`}>
                       <div className="w-3 h-3 bg-white/80 rounded-full" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className={`w-full h-2 ${aiColor.fill} opacity-60 rounded-full`} />
                      <div className={`w-2/3 h-2 ${aiColor.fill} opacity-40 rounded-full`} />
                    </div>
                 </div>
               </div>
             </div>
          </div>
          
          {/* Mock Input Area */}
          <div className="h-16 bg-white border-t border-slate-100 flex items-center px-4 gap-3 shrink-0 rounded-b-2xl">
             <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                <div className="w-2 h-2 bg-slate-300 rounded-full" />
             </div>
             <div className="flex-1 h-8 bg-slate-50 border border-slate-200 rounded-full flex items-center px-3">
                <div className="w-24 h-2 bg-slate-200 rounded-full" />
             </div>
             <div className={`w-8 h-8 rounded-full ${aiColor.fill} flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer`}>
                <div className="w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] border-white/90 rotate-45 mr-0.5" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
