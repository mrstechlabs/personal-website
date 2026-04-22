'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const products = [
  {
    title: 'wapiflow',
    description:
      'A modern API integration platform that simplifies webhook management and workflow automation. Built with Next.js, TypeScript, and real-time database sync.',
    tech: ['Next.js', 'TypeScript', 'Webhooks', 'Database'],
    status: 'Active',
    link: '#',
    year: '2024',
    featured: true,
  },
  {
    title: 'TutorAsia',
    description:
      'An online tutoring platform connecting students with expert tutors. Features video sessions, progress tracking, and interactive learning tools.',
    tech: ['React', 'Node.js', 'Video API', 'Analytics'],
    status: 'Active',
    link: '#',
    year: '2023',
    featured: true,
  },
  {
    title: 'Battery Health Checker',
    description:
      'A utility tool that analyzes device battery health and gives recommendations for optimal performance.',
    tech: ['React Native', 'System APIs', 'Analytics'],
    status: 'Complete',
    link: '#',
    year: '2023',
    featured: false,
  },
  {
    title: 'Daily Motivation Quotes',
    description:
      'An elegant app delivering daily motivational quotes with sharing, favorites, and personalized themes.',
    tech: ['React Native', 'APIs', 'Local Storage'],
    status: 'Complete',
    link: '#',
    year: '2022',
    featured: false,
  },
]

const statusColor: Record<string, string> = {
  Active: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  Complete: 'bg-surface text-muted-foreground border border-border',
  'In Progress': 'bg-amber-50 text-amber-700 border border-amber-200',
}

export default function ProductsPage() {
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
              Products
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-4">
              Things I&apos;ve Built
            </h1>
            <p className="text-base sm:text-lg text-secondary max-w-xl leading-relaxed">
              A collection of products I&apos;ve designed and shipped — from SaaS
              platforms to mobile utilities, all built under{' '}
              <span className="font-semibold text-foreground">MRS TECH LABS</span>.
            </p>
          </motion.div>

          {/* Featured products */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5"
          >
            Featured
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {products
              .filter((p) => p.featured)
              .map((product, i) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15 + i * 0.07 }}
                  className="card-clean group p-6 sm:p-8 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4 gap-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground group-hover:opacity-70 transition-opacity leading-snug">
                      {product.title}
                    </h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 mt-1 ${statusColor[product.status]}`}>
                      {product.status}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-secondary leading-relaxed mb-5 flex-1">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {product.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-muted-foreground">{product.year}</span>
                    <Link
                      href={product.link}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-secondary transition-all duration-200 group-hover:gap-2.5"
                    >
                      View Product
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* All products */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5"
          >
            All Products
          </motion.h2>
          <div className="divide-y divide-border">
            {products
              .filter((p) => !p.featured)
              .map((product, i) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
                  className="group py-6 sm:py-7"
                >
                  <Link href={product.link} className="flex items-start justify-between gap-4 sm:gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusColor[product.status]}`}>
                          {product.status}
                        </span>
                        <span className="text-xs text-muted-foreground">{product.year}</span>
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground group-hover:opacity-70 transition-opacity leading-snug mb-2">
                        {product.title}
                      </h3>
                      <p className="text-sm text-secondary leading-relaxed line-clamp-2 hidden sm:block">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {product.tech.map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0 mt-1 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
