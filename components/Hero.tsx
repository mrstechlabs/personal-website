'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import profile from '../public/profile.png'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay },
})

const stats = [
  { value: 'New', label: 'YouTube Channel' },
  { value: '4+', label: 'Videos Published' },
  { value: '4', label: 'Active Projects' },
  { value: '3+', label: 'Years Building' },
]

const socials = [
  {
    label: 'Twitter / X',
    href: 'https://x.com/mostafijsajib',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.851L1.254 2.25H8.08l4.26 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mostafijsajib/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mostafijsajib',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section
      id="about"
      className="pt-36 sm:pt-44 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12"
    >
      <div className="max-w-5xl mx-auto">

        {/* Top grid: text + photo */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">

          {/* Left — Content */}
          <div className="space-y-6 max-w-2xl">
            {/* Greeting */}
            <motion.p
              {...fade(0)}
              className="text-lg sm:text-xl text-muted-foreground font-medium"
            >
              Hey Friends, I'm MR SAJIB
            </motion.p>

            {/* Headline */}
            <motion.h1
              {...fade(0.08)}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] tracking-tight"
            >
              Software Engineer&nbsp;&amp;&nbsp;
              <span className="text-muted-foreground">Founder.</span>
            </motion.h1>

            {/* Bio */}
            <motion.p
              {...fade(0.16)}
              className="text-base sm:text-lg text-secondary leading-relaxed max-w-xl"
            >
              I&apos;m Mostafijur Rahman Sajib — a software engineer and the founder of{' '}
              <span className="font-semibold text-foreground">MRS TECH LABS</span>.
              I build APIs and scalable digital products, share what I learn through writing and
              videos, and explore the cutting edge of AI.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fade(0.24)} className="flex flex-wrap gap-3 pt-1">
              <a href="#projects" className="btn-primary">
                View my work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#writing" className="btn-ghost">
                Read writing
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              {...fade(0.32)}
              className="flex items-center gap-4 pt-1"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-surface"
                >
                  {s.icon}
                </a>
              ))}
              <span className="w-px h-5 bg-border-strong" />
              <a
                href="mailto:hello.mostafij@gmail.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                hello.mostafij@gmail.com

              </a>
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center md:justify-end mt-4 md:mt-0"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-3xl border-2 border-border translate-x-3 translate-y-3 -z-10" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden bg-surface border border-border shadow-md">
                <Image src={profile} alt="Mostafijur Rahman (MR Sajib) — Software Engineer, Bangladesh" width={288} height={288} />
              </div>
              
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 sm:mt-24 pt-10 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-foreground">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

