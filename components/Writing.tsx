'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const articles = [
  {
    title: 'Securing Your Django Application: Best Practices for Preventing XSS, CSRF, and More',
    date: 'dev.to',
    readTime: '8 min',
    excerpt: 'A practical guide to hardening your Django app against common web vulnerabilities including XSS, CSRF, SQL injection, and more.',
    category: 'Security',
    featured: true,
    slug: 'https://dev.to/mostafij/securing-your-django-application-best-practices-for-preventing-xss-csrf-and-more-27me',
  },
  {
    title: 'Introduction to Cloud Computing: A Friendly Guide for Beginners',
    date: 'Medium',
    readTime: '6 min',
    excerpt: 'A beginner-friendly breakdown of cloud computing concepts, service models, and why the cloud has become the backbone of modern software.',
    category: 'Cloud',
    featured: false,
    slug: 'https://medium.com/@mostafijur.rahman299/introduction-to-cloud-computing-a-friendly-guide-for-beginners-bd37d9081ec0',
  },
  {
    title: 'A Comprehensive Guide to Top Programming Languages for Career Success',
    date: 'Medium',
    readTime: '10 min',
    excerpt: 'An in-depth look at the most in-demand programming languages and which ones you should learn to advance your software engineering career.',
    category: 'Career',
    featured: false,
    slug: 'https://medium.com/@mostafijur.rahman299/a-comprehensive-guide-to-top-programming-languages-for-career-success-982ac4e7c3ee',
  },
]

export default function Writing() {
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

        {/* Featured article */}
        {articles.filter(a => a.featured).map((article, i) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href={article.slug} target="_blank" rel="noopener noreferrer" className="block card-clean group p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="tag-green">Featured</span>
                <span className="tag">{article.category}</span>
                <span className="text-xs text-muted-foreground">{article.date} · {article.readTime} read</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground group-hover:opacity-70 transition-opacity leading-snug mb-3">
                {article.title}
              </h3>
              <p className="text-base text-secondary leading-relaxed mb-5 max-w-2xl">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:gap-2.5 transition-all duration-200">
                Read article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </motion.div>
        ))}

        {/* Article list */}
        <div className="divide-y divide-border">
          {articles.filter(a => !a.featured).map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group py-6 sm:py-7"
            >
              <Link href={article.slug} target="_blank" rel="noopener noreferrer" className="block">
                <div className="flex items-start justify-between gap-4 sm:gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <span className="tag">{article.category}</span>
                      <span className="text-xs text-muted-foreground">{article.date} · {article.readTime} read</span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground group-hover:opacity-70 transition-opacity leading-snug mb-1.5">
                      {article.title}
                    </h3>
                    <p className="text-sm text-secondary leading-relaxed line-clamp-2 hidden sm:block">
                      {article.excerpt}
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
