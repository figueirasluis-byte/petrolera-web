import { getWhatsAppLink } from '../utils/whatsapp'

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-white flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div>
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse-dot" />
            <span className="text-orange-600 text-xs font-semibold tracking-widest uppercase">Cumplimiento SSPA Garantizado</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a2744] leading-tight mb-6">
            Opera sin interrupciones:{' '}
            <span className="text-orange-500">Cumplimiento SSPA Garantizado</span>{' '}
            para ingresar a instalaciones de PEMEX.
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
            Alineamos tu personal, maquinaria y gestión documental con los estándares
            más estrictos de seguridad, salud y protección ambiental. Evita negativas
            de acceso y garantiza la continuidad operativa.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href={getWhatsAppLink("Hola, quiero agendar una cita gratuita")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-200">
              Agendar Cita Gratuita →
            </a>
            <a href="#cursos"
              className="inline-flex items-center gap-2 border-2 border-[#1a2744] text-[#1a2744] hover:bg-[#1a2744] hover:text-white font-bold text-base px-8 py-4 rounded-full transition-all">
              Ver Catálogo
            </a>
          </div>

          <div className="flex gap-10 mt-12 pt-8 border-t border-gray-100">
            {[
              { num: '+500', label: 'Trabajadores certificados' },
              { num: '27+', label: 'Cursos SSPA' },
              { num: '100%', label: 'Validez oficial' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl font-black text-orange-500">{s.num}</div>
                <div className="text-gray-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#1a2744] aspect-video flex items-center justify-center">
          <div className="text-center text-white p-8">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-colors">
              <svg className="w-7 h-7 fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <p className="font-bold text-lg">Conoce Delta Oil Services</p>
            <p className="text-white/60 text-sm">Video Institucional</p>
          </div>
        </div>
      </div>
    </section>
  )
}
