import { Metadata } from 'next'
import LandingPage from './page-client'

export const metadata: Metadata = {
  title: 'SFFALCON | Agencia Digital Murcia',
  description: 'Agencia digital en Murcia especializada en webs profesionales, apps móviles y SaaS con IA para negocios locales españoles.',
  alternates: {
    canonical: 'https://sffalcon.com'
  }
}

export default function Page() {
  return <LandingPage />
}
