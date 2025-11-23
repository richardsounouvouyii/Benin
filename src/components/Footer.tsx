import { Mail, Facebook, Twitter, Instagram } from 'lucide-react'
import React, { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: connecter à backend / newsletter provider
    if (!email.trim()) return
    // Placeholder: simple alert
    alert(`Inscription envoyée pour: ${email}`)
    setEmail('')
  }

  return (
    <footer className="bg-white " aria-labelledby="newsletter-title" style={{ fontFamily: 'Mitr, sans-serif' }}>
      {/* Newsletter section */}
      <div className=" mx-auto px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-12 items-start p-32">
          <div className="md:col-span-5">
            <h2
              id="newsletter-title"
              className="text-neutral-900 mb-4"
              style={{
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '120%'
              }}
            >
              S'abonner à notre newsletter
            </h2>
            <p
              className="text-neutral-600 text-sm"
              style={{ fontWeight: 300, lineHeight: '150%' }}
            >
              Pour recevoir les dernières nouvelles et offres spéciales, abonnez-vous à notre newsletter en entrant votre adresse e-mail ci-dessous.
            </p>
          </div>
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">             
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Votre adresse e-mail"
                  className="w-full h-12 pl-4 pr-10 rounded border text-sm bg-white border-neutral-200 focus:border-[#E2183A] focus:ring-0 outline-none transition-colors"
                  style={{ fontWeight: 300 }}
                  aria-label="Adresse e-mail"
                />
                <Mail size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
              </div>
              <button
                type="submit"
                className="h-12 px-8 bg-[#E2183A] text-white text-sm font-medium rounded hover:bg-white hover:text-[#E2183A] border border-[#E2183A] transition-colors"
                style={{ fontWeight: 500 }}
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className=" bg-[#E2183A] py-10">
        <div className="max-w-[1670px] mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <SocialIcon href="#" label="Facebook">
              <Facebook size={16} />
            </SocialIcon>
            <SocialIcon href="#" label="Twitter">
              <Twitter size={16} />
            </SocialIcon>
            <SocialIcon href="#" label="Pinterest">
              <span className="text-sm font-semibold">P</span>
            </SocialIcon>
            <SocialIcon href="#" label="Instagram">
              <Instagram size={16} />
            </SocialIcon>
          </div>
          <p className="text-white/80 text-xs" style={{ fontWeight: 300 }}>
            Designer par <span className="font-medium">AHOUANDJOGBE Constantin</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ children, href, label }: { children: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#E2183A] hover:bg-[#E2183A] hover:text-white transition-colors shadow-sm"
    >
      {children}
    </a>
  )
}
