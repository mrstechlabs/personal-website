import { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/articles'

const BASE_URL = 'https://mrsajib.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles()

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/articles/${article.slug}`,
    lastModified: new Date(article.frontmatter.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

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
    ...articleEntries,
  ]
}
