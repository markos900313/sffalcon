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
  Globe
} from "lucide-react";

export default function MobileAppsPage() {
  const examples = [
    {
      title: "Lumina CRM",
      subtitle: "Gestión Sanitaria Intuitiva",
      description: "Panel de control para clínicas que centraliza historias clínicas, citas y facturación en una interfaz intuitiva.",
      features: ["Historias clínicas digitales", "Gestión de citas IA", "Facturación automatizada"],
      benefits: ["Ahorro de 10h/semana en gestión", "Seguridad de datos grado médico"],
      icon: Shield,
      href: "/servicios/aplicaciones-moviles/lumina-crm",
      color: "blue"
    },
    {
      title: "GourmetOrder",
      subtitle: "Experiencia de Pedidos Premium",
      description: "Aplicación de pedidos y reservas en tiempo real con integración de pagos y programas de fidelización.",
      features: ["Pedidos en tiempo real", "Pasarela de pagos", "Fidelización de clientes"],
      benefits: ["Aumento del ticket medio 15%", "Reducción de errores en sala"],
      icon: Zap,
      href: "/servicios/aplicaciones-moviles/gourmet-order",
      color: "orange"
    },
    {
      title: "EduAcademy Hub",
      subtitle: "Aprendizaje sin Límites",
      description: "App nativa para estudiantes que permite acceso offline a contenidos, foros en vivo y seguimiento de progreso.",
      features: ["Acceso offline", "Foros en vivo", "Dashboard de progreso"],
      benefits: ["Mejora la retención de alumnos", "Marca educativa propia"],
      icon: Monitor,
      href: "/servicios/aplicaciones-moviles/edu-academy-hub",
      color: "indigo"
    }
  ];
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

        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {examples.map((example, index) => (
            <div
              key={index}
              className="group bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl flex flex-col md:flex-row min-h-fit md:h-[450px]"
            >
              {/* Left side: Content */}
              <div className="p-8 md:p-10 flex flex-col flex-1 justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center border transition-colors ${example.color === 'blue' ? 'bg-blue-50 border-blue-100 text-blue-600' :
                      example.color === 'orange' ? 'bg-orange-50 border-orange-100 text-orange-600' :
                        'bg-indigo-50 border-indigo-100 text-indigo-600'
                    }`}>
                    <example.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-none">{example.title}</h3>
                    <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-2">{example.subtitle}</p>
                  </div>
                </div>

                <p className="text-slate-500 text-sm md:text-base mb-8 leading-relaxed max-w-lg">
                  {example.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-10 border-t border-slate-100 pt-8">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 px-1">Funciones</p>
                    <div className="space-y-3">
                      {example.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2.5 text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                          <span className="text-xs md:text-sm font-medium truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 px-1">Ventajas</p>
                    <div className="space-y-3">
                      {example.benefits.map((benefit, bIndex) => (
                        <div key={bIndex} className="flex items-center gap-2.5 text-slate-900">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                          <span className="text-sm font-bold truncate">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <Link
                    href={example.href}
                    className="w-full sm:w-auto px-10 py-4 bg-[#0f172a] text-white rounded-2xl font-bold text-sm inline-flex items-center justify-center gap-2 hover:bg-black transition-all active:scale-[0.98] group/btn"
                  >
                    Ver arquitectura
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right side: Realistic Simulation */}
              <div className="hidden lg:flex w-[480px] relative bg-slate-50 border-l border-slate-100 p-6 overflow-hidden group-hover:bg-slate-100/30 transition-colors items-center justify-center">
                <div className="w-full h-full relative max-w-[380px] aspect-square group-hover:scale-105 transition-transform duration-700">
                  {/* Clean Image Container */}
                  <div className="absolute inset-0 bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200/50">
                    <img
                      src={
                        example.color === 'blue' ? '/lumina_mini_3d_1773486654940.png' :
                          example.color === 'orange' ? '/gourmet_mini_3d_1773486674106.png' :
                            '/edu_academy_dashboard_3d_1773486639087.png'
                      }
                      alt={example.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Subtle Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none"></div>
                  </div>

                  {/* Decorative Shadow Blur */}
                  <div className={`absolute -inset-4 blur-3xl opacity-20 -z-10 transition-opacity group-hover:opacity-30 ${example.color === 'blue' ? 'bg-blue-600' :
                      example.color === 'orange' ? 'bg-orange-50' :
                        'bg-indigo-600'
                    }`}></div>
                </div>
              </div>

            </div>
          ))}
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
    </div>
  );
}
