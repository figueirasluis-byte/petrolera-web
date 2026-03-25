import consultoria from '../data/consultoria.json'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Consultoria() {
  return (
    <section id="consultoria" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{background: '#dcfce7'}}>
            <span className="w-2 h-2 rounded-full animate-pulse-dot" style={{background: '#22c55e'}} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{color: '#1a4731'}}>Cumplimiento Normativo</span>
          </div>
          <h2 className="font-black text-5xl" style={{color: '#0d2b1a', letterSpacing: '-1px'}}>
            Consultoría <span style={{color: '#22c55e'}}>Especializada</span>
          </h2>
          <p className="mt-3" style={{color: '#4b7a5e'}}>Implementación experta de estándares internacionales y nacionales.</p>
          <a href={getWhatsAppLink("Hola, quiero cotizar una consultoría con GREEN PRO")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full mt-5 transition-colors"
            style={{background: '#0d2b1a'}}>
            Cotizar Ahora →
          </a>
          <p className="text-sm mt-5" style={{color: '#86a896'}}>← Arrastra o Desliza →</p>
        </div>

        <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4">
          {consultoria.map(item => (
            <div key={item.id} className="flex-none w-56 bg-white rounded-2xl p-6 text-center hover:-translate-y-1 transition-all"
              style={{border: '1px solid #d1fae5', borderTop: '3px solid #22c55e', boxShadow: '0 2px 8px rgba(34,197,94,0.06)'}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{background: '#f0faf4'}}>
                <span style={{color: '#22c55e', fontSize: '1.2rem'}}>✓</span>
              </div>
              <p className="font-black text-lg mb-1" style={{color: '#0d2b1a'}}>{item.codigo}</p>
              <p className="text-xs leading-snug mb-5" style={{color: '#4b7a5e'}}>{item.nombre}</p>
              <a href={getWhatsAppLink(`Hola, quiero cotizar ${item.codigo} - ${item.nombre}`)}
                target="_blank" rel="noopener noreferrer"
                className="block w-full font-semibold text-xs py-2.5 rounded-xl transition-colors"
                style={{border: '1px solid #22c55e', color: '#1a4731'}}>
                Cotizar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
