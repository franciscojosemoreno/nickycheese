'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Clock, Instagram } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Locations() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="locales" ref={ref} className="py-24 md:py-36 bg-cream-200">
      <div className="container-custom">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Encontranos</span>
          <h2 className="section-title">Nuestros Locales</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {siteConfig.locations.map((loc, i) => (
            <motion.div
              key={loc.id}
              className="bg-white overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.7 }}
            >
              {/* Map */}
              <div className="h-56 bg-cream-300 overflow-hidden">
                {loc.mapSrc ? (
                  <iframe
                    src={loc.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa ${loc.name}`}
                  />
                ) : (
                  <div className="h-full flex items-center justify-center bg-cream-300">
                    <div className="text-center">
                      <MapPin size={28} className="text-burgundy-900 mx-auto mb-2" />
                      <p className="font-sans text-sm text-[#5D3030]">Buenos Aires</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-7">
                <h3 className="font-serif text-2xl text-burgundy-900 mb-5">{loc.name}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin size={15} className="text-burgundy-900 mt-0.5 flex-none" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-[#2A0A0A]">{loc.address}</p>
                      <p className="font-sans text-sm text-[#5D3030]">{loc.neighborhood}</p>
                    </div>
                  </div>

                  {loc.hours.map((h, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Clock size={15} className="text-burgundy-900 flex-none" />
                      <p className="font-sans text-sm text-[#2A0A0A]">
                        <span className="font-semibold">{h.days}</span>
                        {h.time !== 'en Instagram' ? ` · ${h.time}` : ' — Consultar en Instagram'}
                      </p>
                    </div>
                  ))}

                  {loc.brunch && (
                    <div className="pt-3 mt-3 border-t border-cream-300">
                      <p className="font-sans text-sm font-bold text-burgundy-900">
                        Nicky's Brunch
                      </p>
                      <p className="font-sans text-sm text-[#5D3030]">{loc.brunch}</p>
                    </div>
                  )}
                </div>

                <a
                  href={loc.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-xs font-bold tracking-[0.2em] uppercase text-burgundy-900 hover:text-burgundy-950 transition-colors"
                >
                  <Instagram size={14} />
                  {loc.instagramHandle}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
