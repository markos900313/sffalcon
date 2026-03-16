import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Sparkles, ArrowRight, Search, Code2, Rocket, Zap, Bot } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Transformación Digital',
  description: 'Transformamos negocios locales con tecnología digital a medida. Conoce nuestro proceso de transformación.',
  alternates: {
    canonical: 'https://sffalcon.com/transformacion'
  }
}

const blocks = [
  {
    icon: Search,
    title: "Auditoría de Procesos",
    text: "Mapeamos tu operativa actual para detectar ineficiencias y puntos de fricción que la tecnología puede resolver de inmediato."
  },
  {
    icon: Code2,
    title: "Ingeniería de Soluciones",
    text: "Diseñamos y desarrollamos herramientas exclusivas para tu negocio. Sin parches ni software genérico: código 100% propietario."
  },
  {
    icon: Rocket,
    title: "Escalabilidad Garantizada",
    text: "Lanzamos, optimizamos y escalamos tu ecosistema digital. Te acompañamos en cada fase del crecimiento para asegurar el ROI."
  }
]

export default function TransformacionPage() {
  return (
    <div className="min-h-screen bg-[#f5f7f8] text-slate-900">

      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 hero-gradient overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-6 font-bold uppercase tracking-widest text-[#0f3460] text-[10px]">
                  <Zap className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                  Evolución Digital
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                  Acelera tu <span className="text-gradient">Evolución</span> Digital
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                  No se trata solo de tecnología; es redefinir cómo tu negocio compite y gana en el mercado actual de forma automatizada.
                </p>
              </div>

              {/* Nice Geometry */}
              <div className="hidden lg:block relative">
                <div className="relative w-full max-w-[440px] ml-auto">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="relative z-10 p-4">
                        <div className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden group">
                            <div className="flex justify-between items-start mb-12">
                                <div className="space-y-4">
                                    <div className="flex gap-2">
                                        {[1,2,3].map(i => <div key={i} className="w-10 h-2 bg-blue-600/20 rounded-full"></div>)}
                                    </div>
                                    <div className="text-4xl font-black text-[#0f3460]">Scale++</div>
                                </div>
                                <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-600/20">
                                    <Rocket className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-6 rounded-3xl border border-slate-100">
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Efficiency</div>
                                    <div className="text-2xl font-black text-[#0f3460]">A+++</div>
                                </div>
                                <div className="bg-[#0f3460] p-6 rounded-3xl border border-[#0f3460]">
                                    <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Impact</div>
                                    <div className="text-2xl font-black text-white">MAX</div>
                                </div>
                            </div>
                            <div className="mt-8 flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                                <span className="text-[10px] font-black text-[#0f3460]/40 uppercase tracking-[0.2em]">Evolution 3.0 Active</span>
                            </div>
                        </div>
                    </div>
                    {/* Floating extra shape */}
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/80 backdrop-blur shadow-xl rounded-3xl border border-slate-100 flex items-center justify-center -rotate-12 z-20">
                        <Bot className="w-12 h-12 text-[#0f3460]" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blocks Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {blocks.map((block, i) => (
                <div key={i} className="group p-8 md:p-10 rounded-3xl border border-slate-100 bg-[#f5f7f8] hover:bg-white hover:shadow-2xl transition-all duration-300">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <block.icon className="w-7 h-7 text-[#0f3460]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 tracking-tight">{block.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium opacity-90">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-[#f5f7f8]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-10 inline-flex items-center justify-center w-16 h-16 bg-blue-600/10 rounded-full">
                <Sparkles className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#0f3460] mb-6 tracking-tight">¿Preparado para liderar tu sector?</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
                Únete a las empresas que ya están dictando las reglas del juego. Te damos la tecnología necesaria para escalar sin límites.
            </p>
            <Link 
              href="/#contacto" 
              className="inline-flex items-center justify-center px-10 py-5 bg-[#0f3460] text-white text-base font-bold rounded-[2rem] shadow-2xl shadow-[#0f3460]/30 hover:-translate-y-1 transition-all active:scale-95 group"
            >
              Empezar ahora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

