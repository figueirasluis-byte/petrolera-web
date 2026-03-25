import promociones from '../data/promociones.json'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Promociones() {
  return (
    <section id="promo" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{background: '#dcfce7'}}>
            <span className="w-2 h-2 rounded-full animate-pulse-dot" style={{background: '#22c55e'}} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{color: '#1a4731'}}>Catálogo de Ofertas</span>
          </div>
          <h2 className="font-black text-5xl" style={{color: '#0d2b1a', letterSpacing: '-1px'}}>Promociones</h2>
          <p className="font-black text-3xl mt-1" style={{color: '#22c55e'}}>DEL 1 AL 31 DE MARZO</p>
          <p className="mt-2" style={{color: '#4b7a5e'}}>Amplía tus oportunidades de trabajo con nuestras ofertas de capacitación.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promociones.map(p => (
            <div key={p.id} className="bg-white rounded-2xl p-6 hover:-translate-y-1 transition-all"
              style={{border: '1px solid #d1fae5', borderLeft: '4px solid #22c55e', boxShadow: '0 2px 8px rgba(34,197,94,0.06)'}}>
              <div className="inline-block font-black text-2xl px-4 py-1.5 rounded-xl mb-4"
                style={{background: '#dcfce7', color: '#1a4731'}}>
                {p.descuento}
              </div>
              <h3 className="font-bold text-lg mb-2" style={{color: '#0d2b1a'}}>{p.nombre}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{color: '#4b7a5e'}}>{p.descripcion}</p>
              <a href={getWhatsAppLink(p.wa)} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-sm transition-all hover:text-green-700"
                style={{color: '#1a4731'}}>
                VIGENCIA 01 AL 31 DE MARZO →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
