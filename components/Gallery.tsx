'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { images as siteImages } from '@/config/images'

const galleryImages = siteImages.gallery.map((src, i) => ({
  src,
  alt: ['Pancakes', 'Interior', 'Cheesecake', 'Café', 'Smoothie Bowl', 'Club Sándwich'][i] ?? `Foto ${i + 1}`,
}))

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 md:py-36 bg-burgundy-900">
      <div className="container-custom">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-cream-400 mb-4 block">
            Galería
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-100">
            Say Cheese.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="aspect-square overflow-hidden group"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://www.instagram.com/nickycheese.ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Seguinos en Instagram
          </a>
        </motion.div>

      </div>
    </section>
  )
}
