import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
export { formatDate } from './utils'

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles')

export interface ArticleFrontmatter {
  title: string
  description: string
  date: string
  tags: string[]
  canonical: string
  devto: string
  published: boolean
}

export interface Article {
  slug: string
  frontmatter: ArticleFrontmatter
  readingTime: string
  content: string
}

export interface ArticleMeta {
  slug: string
  frontmatter: ArticleFrontmatter
  readingTime: string
}

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.mdx'))

  const articles = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const filePath = path.join(ARTICLES_DIR, filename)
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)
      const frontmatter = data as ArticleFrontmatter

      if (!frontmatter.published) return null

      return {
        slug,
        frontmatter,
        readingTime: readingTime(content).text,
      }
    })
    .filter((a): a is ArticleMeta => a !== null)

  return articles.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  )
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const frontmatter = data as ArticleFrontmatter

  if (!frontmatter.published) return null

  return {
    slug,
    frontmatter,
    readingTime: readingTime(content).text,
    content,
  }
}


