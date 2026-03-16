import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://sffalcon.com'),
  title: {
    default: 'SFFALCON | Agencia Digital Murcia',
    template: '%s | SFFALCON'
  },
  description: 'Agencia digital especializada en webs profesionales, apps y SaaS con IA para negocios locales españoles. Murcia, España.',
  keywords: [
    'agencia digital murcia',
    'diseño web murcia',
    'aplicaciones moviles murcia',
    'SaaS empresas locales',
    'inteligencia artificial negocios',
    'SFFALCON',
    'desarrollo web españa',
    'agencia digital españa',
    'webs profesionales murcia'
  ],
  authors: [{ 
    name: 'Marcos Antonio Falcón Hernández',
    url: 'https://sffalcon.com'
  }],
  creator: 'SFFALCON',
  publisher: 'SFFALCON',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://sffalcon.com',
    siteName: 'SFFALCON',
    title: 'SFFALCON | Agencia Digital Murcia',
    description: 'Transformamos negocios locales con tecnología digital. Webs, apps y SaaS con IA para empresas españolas.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SFFALCON Agencia Digital Murcia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SFFALCON | Agencia Digital Murcia',
    description: 'Webs, apps y SaaS con IA para negocios locales españoles.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://sffalcon.com'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body
        className="antialiased"
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SFFALCON",
              "url": "https://sffalcon.com",
              "logo": "https://sffalcon.com/icon.svg",
              "email": "admin@sffalcon.com",
              "telephone": "+34604989742",
              "founder": {
                "@type": "Person",
                "name": "Marcos Antonio Falcón Hernández"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle Párroco y Poeta Francisco Aroca 2",
                "addressLocality": "Murcia",
                "addressRegion": "Murcia",
                "addressCountry": "ES"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "España"
                },
                {
                  "@type": "City",
                  "name": "Miami"
                }
              ],
              "serviceType": [
                "Diseño web profesional",
                "Desarrollo de aplicaciones móviles",
                "Plataformas SaaS",
                "Inteligencia Artificial",
                "Automatización de negocios"
              ],
              "sameAs": [
                "https://sffalcon.com"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
