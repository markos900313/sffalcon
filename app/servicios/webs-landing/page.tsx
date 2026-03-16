"use client";

import { Utensils, Stethoscope, GraduationCap, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const examples = [
  {
    title: "Web para Restaurante",
    subtitle: "El Bistró Mediterráneo",
    description: "Un diseño elegante y visual que prioriza la experiencia del comensal desde el primer clic.",
    icon: Utensils,
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    href: "/servicios/webs-landing/restaurante",
    features: [
      "Sistema de reservas online integrado",
      "Menú digital con imágenes de alta calidad",
      "Optimización para móviles (pedidos rápidos)",
      "Gestión de reseñas de clientes"
    ],
    benefit: "Aumenta las reservas directas en un 40%"
  },
  {
    title: "Web para Clínica Dental",
    subtitle: "Clínica Dental Lumina",
    description: "Transmitimos confianza y profesionalidad para convertir visitantes en pacientes recurrentes.",
    icon: Stethoscope,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    href: "/servicios/webs-landing/clinica-dental",
    features: [
      "Reserva de citas en tiempo real",
      "Presentación del equipo médico",
      "Sección de tratamientos detallada",
      "Preguntas frecuentes automatizadas"
    ],
    benefit: "Reduce el tiempo de gestión de citas en un 60%"
  },
  {
    title: "Landing para Academia Online",
    subtitle: "EduAcademy Pro",
    description: "Estructura enfocada 100% en la conversión y venta de cursos digitales.",
    icon: GraduationCap,
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    href: "/servicios/webs-landing/academia",
    features: [
      "Catálogo de cursos dinámico",
      "Pasarela de pagos segura",
      "Testimonios de alumnos destacados",
      "Panel de usuario intuitivo"
    ],
    benefit: "Mejora el ratio de conversión de inscritos"
  }
];

export default function WebsLandingPage() {
  return (
    <div className="min-h-screen bg-[#f5f7f8] font-sans selection:bg-blue-600/20 pb-20">
      {/* Integrated Navigation Header */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 h-16 flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center gap-4">
          <Link href="/#servicios" className="flex items-center gap-2 group text-slate-900 font-bold text-sm shrink-0">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Volver a Servicios</span>
            <span className="sm:hidden">Volver</span>
          </Link>
          <span className="text-[10px] md:text-xs font-black tracking-widest text-blue-600 uppercase truncate text-right">Webs & Landing Pages · SFFALCON</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 pt-10">
        {/* Compact Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">Tu web: un comercial trabajando 24/7 para ti</h1>
          <p className="text-base md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Diseños de alto impacto que transforman visitas en ventas y profesionalizan tu imagen de marca.
          </p>
        </div>

        <div className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {examples.map((example, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-6 md:p-8 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 ${example.color} rounded-xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <example.icon className={`w-6 h-6 ${example.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">{example.title}</h3>
                    <p className="text-xs font-semibold text-blue-600 mt-1">{example.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">{example.description}</p>
                
                <ul className="grid grid-cols-1 gap-y-2.5 mb-8">
                  {example.features.slice(0, 3).map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-xs text-slate-700 truncate">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-slate-100 italic text-[11px] text-slate-400 mb-8">
                  {example.benefit}
                </div>
                
                <Link 
                  href={example.href}
                  className="w-full py-4 px-4 bg-slate-900 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 group/btn hover:bg-slate-800 transition-all active:scale-[0.98]"
                >
                  Ver este modelo
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-800/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <h2 className="text-2xl md:text-4xl font-black mb-6 relative z-10 leading-tight">¿Hablamos de cómo multiplicar tus resultados?</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto relative z-10 text-base md:text-lg">
              Te ayudo a construir la herramienta que tu negocio necesita para escalar sin límites y destacar frente a tu competencia.
            </p>
            
            <div className="flex justify-center relative z-10">
              <a 
                href="mailto:admin@sffalcon.com" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-lg text-sm"
              >
                Quiero mi presupuesto ahora
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-20 border-t border-slate-200 pt-10 pb-10">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
              <p>© 2026 SFFALCON · INNOVACIÓN DIGITAL</p>
              <div className="flex gap-8">
                  <Link href="/terminos" className="hover:text-blue-600 transition-colors">Aviso Legal</Link>
                  <Link href="/privacidad" className="hover:text-blue-600 transition-colors">Privacidad</Link>
              </div>
          </div>
      </footer>
    </div>
  );
}
