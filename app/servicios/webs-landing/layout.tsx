import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diseño Web Profesional Murcia',
  description: 'Webs y landing pages diseñadas para convertir visitantes en clientes. Diseño profesional para negocios locales en Murcia.',
  alternates: {
    canonical: 'https://sffalcon.com/servicios/webs-landing'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
