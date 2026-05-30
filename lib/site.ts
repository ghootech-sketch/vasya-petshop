export const siteConfig = {
  name: 'Vasya Petshop',
  tagline: 'Tempat Terbaik untuk Sahabat Berbulumu',
  location: 'Surabaya, Jawa Timur',
  address: 'Jl. Contoh No. 12, Surabaya, Jawa Timur 60111',
  phone: '6281234567890',
  whatsapp: 'https://wa.me/6281234567890',
  instagram: 'https://instagram.com/vasyapetshop',
  tiktok: 'https://www.tiktok.com/@vasyapetshop',
  hours: {
    weekday: 'Senin-Sabtu 09.00-20.00',
    sunday: 'Minggu 10.00-18.00',
  },
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.55923530867!2d112.60803095!3d-7.2574719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3129c3a6df5e2a92!2sSurabaya%2C%20Kota%20SBY%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
}

export function whatsappProductLink(productName: string) {
  const text = `Halo Vasya Petshop, saya tertarik dengan produk ${productName}. Apakah masih tersedia?`
  return `${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`
}

export const generalWhatsappLink = `${siteConfig.whatsapp}?text=${encodeURIComponent(
  'Halo Vasya Petshop, saya ingin bertanya tentang produk dan layanan.'
)}`
