import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SaaS y Paneles de Gestión',
  description: 'Plataformas SaaS con panel de gestión propio para gestionar reservas, clientes y operaciones sin depender de terceros.',
  alternates: {
    canonical: 'https://sffalcon.com/servicios/saas-paneles'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
