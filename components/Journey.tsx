'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const education = [
  {
    institution: 'European University of Bangladesh',
    degree: "Bachelor's Degree",
    field: 'Computer Science',
    year: '2025',
    icon: '🎓',
    current: false,
  },
  {
    institution: 'Thakurgaon Polytechnic Institute',
    degree: 'Diploma in Engineering',
    field: 'Technology',
    year: '2020',
    icon: '📐',
    current: false,
  },
  {
    institution: 'Isabpur High School',
    degree: 'SSC',
    field: 'Secondary School Certificate',
    year: '2016',
    icon: '📚',
    current: false,
  },
]

const jobs = [
  {
    company: 'Gigalogy',
    role: 'Software Engineer',
    period: '2026 — Present',
    href: 'https://gigalogy.com/',
    current: true,
    icon: '⚡',
  },
  {
    company: 'Vaid Tech Services',
    role: 'Software Engineer',
    period: '2020 — 2026',
    href: 'https://www.vaid.tech/',
    current: false,
    icon: '💼',
  },
]

export default function Journey() {
  return (
    <section className="section-wrapper">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <p className="section-label">
            <span className="w-4 h-px bg-muted-foreground/60 inline-block" />
            Background
          </p>
          <h2 className="section-title">Education &amp; Experience</h2>
          <p className="section-subtitle max-w-md">Where I studied and where I've worked.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0 }}
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
              Work Experience
            </h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-0">
                {jobs.map((job, i) => (
                  <motion.div
                    key={job.company}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative flex gap-5 pb-8 last:pb-0"
                  >
                    {/* Dot */}
                    <div className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center text-base shrink-0 border ${job.current ? 'bg-foreground border-foreground text-background' : 'bg-card border-border text-foreground'}`}>
                      {job.icon}
                    </div>

                    <div className="pt-1 flex-1">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <div>
                          <Link
                            href={job.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-serif text-lg font-bold text-foreground hover:opacity-70 transition-opacity"
                          >
                            {job.company}
                          </Link>
                          <p className="text-sm text-secondary mt-0.5">{job.role}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          {job.current && (
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Current
                            </span>
                          )}
                          <span className="text-xs text-muted-foreground">{job.period}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
              Education
            </h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-0">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative flex gap-5 pb-8 last:pb-0"
                  >
                    {/* Dot */}
                    <div className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center text-base shrink-0 bg-card border border-border text-foreground">
                      {edu.icon}
                    </div>

                    <div className="pt-1 flex-1">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <div>
                          <p className="font-serif text-lg font-bold text-foreground leading-snug">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-secondary mt-0.5">{edu.degree} — {edu.field}</p>
                        </div>
                        <span className="text-xs text-muted-foreground shrink-0">{edu.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
