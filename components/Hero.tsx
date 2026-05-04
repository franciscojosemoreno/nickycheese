'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1920&q=85)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy-950/75 via-burgundy-950/65 to-burgundy-950/85" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Oval logo badge */}
          <div className="border-2 border-cream-200/60 rounded-full px-10 py-2 mb-8">
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-cream-300">
              Buenos Aires
            </span>
          </div>

          {/* Brand name */}
          <h1 className="font-display text-[4.5rem] sm:text-8xl md:text-9xl text-cream-100 leading-none mb-4">
            Nicky Cheese
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-5 my-5">
            <div className="w-12 h-px bg-cream-300/60" />
            <span className="font-serif italic text-cream-300 text-base md:text-lg">
              American Bistró
            </span>
            <div className="w-12 h-px bg-cream-300/60" />
          </div>

          {/* CTA */}
          <motion.a
            href="#menu"
            className="btn-primary mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Ver Menú
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
      >
        <div className="w-5 h-8 border border-cream-300/50 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-cream-300/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
