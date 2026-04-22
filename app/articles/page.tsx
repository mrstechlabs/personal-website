'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const articles = [
  {
    title: 'Securing Your Django Application: Best Practices for Preventing XSS, CSRF, and More',
    date: 'dev.to',
    readTime: '8 min',
    excerpt:
      'A practical guide to hardening your Django app against common web vulnerabilities including XSS, CSRF, SQL injection, and more.',
    category: 'Security',
    featured: true,
    slug: 'https://dev.to/mostafij/securing-your-django-application-best-practices-for-preventing-xss-csrf-and-more-27me',
  },
  {
    title: 'Introduction to Cloud Computing: A Friendly Guide for Beginners',
    date: 'Medium',
    readTime: '6 min',
    excerpt:
      'A beginner-friendly breakdown of cloud computing concepts, service models, and why the cloud has become the backbone of modern software.',
    category: 'Cloud',
    featured: false,
    slug: 'https://medium.com/@mostafijur.rahman299/introduction-to-cloud-computing-a-friendly-guide-for-beginners-bd37d9081ec0',
  },
  {
    title: 'A Comprehensive Guide to Top Programming Languages for Career Success',
    date: 'Medium',
    readTime: '10 min',
    excerpt:
      'An in-depth look at the most in-demand programming languages and which ones you should learn to advance your software engineering career.',
    category: 'Career',
    featured: false,
    slug: 'https://medium.com/@mostafijur.rahman299/a-comprehensive-guide-to-top-programming-languages-for-career-success-982ac4e7c3ee',
  },
]

const categoryColor: Record<string, string> = {
  Design: 'bg-violet-50 text-violet-700 border border-violet-200',
  Development: 'bg-blue-50 text-blue-700 border border-blue-200',
  Personal: 'bg-amber-50 text-amber-700 border border-amber-200',
  Founder: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  Security: 'bg-red-50 text-red-700 border border-red-200',
  Cloud: 'bg-sky-50 text-sky-700 border border-sky-200',
  Career: 'bg-purple-50 text-purple-700 border border-purple-200',
}

const defaultCategory = 'bg-surface text-muted-foreground border border-border'

export default function ArticlesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 sm:pt-36 pb-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14 sm:mb-20"
          >
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
          </motion.div>

          {/* Featured article */}
          {articles
            .filter((a) => a.featured)
            .map((article) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-10"
              >
                <Link href={article.slug} className="block card-clean group p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="tag-green">Featured</span>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColor[article.category] ?? defaultCategory}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {article.date} · {article.readTime} read
                    </span>
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

          {/* All articles list */}
          <div className="divide-y divide-border">
            {articles
              .filter((a) => !a.featured)
              .map((article, i) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                  className="group py-6 sm:py-7"
                >
                  <Link href={article.slug} className="block">
                    <div className="flex items-start justify-between gap-4 sm:gap-6">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColor[article.category] ?? defaultCategory}`}>
                            {article.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {article.date} · {article.readTime} read
                          </span>
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
      </main>
      <Footer />
    </>
  )
}
