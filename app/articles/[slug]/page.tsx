import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllArticles, getArticleBySlug } from '@/lib/articles'
import { formatDate } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  const { frontmatter } = article
  const canonical = `https://mrsajib.com/articles/${slug}`

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: { canonical },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: canonical,
      type: 'article',
      publishedTime: frontmatter.date,
      tags: frontmatter.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) notFound()

  const { frontmatter, content, readingTime } = article

  return (
    <>
      <Navbar />
      <main className="pt-28 sm:pt-36 pb-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">

          {/* Back link */}
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to all articles
          </Link>

          {/* Article header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {frontmatter.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-4">
              {frontmatter.title}
            </h1>
            <p className="text-base sm:text-lg text-secondary leading-relaxed mb-5">
              {frontmatter.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-5">
              <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
              <span>·</span>
              <span>{readingTime}</span>
            </div>
          </header>

          {/* MDX content */}
          <article className="prose prose-neutral max-w-none
            prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
            prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-secondary prose-p:leading-relaxed prose-p:text-base
            prose-a:text-foreground prose-a:underline prose-a:underline-offset-2 prose-a:font-medium hover:prose-a:opacity-70
            prose-strong:text-foreground prose-strong:font-semibold
            prose-code:text-foreground prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-[#1a1a1a] prose-pre:text-[#e5e5e5] prose-pre:rounded-xl prose-pre:border prose-pre:border-border/60
            prose-blockquote:border-l-4 prose-blockquote:border-border-strong prose-blockquote:text-secondary prose-blockquote:not-italic
            prose-ul:text-secondary prose-ol:text-secondary
            prose-li:leading-relaxed
            prose-hr:border-border
            prose-table:text-sm prose-th:text-foreground prose-th:font-semibold prose-td:text-secondary
            prose-img:rounded-xl prose-img:border prose-img:border-border">
            <MDXRemote source={content} />
          </article>

          {/* Footer note */}
          <div className="mt-14 pt-8 border-t border-border">
            <div className="bg-surface rounded-2xl p-6 sm:p-8">
              <p className="text-sm text-secondary leading-relaxed">
                This article was originally published on{' '}
                <Link href="https://mrsajib.com" className="text-foreground font-medium underline underline-offset-2 hover:opacity-70 transition-opacity">
                  mrsajib.com
                </Link>
                . If you found it helpful, you can also read it on{' '}
                <Link
                  href={frontmatter.devto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
                >
                  Dev.to →
                </Link>
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
