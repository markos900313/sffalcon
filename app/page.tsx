import { Metadata } from 'next'
import LandingPage from './page-client'

export const metadata: Metadata = {
  title: "SFFALCON | Desarrollo Web, Apps e IA para Empresas en Murcia y España",
  description: "Especialistas en desarrollo web, apps móviles y agentes de IA en Murcia. Automatizamos y hacemos crecer tu negocio con tecnología a medida.",
  alternates: {
    canonical: 'https://www.sffalcon.com'
  }
}

export default function Page() {
  return <LandingPage />
}
