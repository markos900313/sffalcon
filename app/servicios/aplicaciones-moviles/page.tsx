"use client";

import React from "react";
import Link from "next/link";
import {
  Smartphone,
  Shield,
  Zap,
  Monitor,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Layout,
  Layers,
  Code2,
  Globe,
  Info
} from "lucide-react";
import { MobilePremiumCard } from "@/components/servicios/MobilePremiumCard";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function MobileAppsPage() {
  const examples = [
    {
      title: "AgendaPro \u2014 App de Gestión",
      subtitle: "APP PROFESIONALES",
      description: "Aplicación para autónomos y profesionales con agenda diaria, gestión de clientes y estadísticas.",
      features: ["Agenda y citas del día", "Gestión de clientes", "Resumen de ingresos"],
      benefits: ["Retención de datos eficiente", "Profesionalismo corporativo"],
      icon: Monitor,
      href: "/examples/apps/ejemplo-1.html",
      color: "indigo"
    },
    {
      title: "ReservaYa \u2014 App de Reservas",
      subtitle: "APP HOSTELERÍA",
      description: "Aplicación móvil para gestionar reservas con calendario, confirmaciones automáticas y panel de control.",
      features: ["Calendario de reservas", "Estados en tiempo real", "Navegación tipo app nativa"],
      benefits: ["Ahorro en tiempos de gestión", "Mejora asistencia de mesas"],
      icon: Shield,
      href: "/examples/apps/ejemplo-2.html",
      color: "blue"
    },
    {
      title: "RapidoYa \u2014 App de Delivery",
      subtitle: "APP PEDIDOS",
      description: "App de pedidos a domicilio con catálogo, carrito, pasarela de pago y seguimiento de pedido en tiempo real.",
      features: ["Catálogo con categorías", "Carrito y pasarela pago", "Seguimiento en tiempo real"],
      benefits: ["Aumento del ticket medio", "Disminución de errores"],
      icon: Zap,
      href: "/examples/apps/ejemplo-3.html",
      color: "orange"
    }
  ];
  return (
    <div className="min-h-screen bg-[#f5f7f8] font-sans selection:bg-blue-600/20 pb-20">
      {/* Integrated Navigation Header */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 h-16 flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group text-slate-900 font-bold text-sm shrink-0">
            <span>Inicio</span>
          </Link>
          <span className="text-[10px] md:text-xs font-black tracking-widest text-blue-600 uppercase truncate text-right">Software a Medida · SFFALCON</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 pt-10">
        {/* Compact Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight">Impulsa tu negocio con Software a Medida</h1>
          <p className="text-base md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Aplicaciones nativas diseñadas para optimizar tus procesos, fidelizar a tus clientes y escalar tu operativa diaria.
          </p>
        </div>
        <div className="space-y-8">
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
            <MobilePremiumCard key={index} example={example as any} />
          ))}
        </div>
      </div>

        {/* CTA Section */}
        <div className="mt-24 p-12 bg-blue-600 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] md:rounded-[3rem] text-white text-center relative overflow-hidden shadow-2xl shadow-blue-900/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>

          <div className="relative z-10 space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-black tracking-tight">¿Hablamos de cómo digitalizar tu éxito?</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Si buscas una herramienta que se adapte a ti y no al revés, hablemos. Te daré una hoja de ruta clara para transformar tu visión en realidad.
              </p>
            </div>

            <div className="flex justify-center relative z-10">
              <a
                href="mailto:admin@sffalcon.com"
                className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-lg text-sm"
              >
                Quiero mi diagnóstico gratuito
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
