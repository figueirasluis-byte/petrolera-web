'use client'
import { useState, useEffect } from 'react'
import { getWhatsAppLink } from '../utils/whatsapp'

const links = [
  { label: 'Capacitación', href: '#calendario' },
  { label: 'Cursos', href: '#cursos' },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-black/5'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo flotante */}
        <a href="#" className="flex items-center group">
          <div className={`transition-all duration-500 ${
            scrolled
              ? 'bg-white rounded-2xl shadow-md shadow-black/10 p-2'
              : 'bg-white/20 backdrop-blur-sm rounded-2xl p-2 border border-white/30'
          }`}>
            <img
              src="/Green_Pro_Logo.jpg"
              alt="GREEN PRO"
              className="h-10 w-auto object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </a>

        {/* Links */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}
                className={`text-sm font-semibold transition-colors ${
                  scrolled
                    ? 'text-[#1a2744] hover:text-orange-500'
                    : 'text-[#1a2744] hover:text-orange-500'
                }`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón CTA */}
        <a href={getWhatsAppLink("Hola, quiero agendar una cita con GREEN PRO")}
          target="_blank" rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all shadow-md shadow-orange-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-200">
          Agendar Cita →
        </a>

        {/* Menú móvil */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 flex flex-col gap-1.5">
          <span className="w-6 h-0.5 bg-[#1a2744] block" />
          <span className="w-6 h-0.5 bg-[#1a2744] block" />
          <span className="w-6 h-0.5 bg-[#1a2744] block" />
        </button>
      </div>

      {/* Menú móvil abierto */}
      {open && (
        <div className="lg:hidden bg-white border-t px-6 py-5 flex flex-col gap-4 shadow-lg">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-[#1a2744] hover:text-orange-500 font-medium text-sm py-1">
              {l.label}
            </a>
          ))}
          <a href={getWhatsAppLink("Hola, quiero agendar una cita con GREEN PRO")}
            target="_blank" rel="noopener noreferrer"
            className="bg-orange-500 text-white font-semibold text-sm px-5 py-3 rounded-full text-center mt-2">
            Agendar Cita →
          </a>
        </div>
      )}
    </nav>
  )
}
