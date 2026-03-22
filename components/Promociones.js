import promociones from '../data/promociones.json'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Promociones() {
  return (
    <section id="promo" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse-dot" />
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">Catálogo de Ofertas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a2744]">Promociones</h2>
          <p className="text-orange-500 font-black text-3xl md:text-4xl mt-1">DEL 1 AL 31 DE MARZO</p>
          <p className="text-gray-500 mt-2">Amplía tus oportunidades de trabajo con nuestras ofertas de capacitación.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promociones.map(p => (
            <div key={p.id}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="inline-block bg-orange-50 text-orange-500 font-black text-2xl px-4 py-1.5 rounded-full mb-4">
                {p.descuento}
              </div>
              <h3 className="font-bold text-lg text-[#1a2744] mb-2">{p.nombre}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.descripcion}</p>
              <a href={getWhatsAppLink(p.wa)}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-orange-500 font-semibold text-sm hover:gap-3 transition-all">
                VIGENCIA 01 AL 31 DE MARZO →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
