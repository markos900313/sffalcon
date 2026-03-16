import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Transformación Digital',
  description: 'Transformamos negocios locales con tecnología digital a medida. Conoce nuestro proceso de transformación.',
  alternates: {
    canonical: 'https://sffalcon.com/transformacion'
  }
}

export default function TransformacionPage() {
  return (
    <div className="min-h-screen bg-[#f5f7f8]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Evolución</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
            Transformamos tu negocio para la era digital
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
            No solo creamos webs; construimos ecosistemas tecnológicos que automatizan tus ventas y optimizan tu operativa diaria.
          </p>
          <Link 
            href="/#contacto" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f3460] text-white font-bold rounded-2xl hover:scale-105 transition-all"
          >
            Empezar transformación
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
