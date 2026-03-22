import inspeccion from '../data/inspeccion.json'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Inspeccion() {
  return (
    <section id="inspeccion" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">Cumplimiento Normativo</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a2744] mb-2">
            Inspección y Certificación de Grúas y Equipos
          </h2>
          <div className="w-12 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
          <p className="text-gray-400 text-sm mt-4">← Arrastra o desliza para explorar →</p>
        </div>

        <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4">
          {inspeccion.map(item => (
            <div key={item.id}
              className="flex-none w-64 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 overflow-hidden group">
              <div className="relative bg-gray-50 h-40 flex items-center justify-center">
                <div className="absolute top-3 right-3 bg-white border border-gray-200 rounded-full px-2.5 py-1 text-xs font-semibold text-[#1a2744]">
                  ✓ Certificable
                </div>
                <span className="text-5xl">{item.icono}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#1a2744] mb-1">{item.nombre}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm mb-4">¿Necesitas certificar tu equipo?</p>
          <a href={getWhatsAppLink("Hola, quiero cotizar inspección de maquinaria")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-8 py-3 rounded-full transition-all">
            Cotizar Certificación →
          </a>
        </div>
      </div>
    </section>
  )
}
