'use client'
import { useState } from 'react'
import cursos from '../data/cursos.json'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function CursosElearning() {
  const [active, setActive] = useState(0)

  return (
    <section id="cursos" className="bg-[#f8faff] py-20">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">Plataforma E-Learning</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a2744] mb-2">
            Catálogo de Cursos{' '}
            <span className="text-orange-500">100% Autodidactas</span>
          </h2>
          <div className="w-12 h-1 bg-orange-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            Olvídate de las videollamadas. Estudia a tu propio ritmo, sin horarios fijos y con
            acceso inmediato a nuestra plataforma de capacitación industrial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: '🕐', title: 'Sin Horarios Fijos', desc: 'Accede 24/7 y avanza a tu ritmo.' },
            { icon: '▶️', title: 'Contenido Importante', desc: 'Lecciones de alta calidad.' },
            { icon: '✅', title: 'Validez Oficial', desc: 'Constancias DC3 y Certificados.' },
          ].map(f => (
            <div key={f.title} className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
              <div className="text-2xl mb-2">{f.icon}</div>
              <p className="font-bold text-[#1a2744] text-sm">{f.title}</p>
              <p className="text-gray-400 text-xs mt-1">{f.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mb-6">⇄ Desliza para explorar la biblioteca virtual</p>
      </div>

      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-6 pb-4">
        {cursos.map((c, i) => {
          const isActive = i === active
          return (
            <div key={c.id}
              onClick={() => setActive(i)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 flex-none
                ${isActive ? 'w-72' : 'w-36 opacity-70 hover:opacity-90'}`}
              style={{ height: '280px' }}>

              <img src={c.imagen} alt={c.nombre} className="w-full h-full object-cover" />

              <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1">
                <span className="text-orange-500 text-xs">★</span>
                <span className="text-[10px] font-bold text-[#1a2744]">{c.badge} ONLINE</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a2744]/90 to-transparent p-4">
                <p className="text-white font-bold text-sm leading-snug">{c.nombre}</p>
                {isActive && (
                  <a href={getWhatsAppLink(`Hola, quiero información del curso ${c.nombre}`)}
                    target="_blank" rel="noopener noreferrer"
                    className="mt-3 w-full block text-center bg-white text-[#1a2744] font-semibold text-xs py-2 rounded-xl hover:bg-orange-500 hover:text-white transition-colors">
                    Comenzar curso →
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
