'use client'

import { motion } from 'framer-motion'

const opportunities = [
  {
    emoji: '💼',
    title: 'Freelance Work',
    description: 'Available for design and development projects. I love helping founders and teams build polished digital products.',
    cta: 'Start a project',
  },
  {
    emoji: '🤝',
    title: 'Collaboration',
    description: 'Interested in partnering on products, courses, or other creative ventures. Great ideas are better with great people.',
    cta: 'Let\'s collaborate',
  },
  {
    emoji: '🧠',
    title: 'Consulting',
    description: 'Need a technical co-pilot? I offer consulting for startups and teams on product strategy, architecture, and engineering best practices.',
    cta: 'Work with me',
  },
]

export default function OpenTo() {
  return (
    <section className="section-wrapper bg-surface">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="section-label justify-center">
            <span className="w-4 h-px bg-muted-foreground/60 inline-block" />
            How Can I Help You?
            <span className="w-4 h-px bg-muted-foreground/60 inline-block" />
          </p>
          <h2 className="section-title">I'm Open To</h2>
          <p className="section-subtitle max-w-lg mx-auto">Let's explore ways we can work together and create something great.</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {opportunities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="card-clean p-6 sm:p-8 flex flex-col text-center items-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-surface-2 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed mb-6 flex-1">
                {item.description}
              </p>
              <a
                href="#contact"
                className="btn-outline w-full justify-center"
              >
                {item.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
