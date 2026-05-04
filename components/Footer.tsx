import { Instagram } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="seguinos" className="bg-[#3D0D0D] text-cream-200 pt-16 pb-8">
      <div className="container-custom">

        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h3 className="font-display text-4xl text-cream-100 mb-2">Nicky Cheese</h3>
            <p className="font-serif italic text-cream-400 text-sm">
              American Bistró · Buenos Aires
            </p>
            <p className="font-sans text-xs text-cream-400 mt-4 tracking-widest uppercase">
              {siteConfig.hashtag}
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-cream-400 mb-5">
              Navegación
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: '#menu', label: 'Menú' },
                { href: '#locales', label: 'Locales' },
                { href: '#seguinos', label: 'Seguinos' },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-sans text-sm text-cream-300 hover:text-cream-100 transition-colors w-fit"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-cream-400 mb-5">
              Seguinos
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm text-cream-300 hover:text-cream-100 transition-colors w-fit"
              >
                <Instagram size={15} />
                @nickycheese.ba
              </a>
              <a
                href={siteConfig.social.instagramBakehouse}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm text-cream-300 hover:text-cream-100 transition-colors w-fit"
              >
                <Instagram size={15} />
                @nicky.bakehouse
              </a>
              <a
                href={siteConfig.social.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-cream-300 hover:text-cream-100 transition-colors w-fit"
              >
                Linktree ↗
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-cream-200/15 pt-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-sans text-xs text-cream-400">
            © {year} Nicky Cheese. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  )
}
