"use client";

import React from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });

const sections = [
    {
        num: "01",
        title: "Objeto del servicio",
        content: `SFFALCON es una agencia de diseño y desarrollo web con sede en España, operada por Marco Antonio Falcón Hernández. Ofrece servicios de diseño, desarrollo web, landing pages, automatizaciones con inteligencia artificial y consultoría digital para negocios locales.

El acceso y uso de este sitio web, así como la contratación de cualquiera de nuestros servicios, implica la aceptación plena y sin reservas de los presentes Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, le rogamos que no utilice nuestros servicios.`,
    },
    {
        num: "02",
        title: "Condiciones de contratación",
        content: `Cada proyecto se formaliza mediante una propuesta o presupuesto aceptado expresamente por el cliente, ya sea por escrito o por correo electrónico. Dicha aceptación constituye el inicio de la relación contractual.

SFFALCON se compromete a cumplir los plazos acordados en cada propuesta, generalmente 7 días laborables para proyectos estándar, siempre que el cliente proporcione en tiempo y forma los materiales, accesos y decisiones necesarios para el desarrollo del proyecto.

El incumplimiento de plazos por parte del cliente podrá implicar una revisión del calendario de entrega sin coste adicional para SFFALCON.`,
    },
    {
        num: "03",
        title: "Precios y forma de pago",
        content: `Los precios indicados en las propuestas son en euros (€) y no incluyen el IVA aplicable según la normativa fiscal española vigente, salvo que se especifique expresamente lo contrario.

La forma de pago habitual es:
— 50% al inicio del proyecto, como señal de confirmación.
— 50% restante a la entrega del proyecto finalizado.

El método de pago preferente es transferencia bancaria. Otros métodos podrán acordarse al inicio del proyecto. SFFALCON no iniciará ningún trabajo hasta recibir el pago inicial acordado.`,
    },
    {
        num: "04",
        title: "Propiedad intelectual",
        content: `Una vez abonado el importe total del proyecto, la propiedad intelectual de los archivos finales del sitio web se transfiere al cliente. Esto incluye el código fuente, los diseños y los contenidos elaborados por SFFALCON específicamente para el proyecto.

SFFALCON se reserva el derecho de incluir el trabajo realizado en su portafolio profesional y materiales de marketing, mencionando el proyecto como referencia, salvo acuerdo de confidencialidad firmado por ambas partes.

Las herramientas, librerías y recursos de terceros utilizados en el desarrollo pueden estar sujetos a sus propias licencias.`,
    },
    {
        num: "05",
        title: "Limitación de responsabilidad",
        content: `SFFALCON no se hace responsable de daños indirectos, pérdida de beneficios, pérdida de datos ni perjuicios derivados del uso del sitio web tras la entrega y aceptación del proyecto por parte del cliente.

El mantenimiento, actualización y seguridad del sitio web tras la entrega es responsabilidad del cliente, salvo que se contrate expresamente un servicio de mantenimiento continuo con SFFALCON.

SFFALCON no garantiza resultados concretos de negocio (ventas, posicionamiento SEO a largo plazo, etc.) derivados del sitio web entregado, aunque sí garantiza la calidad técnica y profesional del trabajo realizado según las condiciones acordadas.`,
    },
    {
        num: "06",
        title: "Legislación aplicable y resolución de conflictos",
        content: `Los presentes Términos y Condiciones se rigen íntegramente por la legislación española. En caso de cualquier controversia o disputa derivada de la interpretación o aplicación de estos términos, ambas partes se someten, con renuncia expresa a cualquier otro fuero, a los juzgados y tribunales competentes del domicilio del prestador de servicios.

Para cualquier reclamación o consulta, el cliente puede contactar previamente con SFFALCON a través del correo marcosk903@gmail.com, con el objetivo de resolver el conflicto de forma amistosa antes de acudir a la vía judicial.`,
    },
];

export default function TerminosPage() {
    return (
        <div
            className={`${inter.variable} ${plusJakarta.variable} font-sans bg-[#050505] text-white min-h-screen`}
        >
            <style jsx global>{`
        .legal-gradient {
          background: radial-gradient(at 20% 20%, rgba(0, 112, 243, 0.06) 0px, transparent 60%),
            radial-gradient(at 80% 80%, rgba(0, 223, 216, 0.04) 0px, transparent 60%);
        }
      `}</style>

            {/* Top bar */}
            <div className="border-b border-white/5 bg-[#0a0a0c]">
                <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-semibold group"
                    >
                        <svg
                            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Volver al inicio
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-md bg-gradient-to-tr from-[#0070f3] to-[#00dfd8] flex items-center justify-center font-bold text-sm">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                                <path d="M21 3L12.5 8.5L9 4L3 7l4 3.5L3 21l7-4 1.5 3.5L21 3z" />
                            </svg>
                        </div>
                        <span className="font-bold text-sm tracking-tight hidden sm:block">
                            SFFALCON
                        </span>
                    </div>
                </div>
            </div>

            <div className="legal-gradient">
                <div className="max-w-4xl mx-auto px-6 py-20">
                    {/* Header */}
                    <div className="mb-16 pb-16 border-b border-white/5">
                        <span className="text-[10px] text-blue-400 font-black uppercase tracking-[0.3em] mb-4 block">
                            Documento legal · SFFALCON
                        </span>
                        <h1 className="text-5xl md:text-6xl font-plus-jakarta font-extrabold mb-6 leading-tight">
                            Términos y{" "}
                            <span
                                style={{
                                    backgroundImage:
                                        "linear-gradient(90deg, #0070f3, #00dfd8)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Condiciones
                            </span>
                        </h1>
                        <div className="flex flex-wrap gap-6 text-xs text-gray-500 font-medium">
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                Última actualización: enero 2026
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                                Aplicable en España
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                SFFALCON · marcosk903@gmail.com
                            </span>
                        </div>
                    </div>

                    {/* Sections */}
                    <div className="space-y-12">
                        {sections.map((s) => (
                            <div
                                key={s.num}
                                className="group grid md:grid-cols-[80px_1fr] gap-6 md:gap-10"
                            >
                                <div className="hidden md:block">
                                    <span className="text-5xl font-black text-white/[0.04] font-plus-jakarta select-none">
                                        {s.num}
                                    </span>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-blue-500/20 transition-colors">
                                    <h2 className="text-base font-bold text-white uppercase tracking-widest mb-5 flex items-center gap-3">
                                        <span className="md:hidden text-gray-700 font-black">
                                            {s.num}.
                                        </span>
                                        {s.title}
                                    </h2>
                                    <div className="text-gray-400 text-sm leading-relaxed space-y-3">
                                        {s.content.split("\n\n").map((para, i) => (
                                            <p key={i} className="whitespace-pre-line">
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer de página */}
                    <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <p className="text-gray-600 text-xs font-bold tracking-wider">
                                © 2026 SFFALCON. Todos los derechos reservados.
                            </p>
                            <p className="text-gray-700 text-[10px] mt-1">
                                sffalcon.com · España
                            </p>
                        </div>
                        <div className="flex gap-6 text-xs text-gray-600 font-bold uppercase tracking-widest">
                            <Link
                                href="/privacidad"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                Privacidad
                            </Link>
                            <Link href="/" className="hover:text-white transition-colors">
                                Inicio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}