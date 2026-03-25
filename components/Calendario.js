import calendario from '../data/calendario.json'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Calendario() {
  return (
    <section id="calendario" className="py-20 px-6" style={{background: '#f0faf4'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{background: '#dcfce7'}}>
            <span className="w-2 h-2 rounded-full animate-pulse-dot" style={{background: '#22c55e'}} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{color: '#1a4731'}}>Programación Oficial</span>
          </div>
          <h2 className="font-black text-5xl mb-3" style={{color: '#0d2b1a', letterSpacing: '-1px'}}>
            Calendario de <span style={{color: '#22c55e'}}>Capacitación</span>
          </h2>
          <p style={{color: '#4b7a5e'}} className="max-w-xl mx-auto">
            Consulta las fechas y realiza tu registro de inscripción a nuestros cursos.
          </p>
          <p className="text-sm mt-1" style={{color: '#86a896'}}>* Fechas sujetas a cambios sin previo aviso.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {calendario.map(c => (
            <div key={c.id} className="bg-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-all group"
              style={{border: '1px solid #d1fae5', boxShadow: '0 2px 8px rgba(34,197,94,0.06)'}}>
              <div className="relative overflow-hidden">
                <span className="absolute top-3 left-3 z-10 text-xs font-bold px-3 py-1 rounded-full bg-white"
                  style={{color: '#1a4731', border: '1px solid #d1fae5'}}>
                  {c.tag}
                </span>
                <img src={c.imagen} alt={c.titulo}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-4" style={{color: '#0d2b1a'}}>{c.titulo}</h3>
                <a href={getWhatsAppLink(c.wa)} target="_blank" rel="noopener noreferrer"
                  className="w-full block text-center text-white font-semibold text-sm py-3 rounded-xl transition-colors hover:bg-green-600"
                  style={{background: '#1a4731'}}>
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
