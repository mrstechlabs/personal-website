import { MetadataRoute } from 'next'

const BASE_URL = 'https://mrsajib.me'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date('2026-04-25'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/articles`,
      lastModified: new Date('2026-04-25'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date('2026-04-25'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
