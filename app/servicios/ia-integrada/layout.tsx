import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IA Integrada para Negocios',
  description: 'Agentes IA y automatizaciones que atienden, responden y ejecutan tareas para tu negocio las 24 horas del día.',
  alternates: {
    canonical: 'https://sffalcon.com/servicios/ia-integrada'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
