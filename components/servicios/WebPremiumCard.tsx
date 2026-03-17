import React from 'react';
import Link from 'next/link';
import { Layout, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

interface Example {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  features: string[];
  benefit: string;
  href: string;
}

export function WebPremiumCard({ example }: { example: Example }) {
  const getWebColors = (colorClass: string) => {
    if (colorClass.includes('orange')) return { orb: 'bg-orange-500/20', fill: 'bg-orange-500', light: 'bg-orange-50', border: 'border-orange-200/50', text: 'text-orange-600' };
    if (colorClass.includes('blue')) return { orb: 'bg-blue-500/20', fill: 'bg-blue-600', light: 'bg-blue-50', border: 'border-blue-200/50', text: 'text-blue-600' };
    return { orb: 'bg-purple-500/20', fill: 'bg-purple-600', light: 'bg-purple-50', border: 'border-purple-200/50', text: 'text-purple-600' };
  };
  const wColors = getWebColors(example.color);

  return (
    <div className="group bg-white rounded-[1.5rem] border border-slate-200 p-6 md:p-8 hover:border-slate-300 transition-all duration-300 hover:shadow-xl flex flex-col lg:flex-row gap-8 mb-8 relative overflow-hidden">
      {/* Columna Izquierda */}
      <div className="flex-1 lg:w-[55%] flex flex-col justify-center relative z-10">
        <div className="mb-4">
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${wColors.light} ${wColors.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${wColors.fill} animate-pulse`} />
            {example.subtitle}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">{example.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-lg">
          {example.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
              <Layout className="w-3 h-3" /> Funciones Clave
            </h4>
            <ul className="space-y-2.5">
              {example.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start gap-2.5">
                  <CheckCircle2 className={`w-3.5 h-3.5 ${wColors.text} shrink-0 mt-0.5`} />
                  <span className="text-xs font-semibold text-slate-700 leading-tight">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
              <Zap className="w-3 h-3" /> Impacto Real
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <div className={`w-3.5 h-3.5 rounded-full ${wColors.light} ${wColors.text} flex items-center justify-center shrink-0 mt-0.5`}>
                  <ArrowRight className="w-2 h-2" strokeWidth={3} />
                </div>
                <span className="text-xs font-bold text-slate-900 leading-tight">{example.benefit}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex items-center">
          <Link
            href={example.href}
            target="_blank"
            className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-all duration-300 hover:shadow-lg active:scale-95 w-full sm:w-auto"
          >
            Ver landing page
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Columna Derecha - MOCK VISUAL */}
      <div className="flex lg:w-[45%] relative items-center justify-center p-6 bg-slate-50/50 rounded-2xl overflow-hidden lg:min-h-[380px]">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] ${wColors.orb} blur-[60px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700`} />
        
        <div className="relative w-full max-w-[340px] bg-white rounded-xl shadow-2xl border border-slate-200/60 overflow-hidden transform lg:-rotate-[2deg] group-hover:rotate-0 transition-transform duration-500 ease-out z-10 mx-auto flex flex-col h-[300px] isolate" style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>
          {/* Browser Bar */}
          <div className="h-10 bg-slate-50 border-b border-slate-200/60 flex items-center px-4 gap-2 shrink-0 rounded-t-xl">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400 border border-red-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-emerald-500/20" />
            </div>
            <div className="mx-auto w-1/2 h-4 bg-white border border-slate-200 rounded shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex items-center justify-center">
              <div className="w-1/2 h-1.5 bg-slate-100 rounded-full" />
            </div>
          </div>
          
          {/* Page Content */}
          <div className="flex-1 bg-white relative overflow-hidden flex flex-col rounded-b-xl">
            {/* Hero Region */}
            <div className={`h-32 ${wColors.light} relative overflow-hidden flex flex-col items-center justify-center p-5 border-b ${wColors.border}`}>
              <div className={`absolute top-0 right-0 w-24 h-24 ${wColors.fill} opacity-10 blur-xl rounded-full`} />
              <div className={`absolute bottom-0 left-0 w-24 h-24 ${wColors.fill} opacity-10 blur-xl rounded-full`} />
              <div className="w-2/3 h-6 bg-slate-800 rounded mb-3 shadow-sm z-10" />
              <div className="w-1/2 h-2.5 bg-slate-400/40 rounded-full mb-5 z-10" />
              <div className={`w-28 h-8 ${wColors.fill} rounded-full z-10 shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform cursor-pointer`}>
                 <div className="w-1/2 h-1.5 bg-white/80 rounded-full" />
              </div>
            </div>
            
            {/* Feature Cards Grid */}
            <div className="flex-1 p-5 bg-slate-50">
              <div className="grid grid-cols-3 gap-3">
                {[1,2,3].map(i => (
                  <div key={i} className="bg-white rounded-lg p-3 shadow-sm border border-slate-100 group-hover:-translate-y-1.5 transition-transform duration-500 cursor-pointer" style={{ transitionDelay: `${i*100}ms` }}>
                      <div className={`w-6 h-6 rounded ${wColors.light} mb-3 flex items-center justify-center`}>
                        <div className={`w-2.5 h-2.5 rounded-sm ${wColors.fill} opacity-60`} />
                      </div>
                      <div className="w-full h-1.5 bg-slate-200 rounded-full mb-2" />
                      <div className="w-2/3 h-1.5 bg-slate-100 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
