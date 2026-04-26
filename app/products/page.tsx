'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// ── Products I built & own ──────────────────────────────────────────────────

const myProducts = [
  {
    title: 'ToolEra',
    description:
      'A free online tool collection with 60+ utilities for developers, designers, and professionals. Includes password generators, image tools, code formatters, calculators, and more.',
    tech: ['Next.js', 'TypeScript', 'SEO', 'Tools'],
    status: 'Active',
    link: 'https://thetoolera.com',
    linkLabel: 'Visit ToolEra',
    year: '2024',
    featured: true,
  },
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
    tech: ['React Native', 'System APIs', 'Analytics', 'Android'],
    status: 'Complete',
    link: 'https://play.google.com/store/apps/details?id=com.mrstech.batterycaremonitor',
    linkLabel: 'View on Play Store',
    year: '2023',
    featured: false,
  },
  {
    title: 'Daily Motivation Quotes',
    description:
      'An elegant app delivering daily motivational quotes with sharing, favorites, and personalized themes.',
    tech: ['React Native', 'APIs', 'Local Storage', 'Android'],
    status: 'Complete',
    link: 'https://play.google.com/store/apps/details?id=com.mrstech.MotivationQuotes',
    linkLabel: 'View on Play Store',
    year: '2022',
    featured: false,
  },
  {
    title: 'TodoX',
    description:
      'A clean and intuitive task management app for Android, helping users stay organized and productive with a minimal, distraction-free interface.',
    tech: ['React Native', 'Local Storage', 'Android'],
    status: 'Complete',
    link: 'https://play.google.com/store/apps/details?id=com.mahmudsajib01.TodoX',
    linkLabel: 'View on Play Store',
    year: '2022',
    featured: false,
  },
]

// ── Projects I worked on ────────────────────────────────────────────────────

const clientProjects = [
  {
    title: 'Crinf.net',
    description:
      'A content and information platform delivering structured data and resources to its users. Contributed to backend architecture, API development, and performance optimisation.',
    tech: ['Node.js', 'REST API', 'PostgreSQL', 'Backend'],
    role: 'Backend Engineer',
    status: 'Active',
    link: 'https://crinf.net/',
    linkLabel: 'Visit site',
    year: '2023',
  },
  {
    title: 'WuSeller',
    description:
      'A multi-vendor e-commerce platform enabling sellers to manage listings, orders, and payments. Built scalable backend services and integrated third-party payment gateways.',
    tech: ['React', 'Node.js', 'E-commerce', 'Payments'],
    role: 'Full Stack Engineer',
    status: 'Active',
    link: 'https://www.wuseller.com/',
    linkLabel: 'Visit site',
    year: '2023',
  },
  {
    title: 'Telemedicine Platform',
    description:
      'A healthcare platform connecting patients with doctors for remote consultations. Developed real-time video call integration, appointment scheduling, and prescription management.',
    tech: ['React', 'WebRTC', 'Node.js', 'Healthcare'],
    role: 'Full Stack Engineer',
    status: 'Complete',
    link: '#',
    year: '2022',
  },
  {
    title: 'Resource Aggregation',
    description:
      'A platform that aggregates resources from multiple sources, normalises the data, and presents it through a unified API and dashboard for downstream consumers.',
    tech: ['Node.js', 'Data Pipeline', 'REST API', 'Dashboard'],
    role: 'Backend Engineer',
    status: 'Complete',
    link: '#',
    year: '2022',
  },
  {
    title: 'Electricity Management System',
    description:
      'A utility management system for tracking electricity consumption, billing, and reporting across multiple zones. Included real-time monitoring and automated alert features.',
    tech: ['React', 'Node.js', 'IoT', 'Analytics'],
    role: 'Full Stack Engineer',
    status: 'Complete',
    link: '#',
    year: '2022',
  },
  {
    title: 'WhatsApp Marketing Platform',
    description:
      'A bulk messaging and campaign management tool built on the WhatsApp Business API. Supports contact segmentation, scheduled broadcasts, and delivery analytics.',
    tech: ['Node.js', 'WhatsApp API', 'Queue', 'Analytics'],
    role: 'Backend Engineer',
    status: 'Complete',
    link: '#',
    year: '2023',
  },
]

// ── Shared helpers ──────────────────────────────────────────────────────────

const statusColor: Record<string, string> = {
  Active: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  Complete: 'bg-surface text-muted-foreground border border-border',
  'In Progress': 'bg-amber-50 text-amber-700 border border-amber-200',
}

type Product = typeof myProducts[number]
type ClientProject = typeof clientProjects[number]

function ProductCard({ product, delay }: { product: Product; delay: number }) {
  const inner = (
    <>
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
        {product.tech.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs text-muted-foreground">{product.year}</span>
        {product.link !== '#' && (
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:gap-2.5 transition-all duration-200">
            {(product as any).linkLabel || 'View Product'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        )}
      </div>
    </>
  )

  const className = 'card-clean group p-6 sm:p-8 flex flex-col h-full'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay }}
      className="flex flex-col"
    >
      {product.link !== '#' ? (
        <a href={product.link} target="_blank" rel="noopener noreferrer" className={className}>{inner}</a>
      ) : (
        <div className={className}>{inner}</div>
      )}
    </motion.div>
  )
}

function ProductRow({ product, delay }: { product: Product; delay: number }) {
  const inner = (
    <div className="flex items-start justify-between gap-4 sm:gap-6">
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
          {product.tech.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
      <div className="shrink-0 mt-1 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group py-6 sm:py-7"
    >
      {product.link !== '#' ? (
        <a href={product.link} target="_blank" rel="noopener noreferrer" className="block">{inner}</a>
      ) : (
        <div>{inner}</div>
      )}
    </motion.div>
  )
}

function ClientProjectRow({ project, delay }: { project: ClientProject; delay: number }) {
  const inner = (
    <div className="flex items-start justify-between gap-4 sm:gap-6">
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusColor[project.status]}`}>
            {project.status}
          </span>
          <span className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            {project.role}
          </span>
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>
        <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground group-hover:opacity-70 transition-opacity leading-snug mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-secondary leading-relaxed line-clamp-2 hidden sm:block">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tech.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
      {project.link !== '#' && (
        <div className="shrink-0 mt-1 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      )}
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group py-6 sm:py-7"
    >
      {project.link !== '#' ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">{inner}</a>
      ) : (
        <div>{inner}</div>
      )}
    </motion.div>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  const featuredOwn = myProducts.filter((p) => p.featured)
  const restOwn = myProducts.filter((p) => !p.featured)

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
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              Products I own and ship under{' '}
              <span className="font-semibold text-foreground">MRS TECH LABS</span>,
              and professional projects I&apos;ve contributed to over the years.
            </p>
          </motion.div>

          {/* ── Section 1: My Products ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              My Products
            </h2>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          {/* Featured grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
            {featuredOwn.map((product, i) => (
              <ProductCard key={product.title} product={product} delay={0.15 + i * 0.07} />
            ))}
          </div>

          {/* Rest as list */}
          <div className="divide-y divide-border mb-16">
            {restOwn.map((product, i) => (
              <ProductRow key={product.title} product={product} delay={0.35 + i * 0.07} />
            ))}
          </div>

          {/* ── Section 2: Projects I Worked On ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Projects I Worked On
            </h2>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          <div className="divide-y divide-border">
            {clientProjects.map((project, i) => (
              <ClientProjectRow key={project.title} project={project} delay={0.55 + i * 0.07} />
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
