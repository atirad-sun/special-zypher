import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://oneeightx.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Block specific paths if needed (optional)
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}