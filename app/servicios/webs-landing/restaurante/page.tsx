"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Utensils, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  ChevronRight,
  Star
} from "lucide-react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function RestaurantePage() {
  return (
    <div className={`${inter.className} bg-white text-slate-900 selection:bg-orange-500/20 overflow-x-hidden`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center text-left">
          <div className="flex items-center gap-8">
            <Link href="/servicios/webs-landing" className="text-sm font-bold text-slate-400 hover:text-orange-600 transition-colors uppercase tracking-widest">
              Volver
            </Link>
            <div className={`text-2xl font-black text-orange-600 ${plusJakarta.className}`}>EL BISTRÓ</div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#" className="font-bold hover:text-orange-600 transition-colors">La Carta</a>
            <a href="#" className="font-bold hover:text-orange-600 transition-colors">Reservas</a>
            <a href="#" className="font-bold hover:text-orange-600 transition-colors">Ubicación</a>
            <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition-colors">Reservar Mesa</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10 text-left">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1 rounded-full font-bold text-sm mb-6">
            <Star className="w-4 h-4 fill-orange-700" /> PRODUCTOS DE PROXIMIDAD
          </div>
          <h1 className={`text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-none ${plusJakarta.className}`}>
            Sabores que <br/><span className="text-orange-600 italic">cuentan historias.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed">
            Una experiencia gastronómica mediterránea donde la tradición y la vanguardia se encuentran en cada plato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all">Ver la Carta</button>
            <button className="bg-white border-2 border-orange-600 text-orange-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-orange-50 transition-all">Nuestra Historia</button>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-32 px-4 bg-orange-50/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative text-left">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop" 
              className="rounded-[3rem] shadow-2xl relative z-10 rotate-2"
              alt="Plato signature"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl z-20 flex items-center gap-4 border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <p className="font-black text-2xl text-slate-900">4.9/5</p>
                <p className="text-sm font-bold text-slate-400">Google Reviews</p>
              </div>
            </div>
          </div>
          <div className="text-left">
             <h2 className={`text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight ${plusJakarta.className}`}>
              Cuidamos cada detalle, <br/>desde la tierra a la mesa.
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Seleccionamos personalmente cada ingrediente de productores locales certificados. Nuestra cocina es honesta, transparente y llena de vida.
            </p>
            <ul className="space-y-6">
              {[
                { title: "Ingredientes Km 0", desc: "Verduras y hortalizas directas de la huerta local." },
                { title: "Vinos de la Tierra", desc: "Selección exclusiva de bodegas de proximidad." },
                { title: "Pesca Sostenible", desc: "Solo pescado del día traído directamente por pescadores locales." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-orange-600 flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1500&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            alt="Interior restaurante"
          />
          <div className="relative z-10">
            <h2 className={`text-4xl md:text-6xl font-black mb-8 leading-tight ${plusJakarta.className}`}>
              Asegura tu mesa <br/><span className="text-orange-500 italic">para hoy mismo.</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Las reservas se agotan rápido durante el fin de semana. No te quedes sin vivir la experiencia de El Bistró.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-orange-600/30">Reservar Ahora</button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all">Ver Horarios</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-20 px-4 text-left">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className={`text-3xl font-black text-orange-600 mb-8 ${plusJakarta.className}`}>EL BISTRÓ</div>
            <p className="text-slate-500 max-w-sm mb-10 leading-relaxed">
              Autenticidad, sabor y compromiso con lo local. Un rincón mediterráneo pensado para compartir y disfrutar sin prisas.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-slate-400">Contacto</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-slate-600">
                <MapPin className="w-5 h-5 text-orange-600" />
                Calle Mayor, 12, Valencia
              </li>
              <li className="flex items-center gap-4 text-slate-600">
                <Phone className="w-5 h-5 text-orange-600" />
                +34 960 000 000
              </li>
              <li className="flex items-center gap-4 text-slate-600">
                <Clock className="w-5 h-5 text-orange-600" />
                Mar - Dom: 13:30 - 23:00
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-slate-400">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-6">Recibe nuestras novedades gastronómicas y eventos especiales.</p>
            <div className="flex gap-2 p-1 bg-slate-50 rounded-2xl border border-slate-100">
              <input type="text" placeholder="Email" className="bg-transparent px-4 flex-grow outline-none text-sm" />
              <button className="bg-orange-600 text-white w-10 h-10 rounded-xl flex items-center justify-center group"><ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-slate-100 text-slate-400 text-xs flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 Restaurante El Bistró Mediterráneo. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-orange-600 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
