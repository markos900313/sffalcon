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

export function SaaSPremiumCard({ example }: { example: Example }) {
  const getSaasColors = (colorClass: string) => {
    if (colorClass.includes('emerald')) return { orb: 'bg-emerald-500/20', fill: 'bg-emerald-500', raw: 'emerald-500', light: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200/50' };
    if (colorClass.includes('amber')) return { orb: 'bg-amber-500/20', fill: 'bg-amber-500', raw: 'amber-500', light: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200/50' };
    return { orb: 'bg-violet-500/20', fill: 'bg-violet-500', raw: 'violet-500', light: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200/50' };
  };
  const sColors = getSaasColors(example.color);

  return (
    <div className="group bg-white rounded-[1.5rem] border border-slate-200 p-6 md:p-8 hover:border-slate-300 transition-all duration-300 hover:shadow-xl flex flex-col lg:flex-row gap-8 mb-8 relative overflow-hidden">
      {/* Columna Izquierda */}
      <div className="flex-1 lg:w-[55%] flex flex-col justify-center relative z-10">
        <div className="mb-4">
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${sColors.light} ${sColors.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${sColors.fill} animate-pulse`} />
            {example.subtitle}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">{example.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-lg">
          {example.description}
        </p>

        <div className="mb-8">
          <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
            <Layout className="w-3 h-3" /> Funciones Clave
          </h4>
          <ul className="space-y-2.5 sm:columns-2 gap-6">
            {example.features.map((feature, fIndex) => (
              <li key={fIndex} className="flex items-start gap-2.5 break-inside-avoid">
                <CheckCircle2 className={`w-3.5 h-3.5 ${sColors.text} shrink-0 mt-0.5`} />
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
            Ver demo del panel
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Columna Derecha - MOCK VISUAL */}
      <div className="flex lg:w-[45%] relative items-center justify-center p-6 bg-slate-50/50 rounded-2xl overflow-hidden lg:min-h-[380px]">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] ${sColors.orb} blur-[60px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700`} />
        
        <div className="relative w-full max-w-[360px] h-[300px] bg-slate-50 rounded-xl shadow-2xl border border-slate-200/60 overflow-hidden transform lg:rotate-[2deg] group-hover:rotate-0 transition-transform duration-500 ease-out z-10 flex mx-auto isolate" style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>
          
          {/* Sidebar */}
          <div className="w-14 h-full bg-slate-900 flex flex-col items-center py-5 gap-5 shrink-0 z-20 shadow-xl rounded-l-xl">
            <div className={`w-6 h-6 rounded ${sColors.fill} shadow-lg flex items-center justify-center`}>
               <div className="w-2.5 h-2.5 bg-white/80 rounded-[3px]" />
            </div>
            <div className="w-full px-2.5 flex flex-col gap-3">
              {[1,2,3,4].map(i => (
                <div key={i} className={`w-full h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${i===1 ? 'bg-white/10' : 'hover:bg-white/5 opacity-40 hover:opacity-100'}`}>
                  <div className={`w-4 h-4 rounded-md ${i===1 ? sColors.fill : 'bg-slate-400'}`} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col min-w-0 bg-slate-50 rounded-r-xl overflow-hidden">
            {/* Top Header */}
            <div className="h-12 bg-white border-b border-slate-200/60 flex items-center justify-between px-4 shrink-0 relative z-10 shadow-sm">
               <div className="flex flex-col gap-1.5">
                 <div className="w-20 h-3 bg-slate-800 rounded-full" />
                 <div className="w-24 h-1.5 bg-slate-300 rounded-full" />
               </div>
               <div className="flex items-center gap-2.5">
                 <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center"><div className="w-2 h-2 bg-slate-300 rounded-full"/></div>
                 <div className={`w-6 h-6 rounded-full ${sColors.light} border border-${sColors.raw}/20`} />
               </div>
            </div>
            
            {/* Dashboard Body */}
            <div className="flex-1 p-4 grid grid-cols-2 grid-rows-3 gap-3 overflow-hidden">
              {/* Big Widget */}
              <div className="col-span-2 row-span-2 bg-white rounded-lg shadow-sm border border-slate-200 p-4 flex flex-col cursor-pointer group/widget hover:shadow transition-shadow">
                <div className="w-24 h-2 bg-slate-200 rounded-full mb-4" />
                <div className="flex-1 flex items-end justify-between gap-2 px-1">
                  {[30, 80, 45, 100, 60, 75, 50, 90].map((h, i) => (
                    <div key={i} className="flex-1 bg-slate-100 rounded-t relative h-full flex flex-col justify-end overflow-hidden">
                      <div className={`w-full ${sColors.fill} rounded-t opacity-40 group-hover/widget:opacity-100 transition-all duration-700`} style={{ height: `${h}%`, transitionDelay: `${i*30}ms` }} />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Small Widgets */}
              {[1,2].map(i => (
                <div key={i} className="bg-white rounded-lg shadow-sm border border-slate-200 p-3 flex items-center gap-3 cursor-pointer hover:shadow transition-shadow">
                   <div className={`w-10 h-10 rounded-full ${sColors.light} shrink-0 border-[2px] ${sColors.border} flex items-center justify-center shadow-inner`}>
                     <div className={`w-4 h-4 ${sColors.fill} opacity-80 rounded-[3px]`} />
                   </div>
                   <div className="space-y-2 flex-1">
                     <div className="w-full h-2.5 bg-slate-800 rounded-full" />
                     <div className="w-1/2 h-1.5 bg-slate-300 rounded-full" />
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
