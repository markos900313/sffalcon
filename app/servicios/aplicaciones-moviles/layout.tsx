import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aplicaciones Móviles iOS y Android',
  description: 'Desarrollo de aplicaciones móviles a medida para negocios locales españoles. iOS y Android con panel de gestión propio.',
  alternates: {
    canonical: 'https://sffalcon.com/servicios/aplicaciones-moviles'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
