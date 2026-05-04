'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FileText } from 'lucide-react'
import { menuData } from '@/data/menu'
import { images } from '@/config/images'

const BAKEHOUSE_CATEGORIES = [
  'American Classics', 'Pastries', 'Bagels', 'Pretzels',
  'Donuts', 'Savory', 'Loaded Bagels', 'Café & Bebidas',
]

const CENTRAL_CATEGORIES = [
  'Breakfast', 'Pancakes', 'Sandwiches', 'Bowls',
  'Cookies', 'Cheesecakes', 'Speciality Coffee', 'Signature Lattes', 'Bebidas',
]

export default function Menu() {
  const [activeLoc, setActiveLoc] = useState('central')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="menu" ref={ref} className="py-24 md:py-36 bg-cream-100">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Nuestra Carta</span>
          <h2 className="section-title">Menú</h2>
        </motion.div>

        {/* Location tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex border-2 border-burgundy-900">
            {menuData.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveLoc(loc.id)}
                className={`px-5 md:px-8 py-3 font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all ${
                  activeLoc === loc.id
                    ? 'bg-burgundy-900 text-cream-200'
                    : 'text-burgundy-900 hover:bg-burgundy-900/10'
                }`}
              >
                {loc.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── BAKEHOUSE: PDF view ── */}
        {activeLoc === 'bakehouse' && (
          <AnimatePresence mode="wait">
            <motion.div
              key="bakehouse-pdf"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto text-center"
            >
              {/* Decorative border box */}
              <div className="border-2 border-burgundy-900 p-10 md:p-14 bg-white">
                <span className="section-label justify-center flex">Nicky Bakehouse</span>
                <h3 className="font-display text-5xl text-burgundy-900 mb-4">
                  Our Menu
                </h3>
                <p className="font-serif italic text-[#5D3030] mb-2">
                  El stock es limitado.
                </p>
                <p className="font-sans text-sm text-[#7A5050] mb-8">
                  Todos nuestros productos se hornean a diario.
                </p>

                {/* Category tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                  {BAKEHOUSE_CATEGORIES.map((cat) => (
                    <span
                      key={cat}
                      className="border border-burgundy-900 text-burgundy-900 font-sans text-xs font-bold tracking-widest uppercase px-3 py-1"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* PDF CTA */}
                <a
                  href={images.bakehousePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 btn-primary"
                >
                  <FileText size={16} />
                  Ver Menú Completo
                </a>

                <p className="font-sans text-xs text-[#9A7070] mt-4">
                  Abre el menú en PDF
                </p>
              </div>

              {/* Featured item */}
              <div className="mt-6 bg-burgundy-900 text-cream-200 p-6 flex items-center justify-between gap-4">
                <div className="text-left">
                  <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-cream-400 block mb-1">
                    Our Famous
                  </span>
                  <p className="font-display text-3xl">Butterscotch Cheesecake</p>
                </div>
                <span className="font-serif italic text-cream-300 text-sm text-right">
                  &amp; Banana Pudding
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* ── CENTRAL: PDF view ── */}
        {activeLoc === 'central' && (
          <AnimatePresence mode="wait">
            <motion.div
              key="central-pdf"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="border-2 border-burgundy-900 p-10 md:p-14 bg-white">
                <span className="section-label justify-center flex">Nicky Cheese Central</span>
                <h3 className="font-display text-5xl text-burgundy-900 mb-4">
                  Our Menu
                </h3>
                <p className="font-serif italic text-[#5D3030] mb-2">
                  Todo hecho con amor.
                </p>
                <p className="font-sans text-sm text-[#7A5050] mb-8">
                  Especiality coffee, pancakes, cheesecakes y mucho más.
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-10">
                  {CENTRAL_CATEGORIES.map((cat) => (
                    <span
                      key={cat}
                      className="border border-burgundy-900 text-burgundy-900 font-sans text-xs font-bold tracking-widest uppercase px-3 py-1"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <a
                  href={images.centralPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 btn-primary"
                >
                  <FileText size={16} />
                  Ver Menú Completo
                </a>

                <p className="font-sans text-xs text-[#9A7070] mt-4">
                  Abre el menú en PDF
                </p>
              </div>

              <div className="mt-6 bg-burgundy-900 text-cream-200 p-6 flex items-center justify-between gap-4">
                <div className="text-left">
                  <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-cream-400 block mb-1">
                    Especial de fin de semana
                  </span>
                  <p className="font-display text-3xl">Nicky's Brunch</p>
                </div>
                <span className="font-serif italic text-cream-300 text-sm text-right">
                  Sáb, dom y feriados
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

      </div>
    </section>
  )
}
