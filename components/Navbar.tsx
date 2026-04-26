'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem('banner-dismissed')
    if (!dismissed) setBannerVisible(true)
  }, [])

  const dismissBanner = () => {
    localStorage.setItem('banner-dismissed', '1')
    setBannerVisible(false)
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Writing', href: '#writing' },
    { label: 'YouTube', href: '#youtube' },
  ]

  return (
    <>
      {/* Newsletter announcement bar */}
      <AnimatePresence>
        {bannerVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-0 right-0 z-50 bg-foreground text-background overflow-hidden"
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-8 py-2.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xs sm:text-sm font-medium text-background/90 truncate">
                  ✉️ Get my newsletter — tips on building, tech, and the founder life.
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="https://substack.com/@mostafijur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold bg-background text-foreground px-3 py-1 rounded-full hover:bg-background/90 transition-colors whitespace-nowrap"
                >
                  Subscribe free
                </a>
                <button
                  onClick={dismissBanner}
                  aria-label="Dismiss"
                  className="text-background/60 hover:text-background transition-colors p-0.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          bannerVisible ? 'top-10' : 'top-0'
        } ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-xs'
            : 'bg-transparent'
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="font-serif text-xl font-bold text-foreground hover:opacity-70 transition-opacity duration-200"
            >
              MR
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-secondary hover:text-foreground px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-surface"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex btn-primary py-2 px-5 text-xs"
              >
                Get in Touch
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-secondary hover:text-foreground transition-colors rounded-lg hover:bg-surface"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-3.5 flex flex-col justify-between">
                  <span
                    className={`block h-0.5 bg-current origin-center transition-all duration-300 ${
                      mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-current transition-all duration-300 ${
                      mobileOpen ? 'opacity-0 scale-x-0' : ''
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-current origin-center transition-all duration-300 ${
                      mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={`fixed left-0 right-0 z-40 bg-background/98 backdrop-blur-xl border-b border-border md:hidden overflow-hidden ${
              bannerVisible ? 'top-[6.5rem]' : 'top-16'
            }`}
          >
            <div className="max-w-5xl mx-auto px-4 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 hover:bg-surface"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-3 justify-center"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
