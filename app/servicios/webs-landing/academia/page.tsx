"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  PlayCircle, 
  Users, 
  Award, 
  History, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ArrowRight,
  Zap,
  Star
} from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function EduAcademyPage() {
  return (
    <div className={`${inter.className} bg-gradient-to-br from-slate-50 to-indigo-50 text-slate-900 selection:bg-[#7c3aed]/30`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#001f3d]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-6">
              <Link href="/servicios/webs-landing" className="text-sm font-bold text-slate-400 hover:text-[#7c3aed] transition-colors uppercase tracking-widest">
                Volver
              </Link>
              <div className="flex items-center gap-2">
                <div className="text-[#001f3d]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tight text-[#001f3d]">EduAcademy</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium hover:text-[#7c3aed] transition-colors" href="#">Inicio</a>
              <a className="text-sm font-medium hover:text-[#7c3aed] transition-colors" href="#servicios">Servicios</a>
              <a className="text-sm font-medium hover:text-[#7c3aed] transition-colors" href="#testimonios">Testimonios</a>
              <a className="text-sm font-medium hover:text-[#7c3aed] transition-colors" href="#contacto">Contacto</a>
              <button className="bg-[#001f3d] hover:bg-[#001f3d]/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all">
                Empezar curso
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-8 relative z-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] text-xs font-bold w-fit mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7c3aed] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7c3aed]"></span>
              </span>
              NUEVOS CURSOS DISPONIBLES
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-[#001f3d]">
              Impulsa tu carrera <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#8b5cf6]">sin límites.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              Metodologías ágiles y contenido de vanguardia diseñado para los líderes del mañana. Aprende hoy lo que el mercado exigirá mañana.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="bg-[#001f3d] text-white px-10 py-4 rounded-full font-bold text-lg hover:translate-y-[-2px] hover:shadow-xl transition-all shadow-[#001f3d]/20">
                Empezar ahora
              </button>
              <button className="border-2 border-[#001f3d]/10 text-[#001f3d] px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all">
                Ver programas
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  className="w-full rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" 
                  alt="Creative workspace" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHYNXnkkbE51xA6UXvo5k26zVax5SScgezrTcxUN27bnoe8lj7aZQOB_dmER5eJ_gT8rU8a_eek4kEi1TPdpnEkPCy6XqYiBcb59j4WHTUXE54JA-VZ-wjH6fz9G8EfHI9ChGfGyQiFc30-dCeuSvhOx-6QolbYIo6XHXEJX676kgKpfPhxF6oZl7BUxI5q5zp8Yc3y-93INuHruTY5VSAKNzkWVxBca5Rtdq0IOQCdPaFyN0tKnglyD9R4NvHUUWFBYD2XX0WyOQ"
                />
                <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col gap-2 -rotate-3 border border-slate-100 text-left">
                  <span className="text-3xl font-black text-[#7c3aed]">+10k</span>
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Estudiantes activos</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#001f3d] p-6 rounded-3xl shadow-xl flex flex-col gap-2 rotate-3 text-white text-left">
                  <CheckCircle className="text-secondary w-10 h-10 mb-2" />
                  <span className="font-bold">Títulos Certificados</span>
                </div>
                <img 
                  className="w-full rounded-3xl shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500" 
                  alt="Design student" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCfgKRf-DuGonYlcOUitGKh9hDUi4z6yjrMMhhUFxEnBDUY5t4NUAZdBoqOF-z9S03BzfpZK1ATsChoVIvUvVVJJaObROX3oBA_tsoV7BCHfdTEHY1hkJz8HJElI1VguCNj_hnh7TrKG_mDuKotovIAnwaPSdrIizFkrJYy3FpHQmR5UFfOO6TmnglVnA7HOA0VKXQyCrzzzpgs9uOkIfqlBN76HNzF5ehOksI_u6CQQov7H37dZnGBS82BGgXJZG93ba39SfyuUI"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24" id="servicios">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl text-left">
              <h2 className="text-4xl font-black text-[#001f3d] mb-6 leading-tight">Aprendizaje diseñado <br/>para la vida real.</h2>
              <p className="text-lg text-slate-600">No somos una escuela tradicional. Somos el puente entre tu estado actual y tu éxito futuro.</p>
            </div>
            <div className="h-px flex-1 bg-[#001f3d]/10 mb-4 hidden md:block mx-12"></div>
          </div>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between group overflow-hidden relative text-left">
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <History className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#7c3aed]/10 rounded-2xl flex items-center justify-center text-[#7c3aed] mb-8">
                  <PlayCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Clases On-Demand de Alta Fidelidad</h3>
                <p className="text-slate-600 text-lg max-w-md">Nuestra plataforma está optimizada para que aprendas sin distracciones, con contenido grabado en calidad cinematográfica.</p>
              </div>
            </div>
            <div className="md:col-span-4 bg-[#7c3aed] p-10 rounded-[2.5rem] text-white flex flex-col justify-between hover:scale-[1.02] transition-transform text-left">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Comunidad Exclusiva</h3>
                <p className="text-white/80">Networking real con líderes de la industria.</p>
              </div>
            </div>
            <div className="md:col-span-4 bg-[#001f3d] p-10 rounded-[2.5rem] text-white flex flex-col justify-between hover:scale-[1.02] transition-transform text-left">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Award className="w-8 h-8 text-[#7c3aed]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Certificados Blockchain</h3>
                <p className="text-white/70">Tus logros son inmutables y verificables globalmente.</p>
              </div>
            </div>
            <div className="md:col-span-8 bg-slate-100 p-10 rounded-[2.5rem] border border-dashed border-[#001f3d]/20 flex flex-col md:flex-row gap-8 items-center text-left">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Soporte Personalizado</h3>
                <p className="text-slate-600">No estarás solo. Mentores expertos responden a tus dudas en menos de 12 horas.</p>
              </div>
              <div className="flex -space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-300 border-4 border-white flex items-center justify-center font-bold">JS</div>
                <div className="w-16 h-16 rounded-2xl bg-[#7c3aed] border-4 border-white flex items-center justify-center font-bold text-white">UX</div>
                <div className="w-16 h-16 rounded-2xl bg-[#001f3d] border-4 border-white flex items-center justify-center font-bold text-white">Mkt</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 text-[#001f3d]">
          <h2 className="text-4xl font-black mb-4 italic tracking-tight">Catálogo Maestro</h2>
          <div className="h-1 w-20 bg-[#7c3aed] mx-auto rounded-full"></div>
        </div>
        <div className="flex flex-col gap-32">
          {/* Course 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 group">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-[#7c3aed]/10 rounded-[3rem] translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform"></div>
              <div className="aspect-[16/10] bg-cover bg-center rounded-[3rem] relative z-10 shadow-2xl" 
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwbqzn_LI7bP5bTt9qCZ6HLnHw-4vzKAmFNL9iML1ToPX5XEv4t8IqtAEPFE3n8jORMUZUBVjrEdmVz9SfZd_W48FTrCJ_KG5ek8EttmpAEgrS5xXUyZqdwVfXRyf4P-c9kESuSY6qJ0fBEtAI7GlsY0KD4H18lfbczQ26Nbeypz9s4MfurmLWp0OLT6jgSG2-xsARdPN7ibpXASrrfPt3j0AK3rTNy0liPOAwkPh7dheFKcWkOy2aAfiWSIvWwHGRPWVIH6-CJug')` }}></div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <div className="px-4 py-1 bg-green-100 text-green-700 text-xs font-black uppercase rounded-full w-fit">Nivel: Básico</div>
              <h3 className="text-3xl font-black text-[#001f3d]">Marketing Digital & Growth Hacking</h3>
              <p className="text-lg text-slate-600 leading-relaxed">Entiende las métricas que importan y cómo escalar negocios digitales desde cero usando las últimas herramientas de IA y analítica avanzada.</p>
              <div className="flex items-center gap-8">
                <span className="text-3xl font-black text-[#001f3d]">$49.99</span>
                <button className="bg-[#7c3aed] text-white px-8 py-3 rounded-2xl font-bold hover:shadow-lg transition-all">Ver programa completo</button>
              </div>
            </div>
          </div>

          {/* Course 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 group">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-[#001f3d]/10 rounded-[3rem] -translate-x-6 translate-y-6 group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform"></div>
              <div className="aspect-[16/10] bg-cover bg-center rounded-[3rem] relative z-10 shadow-2xl"
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0gxoAv9WJ7vWWFejIGQkP8qoX_5yY9UVaeNIU66B2-gPQqAnBXInpVBDO1KSFsul7yo-xSCHXulfQ2bESXK6YKI4hpwdotKa6tIOZ0Y4K43Wgc2wSm339kImZwoiYUR4SWDtxNJvPmvB6LkFvsjBaC3XJxIQxqFp4jWJnmUnm4wZO5bUI_XFvlooinAWtGrJyJsh1bn9Ap4opQ5xo7fuKbVIMbAmovwGsjtvorfIJ4OIkNNQseBFv6qipCjMyMDNNmxevHAvunGE')` }}></div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <div className="px-4 py-1 bg-blue-100 text-blue-700 text-xs font-black uppercase rounded-full w-fit">Nivel: Intermedio</div>
              <h3 className="text-3xl font-black text-[#001f3d]">Desarrollo Web Fullstack Moderno</h3>
              <p className="text-lg text-slate-600 leading-relaxed">De JavaScript a arquitecturas de microservicios. Aprende a construir productos escalables, seguros y listos para producción.</p>
              <div className="flex items-center gap-8">
                <span className="text-3xl font-black text-[#001f3d]">$89.99</span>
                <button className="bg-[#001f3d] text-white px-8 py-3 rounded-2xl font-bold hover:shadow-lg transition-all">Ver programa completo</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 text-center">
          <a className="inline-flex items-center gap-2 text-[#7c3aed] font-black text-lg group" href="#">
            Explorar todos los cursos <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20 text-white">
            <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase">Tu Ruta al Éxito</h2>
            <p className="text-slate-400">Un viaje de transformación en tres pasos estratégicos.</p>
          </div>
          <div className="relative space-y-12">
            <div className="absolute left-[26px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#7c3aed] via-[#8b5cf6] to-transparent rounded-full"></div>
            
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 group text-left">
              <div className="w-14 h-14 bg-[#7c3aed] rounded-2xl flex items-center justify-center text-white text-2xl font-black z-20 shadow-xl group-hover:scale-110 transition-transform md:order-2 md:absolute md:left-1/2 md:-ml-7">1</div>
              <div className="md:w-1/2 md:pr-16 md:text-right">
                <h3 className="text-xl font-bold text-white mb-2">Diagnóstico & Elección</h3>
                <p className="text-slate-400 text-sm">Evaluamos tu nivel actual y te recomendamos el programa que maximizará tu potencial de ingresos.</p>
              </div>
              <div className="md:w-1/2 md:pl-16 hidden md:block"></div>
            </div>

            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 group text-left">
              <div className="w-14 h-14 bg-[#8b5cf6] rounded-2xl flex items-center justify-center text-white text-2xl font-black z-20 shadow-xl group-hover:scale-110 transition-transform md:order-2 md:absolute md:left-1/2 md:-ml-7">2</div>
              <div className="md:w-1/2 md:pr-16 hidden md:block"></div>
              <div className="md:w-1/2 md:pl-16">
                <h3 className="text-xl font-bold text-white mb-2">Inmersión Práctica</h3>
                <p className="text-slate-400 text-sm">No solo teoría. Trabajarás en proyectos de la vida real con feedback directo de expertos en cada módulo.</p>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 group text-left">
              <div className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center text-white text-2xl font-black z-20 shadow-xl group-hover:scale-110 transition-transform md:order-2 md:absolute md:left-1/2 md:-ml-7">3</div>
              <div className="md:w-1/2 md:pr-16 md:text-right">
                <h3 className="text-xl font-bold text-white mb-2">Lanzamiento Profesional</h3>
                <p className="text-slate-400 text-sm">Obtén tu certificación, optimiza tu portafolio y accede a nuestra red exclusiva de reclutadores internacionales.</p>
              </div>
              <div className="md:w-1/2 md:pl-16 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white" id="testimonios">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-left">
            <h2 className="text-3xl font-bold text-[#001f3d] mb-4">Impacto Real</h2>
            <p className="text-slate-600">Lo que opinan quienes ya transformaron su carrera.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { 
                quote: "Gracias a EduAcademy pude aprender React mientras seguía trabajando. El curso es increíblemente práctico.",
                name: "María García",
                role: "Frontend Dev",
                color: "bg-[#7c3aed]",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1cT4wlb31ONCOK3BbHt9WUou30fjDNATT2b-aUrV3rq8bZ87Jmcf7xgQ3G81hfLUyjyfeMb9ELg7w0Hf8-U8-W0gsecIJg181eMZdEXzWSs3CKuJ2qeHFYX0t_SiO6OI6tB9FOPBKJUuuHW9AWPMTyrNrvDIY38rGu1Wzh4mvHnwDgQ3reEFT7we_OULYfKZVa9-KwciQyjrNdJ8VFlfdiCgidfi9qqB0CH5JxBih5tG8V7kQo-G-vvoxpihPE0BrxlPCiJ6_UFM"
              },
              { 
                quote: "El soporte de la comunidad es simplemente el mejor. Nunca te sientes bloqueado en tu aprendizaje.",
                name: "Juan Pérez",
                role: "Data Analyst",
                color: "bg-indigo-500",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3N8muujpAXLs5u28fS11GQRC_mIm9dUxy-9KeQrrPGIRgQXk5sx6x_pj0gxAgBkGICpTGNpURZf6ATs0Tsiw1DbkRDE1SfTIZrqp1wyRbkX5GyylJYUF5MsikRR38d5b5uLizuisCJph3zfx_mHJVzHZOH1NzmsUtJhUvgcv8B0Gnz1Gvb1z4XbY0dzZx67K93r-Ot4nb75_sr0iiMu-d14AqWBwTBE7-TED8X00ntcVX-gjYOci7rdHTF_H_Qkga4CkXiZ1n5nU"
              },
              { 
                quote: "La calidad del material es superior a cualquier otra plataforma que haya probado. Muy recomendado.",
                name: "Carlos Ruiz",
                role: "Marketing Specialist",
                color: "bg-[#001f3d]",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAC7P4pd7nhh5fut3n4bw9aH4zwR2P4xjfsvF39o_hSzRSjeGeVxgb7WWsIimRySKhVq1NusGcfD0cusOreKznb4jx8RZPYG8yfTIr5KlPMnn6P0fj12061avatJBcgqILo0LLnc7zex4qZLikc8S0DYgNx-sawgLfUhzQjR_Ot00xEoNoVriSW9X4Rsm6FM81blxkIEPSzijhIb-odj4WsalxIcvNSaQmg9uq_Q8CnAM89HWOmYWvV2g6xWx4PvMsIjtRGPpWzyLg"
              }
            ].map((testi, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl relative h-full flex flex-col pt-12 text-left">
                <div className={`absolute -top-6 left-8 ${testi.color} text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg`}>
                  <Zap className="w-6 h-6" />
                </div>
                <p className="text-slate-700 italic border-l-2 border-[#7c3aed]/20 pl-4 mb-8 flex-grow">"{testi.quote}"</p>
                <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                  <img className="w-14 h-14 rounded-2xl object-cover" alt={testi.name} src={testi.img} />
                  <div>
                    <p className="font-bold text-[#001f3d]">{testi.name}</p>
                    <p className="text-xs text-[#7c3aed] font-bold uppercase tracking-wider">{testi.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto bg-[#001f3d] rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.3),transparent)]"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Diseña el futuro que <br/>te mereces.</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">Únete a la nueva generación de profesionales que están redefiniendo las reglas del juego.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#7c3aed] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-[#7c3aed]/50">
                Inscribirse Ahora
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all">
                Agendar Llamada
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001f3d] py-16 text-slate-400" id="contacto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2 text-left">
              <div className="flex items-center gap-2 text-white mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
                </svg>
                <span className="text-xl font-bold tracking-tight">EduAcademy</span>
              </div>
              <p className="max-w-sm mb-6 leading-relaxed">Plataforma líder en educación online para profesionales en busca de crecimiento continuo y habilidades de vanguardia.</p>
              <div className="flex gap-4">
                <a className="hover:text-white transition-colors" href="#"><Star className="w-5 h-5" /></a>
                <a className="hover:text-white transition-colors" href="#"><Mail className="w-5 h-5" /></a>
                <a className="hover:text-white transition-colors" href="#"><Globe className="w-5 h-5" /></a>
              </div>
            </div>
            <div className="text-left">
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Enlaces</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li><a className="hover:text-white transition-colors" href="#">Inicio</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Catálogo de Cursos</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Precios</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Preguntas Frecuentes</a></li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contacto</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  hola@eduacademy.com
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  +34 900 123 456
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" />
                  Madrid, España
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs">
            <p>© 2024 EduAcademy. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a className="hover:text-white transition-colors" href="#">Política de Privacidad</a>
              <a className="hover:text-white transition-colors" href="#">Términos de Servicio</a>
              <a className="hover:text-white transition-colors" href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
