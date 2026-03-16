import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { LayoutTemplate, Smartphone, BarChart3, Bot, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicios Digitales',
  description: 'Webs profesionales, aplicaciones móviles, plataformas SaaS e IA integrada para negocios locales. SFFALCON Murcia.',
  alternates: {
    canonical: 'https://sffalcon.com/servicios'
  }
}

const servicios = [
  { href: "/servicios/webs-landing", title: "Webs & Landings", icon: LayoutTemplate, desc: "Diseño profesional de alta conversión." },
  { href: "/servicios/aplicaciones-moviles", title: "Apps Móviles", icon: Smartphone, desc: "iOS y Android a medida." },
  { href: "/servicios/saas-paneles", title: "SaaS & Paneles", icon: BarChart3, desc: "Gestión avanzada de operaciones." },
  { href: "/servicios/ia-integrada", title: "IA Integrada", icon: Bot, desc: "Automatización con agentes inteligentes." }
]

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-[#f5f7f8]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Servicios Digitales</h1>
        <p className="text-lg text-slate-500 mb-16 max-w-2xl font-medium">
          Soluciones tecnológicas diseñadas para impulsar el crecimiento de negocios locales.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {servicios.map((s, i) => (
            <Link key={i} href={s.href} className="group bg-white p-8 rounded-3xl border border-slate-100 flex items-center justify-between hover:shadow-xl hover:border-blue-200 transition-all">
              <div className="flex items-center gap-6">
                <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-blue-50 transition-colors">
                  <s.icon className="w-8 h-8 text-slate-900 group-hover:text-blue-600 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
                  <p className="text-sm text-slate-500">{s.desc}</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-2 transition-all" />
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
