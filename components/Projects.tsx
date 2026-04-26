 'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: 'ToolEra',
    description:
      'A free online tool collection with 60+ utilities for developers, designers, and professionals. Includes password generators, image tools, code formatters, calculators, and more.',
    tech: ['Next.js', 'TypeScript', 'SEO', 'Tools'],
    status: 'Active',
    link: 'https://thetoolera.com',
    featured: true,
  },
  {
    title: 'wapiflow',
    description:
      'A modern API integration platform that simplifies webhook management and workflow automation. Built with Next.js, TypeScript, and real-time database sync.',
    tech: ['Next.js', 'TypeScript', 'Webhooks', 'Database'],
    status: 'Active',
    link: null,
    featured: true,
  },
  {
    title: 'TutorAsia',
    description:
      'An online tutoring platform connecting students with expert tutors. Features video sessions, progress tracking, and interactive learning tools.',
    tech: ['React', 'Node.js', 'Video API', 'Analytics'],
    status: 'Active',
    link: null,
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
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper">
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
              Work
            </p>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle max-w-md">Things I've built and shipped to the world.</p>
          </div>
          <Link href="/products" className="link-arrow shrink-0 self-start sm:self-end">
            All projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Featured row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="card-clean group p-6 sm:p-8 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4 gap-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground group-hover:opacity-70 transition-opacity leading-snug">
                    {project.title}
                  </h3>
                  <span className="tag-green shrink-0 mt-1">{project.status}</span>
                </div>
                <p className="text-sm sm:text-base text-secondary leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  project.link.startsWith('http') ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-secondary transition-all duration-200 group-hover:gap-2.5 mt-auto"
                    >
                      {(project as any).linkLabel || 'View Project'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-secondary transition-all duration-200 group-hover:gap-2.5 mt-auto"
                    >
                      {(project as any).linkLabel || 'View Project'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  )
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground mt-auto cursor-default">
                    Coming Soon
                  </span>
                )}
              </motion.div>
            ))}
        </div>

        {/* Smaller row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.07 + 0.14 }}
                className="card-clean group p-5 sm:p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3 gap-3">
                  <h3 className="font-serif text-lg font-bold text-foreground group-hover:opacity-70 transition-opacity">
                    {project.title}
                  </h3>
                  <span className="tag shrink-0 mt-0.5">{project.status}</span>
                </div>
                <p className="text-sm text-secondary leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  project.link.startsWith('http') ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-secondary transition-all duration-200 group-hover:gap-2.5 mt-auto"
                    >
                      {(project as any).linkLabel || 'View Project'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-secondary transition-all duration-200 group-hover:gap-2.5 mt-auto"
                    >
                      {(project as any).linkLabel || 'View Project'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  )
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground mt-auto cursor-default">
                    Coming Soon
                  </span>
                )}
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
