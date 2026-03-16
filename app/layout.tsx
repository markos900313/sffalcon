import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sffalcon.com'),
  title: {
    default: 'SFFALCON | Agencia Digital Murcia',
    template: '%s | SFFALCON'
  },
  description: 'Agencia digital especializada en webs, apps y SaaS con IA para negocios locales españoles. Murcia.',
  keywords: [
    'agencia digital murcia',
    'diseño web murcia',
    'aplicaciones móviles murcia',
    'SaaS empresas locales',
    'inteligencia artificial negocios',
    'SFFALCON',
    'desarrollo web españa'
  ],
  authors: [{ 
    name: 'Marcos Antonio Falcón Hernández' 
  }],
  creator: 'SFFALCON',
  publisher: 'SFFALCON',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.sffalcon.com',
    siteName: 'SFFALCON',
    title: 'SFFALCON | Agencia Digital Murcia',
    description: 'Transformamos negocios locales con tecnología digital. Webs, apps y SaaS con IA para empresas españolas.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SFFALCON Agencia Digital'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SFFALCON | Agencia Digital Murcia',
    description: 'Webs, apps y SaaS con IA para negocios locales españoles.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'PENDIENTE',
  },
  alternates: {
    canonical: 'https://www.sffalcon.com'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SFFALCON",
              "url": "https://www.sffalcon.com",
              "logo": "https://www.sffalcon.com/icon.svg",
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
                "addressCountry": "ES"
              },
              "areaServed": {
                "@type": "Country",
                "name": "España"
              },
              "serviceType": [
                "Diseño web",
                "Desarrollo de aplicaciones móviles",
                "SaaS",
                "Inteligencia Artificial"
              ],
              "sameAs": [
                "https://www.sffalcon.com"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
