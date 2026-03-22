import consultoria from '../data/consultoria.json'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Consultoria() {
  return (
    <section id="consultoria" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse-dot" />
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">Cumplimiento Normativo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a2744]">
            Consultoría <span className="text-orange-500">Especializada</span>
          </h2>
          <p className="text-gray-500 mt-3">Implementación experta de estándares internacionales y nacionales.</p>
          <a href={getWhatsAppLink("Hola, quiero cotizar una consultoría")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1a2744] hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-full mt-5 transition-colors">
            Cotizar Ahora →
          </a>
          <p className="text-gray-400 text-sm mt-5">← Arrastra o Desliza →</p>
        </div>

        <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4">
          {consultoria.map(item => (
            <div key={item.id}
              className="flex-none w-56 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-center p-6 group">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-50 transition-colors">
                <span className="text-gray-400 group-hover:text-orange-500 transition-colors text-lg">✓</span>
              </div>
              <p className="font-black text-[#1a2744] text-lg mb-1">{item.codigo}</p>
              <p className="text-gray-400 text-xs leading-snug mb-5">{item.nombre}</p>
              <a href={getWhatsAppLink(`Hola, quiero cotizar ${item.codigo} - ${item.nombre}`)}
                target="_blank" rel="noopener noreferrer"
                className="block w-full border border-orange-200 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold text-xs py-2.5 rounded-xl transition-colors">
                Cotizar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
