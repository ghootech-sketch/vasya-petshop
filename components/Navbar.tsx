import Link from 'next/link'
import { MessageCircle, PawPrint, ShoppingBag } from 'lucide-react'
import { generalWhatsappLink, siteConfig } from '@/lib/site'

const navItems = [
  { href: '/', label: 'Beranda' },
  { href: '/catalog', label: 'Katalog' },
  { href: '/artikel', label: 'Artikel' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brown/10 bg-cream/90 backdrop-blur-xl">
      <nav className="section-padding mx-auto flex max-w-7xl items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Vasya Petshop Beranda">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sage text-offwhite shadow-soft">
            <PawPrint className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-bold text-ink">{siteConfig.name}</span>
            <span className="hidden text-xs font-medium text-muted sm:block">{siteConfig.location}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-muted transition hover:text-brown"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/catalog"
            className="hidden items-center gap-2 rounded-full border border-brown/15 bg-offwhite px-4 py-2 text-sm font-bold text-brown shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft md:flex"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            Lihat Produk
          </Link>
          <a
            href={generalWhatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brown px-4 py-2 text-sm font-bold text-offwhite shadow-soft transition hover:-translate-y-0.5 hover:bg-ink"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">WA</span>
          </a>
        </div>
      </nav>

      <div className="section-padding border-t border-brown/10 bg-offwhite/80 py-3 lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto text-sm font-semibold text-muted">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 transition hover:text-brown">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
