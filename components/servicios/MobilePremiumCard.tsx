import React from 'react';
import Link from 'next/link';
import { Layout, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

interface Example {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  features: string[];
  benefits: string[];
  href: string;
}

export function MobilePremiumCard({ example }: { example: Example }) {
  const getMobileColors = (color: string) => {
    if (color === 'orange') return { orb: 'bg-orange-500/20', from: 'from-orange-500', to: 'to-orange-600', fill: 'bg-orange-500', light: 'bg-orange-50', text: 'text-orange-600' };
    if (color === 'indigo') return { orb: 'bg-indigo-500/20', from: 'from-indigo-500', to: 'to-indigo-600', fill: 'bg-indigo-500', light: 'bg-indigo-50', text: 'text-indigo-600' };
    return { orb: 'bg-blue-500/20', from: 'from-blue-500', to: 'to-blue-600', fill: 'bg-blue-500', light: 'bg-blue-50', text: 'text-blue-600' };
  };
  const mColors = getMobileColors(example.color);

  return (
    <div className="group bg-white rounded-[1.5rem] border border-slate-200 p-6 md:p-8 hover:border-blue-400 transition-all duration-300 hover:shadow-xl flex flex-col lg:flex-row gap-8 mb-8 relative overflow-hidden">
      {/* Columna Izquierda */}
      <div className="flex-1 lg:w-[55%] flex flex-col justify-center relative z-10">
        <div className="mb-4">
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${mColors.light} ${mColors.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${mColors.fill} animate-pulse`} />
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
                  <CheckCircle2 className={`w-3.5 h-3.5 ${mColors.text} shrink-0 mt-0.5`} />
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
              {example.benefits.map((benefit, bIndex) => (
                <li key={bIndex} className="flex items-start gap-2.5">
                  <div className={`w-3.5 h-3.5 rounded-full ${mColors.light} ${mColors.text} flex items-center justify-center shrink-0 mt-0.5`}>
                    <ArrowRight className="w-2 h-2" strokeWidth={3} />
                  </div>
                  <span className="text-xs font-bold text-slate-900 leading-tight">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex items-center">
          <Link
            href={example.href}
            target="_blank"
            className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-all duration-300 hover:shadow-lg active:scale-95 w-full sm:w-auto"
          >
            Ver maqueta interactiva
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Columna Derecha - MOCK VISUAL */}
      <div className="flex lg:w-[45%] relative items-center justify-center p-6 bg-slate-50/50 rounded-2xl lg:min-h-[420px]">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] ${mColors.orb} blur-[60px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700`} />
        
        <div className="relative w-[210px] h-[430px] bg-slate-900 rounded-[2.5rem] p-1.5 shadow-2xl flex-shrink-0 lg:-rotate-[2deg] group-hover:rotate-0 transition-transform duration-500 ease-out z-10 mx-auto">
          <div className="absolute top-0 right-12 left-12 h-5 bg-slate-900 rounded-b-xl z-20 flex justify-center pt-1.5">
            <div className="w-10 h-1 bg-slate-800 rounded-full" />
          </div>
          
          <div className="w-full h-full bg-slate-50 rounded-[2rem] overflow-hidden relative flex flex-col shadow-inner isolate" style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>
            <div className={`pt-10 pb-4 px-5 bg-gradient-to-br ${mColors.from} ${mColors.to} text-white relative overflow-hidden rounded-t-[2rem] shrink-0`}>
              <div className="absolute -right-4 -top-10 w-24 h-24 bg-white/10 blur-xl rounded-full" />
              <div className="flex justify-between items-center mb-4 relative z-10">
                <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-2 h-0.5 bg-white rounded-full relative before:absolute before:w-2 before:h-0.5 before:bg-white before:rounded-full before:-top-1 after:absolute after:w-2 after:h-0.5 after:bg-white after:rounded-full after:top-1" />
                </div>
                <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30" />
              </div>
              <div className="w-16 h-2 bg-white/40 rounded-full mb-2.5 relative z-10" />
              <div className="w-28 h-6 bg-white/90 rounded-full shadow-inner relative z-10" />
            </div>

            <div className="flex-1 p-4 flex flex-col gap-4 bg-slate-50">
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-3 h-24 flex items-end justify-between gap-2 relative overflow-hidden group/chart cursor-pointer">
                {[40, 70, 45, 90, 65, 80].map((h, i) => (
                  <div key={i} className="w-full bg-slate-100 rounded-t relative flex-1 overflow-hidden" style={{ height: `${h}%` }}>
                    <div className={`absolute bottom-0 w-full ${mColors.fill} rounded-t opacity-30 group-hover/chart:opacity-100 group-hover/chart:h-full transition-all duration-700`} style={{ height: '0%', transitionDelay: `${i * 30}ms` }} />
                  </div>
                ))}
              </div>
              
              <div className="space-y-2.5">
                {[1,2,3].map(i => (
                  <div key={i} className="flex items-center gap-3 bg-white p-2.5 rounded-xl shadow-sm border border-slate-100/50 hover:shadow transition-shadow cursor-pointer">
                    <div className={`w-8 h-8 rounded-lg ${mColors.light} shrink-0 flex items-center justify-center`}>
                      <div className={`w-3 h-3 rounded-sm ${mColors.fill} opacity-60`} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="w-full h-2 bg-slate-200 rounded-full" />
                      <div className="w-1/2 h-2 bg-slate-100 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="h-16 bg-white border-t border-slate-100 flex justify-around items-center px-3 pb-2 shrink-0 rounded-b-[2rem]">
              {[1,2,3,4].map(i => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${i===1 ? `${mColors.light} ${mColors.text}` : 'text-slate-300'}`}>
                     <div className={`w-4 h-4 rounded-md ${i===1 ? mColors.fill : 'bg-slate-200'} transition-all`} />
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
