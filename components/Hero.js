'use client'
import { useState, useEffect } from 'react'
import { getWhatsAppLink } from '../utils/whatsapp'

const links = [
  { label: 'Capacitación', href: '#calendario' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Conocer', href: '#conocer' },
  { label: 'Consultoría', href: '#consultoria' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#0d2b1a]/95 backdrop-blur-md shadow-xl shadow-black/30' : 'bg-[#0d2b1a]/85 backdrop-blur-sm'
    }`} style={{borderBottom: '1px solid rgba(34,197,94,0.15)'}}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <a href="#" className="flex items-center">
          <img src="/logos/logo.jpg" alt="GREEN PRO"
            className="h-11 w-auto object-contain rounded-lg" />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-white/70 hover:text-green-400 text-sm font-semibold tracking-wide transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={getWhatsAppLink("Hola, quiero agendar una cita con GREEN PRO")}
          target="_blank" rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm px-6 py-3 rounded-full transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-0.5">
          Agendar Cita →
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 flex flex-col gap-1.5">
          <span className="w-6 h-0.5 bg-white block" />
          <span className="w-6 h-0.5 bg-white block" />
          <span className="w-6 h-0.5 bg-white block" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0d2b1a] border-t border-white/10 px-6 py-5 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-white/70 hover:text-green-400 font-semibold text-sm py-1">{l.label}</a>
          ))}
          <a href={getWhatsAppLink("Hola, quiero agendar una cita con GREEN PRO")}
            target="_blank" rel="noopener noreferrer"
            className="bg-orange-500 text-white font-bold text-sm px-5 py-3 rounded-full text-center mt-2">
            Agendar Cita →
          </a>
        </div>
      )}
    </nav>
  )
}
