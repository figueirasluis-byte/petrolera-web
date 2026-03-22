import { getWhatsAppLink } from '../utils/whatsapp'

export default function Footer() {
  return (
    <footer className="bg-[#1a2744] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          <div>
            <div className="font-black text-xl mb-4">
              DELTA <span className="text-orange-500">OIL SERVICES</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Líderes en capacitación, certificación, inspección y renta de equipos
              para el sector industrial y petrolero de Villahermosa, Tabasco.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <span>📍 Villahermosa, Tabasco, México</span>
              <a href="mailto:contacto@deltatraining.mx" className="hover:text-orange-400 transition-colors">
                ✉️ contacto@deltatraining.mx
              </a>
              <a href={getWhatsAppLink("Hola, necesito información")}
                target="_blank" rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors">
                📱 +52 993 397 9863
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase border-b border-white/10 pb-3 mb-5 text-white/40">
              Servicios
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                ['Capacitación Presencial', '#calendario'],
                ['Cursos E-Learning', '#cursos'],
                ['Inspección de Grúas', '#inspeccion'],
                ['Estándares CONOCER', '#conocer'],
                ['Consultoría ISO', '#consultoria'],
                ['Renta de Maquinaria', '#renta'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-white/60 hover:text-orange-400 text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase border-b border-white/10 pb-3 mb-5 text-white/40">
              ¿Listo para comenzar?
            </h4>
            <div className="flex flex-col gap-3">
              <a href={getWhatsAppLink("Hola, quiero agendar una cita")}
                target="_blank" rel="noopener noreferrer"
                className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors">
                Agendar Cita →
              </a>
              <a href={getWhatsAppLink("Hola, quiero solicitar una cotización")}
                target="_blank" rel="noopener noreferrer"
                className="block text-center border border-white/20 hover:border-orange-400 hover:text-orange-400 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                Solicitar Cotización
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 border-t border-white/10">
          <p className="text-white/30 text-xs">© 2026 DELTA OIL SERVICES. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="text-white/30 hover:text-orange-400 text-xs transition-colors">Aviso de Privacidad</a>
            <a href="#" className="text-white/30 hover:text-orange-400 text-xs transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
