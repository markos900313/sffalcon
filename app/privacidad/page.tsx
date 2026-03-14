"use client";

import React from "react";
import LegalLayout from "@/components/LegalLayout";

const sections = [
    {
        num: "01",
        title: "Responsable del tratamiento",
        content: `El responsable del tratamiento de sus datos personales es:

— Nombre: Marco Antonio Falcón Hernández
— Marca comercial: SFFALCON
— Correo electrónico: admin@sffalcon.com
— Web: www.sffalcon.com
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

Para ejercer cualquiera de estos derechos, envíe un correo a admin@sffalcon.com indicando el derecho que desea ejercer y adjuntando una copia de su documento de identidad. Responderemos en el plazo máximo de un mes.

Si considera que sus derechos no han sido atendidos, puede presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).`,
    },
    {
        num: "07",
        title: "Contacto y reclamaciones",
        content: `Para cualquier consulta, solicitud o reclamación relacionada con el tratamiento de sus datos personales, puede contactar con SFFALCON a través de:

— Email: admin@sffalcon.com
— Web: www.sffalcon.com

Nos comprometemos a responder en un plazo máximo de 72 horas laborables y a tratar su solicitud con la máxima diligencia y confidencialidad.`,
    },
];

export default function PrivacidadPage() {
    return (
        <LegalLayout
            active="privacidad"
            title="Política de"
            subtitle="Privacidad"
            lastUpdated="enero 2026"
            badgeTitle="Cumplimiento RGPD garantizado"
            badgeContent="Esta política cumple con el Reglamento General de Protección de Datos (UE) 2016/679 y la Ley Orgánica 3/2018 de Protección de Datos española."
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