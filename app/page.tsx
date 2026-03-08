"use client";

import React, { useEffect, useState } from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

// Configuración de fuentes de Google
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <div className={`${inter.variable} ${plusJakarta.variable} font-sans bg-[#050505] text-white selection:bg-[#0070f3]/30 min-h-screen overflow-x-hidden`}>
      <style jsx global>{`
        :root {
          --brand-blue: #0070f3;
          --brand-cyan: #00dfd8;
          --brand-violet: #7928ca;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Estilos Glassmorphism */
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        .glass-nav {
          background: rgba(5, 5, 5, 0.82);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Animaciones */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.5; }
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
          background-image: linear-gradient(90deg, var(--brand-blue), var(--brand-cyan), var(--brand-blue));
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          background-size: 200% auto;
          animation: bg-gradient-x 5s linear infinite;
        }

        /* Scroll Reveal */
        .reveal-hidden {
          opacity: 0;
          transform: translateY(10px);
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
        }

        .orb-cyan {
          background: radial-gradient(circle, var(--brand-cyan) 0%, transparent 65%);
          filter: blur(80px);
        }
      `}</style>

      {/* 1. NAVEGACIÓN */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-3 glass-nav shadow-xl" : "py-6 bg-transparent"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#0070f3] to-[#00dfd8] flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                <path d="M21 3L12.5 8.5L9 4L3 7l4 3.5L3 21l7-4 1.5 3.5L21 3z" />
              </svg>
            </div>
            <span className="font-plus-jakarta font-bold text-xl tracking-tight hidden sm:block">SFFALCON</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
            <a href="#servicios" className="hover:text-white transition-colors relative group">
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="#transformación" className="hover:text-white transition-colors relative group">
              Transformación
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="#proceso" className="hover:text-white transition-colors relative group">
              Proceso
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </a>
          </div>

          <a href="#contacto" className="bg-[#0070f3] hover:bg-[#0060e0] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-blue-500/30 active:scale-95">
            Empezar Ahora
          </a>
        </div>
      </nav>

      {/* BOTÓN WHATSAPP FLOTANTE */}
      <div className="fixed bottom-6 right-6 z-[999] group flex items-center">
        <div className="absolute right-full mr-3 px-3 py-1 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Escríbenos
        </div>
        <a
          href="https://wa.me/34604989742"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 transition-transform"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 32 32">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.494 2.027 7.807L0 32l8.418-2.004A15.938 15.938 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.788-1.858l-.486-.29-5.004 1.192 1.215-4.875-.317-.5A13.267 13.267 0 012.667 16C2.667 8.821 8.821 2.667 16 2.667S29.333 8.821 29.333 16 23.179 29.333 16 29.333zm7.273-9.874c-.398-.199-2.354-1.162-2.719-1.295-.365-.133-.631-.199-.897.2-.266.398-1.03 1.294-1.263 1.56-.232.265-.465.299-.863.1-.398-.2-1.68-.619-3.2-1.976-1.183-1.056-1.981-2.36-2.213-2.758-.232-.399-.025-.614.174-.812.179-.178.398-.465.597-.698.2-.232.266-.398.399-.664.133-.266.066-.498-.033-.697-.1-.2-.897-2.162-1.229-2.96-.324-.777-.653-.672-.897-.684l-.764-.013c-.266 0-.697.1-1.063.498-.365.399-1.395 1.363-1.395 3.325s1.428 3.857 1.627 4.123c.2.265 2.81 4.29 6.808 6.018.951.411 1.693.656 2.271.84.954.303 1.823.26 2.51.158.766-.114 2.354-.963 2.686-1.893.333-.93.333-1.727.233-1.893-.1-.166-.366-.265-.764-.464z" />
          </svg>
        </a>
      </div>

      <main>
        {/* 2. HERO SECTION */}
        <section className="relative min-h-[100vh] flex items-center pt-24 overflow-hidden">
          {/* Fondo Mesh Gradient Orbs */}
          <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] orb-blue animate-pulse-slow z-0"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] orb-cyan animate-pulse-slow z-0" style={{ animationDelay: '3s' }}></div>

          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="reveal-hidden px-2" style={{ transitionDelay: '0.1s' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold tracking-widest mb-8 uppercase">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                Agencia Web para Negocios Locales
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-plus-jakarta font-extrabold leading-[1.05] mb-8">
                Tu negocio merece una{" "}
                <span className="text-gradient">Presencia Digital Real</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                Diseñamos y construimos tu web profesional para que los clientes te encuentren, confíen en ti y te contacten. Sin rodeos.
              </p>
              <div className="flex flex-wrap gap-5">
                <a href="#servicios" className="bg-[#0070f3] hover:bg-[#0060e0] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all shadow-xl shadow-blue-500/25 flex items-center gap-2">
                  Ver Servicios
                </a>
                <a href="#contacto" className="glass-card hover:bg-white/5 px-6 py-3 rounded-xl text-sm font-semibold transition-all border border-white/10 flex items-center gap-2">
                  Contactar Ahora
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-xs text-gray-500 font-medium whitespace-nowrap">
                <span>✓ Sin permanencia</span>
                <span>✓ Entrega en 7 días</span>
                <span>✓ Primera consulta gratis</span>
              </div>
            </div>

            <div className="relative flex justify-center items-center reveal-hidden" style={{ transitionDelay: '0.3s' }}>
              <div className="glass-card p-10 rounded-[2.5rem] w-full max-w-md animate-float relative z-20">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-400/20 flex items-center justify-center border border-white/5">
                    <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl font-plus-jakarta">Tu web en 7 días</h3>
                    <p className="text-sm text-gray-500 tracking-wide uppercase">Alta velocidad de entrega</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-tighter">
                      <span>Optimización SEO</span>
                      <span>100%</span>
                    </div>
                    <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden p-0.5">
                      <div className="h-full w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-[length:200%_auto] animate-[bg-gradient-x_3s_linear_infinite] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 right-0 md:-right-6 glass-card py-4 px-8 rounded-2xl flex items-center gap-4 animate-float sm:z-30 shadow-2xl shadow-blue-500/5 border-cyan-500/20" style={{ animationDelay: '2s' }}>
                <div className="w-3.5 h-3.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.6)]"></div>
                <span className="text-sm font-bold tracking-tight">Proyectos Activos</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SERVICIOS */}
        <section id="servicios" className="py-40 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] orb-blue opacity-5 z-0 pointer-events-none"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-24 reveal-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-plus-jakarta font-bold mb-6">Servicios para Negocios Locales</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#0070f3] to-[#00dfd8] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Landing Pages con IA",
                  desc: "Páginas de captación rápidas, optimizadas para convertir visitas en clientes reales.",
                  icon: <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                },
                {
                  title: "Webs para Alojamientos",
                  desc: "Para casas rurales, apartamentos y hoteles que venden solo por Booking. Hazlo directo.",
                  icon: <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                },
                {
                  title: "Webs para Restaurantes",
                  desc: "Menú, reservas y presencia real en Google. Sin depender de redes sociales.",
                  icon: <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
                },
                {
                  title: "Automatizaciones con IA",
                  desc: "Chatbots, respuestas automáticas y formularios inteligentes integrados en tu web.",
                  icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                }
              ].map((s, idx) => (
                <div key={idx} className="glass-card p-10 rounded-[2.5rem] neon-glow transition-all duration-500 group reveal-hidden relative overflow-hidden" style={{ transitionDelay: `${idx * 0.15}s` }}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full -mr-12 -mt-12 group-hover:scale-150 transition-transform"></div>

                  <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-8 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {s.icon}
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold mb-5 group-hover:text-cyan-400 transition-colors uppercase tracking-wide leading-tight font-plus-jakarta">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">{s.desc}</p>
                  <a href="#contacto" className="text-blue-400 font-bold text-sm flex items-center gap-2 group/link">
                    Más información
                    <span className="group-hover/link:translate-x-2 transition-transform">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4.5. SECCIÓN ASÍ TRANSFORMAMOS TU NEGOCIO */}
        <section id="transformación" className="py-40 bg-transparent relative z-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-24 reveal-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-plus-jakarta font-bold mb-6">Así transformamos tu negocio</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Cada sector tiene su propia identidad. Estos son ejemplos del tipo de webs que construimos para negocios como el tuyo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {/* Tarjeta 1 - Restaurante */}
              <div className="group reveal-hidden" style={{ transitionDelay: '0.1s' }}>
                <div className="glass-card rounded-2xl overflow-hidden border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,112,243,0.15)]">
                  <div className="bg-[#1a1a1a] h-10 flex items-center px-4 gap-4">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex-1 bg-white/5 rounded-md h-6 flex items-center justify-center text-[10px] text-gray-500 font-medium">
                      casapepe.es
                    </div>
                  </div>
                  <div className="h-64 bg-amber-950 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="text-white text-xl font-bold mb-2">Bienvenido a Casa Pepe</div>
                      <div className="text-white/60 text-[10px] mb-4">Cocina tradicional española · Madrid</div>
                      <div className="flex gap-2 justify-center mb-6">
                        <div className="w-16 h-5 bg-white/10 rounded-sm"></div>
                        <div className="w-16 h-5 bg-amber-600 rounded-sm"></div>
                      </div>
                      <div className="flex gap-3">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-12 h-16 bg-amber-900/50 rounded-md"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 px-2">
                  <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">Restaurante "Casa Pepe"</div>
                  <div className="text-xs text-gray-500 leading-relaxed font-medium">Sitio web optimizado para reservas y visualización de menú artesanal.</div>
                </div>
              </div>

              {/* Tarjeta 2 - Casa Rural */}
              <div className="group reveal-hidden" style={{ transitionDelay: '0.2s' }}>
                <div className="glass-card rounded-2xl overflow-hidden border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,112,243,0.15)]">
                  <div className="bg-[#1a1a1a] h-10 flex items-center px-4 gap-4">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex-1 bg-white/5 rounded-md h-6 flex items-center justify-center text-[10px] text-gray-500 font-medium">
                      casaruralrincon.es
                    </div>
                  </div>
                  <div className="h-64 bg-green-950 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <div className="relative z-10 w-full">
                      <div className="text-white text-xl font-bold mb-2">Tu escapada perfecta</div>
                      <div className="text-white/60 text-[10px] mb-4">Sierra de Gredos · Ávila</div>
                      <div className="flex gap-2 justify-center mb-6">
                        <div className="w-20 h-5 bg-green-700/80 rounded-sm"></div>
                        <div className="w-20 h-5 bg-white/10 rounded-sm"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 max-w-[180px] mx-auto">
                        <div className="h-10 bg-green-900/50 rounded-md"></div>
                        <div className="h-10 bg-green-900/50 rounded-md"></div>
                        <div className="h-10 bg-green-900/50 rounded-md col-span-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 px-2">
                  <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">Casa Rural "El Rincón"</div>
                  <div className="text-xs text-gray-500 leading-relaxed font-medium">Enfoque visual en paisajes y experiencia de reserva directa.</div>
                </div>
              </div>

              {/* Tarjeta 3 - Clínica Dental */}
              <div className="group reveal-hidden" style={{ transitionDelay: '0.3s' }}>
                <div className="glass-card rounded-2xl overflow-hidden border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,112,243,0.15)]">
                  <div className="bg-[#1a1a1a] h-10 flex items-center px-4 gap-4">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex-1 bg-white/5 rounded-md h-6 flex items-center justify-center text-[10px] text-gray-500 font-medium">
                      sonrisadental.es
                    </div>
                  </div>
                  <div className="h-64 bg-blue-950 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="text-white text-xl font-bold mb-2">Tu salud dental, nuestra prioridad</div>
                      <div className="text-white/60 text-[10px] mb-4">Clínica dental en Valencia</div>
                      <div className="flex gap-2 justify-center mb-6">
                        <div className="w-24 h-5 bg-blue-600 rounded-sm"></div>
                        <div className="w-24 h-5 bg-white/10 rounded-sm"></div>
                      </div>
                      <div className="flex gap-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-16 h-12 bg-blue-900/50 rounded-md flex flex-col p-1.5 gap-1">
                            <div className="w-4 h-1 bg-white/20"></div>
                            <div className="w-8 h-1 bg-white/10"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 px-2">
                  <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">Clínica "Sonrisa Dental"</div>
                  <div className="text-xs text-gray-500 leading-relaxed font-medium">Web profesional con alta tasa de conversión para citas médicas.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PROCESO */}
        <section id="proceso" className="py-40 bg-[#0a0a0c] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6 reveal-hidden">
              <div>
                <h2 className="text-5xl font-plus-jakarta font-bold mb-2">Cómo Trabajamos</h2>
                <div className="w-20 h-1.5 bg-blue-500 rounded-full"></div>
              </div>
              <p className="text-gray-500 max-w-sm">Metodología ágil enfocada a resultados tangibles para tu negocio.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { num: "01", title: "Escuchamos", desc: "Entendemos tu negocio, tus clientes y lo que necesitas comunicar." },
                { num: "02", title: "Diseñamos", desc: "Creamos una propuesta visual adaptada a tu marca y tu sector." },
                { num: "03", title: "Construimos", desc: "Desarrollamos tu web rápida, segura y optimizada para Google." },
                { num: "04", title: "Lanzamos", desc: "Ponemos tu web en línea y te enseñamos a gestionarla." }
              ].map((p, idx) => (
                <div key={idx} className={`relative p-10 rounded-[2rem] glass-card border-white/5 reveal-hidden ${idx % 2 !== 0 ? 'lg:mt-12' : ''}`} style={{ transitionDelay: `${idx * 0.2}s` }}>
                  <span className="absolute -top-12 left-6 text-9xl font-black text-white/[0.03] pointer-events-none select-none">{p.num}</span>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-5 text-white font-plus-jakarta">{p.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. MÉTRICAS */}
        <section className="py-40 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-cyan-900/10 -skew-y-2 origin-center scale-110"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-3 gap-16 text-center">
              {[
                { val: "7 días", label: "Tiempo medio de entrega" },
                { val: "100%", label: "Webs responsive y optimizadas" },
                { val: "0€", label: "Coste de consulta inicial" }
              ].map((m, idx) => (
                <div key={idx} className="reveal-hidden group" style={{ transitionDelay: `${idx * 0.15}s` }}>
                  <p className="text-6xl md:text-7xl lg:text-9xl font-plus-jakarta font-black text-gradient mb-6 group-hover:scale-105 transition-transform duration-500">{m.val}</p>
                  <p className="text-gray-500 font-black uppercase tracking-[0.2em] text-xs md:text-sm">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CTA FINAL */}
        <section id="contacto" className="py-40">
          <div className="container mx-auto px-6">
            <div className="glass-card relative rounded-[4rem] p-12 md:p-28 overflow-hidden text-center reveal-hidden border-white/10">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] orb-blue opacity-10 -mr-40 -mt-40"></div>
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] orb-cyan opacity-10 -ml-40 -mb-40"></div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-plus-jakarta font-bold mb-10 leading-[1.1] tracking-tight">
                  ¿Listo para tener tu web profesional?
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 mb-16 leading-relaxed font-medium">
                  Escríbenos hoy y en menos de 24 horas te damos una propuesta personalizada sin compromiso.
                </p>
                <div className="flex justify-center items-center">
                  <a href="mailto:marcosk903@gmail.com" className="w-full sm:w-auto glass-card border-white/20 hover:bg-white/5 text-white px-12 py-6 rounded-xl text-lg font-bold transition-all active:scale-95 flex items-center justify-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Enviar un Email
                  </a>
                </div>
                <div className="mt-20 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-center gap-12 text-gray-400 font-bold tracking-tight">
                  <div className="flex items-center justify-center gap-3 hover:text-white transition-colors cursor-default">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    604 989 742
                  </div>
                  <div className="flex items-center justify-center gap-3 hover:text-white transition-colors cursor-default">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    marcosk903@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7.5. SECCIÓN DE CIERRE EMOCIONAL */}
        <section className="py-20 bg-[#0a0a0c] relative z-10 border-t border-white/5">
          <div className="container mx-auto px-6 text-center max-w-2xl reveal-hidden">
            <span className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-[0.3em] font-bold mb-6 block">SFFALCON · AGENCIA WEB · ESPAÑA</span>
            <p className="text-xl md:text-3xl font-plus-jakarta font-bold text-white/20 leading-tight italic">
              "Cada gran negocio empezó con una buena web."
            </p>
            <div className="w-12 h-px bg-white/10 mx-auto my-8"></div>
            <p className="text-[10px] text-gray-700 font-bold tracking-wider">Diseñado y desarrollado por SFFALCON · sffalcon.com</p>
          </div>
        </section>
      </main>

      {/* 8. FOOTER */}
      <footer className="py-20 border-t border-white/5 bg-[#0a0a0c] relative z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0070f3] to-[#00dfd8] flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                  <path d="M21 3L12.5 8.5L9 4L3 7l4 3.5L3 21l7-4 1.5 3.5L21 3z" />
                </svg>
              </div>
              <span className="font-plus-jakarta font-bold text-2xl tracking-tighter">SFFALCON</span>
            </div>

            <div className="flex gap-12 text-sm text-gray-500 font-bold uppercase tracking-widest">
              <a href="/terminos" className="hover:text-cyan-400 transition-colors">Términos</a>
              <a href="/privacidad" className="hover:text-cyan-400 transition-colors">Privacidad</a>
              <a href="mailto:marcosk903@gmail.com" className="hover:text-white transition-colors">Soporte</a>
            </div>

            <div className="text-right flex flex-col items-center md:items-end gap-2">
              <p className="text-gray-600 text-xs font-bold tracking-[0.1em]">
                © 2026 SFFALCON. Todos los derechos reservados.
              </p>
              <p className="text-[10px] text-gray-800 font-medium whitespace-nowrap">Hecho con pasión por el crecimiento local.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}