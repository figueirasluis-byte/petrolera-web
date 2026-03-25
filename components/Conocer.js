import conocer from '../data/conocer.json'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Conocer() {
  return (
    <section id="conocer" className="py-20 px-6" style={{background: '#f0faf4'}}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#22c55e'}}>Certificación Oficial</p>
            <h2 className="font-black text-5xl leading-tight" style={{color: '#0d2b1a', letterSpacing: '-1px'}}>
              Centro Evaluador de{' '}
              <span style={{color: '#22c55e'}}>Estándares</span>{' '}
              de Competencia
            </h2>
            <p className="mt-4 leading-relaxed" style={{color: '#4b7a5e'}}>
              Impulsa tu trayectoria profesional. Estamos avalados por la{' '}
              <strong style={{color: '#0d2b1a'}}>SEP</strong> y <strong style={{color: '#0d2b1a'}}>CONOCER</strong>{' '}
              para certificar tus competencias laborales con validez nacional.
            </p>
          </div>
          <div className="rounded-2xl p-6 text-center" style={{background: 'white', border: '1px solid #d1fae5'}}>
            <div className="text-5xl mb-3">📋</div>
            <p className="font-bold" style={{color: '#0d2b1a'}}>Cédula de Acreditación</p>
            <p className="text-sm mt-1" style={{color: '#4b7a5e'}}>CONOCER / SEP — Validez Nacional</p>
          </div>
        </div>

        <p className="text-sm mb-6" style={{color: '#86a896'}}>← Arrastra o desliza para explorar →</p>

        <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4">
          {conocer.map(ec => (
            <div key={ec.id} className="flex-none w-64 bg-white rounded-2xl overflow-hidden"
              style={{border: '1px solid #d1fae5', boxShadow: '0 2px 8px rgba(34,197,94,0.06)'}}>
              <div className="h-36 flex items-center justify-center" style={{background: '#f0faf4'}}>
                <div className="text-white text-xs font-bold px-4 py-1.5 rounded-full"
                  style={{background: '#0d2b1a'}}>
                  {ec.codigo}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-sm mb-2 leading-snug" style={{color: '#0d2b1a'}}>{ec.nombre}</h3>
                <p className="text-xs leading-relaxed mb-4" style={{color: '#4b7a5e'}}>{ec.desc}</p>
                <a href={getWhatsAppLink(`Hola, quiero información sobre ${ec.codigo} - ${ec.nombre}`)}
                  target="_blank" rel="noopener noreferrer"
                  className="block w-full text-center font-semibold text-xs py-2.5 rounded-xl transition-colors"
                  style={{border: '1px solid #22c55e', color: '#1a4731'}}>
                  Solicitar evaluación →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
