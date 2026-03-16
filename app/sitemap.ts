import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sffalcon.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/servicios/webs-landing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/aplicaciones-moviles`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/saas-paneles`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/ia-integrada`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Sub-páginas de Webs & Landing
    { url: `${baseUrl}/servicios/webs-landing/restaurante`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/servicios/webs-landing/clinica-dental`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/servicios/webs-landing/academia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    
    // Sub-páginas de Apps Móviles
    { url: `${baseUrl}/servicios/aplicaciones-moviles/lumina-crm`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/servicios/aplicaciones-moviles/gourmet-order`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/servicios/aplicaciones-moviles/edu-academy-hub`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Sub-páginas de IA
    { url: `${baseUrl}/servicios/ia-integrada/atencion-cliente`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/servicios/ia-integrada/automatizacion`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/servicios/ia-integrada/asistente-negocio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

    // Sub-páginas de SaaS
    { url: `${baseUrl}/servicios/saas-paneles/reservas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/servicios/saas-paneles/operaciones`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/servicios/saas-paneles/clientes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

    // Páginas legales
    { url: `${baseUrl}/privacidad`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/terminos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]
}
