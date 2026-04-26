'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const channels = [
  {
    name: 'MR SAJIB ',
    description: 'Tech talks, tutorials, and in-depth discussions about software engineering, programming, and the ever-evolving world of technology.',
    subscribers: 'Growing',
    videos: '10+',
    link: 'https://www.youtube.com/@mrsajiboffrecord',
    accentColor: 'bg-red-50 border-red-100',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    tag: 'Tech & Education',
  },
  {
    name: 'MR SAJIB Off Record',
    description: 'A peek behind the scenes — life as a founder, travel, personal stories, and the everyday moments that make up the journey.',
    subscribers: 'Growing',
    videos: '10+',
    link: 'https://www.youtube.com/@mrsajibmahmud',
    accentColor: 'bg-amber-50 border-amber-100',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    tag: 'Vlog',
  },
]

const YouTubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

export default function YouTube() {
  return (
    <section id="youtube" className="section-wrapper">
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
            Video
          </p>
          <h2 className="section-title">On YouTube</h2>
          <p className="section-subtitle max-w-md">I run two YouTube channels — one for tech and one for life. Come hang out.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {channels.map((channel, i) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card-clean group p-6 sm:p-8 flex flex-col"
            >
              {/* Icon + tag */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${channel.iconBg} ${channel.iconColor}`}>
                  <YouTubeIcon />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface border border-border text-muted-foreground">
                  {channel.tag}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-3 leading-snug">
                {channel.name}
              </h3>

              <p className="text-sm sm:text-base text-secondary leading-relaxed mb-6 flex-1">
                {channel.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 py-5 border-y border-border mb-6">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-foreground">{channel.subscribers}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Subscribers</div>
                </div>
                <div className="w-px h-8 bg-border" />
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-foreground">{channel.videos}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Videos</div>
                </div>
              </div>

              <Link
                href={channel.link}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-secondary transition-all duration-200 group-hover:gap-2.5"
                target="_blank"
              >
                Visit Channel
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 p-6 sm:p-8 rounded-2xl bg-foreground text-background flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        >
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1">Never miss a video</h3>
            <p className="text-sm text-background/70">Subscribe to both channels and never miss a video.</p>
          </div>
          <Link
            href="https://www.youtube.com/@mrsajiboffrecord"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-background text-foreground font-semibold rounded-full text-sm w-full sm:w-auto shrink-0 hover:bg-surface transition-colors"
          >
            <YouTubeIcon />
            Subscribe on YouTube
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
