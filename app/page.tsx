"use client";

import React, { useEffect, useState } from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

// Configuración de fuentes de Google
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Manejar el efecto de scroll para la navegación
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animación de Scroll Reveal
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal-hidden").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`${inter.variable} ${plusJakarta.variable} font-sans bg-[#050505] text-white selection:bg-[#0070f3]/30 min-h-screen overflow-x-hidden w-full`}>
      <style jsx global>{`
        :root {
          --brand-blue: #0070f3;
          --brand-cyan: #00dfd8;
          --brand-violet: #7928ca;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Estilos Glassmorphism - Safari Optimized */
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        .glass-nav {
          background: rgba(5, 5, 5, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Animaciones */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.15); opacity: 0.5; }
        }

        @keyframes bg-gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }

        .text-gradient {
          background: linear-gradient(90deg, var(--brand-blue), var(--brand-cyan), var(--brand-blue));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          background-size: 200% auto;
          animation: bg-gradient-x 5s linear infinite;
        }

        /* Scroll Reveal */
        .reveal-hidden {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .neon-glow:hover {
          box-shadow: 0 0 25px rgba(0, 112, 243, 0.25);
          border-color: rgba(0, 223, 216, 0.4);
        }

        /* Orbs de fondo */
        .orb-blue {
          background: radial-gradient(circle, var(--brand-blue) 0%, transparent 65%);
          filter: blur(80px);
          -webkit-filter: blur(80px);
        }

        .orb-cyan {
          background: radial-gradient(circle, var(--brand-cyan) 0%, transparent 65%);
          filter: blur(80px);
          -webkit-filter: blur(80px);
        }
      `}</style>

      {/* 1. NAVEGACIÓN */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled || isMenuOpen ? "py-3 glass-nav shadow-2xl" : "py-6 bg-transparent"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer z-50">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#0070f3] to-[#00dfd8] flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                <path d="M21 3L12.5 8.5L9 4L3 7l4 3.5L3 21l7-4 1.5 3.5L21 3z" />
              </svg>
            </div>
            <span className="font-plus-jakarta font-bold text-xl tracking-tight">SFFALCON</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-gray-400">
            <Link href="#servicios" prefetch={true} className="hover:text-white transition-colors relative group">
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#transformación" prefetch={true} className="hover:text-white transition-colors relative group">
              Transformación
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#proceso" prefetch={true} className="hover:text-white transition-colors relative group">
              Proceso
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#contacto" prefetch={true} className="bg-[#0070f3] hover:bg-[#0060e0] text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/30 active:scale-95">
              Empezar Ahora
            </Link>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative overflow-hidden">
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2.2" : ""}`}></span>
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0 -translate-x-full" : ""}`}></span>
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.2" : ""}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#050505]/98 backdrop-blur-xl z-[40] transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}>
          <Link href="#servicios" onClick={() => setIsMenuOpen(false)} className="text-3xl font-plus-jakarta font-bold hover:text-[#00dfd8]">Servicios</Link>
          <Link href="#transformación" onClick={() => setIsMenuOpen(false)} className="text-3xl font-plus-jakarta font-bold hover:text-[#00dfd8]">Transformación</Link>
          <Link href="#proceso" onClick={() => setIsMenuOpen(false)} className="text-3xl font-plus-jakarta font-bold hover:text-[#00dfd8]">Proceso</Link>
          <Link href="#contacto" onClick={() => setIsMenuOpen(false)} className="bg-[#0070f3] text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl shadow-blue-500/40">Empezar Ahora</Link>
        </div>
      </nav>

      <div className="fixed bottom-6 right-6 z-[999] group flex items-center">
        <div className="absolute right-full mr-3 px-3 py-1 bg-black text-white text-[10px] uppercase font-black tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
          WhatsApp
        </div>
        <a
          href="https://wa.me/34604989742?text=Hola%20Marco,%20me%20gustar%C3%ADa%20digitalizar%20mi%20negocio%20con%20SFFALCON."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 active:scale-95 transition-transform"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 32 32">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.494 2.027 7.807L0 32l8.418-2.004A15.938 15.938 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.788-1.858l-.486-.29-5.004 1.192 1.215-4.875-.317-.5A13.267 13.267 0 012.667 16C2.667 8.821 8.821 2.667 16 2.667S29.333 8.821 29.333 16 23.179 29.333 16 29.333zm7.273-9.874c-.398-.199-2.354-1.162-2.719-1.295-.365-.133-.631-.199-.897.2-.266.398-1.03 1.294-1.263 1.56-.232.265-.465.299-.863.1-.398-.2-1.68-.619-3.2-1.976-1.183-1.056-1.981-2.36-2.213-2.758-.232-.399-.025-.614.174-.812.179-.178.398-.465.597-.698.2-.232.266-.398.399-.664.133-.266.066-.498-.033-.697-.1-.2-.897-2.162-1.229-2.96-.324-.777-.653-.672-.897-.684l-.764-.013c-.266 0-.697.1-1.063.498-.365.399-1.395 1.363-1.395 3.325s1.428 3.857 1.627 4.123c.2.265 2.81 4.29 6.808 6.018.951.411 1.693.656 2.271.84.954.303 1.823.26 2.51.158.766-.114 2.354-.963 2.686-1.893.333-.93.333-1.727.233-1.893-.1-.166-.366-.265-.764-.464z" />
          </svg>
        </a>
      </div>

      <main>
        {/* 2. HERO SECTION */}
        <section className="relative min-h-dvh flex items-center pt-24 overflow-hidden">
          {/* Fondo Mesh Gradient Orbs */}
          <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] orb-blue animate-pulse-slow z-0"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] orb-cyan animate-pulse-slow z-0" style={{ animationDelay: '3s' }}></div>

          <div className="container mx-auto px-6 grid md:grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="reveal-hidden text-center lg:text-left pt-10" style={{ transitionDelay: '0.1s' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-black tracking-widest mb-8 uppercase">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
                Agencia Web para Negocios Locales
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-plus-jakarta font-extrabold leading-[1.05] mb-8">
                Creamos tu{" "}
                <span className="text-gradient">web profesional en 7 días</span> para que tú te enfoques en vender.
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Especialistas en digitalizar negocios españoles. Rapidez, confianza y tecnología de vanguardia (Next.js + IA).
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="#servicios" className="bg-[#0070f3] hover:bg-[#0060e0] text-white px-8 py-4 rounded-xl text-sm font-bold transition-all shadow-xl shadow-blue-500/25 flex items-center gap-2 active:scale-95">
                  Ver Servicios
                </Link>
                <Link href="#contacto" className="glass-card hover:bg-white/5 px-8 py-4 rounded-xl text-sm font-bold transition-all border border-white/10 flex items-center gap-2 active:scale-95">
                  Contactar Ahora
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-[10px] text-gray-500 font-black uppercase tracking-widest opacity-60">
                <span className="flex items-center gap-1.5">✓ Sin permanencia</span>
                <span className="flex items-center gap-1.5">✓ Entrega en 7 días</span>
                <span className="flex items-center gap-1.5">✓ Consulta gratis</span>
              </div>
            </div>

            <div className="relative flex justify-center items-center reveal-hidden lg:block" style={{ transitionDelay: '0.3s' }}>
              <div className="glass-card p-8 sm:p-10 rounded-[2.5rem] w-full max-w-[380px] animate-float relative z-20 mx-auto">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-400/20 flex items-center justify-center border border-white/5">
                    <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl sm:text-2xl font-plus-jakarta italic">Tu web hoy</h3>
                    <p className="text-[10px] text-gray-500 font-black tracking-widest uppercase">Entrega High-Speed</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      <span>Optimización SEO</span>
                      <span className="text-cyan-400">100%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-[2px]">
                      <div className="h-full w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-[length:200%_auto] animate-[bg-gradient-x_3s_linear_infinite] rounded-full shadow-[0_0_10px_rgba(0,112,243,0.4)]"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 right-0 lg:-right-6 glass-card py-4 px-6 rounded-2xl flex items-center gap-4 animate-float sm:z-30 shadow-2xl border-cyan-500/20" style={{ animationDelay: '2s' }}>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.6)]"></div>
                <span className="text-xs font-black uppercase tracking-widest">Proyectos Activos</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SERVICIOS */}
        <section id="servicios" className="py-32 md:py-40 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20 reveal-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-plus-jakarta font-bold mb-6 tracking-tight">Soluciones Reales</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#0070f3] to-[#00dfd8] mx-auto rounded-full"></div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
              {[
                {
                  title: "Landing Pages",
                  desc: "Convierte desconocidos en clientes recurrentes con un diseño imbatible.",
                  icon: <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                },
                {
                  title: "Alojamientos",
                  desc: "Llena tus habitaciones con venta directa, sin comisiones de terceros.",
                  icon: <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                },
                {
                  title: "Restaurantes",
                  desc: "Tu carta y tus reservas, bajo tu control y sin intermediarios.",
                  icon: <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
                },
                {
                  title: "IA integrada",
                  desc: "Atención al cliente 24/7 que trabaja mientras tú descansas.",
                  icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                }
              ].map((s, idx) => (
                <div key={idx} className="glass-card p-8 rounded-[2rem] neon-glow transition-all duration-500 group reveal-hidden relative overflow-hidden" style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <div className="size-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 transform group-hover:rotate-12 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {s.icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-4 group-hover:text-cyan-400 transition-colors uppercase tracking-tight font-plus-jakarta">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">{s.desc}</p>
                  <Link href="#contacto" className="text-blue-400 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group/link">
                    Info
                    <span className="group-hover/link:translate-x-2 transition-transform">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESO COMPACTO */}
        <section id="proceso" className="py-32 bg-[#0a0a0c] relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20 reveal-hidden">
              <h2 className="text-3xl md:text-5xl font-plus-jakarta font-bold mb-4 tracking-tight">Metodología SFFALCON</h2>
              <p className="text-gray-500 text-sm uppercase font-black tracking-widest">Simplificamos lo complejo</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: "01", title: "Análisis", desc: "Entendemos tu sector y competencia." },
                { num: "02", title: "Estrategia", desc: "Definimos el camino al éxito." },
                { num: "03", title: "Ejecución", desc: "Construimos con tecnología punta." },
                { num: "04", title: "Éxito", desc: "Lanzamos y escalamos tu web." }
              ].map((p, idx) => (
                <div key={idx} className="relative p-8 rounded-[1.5rem] glass-card border-white/5 reveal-hidden hover:bg-white/[0.05] transition-colors" style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <span className="absolute -top-6 right-6 text-5xl font-black text-white/[0.05]">{p.num}</span>
                  <h3 className="text-xl font-bold mb-3 text-white font-plus-jakarta italic">{p.title}</h3>
                  <p className="text-gray-500 text-xs font-medium leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NUEVA SECCIÓN: CONFIANZA EN 3 PASOS */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20 reveal-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-plus-jakarta font-bold mb-6 tracking-tight text-gradient">Confianza en 3 Pasos</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Llamada", desc: "Entendemos tu negocio y objetivos desde el primer minuto.", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
                { step: "2", title: "Diseño en 7 días", desc: "Tu web lista y optimizada sin esperas eternas ni complicaciones.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                { step: "3", title: "Lanzamiento", desc: "Empieza a captar clientes y domina tu mercado local de inmediato.", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
              ].map((c, idx) => (
                <div key={idx} className="glass-card p-10 rounded-[2.5rem] text-center reveal-hidden group hover:border-blue-500/30 transition-all" style={{ transitionDelay: `${idx * 0.2}s` }}>
                  <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-blue-500/20 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={c.icon}></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-plus-jakarta font-bold mb-4">{c.title}</h3>
                  <p className="text-gray-400 font-medium">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL RESPONSIVE */}
        <section id="contacto" className="py-24 sm:py-32 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="glass-card relative rounded-[3rem] p-10 sm:p-20 overflow-hidden text-center reveal-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 orb-blue opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 orb-cyan opacity-10"></div>

              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-plus-jakarta font-bold mb-8 leading-tight tracking-tighter">
                  ¿Hacemos algo grande juntos?
                </h2>
                <p className="text-lg text-gray-400 mb-12 font-medium">
                  Resultados tangibles en menos de lo que imaginas. Escríbenos ahora.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="mailto:hola@sffalcon.com" className="bg-[#0070f3] hover:bg-[#0060e0] text-white px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest transition-all active:scale-95 shadow-2xl shadow-blue-500/30">
                    Enviar Email
                  </a>
                  <a href="https://wa.me/34604989742?text=Hola%20Marco,%20me%20gustar%C3%ADa%20digitalizar%20mi%20negocio%20con%20SFFALCON." className="glass-card hover:bg-white/5 text-white px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest transition-all active:scale-95 border border-white/10">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER OPTIMIZADO */}
      <footer className="py-12 border-t border-white/5 bg-[#0a0a0c] text-center sm:text-left">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M21 3L12.5 8.5L9 4L3 7l4 3.5L3 21l7-4 1.5 3.5L21 3z" />
              </svg>
            </div>
            <span className="font-plus-jakarta font-black text-xl tracking-tighter italic">SFFALCON</span>
          </div>
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-[3px] text-gray-600">
            <Link href="/terminos" className="hover:text-cyan-400">Legal</Link>
            <Link href="/privacidad" className="hover:text-cyan-400">Privacidad</Link>
          </div>
          <p className="text-gray-700 text-[10px] font-bold">© 2026 SFFALCON SYSTEM</p>
        </div>
      </footer>
    </div>
  );
}