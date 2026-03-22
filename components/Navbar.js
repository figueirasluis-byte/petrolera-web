'use client'
import { useState, useEffect } from 'react'
import { getWhatsAppLink } from '../utils/whatsapp'

const links = [
  { label: 'Capacitación', href: '#calendario' },
  { label: 'Cursos Online', href: '#cursos' },
  { label: 'Inspección', href: '#inspeccion' },
  { label: 'CONOCER', href: '#conocer' },
  { label: 'Consultoría', href: '#consultoria' },
  { label: 'Renta', href: '#renta' },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="font-black text-xl tracking-tight text-[#1a2744]">
          DELTA <span className="text-orange-500">OIL SERVICES</span>
        </div>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}
                className="text-[#1a2744] hover:text-orange-500 text-sm font-medium transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={getWhatsAppLink("Hola, quiero agendar una cita")}
          target="_blank" rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors shadow-md shadow-orange-100">
          Agendar Cita →
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 flex flex-col gap-1.5">
          <span className="w-6 h-0.5 bg-[#1a2744] block" />
          <span className="w-6 h-0.5 bg-[#1a2744] block" />
          <span className="w-6 h-0.5 bg-[#1a2744] block" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t px-6 py-5 flex flex-col gap-4 shadow-lg">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-[#1a2744] hover:text-orange-500 font-medium text-sm py-1">
              {l.label}
            </a>
          ))}
          <a href={getWhatsAppLink("Hola, quiero agendar una cita")}
            target="_blank" rel="noopener noreferrer"
            className="bg-orange-500 text-white font-semibold text-sm px-5 py-3 rounded-full text-center mt-2">
            Agendar Cita →
          </a>
        </div>
      )}
    </nav>
  )
}
