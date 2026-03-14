"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Stethoscope, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  CheckCircle2,
  Calendar,
  HeartPulse,
  Award,
  ArrowRight
} from "lucide-react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function ClinicaDentalPage() {
  return (
    <div className={`${inter.className} bg-white text-slate-800 selection:bg-blue-100 overflow-x-hidden`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center text-left">
          <div className="flex items-center gap-8">
            <Link href="/servicios/webs-landing" className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest">
              Volver
            </Link>
            <div className={`text-2xl font-black text-blue-600 flex items-center gap-2 ${plusJakarta.className}`}>
              <HeartPulse className="w-8 h-8" />
              LUMINA
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#" className="font-bold hover:text-blue-600 transition-colors">Tratamientos</a>
            <a href="#" className="font-bold hover:text-blue-600 transition-colors">Equipo</a>
            <a href="#" className="font-bold hover:text-blue-600 transition-colors">Clínica</a>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">Cita Online</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white overflow-hidden text-left min-h-[80vh]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-1 rounded-full font-bold text-sm mb-6">
              <Award className="w-4 h-4" /> 15 AÑOS CUIDANDO TU SONRISA
            </div>
            <h1 className={`text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] ${plusJakarta.className}`}>
              Tu confianza nace de una <br/><span className="text-blue-600">sonrisa sana.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-xl mb-12 leading-relaxed">
              Tecnología dental de última generación y un equipo humano dedicado a que te sientas como en casa desde el primer momento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" /> Reservar Primera Cita
              </button>
              <button className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-4 rounded-xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all">Ver Tratamientos</button>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="Patient" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-slate-500">Más de <span className="text-blue-600">5,000 pacientes</span> confían en nosotros</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <img 
              src="https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              className="rounded-[4rem] shadow-2xl relative z-10 border-[1rem] border-white"
              alt="Doctora Lumina"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-4 bg-white text-left">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className={`text-4xl md:text-5xl font-black text-slate-900 mb-6 ${plusJakarta.className}`}>Tratamientos Avanzados</h2>
            <p className="text-slate-500 max-w-2xl text-lg italic">Especialidades dentales integrales diseñadas para cada etapa de tu vida.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Ortodoncia Invisible", desc: "Alinea tu sonrisa de forma discreta con la última tecnología Invisalign.", icon: HeartPulse },
              { title: "Implantes Dentales", desc: "Recupera la funcionalidad y estética natural con materiales de alta calidad.", icon: Stethoscope },
              { title: "Estética Dental", desc: "Blanqueamientos y carillas para conseguir la sonrisa radiante que deseas.", icon: Award },
              { title: "Odontopediatría", desc: "Cuidamos la salud bucodental de los más pequeños con mimo y paciencia.", icon: CheckCircle2 },
              { title: "Periodoncia", desc: "Tratamiento de encías para asegurar la base de tu salud dental.", icon: Calendar },
              { title: "Urgencias 24h", desc: "Estamos aquí cuando más nos necesitas, con atención inmediata.", icon: Clock }
            ].map((service, i) => (
              <div key={i} className="group p-10 rounded-[3rem] border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">{service.desc}</p>
                <div className="text-blue-600 font-bold flex items-center gap-2 group/link cursor-pointer">
                  Saber más <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto bg-blue-600 rounded-[5rem] p-12 md:p-32 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/40 rounded-full blur-3xl -ml-48 -mb-48"></div>
          <div className="relative z-10">
            <h2 className={`text-4xl md:text-7xl font-black mb-10 leading-tight ${plusJakarta.className}`}>Tu nueva vida empieza <br/>con una <span className="italic">nueva sonrisa.</span></h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">Reserva hoy mismo tu diagnóstico gratuito y descubre todo lo que podemos hacer por ti.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-xl">Reservar Cita Ahora</button>
              <button className="bg-blue-500 text-white border border-blue-400 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all">Llamar a Clínica</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-24 px-4 border-t border-slate-100 text-left">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className={`text-3xl font-black text-blue-600 flex items-center gap-2 mb-8 ${plusJakarta.className}`}>
              <HeartPulse className="w-8 h-8" />
              LUMINA
            </div>
            <p className="text-slate-500 max-w-sm mb-10 leading-relaxed">
              Excelencia en odontología moderna. Combinamos experiencia médica con un trato humano excepcional para tu bienestar total.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-sm">Nuestra Clínica</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-slate-500">
                <MapPin className="w-5 h-5 text-blue-600" />
                Av. de la Libertad, 45, Madrid
              </li>
              <li className="flex items-center gap-4 text-slate-500">
                <Phone className="w-5 h-5 text-blue-600" />
                +34 910 000 000
              </li>
              <li className="flex items-center gap-4 text-slate-500">
                <Clock className="w-5 h-5 text-blue-600" />
                Lun - Vie: 09:00 - 20:00
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-sm">Información</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Nuestro Equipo</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Seguros Dentales</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Financiación</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-slate-200 text-slate-400 text-xs flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 Clínica Dental Lumina. Salud y Sonrisas para todos.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-600 transition-colors text font-medium">Aviso Legal</a>
            <a href="#" className="hover:text-blue-600 transition-colors text font-medium">Privacidad</a>
            <a href="#" className="hover:text-blue-600 transition-colors text font-medium">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
