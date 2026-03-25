import { getWhatsAppLink } from '../utils/whatsapp'

export default function Footer() {
  return (
    <footer className="text-white pt-16 pb-8 px-6" style={{background: '#061410', borderTop: '1px solid rgba(34,197,94,0.1)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <img src="/logos/logo.jpg" alt="GREEN PRO"
              className="h-12 w-auto object-contain rounded-lg mb-4" />
            <p className="text-sm leading-relaxed mb-6" style={{color: 'rgba(255,255,255,0.5)'}}>
              Consultoría ambiental y capacitación en SSPA para el sector industrial y petrolero. Villahermosa, Tabasco.
            </p>
            <div className="flex flex-col gap-3 text-sm" style={{color: 'rgba(255,255,255,0.5)'}}>
              <span>📍 Villahermosa, Tabasco, México</span>
              <a href="mailto:greenproconsultoriaambiental@gmail.com" className="hover:text-green-400 transition-colors">
                ✉️ greenproconsultoriaambiental@gmail.com
              </a>
              <a href={getWhatsAppLink("Hola, necesito información")} target="_blank" rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors">
                📱 +52 993 397 9863
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase pb-3 mb-5" style={{borderBottom: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)'}}>
              Servicios
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                ['Capacitación Presencial', '#calendario'],
                ['Catálogo de Cursos SSPA', '#cursos'],
                ['Estándares CONOCER', '#conocer'],
                ['Consultoría ISO', '#consultoria'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm transition-colors hover:text-green-400" style={{color: 'rgba(255,255,255,0.5)'}}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase pb-3 mb-5" style={{borderBottom: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)'}}>
              ¿Listo para comenzar?
            </h4>
            <div className="flex flex-col gap-3">
              <a href={getWhatsAppLink("Hola, quiero agendar una cita con GREEN PRO")}
                target="_blank" rel="noopener noreferrer"
                className="block text-center text-white font-semibold py-3 rounded-xl transition-colors"
                style={{background: '#f97316'}}>
                Agendar Cita →
              </a>
              <a href={getWhatsAppLink("Hola, quiero solicitar una cotización a GREEN PRO")}
                target="_blank" rel="noopener noreferrer"
                className="block text-center font-semibold py-3 rounded-xl transition-colors text-sm"
                style={{border: '1px solid rgba(34,197,94,0.3)', color: 'rgba(255,255,255,0.7)'}}>
                Solicitar Cotización
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6" style={{borderTop: '1px solid rgba(255,255,255,0.06)'}}>
          <p className="text-xs" style={{color: 'rgba(255,255,255,0.25)'}}>© 2026 GREEN PRO. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="text-xs transition-colors hover:text-green-400" style={{color: 'rgba(255,255,255,0.25)'}}>Aviso de Privacidad</a>
            <a href="#" className="text-xs transition-colors hover:text-green-400" style={{color: 'rgba(255,255,255,0.25)'}}>Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
