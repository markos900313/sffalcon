import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Phone, FileText, Code2, CheckCircle2, LifeBuoy, ArrowRight, Sparkles, Clock } from 'lucide-react'
import Link from 'next/link'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Nuestro Proceso de Trabajo',
  description: 'Conoce cómo trabajamos en SFFALCON. Proceso claro, transparente y orientado a resultados para tu negocio.',
  alternates: {
    canonical: 'https://sffalcon.com/proceso'
  }
}

const steps = [
  { 
    title: "Diagnóstico Estratégico", 
    desc: "Analizamos tu modelo de negocio de forma gratuita para identificar cuellos de botella y oportunidades reales de crecimiento con tecnología.",
    duration: "1-2 días",
    icon: Phone
  },
  { 
    title: "Estrategia y Hoja de Ruta", 
    desc: "Definimos una propuesta técnica y comercial con objetivos claros, plazos de entrega garantizados y una inversión transparente sin sorpresas.",
    duration: "2-3 días",
    icon: FileText
  },
  { 
    title: "Desarrollo de Alta Precisión", 
    desc: "Construimos tu solución utilizando las tecnologías más avanzadas. Recibirás actualizaciones constantes para que seas parte del proceso creativo.",
    duration: "2-4 semanas",
    icon: Code2
  },
  { 
    title: "Lanzamiento y Auditoría", 
    desc: "Desplegamos tu proyecto en producción y realizamos pruebas de estrés finales. Te entregamos las llaves de tu nuevo motor digital totalmente operativo.",
    duration: "1-2 días",
    icon: CheckCircle2
  },
  { 
    title: "Soporte y Evolución", 
    desc: "Tu negocio no se detiene, y nosotros tampoco. Ofrecemos mantenimiento proactivo y actualizaciones para que tu tecnología siempre sea competitiva.",
    duration: "Continuo",
    icon: LifeBuoy
  }
]

export default function ProcesoPage() {
  return (
    <div className={`${inter.variable} font-sans min-h-screen bg-[#f5f7f8] text-slate-900`}>
      <style dangerouslySetInnerHTML={{
        __html: `
        .hero-gradient {
            background: 
              radial-gradient(circle at 100% 0%, rgba(15, 52, 96, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 0% 100%, rgba(15, 52, 96, 0.05) 0%, transparent 50%),
              #f5f7f8;
        }
        .text-gradient {
            background: linear-gradient(135deg, #0f3460 0%, #1a508b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
      `}} />

      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 hero-gradient overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-6 font-bold uppercase tracking-widest text-[#0f3460] text-[10px]">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  Metodología Ágil
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                  Un Método <span className="text-gradient">Probado</span> para tu Éxito
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                  Transparencia absoluta y resultados tangibles. Transformamos ideas complejas en sistemas digitales que trabajan para ti las 24 horas.
                </p>
              </div>

              {/* Nice Geometry */}
              <div className="hidden lg:block relative">
                <div className="relative w-full max-w-[420px] ml-auto">
                    <div className="absolute inset-0 bg-blue-600/5 rounded-full blur-3xl animate-pulse -z-10"></div>
                    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[4rem]"></div>
                        <div className="flex items-center gap-6 mb-10">
                            <div className="w-14 h-14 bg-[#0f3460] rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <Clock className="w-7 h-7" />
                            </div>
                            <div>
                                <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Standard</div>
                                <div className="text-xl font-black text-[#0f3460]">Lifecycle</div>
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
                                    <div className="h-2 bg-slate-100 rounded-full flex-1 overflow-hidden">
                                        <div className={`h-full bg-blue-600/20 w-[${30 + i * 20}%]`}></div>
                                    </div>
                                    <div className="w-8 h-2 bg-slate-50 rounded-full"></div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-slate-50 flex justify-between items-center">
                            <div className="flex -space-x-2">
                                {[1,2,3,4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100"></div>
                                ))}
                            </div>
                            <div className="text-[10px] font-black text-[#0f3460] bg-slate-50 px-3 py-1.5 rounded-full uppercase tracking-tighter">
                                Delivery: 15-30 days
                            </div>
                        </div>
                    </div>
                    {/* Floating extra shape */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-xl shadow-lg flex items-center justify-center text-white rotate-12 animate-bounce cursor-default">
                        <Sparkles className="w-6 h-6" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              
              {steps.map((step, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  {/* Icon dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-[#0f3460] group-hover:text-white transition-colors duration-300 z-10">
                    <step.icon className="w-5 h-5" />
                  </div>
                  {/* Content card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-3xl border border-slate-100 bg-[#f5f7f8] group-hover:bg-white group-hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-black text-slate-900 tracking-tight">{step.title}</h3>
                        <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-tighter shadow-sm">{step.duration}</span>
                    </div>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed opacity-90">
                      {step.desc}
                    </p>
                  </div>
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
            <h2 className="text-3xl md:text-5xl font-black text-[#0f3460] mb-6 tracking-tight">¿Hacemos realidad tu proyecto?</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
                Sin complicaciones, con plazos reales y comunicación constante. Empecemos a construir hoy mismo.
            </p>
            <Link 
              href="/#contacto" 
              className="inline-flex items-center justify-center px-10 py-5 bg-[#0f3460] text-white text-base font-bold rounded-[2rem] shadow-2xl shadow-[#0f3460]/30 hover:-translate-y-1 transition-all active:scale-95 group"
            >
              Iniciar mi proyecto
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

