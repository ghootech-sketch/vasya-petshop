import Link from 'next/link'
import { Facebook, Instagram, MapPin, MessageCircle, PawPrint } from 'lucide-react'
import { generalWhatsappLink, siteConfig } from '@/lib/site'

const footerLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/catalog', label: 'Katalog' },
  { href: '/artikel', label: 'Artikel' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
]

export default function Footer() {
  return (
    <footer className="border-t border-brown/10 bg-ink text-offwhite">
      <div className="section-padding mx-auto grid max-w-7xl gap-8 py-10 md:grid-cols-[1.3fr_0.7fr_0.8fr] md:py-12">
        <div>
          <Link href="/" className="flex min-h-11 items-center gap-3" aria-label="Vasya Petshop Beranda">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sage text-offwhite">
              <PawPrint className="h-6 w-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-display text-2xl font-black">{siteConfig.name}</span>
              <span className="text-sm text-offwhite/65">{siteConfig.tagline}</span>
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-offwhite/70">{siteConfig.description}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-offwhite/10 transition hover:bg-offwhite/20"
              aria-label="Instagram Vasya Petshop"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.tiktokUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-offwhite/10 transition hover:bg-offwhite/20"
              aria-label="TikTok Vasya Petshop"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl font-black">Navigasi</h2>
          <div className="mt-4 grid gap-2">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="flex min-h-11 items-center text-sm text-offwhite/70 transition hover:text-offwhite">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl font-black">Kontak</h2>
          <div className="mt-4 grid gap-3 text-sm leading-7 text-offwhite/70">
            <p className="flex gap-2">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
              {siteConfig.address}
            </p>
            <a
              href={generalWhatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-sage px-4 py-2 font-black text-offwhite transition hover:bg-brown"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="section-padding border-t border-offwhite/10 py-5 text-center text-xs text-offwhite/50">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  )
}
