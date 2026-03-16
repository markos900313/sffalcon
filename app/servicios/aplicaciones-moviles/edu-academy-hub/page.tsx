"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Monitor, 
  BookOpen, 
  Video, 
  Award,
  BarChart,
  Cloud,
  ArrowLeft as ArrowLeftIcon, 
  CheckCircle2 as CheckIcon, 
  Monitor as MonitorIcon, 
  BookOpen as BookIcon, 
  Video as VideoIcon, 
  Award as AwardIcon,
  BarChart as BarChartIcon,
  Cloud as CloudIcon
} from "lucide-react";
import LegalLayout from "@/components/LegalLayout";

export default function EduAcademyPage() {
  return (
    <div className="min-h-screen bg-[#f5f7f8] font-sans selection:bg-indigo-600/20 pb-24">
      {/* Integrated Navigation Header */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 h-16 flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
          <Link href="/servicios/aplicaciones-moviles" className="flex items-center gap-2 group text-slate-900 font-bold text-sm">
            <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver
          </Link>
          <span className="text-xs font-black tracking-widest text-indigo-600 uppercase">Estudio de Caso · EduAcademy Hub</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 pt-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center border border-indigo-100 text-indigo-600 shadow-sm">
              <MonitorIcon className="w-8 h-8" />
            </div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tight">EduAcademy Hub</h1>
            <p className="text-xl text-slate-500 font-medium max-w-2xl">
              Lleva tu conocimiento a cualquier parte con nuestra plataforma de e-learning nativa.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-indigo-50 border border-indigo-100 rounded-xl">
              <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-1">Sector</p>
              <p className="font-bold text-slate-900">Ed-Tech y Formación</p>
            </div>
            <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Plataforma</p>
              <p className="font-bold text-slate-900">LMS Multiplataforma</p>
            </div>
          </div>
        </div>

        {/* content continues... */}

                {/* Detalle Técnico de la App */}
                <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 md:p-12 mb-16">
                    <h2 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-4">
                        <div className="w-1.5 h-8 bg-indigo-600 rounded-full"></div>
                        Vistas de la Plataforma
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-12">
                        <div className="space-y-6">
                            <div className="aspect-video bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 shadow-lg relative group">
                                <img 
                                    src="/edu_academy_dashboard_3d_1773486639087.png" 
                                    alt="EduAcademy Dashboard" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <p className="text-white text-xs font-bold uppercase tracking-widest">Dashboard de Estudiante</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed font-medium text-center">
                                Interfaz intuitiva diseñada para minimizar distracciones y maximizar la retención de conocimientos.
                            </p>
                        </div>
                    </div>
                </div>


        {/* Technical Stack section */}
        <div className="bg-slate-900 rounded-[3rem] p-12 text-white mb-24">
          <h2 className="text-3xl font-black mb-12 text-center">Arquitectura de Aprendizaje</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-white/10 rounded-2xl bg-white/5">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CloudIcon className="w-6 h-6 text-indigo-400" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-2">Cloud</p>
              <p className="font-bold">Google Cloud Storage</p>
            </div>
            <div className="text-center p-6 border border-white/10 rounded-2xl bg-white/5">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChartIcon className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-green-400 mb-2">Analítica</p>
              <p className="font-bold">Mixpanel / DataStudio</p>
            </div>
            <div className="text-center p-6 border border-white/10 rounded-2xl bg-white/5">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MonitorIcon className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2">Desarrollo</p>
              <p className="font-bold">Flutter Multi-Plat</p>
            </div>
            <div className="text-center p-6 border border-white/10 rounded-2xl bg-white/5">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookIcon className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-yellow-400 mb-2">Contenido</p>
              <p className="font-bold">Moodle / Custom API</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center pb-24">
          <h2 className="text-4xl font-black text-slate-900 mb-6">¿Preparado para lanzar tu academia?</h2>
          <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
            Creamos el ecosistema digital que tu comunidad de alumnos necesita.
          </p>
          <a 
            href="mailto:admin@sffalcon.com"
            className="inline-flex items-center gap-2 px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 transition-colors shadow-xl shadow-indigo-200"
          >
            Lanzar mi plataforma
          </a>
        </div>
      </div>
    </div>
  );
}
