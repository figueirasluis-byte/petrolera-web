'use client'
import { useState } from 'react'

const acreditaciones = [
  { nombre: 'PEMEX SSPA' },
  { nombre: 'CONOCER' },
  { nombre: 'IADC RigPass' },
  { nombre: 'STPS' },
  { nombre: 'IPCET Tabasco' },
  { nombre: 'Miembros AMISI' },
  { nombre: 'National Safety Council' },
  { nombre: 'ASME' },
]

export default function Acreditaciones() {
  const all = [...acreditaciones, ...acreditaciones]
  return (
    <div className="bg-white border-y border-gray-100 py-5 overflow-hidden">
      <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
        Acreditaciones y Membresías
      </p>
      <div className="flex gap-16 animate-marquee w-max">
        {all.map((item, i) => (
          <span key={i} className="text-[#1a2744] font-bold text-sm whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity">
            {item.nombre}
          </span>
        ))}
      </div>
    </div>
  )
}
