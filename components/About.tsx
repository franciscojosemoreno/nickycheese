'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { images } from '@/config/images'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 md:py-36 bg-cream-200">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Image with border accent */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src={images.about}
              alt="Interior Nicky Cheese"
              className="w-full h-[480px] object-cover"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-burgundy-900 -z-10 pointer-events-none" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="section-label">Nuestra Historia</span>
            <h2 className="section-title mb-8">
              I know<br />a spot.
            </h2>

            <div className="space-y-4 text-[#3D2020] font-sans text-base leading-relaxed">
              <p>
                Nicky Cheese nació con una idea simple: traer a Buenos Aires la experiencia
                del American Bistró. Un espacio cálido donde el café de especialidad,
                los pancakes y el mejor cheesecake de la ciudad comparten protagonismo
                con un ambiente que te hace querer quedarte.
              </p>
              <p>
                Dos locales, un solo espíritu. El spot que ibas a encontrar tarde o temprano.
              </p>
            </div>

            {/* Brunch highlight */}
            <div className="mt-10 pt-8 border-t border-cream-400">
              <span className="section-label">Especial de fin de semana</span>
              <p className="font-display text-3xl text-burgundy-900 mb-1">
                Nicky's Brunch
              </p>
              <p className="font-sans text-sm text-[#5D3030]">
                Sábados, domingos y feriados · 10 a 14 hs
              </p>
              <p className="font-sans text-xs text-[#7A4040] mt-1 italic">
                1 Breakfast + 1 Pancake + 1 Bowl + 1 Torta + 2 Cafés + 2 Jugos
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
