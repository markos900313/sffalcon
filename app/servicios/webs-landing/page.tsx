"use client";

import { Utensils, Stethoscope, GraduationCap, ArrowRight, ArrowLeft, CheckCircle2, Info } from "lucide-react";
import Link from "next/link";
import { WebPremiumCard } from "@/components/servicios/WebPremiumCard";
import WhatsAppButton from "@/components/WhatsAppButton";

const examples = [
  {
    title: "La Terraza \u2014 Restaurante",
    subtitle: "WEB RESTAURANTE",
    description: "Landing page completa para restaurante con reservas online, carta digital y sección de contacto.",
    icon: Utensils,
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    href: "/examples/webs/ejemplo-1.html",
    features: [
      "Reserva de mesa online",
      "Carta con fotos y precios",
      "Galería y testimonios"
    ],
    benefit: "Aumenta las reservas directas en un 40%"
  },
  {
    title: "Sonrisas \u2014 Clínica Dental",
    subtitle: "WEB CORPORATIVA",
    description: "Web profesional para clínica con formulario de cita, equipo médico y tratamientos detallados.",
    icon: Stethoscope,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    href: "/examples/webs/ejemplo-2.html",
    features: [
      "Cita online integrada",
      "Ficha de tratamientos",
      "Equipo y testimonios"
    ],
    benefit: "Reduce el tiempo de gestión de citas en un 60%"
  },
  {
    title: "TechLearn \u2014 Academia Online",
    subtitle: "WEB ACADEMIA",
    description: "Landing page para academia con catálogo de cursos, precios por plan y registro de alumnos.",
    icon: GraduationCap,
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    href: "/examples/webs/ejemplo-3.html",
    features: [
      "Catálogo de cursos",
      "Planes y precios",
      "Estadísticas y testimonios"
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
          <Link href="/" className="flex items-center gap-2 group text-slate-900 font-bold text-sm shrink-0">
            <span>Inicio</span>
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
          {/* Bloque Informativo */}
          <div className="bg-[#EFF6FF] border-l-[3px] border-[#1B4FD8] rounded-lg p-[16px_20px] mb-6 shadow-sm">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#1B4FD8] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-[14px] font-bold text-[#1B4FD8] mb-1">Ejemplos de proyectos realizados</h3>
                <p className="text-[13px] text-[#64748B] leading-[1.6]">
                  Estas demos muestran el tipo de soluciones que desarrollamos a medida para cada cliente. No son productos genéricos — cada proyecto se construye desde cero adaptado a tu negocio, sector y objetivos.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:gap-12">
            {examples.map((example, index) => (
              <WebPremiumCard key={index} example={example as any} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-blue-600 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
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
      <WhatsAppButton />
    </div>
  );
}
