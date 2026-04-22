'use client'

import { motion } from 'framer-motion'

const items = [
  {
    emoji: '🚀',
    label: 'In Progress',
    title: 'Building Product',
    description: 'An API integration platform to simplify connecting webhooks and automate workflows without code.',
  },
  {
    emoji: '🧠',
    label: 'Learning',
    title: 'AI & Machine Learning',
    description: 'Deep diving into AI, machine learning, and advanced design systems to stay ahead of the curve.',
  },
  {
    emoji: '📹',
    label: 'Growing',
    title: 'YouTube Channel',
    description: 'Sharing design tutorials, coding tips, and honest insights about building products people love.',
  },
]

export default function NowSection() {
  return (
    <section className="section-wrapper bg-surface">
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
            Right now
          </p>
          <h2 className="section-title">What I'm Up To</h2>
          <p className="section-subtitle max-w-lg">A transparent look at what's keeping me busy these days.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="card-clean p-6 sm:p-7 group"
            >
              <div className="flex items-start justify-between mb-5 gap-3">
                <span className="text-2xl leading-none">{item.emoji}</span>
                <span className="tag-green shrink-0">{item.label}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
