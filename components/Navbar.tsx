import Link from 'next/link'
import { Menu, MessageCircle, PawPrint, X } from 'lucide-react'
import { generalWhatsappLink, siteConfig } from '@/lib/site'

const navItems = [
  { href: '/', label: 'Beranda' },
  { href: '/catalog', label: 'Katalog' },
  { href: '/artikel', label: 'Artikel' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brown/10 bg-cream/95 backdrop-blur-xl">
      <nav className="section-padding mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-3 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Vasya Petshop Beranda">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sage text-offwhite shadow-soft">
            <PawPrint className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-lg font-bold text-ink sm:text-xl">{siteConfig.name}</span>
            <span className="hidden truncate text-xs font-medium text-muted sm:block">{siteConfig.location}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center text-sm font-semibold text-muted transition hover:text-brown"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={generalWhatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-full bg-brown px-3 text-sm font-bold text-offwhite shadow-soft transition hover:-translate-y-0.5 hover:bg-ink md:px-4"
            aria-label="Chat Vasya Petshop via WhatsApp"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>

          <details className="group relative md:hidden">
            <summary
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-brown/15 bg-offwhite text-brown shadow-sm transition hover:bg-sand [&::-webkit-details-marker]:hidden"
              aria-label="Buka menu navigasi"
            >
              <Menu className="h-5 w-5 group-open:hidden" aria-hidden="true" />
              <X className="hidden h-5 w-5 group-open:block" aria-hidden="true" />
            </summary>
            <div className="fixed left-0 right-0 top-[72px] z-50 border-y border-brown/10 bg-offwhite/98 px-4 py-4 shadow-soft backdrop-blur-xl">
              <div className="mx-auto grid max-w-7xl gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex min-h-11 items-center rounded-2xl px-4 text-sm font-black text-ink transition hover:bg-cream hover:text-brown"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </details>
        </div>
      </nav>
    </header>
  )
}
