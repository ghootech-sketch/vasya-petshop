import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat Vasya Petshop via WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  )
}
