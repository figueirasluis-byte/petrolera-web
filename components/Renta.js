import renta from '../data/renta.json'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Renta() {
  return (
    <section id="renta" className="bg-[#f8faff] py-20">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">Maquinaria Certificada</p>
        <h2 className="text-4xl md:text-5xl font-black text-[#1a2744] mb-3">Renta de Maquinaria y Equipos</h2>
        <p className="text-gray-500 max-w-xl">Disponibilidad inmediata. Soluciones robustas para tus operaciones en campo.</p>
      </div>

      <div className="flex gap-5 overflow-x-auto scrollbar-hide px-6 pb-4">
        {renta.map(item => (
          <div key={item.id}
            className="flex-none w-72 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all group">
            <div className="relative">
              <img src={item.imagen} alt={item.nombre}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-xs font-bold text-green-600 border border-green-100 shadow-sm">
                ● Disponible
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-[#1a2744] text-lg mb-1">{item.nombre}</h3>
              <p className="text-gray-400 text-sm mb-5">{item.desc}</p>
              <a href={getWhatsAppLink(item.wa)}
                target="_blank" rel="noopener noreferrer"
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm py-3 rounded-xl transition-colors">
                Cotizar Ahora →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
