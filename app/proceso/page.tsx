import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Clock, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nuestro Proceso de Trabajo',
  description: 'Conoce cómo trabajamos en SFFALCON. Proceso claro, transparente y orientado a resultados para tu negocio.',
  alternates: {
    canonical: 'https://sffalcon.com/proceso'
  }
}

const steps = [
  { title: "Entendemos tu operativa", desc: "Analizamos tu negocio y tus procesos actuales para detectar dónde podemos ahorrarte más tiempo y dinero." },
  { title: "Trazamos el plan", desc: "Definimos la hoja de ruta clara: qué vamos a construir, por qué y cómo va a impactar en tus resultados." },
  { title: "Lo hacemos realidad", desc: "Desarrollamos tu solución digital con la tecnología más avanzada, siempre enfocados en que sea fácil de usar." },
  { title: "Crecemos contigo", desc: "Lanzamos y optimizamos. No te soltamos la mano hasta que la herramienta sea el motor de tu negocio." }
]

export default function ProcesoPage() {
  return (
    <div className="min-h-screen bg-[#f5f7f8]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Nuestro Proceso</h1>
        <p className="text-lg text-slate-500 mb-16 max-w-2xl font-medium">
          De la idea inicial hasta el sistema digital que trabaja por ti las 24 horas.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="text-5xl font-black text-slate-100 absolute -top-2 -right-2 group-hover:text-blue-50 transition-colors">0{i + 1}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
