import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { LayoutTemplate, Smartphone, BarChart3, Bot, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Servicios Digitales',
  description: 'Webs profesionales, aplicaciones móviles, plataformas SaaS e IA integrada para negocios locales. SFFALCON Murcia.',
  alternates: {
    canonical: 'https://sffalcon.com/servicios'
  }
}

const servicios = [
  { 
    href: "/servicios/webs-landing", 
    title: "Ecosistemas Web de Alta Conversión", 
    icon: LayoutTemplate, 
    desc: "Diseño web de alto impacto que transforma cada visita en una oportunidad real de negocio para tu empresa local.",
    cta: "Explorar solución"
  },
  { 
    href: "/servicios/aplicaciones-moviles", 
    title: "Apps Nativas y Multiplataforma", 
    icon: Smartphone, 
    desc: "Presencia móvil total con paneles de gestión independientes. Tus clientes te llevan siempre en su bolsillo.",
    cta: "Explorar solución"
  },
  { 
    href: "/servicios/saas-paneles", 
    title: "Sistemas de Gestión Inteligente", 
    icon: BarChart3, 
    desc: "Plataformas SaaS robustas para centralizar reservas, clientes y operaciones críticas bajo tu propio control.",
    cta: "Explorar solución"
  },
  { 
    href: "/servicios/ia-integrada", 
    title: "Agentes de IA y Automatización", 
    icon: Bot, 
    desc: "Implementamos cerebros digitales que atienden, venden y gestionan tareas 24/7 sin errores ni descansos.",
    cta: "Explorar solución"
  }
]

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-[#f5f7f8] text-slate-900">

      <Navbar />
      
      <main>
        {/* Simple Hero */}
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 hero-gradient overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-[#0f3460]" />
                  <span className="text-[#0f3460] text-[10px] font-bold uppercase tracking-widest">Excelencia Digital</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                  Tecnología que Impulsa tu <span className="text-gradient">Crecimiento</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                  Liberamos tu tiempo y multiplicamos tus resultados con software de alto rendimiento diseñado para no descansar jamás.
                </p>
              </div>

              {/* Nice Geometry */}
              <div className="hidden lg:block relative">
                <div className="relative w-full aspect-square max-w-[400px] ml-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0f3460]/5 to-transparent rounded-[3rem] rotate-6 translate-x-4"></div>
                    <div className="absolute inset-0 bg-white border border-slate-100 rounded-[3rem] shadow-2xl flex items-center justify-center -rotate-3 overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0f3460]/5 rounded-bl-[5rem]"></div>
                        <div className="p-8 w-full">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-[#0f3460] rounded-2xl flex items-center justify-center text-white">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <div className="h-4 w-32 bg-slate-100 rounded-full animate-pulse"></div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-2.5 w-full bg-slate-50 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-600 w-3/4"></div>
                                </div>
                                <div className="h-2.5 w-2/3 bg-slate-50 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-400 w-1/2"></div>
                                </div>
                            </div>
                            <div className="mt-12 flex justify-between items-end">
                                <div className="space-y-2">
                                    <div className="h-3 w-16 bg-slate-100 rounded-full"></div>
                                    <div className="text-3xl font-black text-[#0f3460]">98%</div>
                                </div>
                                <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Target Growth</div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {servicios.map((s, i) => (
                <Link 
                  key={i} 
                  href={s.href} 
                  className="group p-6 md:p-8 rounded-2xl border border-slate-100 bg-[#f5f7f8] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
                >
                  <s.icon className="w-8 h-8 text-[#0f3460] mb-6" strokeWidth={1.5} />
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="text-[#0f3460] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    {s.cta} <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

