"use client";

import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import {
  CheckCircle2, LayoutTemplate, Smartphone, BarChart3,
  Bot, Phone, Clock, Rocket, Mail, ArrowRight, Sparkles, Zap, Globe
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function LandingPage() {
  return (
    <div className={`${inter.variable} font-sans bg-[#f5f7f8] text-slate-900 selection:bg-[#0f3460]/30 min-h-[max(884px,100dvh)]`}>
      <style dangerouslySetInnerHTML={{
        __html: `
        .glass-nav {
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(15, 52, 96, 0.08);
        }
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
        .glass-card {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 
              0 20px 40px -15px rgba(15, 52, 96, 0.1),
              0 0 0 1px rgba(15, 52, 96, 0.02);
        }
        .floating {
            animation: floating 6s ease-in-out infinite;
        }
        @keyframes floating {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }
        .glow-blob {
            position: absolute;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(15, 52, 96, 0.08) 0%, transparent 70%);
            border-radius: 50%;
            filter: blur(40px);
            z-index: 0;
        }
      `}} />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 hero-gradient overflow-hidden">
        {/* Glow Blobs */}
        <div className="glow-blob top-[-150px] right-[-150px] animate-pulse md:w-[600px] md:h-[600px] w-[300px] h-[300px]"></div>
        <div className="glow-blob bottom-[-100px] left-[-100px] opacity-60 hidden md:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            <div className="space-y-8 md:space-y-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 group transition-all hover:border-[#0f3460]/20 cursor-default">
                <Sparkles className="w-3.5 h-3.5 text-[#0f3460] animate-pulse" />
                <span className="text-[#0f3460] text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
                  Tecnología para Captar Clientes · SFFALCON
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
                <span className="block">La tecnología que hace</span>
                <span className="block text-gradient">crecer tu negocio</span>
                <span className="block">mientras tú lo diriges.</span>
              </h1>

              <p className="text-base md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium opacity-90">
                Soluciones de software personalizadas, IA y marketing que trabajan 24/7 para aumentar tu rentabilidad y liberar tu tiempo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center lg:justify-start">
                <Link className="inline-flex items-center justify-center px-8 py-4 bg-[#0f3460] text-white text-sm font-bold rounded-2xl shadow-2xl shadow-[#0f3460]/30 hover:-translate-y-1 transition-all active:scale-95 group" href="#servicios">
                  Más información
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 text-slate-900 text-sm font-bold rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm" href="#contacto">
                  Presupuesto gratis hoy
                </Link>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 pt-4">
                <div className="flex items-center gap-2.5 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500" strokeWidth={2.5} />
                  Sin permanencia
                </div>
                <div className="flex items-center gap-2.5 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500" strokeWidth={2.5} />
                  Entrega 15–30 días
                </div>
                <div className="flex items-center gap-2.5 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500" strokeWidth={2.5} />
                  Soporte directo
                </div>
              </div>
            </div>

            <div className="relative mt-12 lg:mt-0 mx-auto lg:ml-auto w-full max-w-[400px] md:max-w-[460px] lg:justify-self-end">
              {/* Floating Element 1 */}
              <div className="absolute -top-6 -left-4 md:-top-10 md:-left-10 z-20 floating">
                <div className="glass-card p-3 rounded-2xl flex items-center gap-2.5">
                  <div className="bg-blue-500/10 p-2 rounded-xl">
                    <Zap className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-blue-600 uppercase tracking-tighter">Rendimiento</p>
                    <p className="text-xs font-black text-slate-900">High Performance</p>
                  </div>
                </div>
              </div>

              {/* Main Preview Card */}
              <div className="relative z-10 glass-card rounded-[2rem] p-6 md:p-8 overflow-hidden group hover:shadow-3xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#0f3460]/5 rounded-bl-[4rem] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-[#0f3460] tracking-tight">Ecosistema Pro</h3>
                    <p className="text-[10px] font-bold text-[#0f3460]/60 uppercase tracking-widest mt-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#0f3460] rounded-full animate-ping"></span>
                      Desarrollo Ágil
                    </p>
                  </div>
                  <div className="bg-green-500/10 px-3 py-1.5 rounded-full flex items-center gap-2 border border-green-500/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[9px] md:text-[10px] font-black text-green-700 uppercase tracking-tighter">Activo</span>
                  </div>
                </div>

                <div className="space-y-8 md:space-y-10">
                  <div>
                    <div className="flex justify-between items-center text-xs md:text-sm font-black mb-3 text-[#0f3460]">
                      <span className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Visibilidad en Google
                      </span>
                      <span className="bg-[#0f3460] text-white px-2 py-0.5 rounded text-[10px]">OBJETIVO 90+</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden p-0.5">
                      <div className="bg-gradient-to-r from-[#0f3460] to-[#1a508b] h-full rounded-full w-[100%] transition-all duration-1000 shadow-sm"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-slate-50/50 border border-slate-100 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] hover:bg-white transition-colors">
                      <span className="text-[9px] uppercase font-bold text-slate-400 block mb-1 tracking-widest">IA</span>
                      <p className="text-xl md:text-3xl font-black text-[#0f3460]">Full</p>
                    </div>
                    <div className="bg-slate-50/50 border border-slate-100 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] hover:bg-white transition-colors">
                      <span className="text-[9px] uppercase font-bold text-slate-400 block mb-1 tracking-widest">UX Factor</span>
                      <p className="text-xl md:text-3xl font-black text-[#0f3460]">A++</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Element 2 */}
              <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 z-20 floating [animation-delay:1s]">
                <div className="glass-card p-3 md:p-5 rounded-2xl flex items-center gap-2 md:gap-4 border-l-4 border-l-[#0f3460]">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden flex items-center justify-center text-[9px] md:text-[10px] font-black text-[#0f3460]">
                        UI
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] md:text-xs font-bold text-slate-700">Diseño Exclusivo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soluciones Reales Section */}
      <section className="py-20 md:py-24 bg-white" id="servicios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-6">Soluciones que generan impacto real</h2>
            <div className="h-1.5 md:h-2 w-20 md:w-24 bg-gradient-to-r from-[#0f3460] to-[#1a508b] rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Card 1 */}
            <Link href="/servicios/webs-landing" className="group p-6 md:p-8 rounded-2xl border border-slate-100 bg-[#f5f7f8] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start">
              <LayoutTemplate className="w-8 h-8 text-[#0f3460] mb-6" strokeWidth={1.5} />
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Webs y Landing Pages</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">Diseño profesional de alta conversión para que tus campañas y anuncios se traduzcan en clientes.</p>
              <div className="text-[#0f3460] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">Explorar <ArrowRight className="w-4 h-4" strokeWidth={2} /></div>
            </Link>
            {/* Card 2 */}
            <Link href="/servicios/aplicaciones-moviles" className="group p-6 md:p-8 rounded-2xl border border-slate-100 bg-[#f5f7f8] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start">
              <Smartphone className="w-8 h-8 text-[#0f3460] mb-6" strokeWidth={1.5} />
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Aplicaciones móviles y web</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">Apps nativas y multiplataforma a medida para que tus clientes te lleven siempre en el bolsillo.</p>
              <div className="text-[#0f3460] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">Explorar <ArrowRight className="w-4 h-4" strokeWidth={2} /></div>
            </Link>
            {/* Card 3 */}
            <Link href="/servicios/saas-paneles" className="group p-6 md:p-8 rounded-2xl border border-slate-100 bg-[#f5f7f8] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start">
              <BarChart3 className="w-8 h-8 text-[#0f3460] mb-6" strokeWidth={1.5} />
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">SaaS y paneles de gestión</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">Plataformas con panel propio para gestionar reservas, clientes y operaciones sin depender de terceros.</p>
              <div className="text-[#0f3460] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">Explorar <ArrowRight className="w-4 h-4" strokeWidth={2} /></div>
            </Link>
            {/* Card 4 */}
            <Link href="/servicios/ia-integrada" className="group p-6 md:p-8 rounded-2xl border border-slate-100 bg-[#f5f7f8] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start">
              <Bot className="w-8 h-8 text-[#0f3460] mb-6" strokeWidth={1.5} />
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">IA integrada</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">Agentes y automatizaciones 24/7 que atienden, responden y ejecutan tareas mientras tú te centras en dirigir.</p>
              <div className="text-[#0f3460] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">Explorar <ArrowRight className="w-4 h-4" strokeWidth={2} /></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Metodología Section */}
      <section className="py-20 md:py-24 bg-[#f5f7f8]" id="proceso">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">Metodología</h2>
            <p className="text-base md:text-lg text-slate-500">De la idea al sistema digital que trabaja por ti</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            <div className="relative">
              <span className="text-6xl md:text-7xl font-black text-slate-200/60 absolute -top-8 md:-top-10 left-0 -z-10">01</span>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 mt-4">Entendemos tu operativa</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Analizamos tu negocio y tus procesos actuales para detectar dónde podemos ahorrarte más tiempo y dinero.</p>
            </div>
            <div className="relative">
              <span className="text-6xl md:text-7xl font-black text-slate-200/60 absolute -top-8 md:-top-10 left-0 -z-10">02</span>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 mt-4">Trazamos el plan</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Definimos la hoja de ruta clara: qué vamos a construir, por qué y cómo va a impactar en tus resultados.</p>
            </div>
            <div className="relative">
              <span className="text-6xl md:text-7xl font-black text-slate-200/60 absolute -top-8 md:-top-10 left-0 -z-10">03</span>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 mt-4">Lo hacemos realidad</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Desarrollamos tu solución digital con la tecnología más avanzada, siempre enfocados en que sea fácil de usar.</p>
            </div>
            <div className="relative">
              <span className="text-6xl md:text-7xl font-black text-slate-200/60 absolute -top-8 md:-top-10 left-0 -z-10">04</span>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 mt-4">Crecemos contigo</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Lanzamos y optimizamos. No te soltamos la mano hasta que la herramienta sea el motor de tu negocio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Confianza Section */}
      <section className="py-20 md:py-24 bg-white" id="transformación">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <div className="w-1.5 h-8 md:h-10 bg-[#0f3460] rounded-full"></div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900">Confianza en 3 Pasos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-start space-y-4 max-w-sm">
              <div className="w-12 h-12 bg-[#f1f5f9] rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#0f3460]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Llamada</h3>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed">Entendemos tu necesidad en 15 minutos y te damos un presupuesto cerrado según tu caso.</p>
            </div>
            <div className="flex flex-col items-start space-y-4 max-w-sm">
              <div className="w-12 h-12 bg-[#f1f5f9] rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#0f3460]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Construcción por fases</h3>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed">Lanzamos lo esencial para que empieces a vender pronto, y luego escalamos con IA.</p>
            </div>
            <div className="flex flex-col items-start space-y-4 max-w-sm">
              <div className="w-12 h-12 bg-[#f1f5f9] rounded-xl flex items-center justify-center">
                <Rocket className="w-5 h-5 text-[#0f3460]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Lanzamiento</h3>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed">Publicamos tu plataforma, configuramos el SEO básico y te formamos para que manejes tu panel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0f3460] relative overflow-hidden" id="contacto">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0 100 L100 0 L100 100 Z" fill="white"></path>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Hablemos de cómo hacer crecer tu negocio hoy mismo</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">Si estás cansado de soluciones que no entienden tu operativa, escríbeme. Te daré un presupuesto sin compromiso y una hoja de ruta clara.</p>
          <a className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0f3460] font-bold rounded-2xl hover:scale-105 transition-all shadow-2xl" href="mailto:admin@sffalcon.com">
            <Mail className="w-5 h-5" strokeWidth={2} />
            Quiero mi diagnóstico gratuito
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}