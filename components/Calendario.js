import calendario from '../data/calendario.json'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Calendario() {
  return (
    <section id="calendario" className="bg-[#f8faff] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse-dot" />
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">Programación Oficial</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a2744] mb-3">Calendario de Capacitación</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Consulta las fechas y realiza tu registro de inscripción a nuestros cursos.
          </p>
          <p className="text-gray-400 text-sm mt-1">* Fechas sujetas a cambios sin previo aviso.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {calendario.map(c => (
            <div key={c.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="relative overflow-hidden">
                <span className="absolute top-3 left-3 z-10 border border-orange-300 text-orange-500 text-xs font-bold px-3 py-1 rounded-full bg-white">
                  {c.tag}
                </span>
                <img src={c.imagen} alt={c.titulo}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-[#1a2744] mb-4">{c.titulo}</h3>
                <a href={getWhatsAppLink(c.wa)}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full block text-center bg-[#1a2744] hover:bg-orange-500 text-white font-semibold text-sm py-3 rounded-xl transition-colors">
                  Registro →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
