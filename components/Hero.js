import { getWhatsAppLink } from '../utils/whatsapp'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20"
      style={{background: 'linear-gradient(135deg, #0d2b1a 0%, #061410 60%, #0a1f12 100%)'}}>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-6"
            style={{borderColor: 'rgba(34,197,94,0.3)'}}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
            <span className="text-green-400/80 text-xs font-semibold tracking-widest uppercase">Cumplimiento SSPA Garantizado</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-6"
            style={{letterSpacing: '-1px'}}>
            Opera sin<br />interrupciones:<br />
            <span className="text-green-400">Capacitación SSPA</span><br />
            para PEMEX
          </h1>

          <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg">
            Alineamos tu personal con los estándares más estrictos de seguridad, salud y protección ambiental. Evita negativas de acceso.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href={getWhatsAppLink("Hola, quiero agendar una cita gratuita con GREEN PRO")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
              style={{boxShadow: '0 8px 24px rgba(249,115,22,0.35)'}}>
              Agendar Cita Gratuita →
            </a>
            <a href="#cursos"
              className="inline-flex items-center gap-2 text-white font-bold text-base px-8 py-4 rounded-full transition-all hover:text-green-400"
              style={{border: '2px solid rgba(255,255,255,0.2)'}}>
              Ver Catálogo
            </a>
          </div>

          <div className="flex gap-10 mt-12 pt-8" style={{borderTop: '1px solid rgba(255,255,255,0.08)'}}>
            {[
              { num: '+500', label: 'Trabajadores certificados' },
              { num: '65+', label: 'Cursos SSPA' },
              { num: '100%', label: 'Validez oficial' },
            ].map(s => (
              <div key={s.label}>
                <div className="font-display text-3xl font-black text-green-400">{s.num}</div>
                <div className="text-white/40 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden flex items-center justify-center"
          style={{background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)', aspectRatio: '16/9'}}>
          <div className="text-center text-white p-8">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer transition-colors"
              style={{background: 'rgba(34,197,94,0.15)', border: '2px solid rgba(34,197,94,0.3)'}}>
              <svg className="w-7 h-7 fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <p className="font-display font-bold text-lg">Conoce GREEN PRO</p>
            <p className="text-white/40 text-sm">Video Institucional</p>
          </div>
        </div>
      </div>
    </section>
  )
}
