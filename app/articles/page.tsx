import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Thoughts on design, development, building products, and life as a software engineer and founder — by Mostafijur Rahman (MR Sajib).',
  alternates: {
    canonical: 'https://mrsajib.com/articles',
  },
  openGraph: {
    title: 'Articles | MR Sajib',
    description:
      'Thoughts on design, development, building products, and life as a software engineer and founder.',
    url: 'https://mrsajib.com/articles',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles | MR Sajib',
    description:
      'Thoughts on design, development, building products, and life as a software engineer and founder.',
  },
}

export default function ArticlesPage() {
  const articles = getAllArticles()
  const [featured, ...rest] = articles

  return (
    <>
      <Navbar />
      <main className="pt-28 sm:pt-36 pb-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-14 sm:mb-20">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <svg
                className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back home
            </Link>

            <p className="section-label mb-3">
              <span className="w-4 h-px bg-muted-foreground/60 inline-block" />
              Writing
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-4">
              All Articles
            </h1>
            <p className="text-base sm:text-lg text-secondary max-w-xl leading-relaxed">
              Thoughts on design, development, building products, and life as a
              software engineer and founder.
            </p>
          </div>

          {/* Featured article (most recent) */}
          {featured && (
            <div className="mb-10">
              <Link href={`/articles/${featured.slug}`} className="block card-clean group p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="tag-green">Latest</span>
                  {featured.frontmatter.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                  <span className="text-xs text-muted-foreground">
                    {formatDate(featured.frontmatter.date)} · {featured.readingTime}
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground group-hover:opacity-70 transition-opacity leading-snug mb-3">
                  {featured.frontmatter.title}
                </h2>
                <p className="text-base text-secondary leading-relaxed mb-5 max-w-2xl">
                  {featured.frontmatter.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:gap-2.5 transition-all duration-200">
                  Read article →
                </span>
              </Link>
            </div>
          )}

          {/* Remaining articles */}
          <div className="divide-y divide-border">
            {rest.map((article) => (
              <article key={article.slug} className="group py-6 sm:py-7">
                <Link href={`/articles/${article.slug}`} className="block">
                  <div className="flex items-start justify-between gap-4 sm:gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                        {article.frontmatter.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                        <span className="text-xs text-muted-foreground">
                          {formatDate(article.frontmatter.date)} · {article.readingTime}
                        </span>
                      </div>
                      <h2 className="font-serif text-lg sm:text-xl font-bold text-foreground group-hover:opacity-70 transition-opacity leading-snug mb-1.5">
                        {article.frontmatter.title}
                      </h2>
                      <p className="text-sm text-secondary leading-relaxed line-clamp-2 hidden sm:block">
                        {article.frontmatter.description}
                      </p>
                    </div>
                    <div className="shrink-0 mt-1 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
