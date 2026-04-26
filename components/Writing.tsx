'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import type { ArticleMeta } from '@/lib/articles'

interface Props {
  articles: ArticleMeta[]
}

export default function Writing({ articles }: Props) {
  return (
    <section id="writing" className="section-wrapper bg-surface">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 lg:mb-16 gap-4"
        >
          <div>
            <p className="section-label">
              <span className="w-4 h-px bg-muted-foreground/60 inline-block" />
              Writing
            </p>
            <h2 className="section-title">Latest Articles</h2>
            <p className="section-subtitle max-w-md">Thoughts on design, development, and building products.</p>
          </div>
          <Link href="/articles" className="link-arrow shrink-0 self-start sm:self-end">
            All articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Featured article (most recent) */}
        {articles.slice(0, 1).map((article) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href={`/articles/${article.slug}`} className="block card-clean group p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="tag-green">Latest</span>
                {article.frontmatter.tags.slice(0, 1).map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
                <span className="text-xs text-muted-foreground">
                  {formatDate(article.frontmatter.date)} · {article.readingTime}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground group-hover:opacity-70 transition-opacity leading-snug mb-3">
                {article.frontmatter.title}
              </h3>
              <p className="text-base text-secondary leading-relaxed mb-5 max-w-2xl">
                {article.frontmatter.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:gap-2.5 transition-all duration-200">
                Read article →
              </span>
            </Link>
          </motion.div>
        ))}

        {/* Article list */}
        <div className="divide-y divide-border">
          {articles.slice(1).map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group py-6 sm:py-7"
            >
              <Link href={`/articles/${article.slug}`} className="block">
                <div className="flex items-start justify-between gap-4 sm:gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      {article.frontmatter.tags.slice(0, 1).map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                      <span className="text-xs text-muted-foreground">
                        {formatDate(article.frontmatter.date)} · {article.readingTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground group-hover:opacity-70 transition-opacity leading-snug mb-1.5">
                      {article.frontmatter.title}
                    </h3>
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
