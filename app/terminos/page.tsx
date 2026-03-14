"use client";

import React from "react";
import LegalLayout from "@/components/LegalLayout";

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

Para cualquier reclamación o consulta, el cliente puede contactar previamente con SFFALCON a través del correo admin@sffalcon.com, con el objetivo de resolver el conflicto de forma amistosa antes de acudir a la vía judicial.`,
    },
];

export default function TerminosPage() {
    return (
        <LegalLayout
            active="legal"
            title="Términos y"
            subtitle="Condiciones"
            lastUpdated="enero 2026"
            badgeTitle="Marco Legal"
            badgeContent="Estos términos y condiciones rigen la relación comercial entre SFFALCON y sus clientes para asegurar la máxima calidad y transparencia en el servicio."
        >
            <div className="space-y-12">
                {sections.map((s) => (
                    <div
                        key={s.num}
                        className="group relative"
                    >
                        <span className="text-7xl font-black text-slate-200/50 absolute -top-10 left-0 -z-10 select-none">
                            {s.num}
                        </span>
                        <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mt-4">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                {s.title}
                            </h2>
                            <div className="text-slate-600 text-sm leading-relaxed space-y-4 font-medium opacity-90">
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
        </LegalLayout>
    );
}