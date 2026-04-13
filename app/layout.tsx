import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sffalcon.com'),
  title: "SFFALCON | Desarrollo Web, Apps e IA para Empresas en Murcia y España",
  description: "Soluciones digitales a medida en Murcia: webs de alto rendimiento, apps móviles, SaaS y agentes de IA que automatizan tu negocio 24/7. Presupuesto gratis sin compromiso.",
  keywords: [
    "desarrollo web Murcia", 
    "aplicaciones móviles España",
    "automatización con IA empresas",
    "agencia digital Murcia",
    "software a medida España",
    "SaaS personalizado",
    "SFFALCON"
  ],
  authors: [{ 
    name: 'Marcos Antonio Falcón Hernández',
    url: 'https://www.sffalcon.com'
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
    url: 'https://www.sffalcon.com',
    siteName: 'SFFALCON',
    title: "SFFALCON | Desarrollo Web, Apps e IA para Empresas en Murcia y España",
    description: "Soluciones digitales a medida en Murcia: webs de alto rendimiento, apps móviles, SaaS y agentes de IA que automatizan tu negocio 24/7.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SFFALCON | Desarrollo Web, Apps e IA'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "SFFALCON | Desarrollo Web, Apps e IA para Empresas en Murcia y España",
    description: "Soluciones digitales a medida en Murcia: webs de alto rendimiento, apps móviles, SaaS y agentes de IA.",
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.sffalcon.com'
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
              "@type": "LocalBusiness",
              "name": "SFFALCON",
              "description": "Desarrollo web, apps e IA para empresas en Murcia y España",
              "url": "https://www.sffalcon.com",
              "telephone": "+34651398878",
              "email": "admin@sffalcon.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle Párroco y Poeta Francisco Aroca 2",
                "addressLocality": "Murcia",
                "addressRegion": "Región de Murcia",
                "postalCode": "30007",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 37.9838,
                "longitude": -1.1284
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "€€",
              "areaServed": "España"
            })
          }}
        />
      </body>
    </html>
  );
}
