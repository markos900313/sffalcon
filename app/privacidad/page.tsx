"use client";

import React from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });

const sections = [
    {
        num: "01",
        title: "Responsable del tratamiento",
        content: `El responsable del tratamiento de sus datos personales es:

— Nombre: Marco Antonio Falcón Hernández
— Marca comercial: SFFALCON
— Correo electrónico: marcosk903@gmail.com
— Web: sffalcon.com
— País: España

SFFALCON se compromete a tratar sus datos personales con total transparencia, en cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo (RGPD) y la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).`,
    },
    {
        num: "02",
        title: "Datos que recopilamos",
        content: `SFFALCON solo recopila los datos estrictamente necesarios para prestar sus servicios. Los datos que podemos recopilar son:

— Nombre y apellidos
— Dirección de correo electrónico
— Número de teléfono
— Información sobre su negocio (nombre, sector, necesidades)
— Datos de navegación básicos (mediante cookies técnicas necesarias)

No recopilamos datos sensibles (ideología, salud, religión, etc.) ni datos de menores de 14 años. No realizamos perfilado automatizado ni decisiones automatizadas sobre los usuarios.`,
    },
    {
        num: "03",
        title: "Finalidad del tratamiento",
        content: `Sus datos se utilizan exclusivamente para las siguientes finalidades:

— Responder a sus consultas y solicitudes de información
— Enviar propuestas comerciales de servicios web
— Gestionar la relación contractual derivada de proyectos contratados
— Comunicaciones relacionadas con proyectos en curso
— Cumplir con obligaciones legales y fiscales

No utilizamos sus datos para envío de publicidad de terceros ni para ninguna finalidad distinta a las indicadas sin su consentimiento previo.`,
    },
    {
        num: "04",
        title: "Base legal del tratamiento",
        content: `El tratamiento de sus datos se ampara en las siguientes bases legales reconocidas por el RGPD:

— Consentimiento: cuando usted nos contacta voluntariamente a través de los formularios o medios de contacto del sitio.
— Ejecución de contrato: cuando existe una relación de prestación de servicios entre usted y SFFALCON.
— Obligación legal: cuando el tratamiento sea necesario para cumplir con obligaciones fiscales o legales aplicables en España.

Puede retirar su consentimiento en cualquier momento sin que ello afecte a la licitud del tratamiento previo a su retirada.`,
    },
    {
        num: "05",
        title: "Conservación de datos",
        content: `Sus datos personales se conservarán durante el tiempo necesario para cumplir con las finalidades para las que fueron recogidos y, en todo caso:

— Datos de contacto: hasta que solicite su supresión o transcurran 3 años desde el último contacto.
— Datos contractuales: durante la vigencia del contrato y los plazos legales posteriores exigidos por la normativa fiscal y mercantil española (generalmente 5 años).

Transcurridos dichos plazos, los datos serán eliminados o anonimizados de forma segura.`,
    },
    {
        num: "06",
        title: "Derechos del usuario",
        content: `Conforme al RGPD, usted tiene derecho a:

— Acceso: conocer qué datos tratamos sobre usted.
— Rectificación: corregir datos inexactos o incompletos.
— Supresión ("derecho al olvido"): solicitar la eliminación de sus datos.
— Oposición: oponerse al tratamiento de sus datos en determinadas circunstancias.
— Portabilidad: recibir sus datos en formato estructurado y de uso común.
— Limitación: solicitar que suspendamos el tratamiento en ciertos supuestos.

Para ejercer cualquiera de estos derechos, envíe un correo a marcosk903@gmail.com indicando el derecho que desea ejercer y adjuntando una copia de su documento de identidad. Responderemos en el plazo máximo de un mes.

Si considera que sus derechos no han sido atendidos, puede presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).`,
    },
    {
        num: "07",
        title: "Contacto y reclamaciones",
        content: `Para cualquier consulta, solicitud o reclamación relacionada con el tratamiento de sus datos personales, puede contactar con SFFALCON a través de:

— Email: marcosk903@gmail.com
— Web: sffalcon.com

Nos comprometemos a responder en un plazo máximo de 72 horas laborables y a tratar su solicitud con la máxima diligencia y confidencialidad.`,
    },
];

export default function PrivacidadPage() {
    return (
        <div
            className={`${inter.variable} ${plusJakarta.variable} font-sans bg-[#050505] text-white min-h-screen`}
        >
            <style jsx global>{`
        .legal-gradient {
          background: radial-gradient(
              at 80% 20%,
              rgba(0, 223, 216, 0.05) 0px,
              transparent 60%
            ),
            radial-gradient(
              at 20% 80%,
              rgba(0, 112, 243, 0.05) 0px,
              transparent 60%
            );
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
                        <span className="text-[10px] text-cyan-400 font-black uppercase tracking-[0.3em] mb-4 block">
                            Documento legal · SFFALCON
                        </span>
                        <h1 className="text-5xl md:text-6xl font-plus-jakarta font-extrabold mb-6 leading-tight">
                            Política de{" "}
                            <span
                                style={{
                                    backgroundImage:
                                        "linear-gradient(90deg, #00dfd8, #0070f3)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Privacidad
                            </span>
                        </h1>
                        <div className="flex flex-wrap gap-6 text-xs text-gray-500 font-medium">
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                                Última actualización: enero 2026
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                Cumplimiento RGPD · LOPDGDD
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                España · UE
                            </span>
                        </div>
                    </div>

                    {/* RGPD badge */}
                    <div className="mb-12 p-5 rounded-2xl border border-cyan-500/10 bg-cyan-500/[0.03] flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                                className="w-5 h-5 text-cyan-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="text-white text-sm font-bold mb-1">
                                Cumplimiento RGPD garantizado
                            </p>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                Esta política cumple con el Reglamento General de Protección de
                                Datos (UE) 2016/679 y la Ley Orgánica 3/2018 de Protección de
                                Datos española.
                            </p>
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
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-cyan-500/20 transition-colors">
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
                                sffalcon.com · España · RGPD Compliant
                            </p>
                        </div>
                        <div className="flex gap-6 text-xs text-gray-600 font-bold uppercase tracking-widest">
                            <Link
                                href="/terminos"
                                className="hover:text-blue-400 transition-colors"
                            >
                                Términos
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