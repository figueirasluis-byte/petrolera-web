import conocer from '../data/conocer.json'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Conocer() {
  return (
    <section id="conocer" className="bg-[#f8faff] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">Certificación Oficial</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a2744] leading-tight">
              Centro Evaluador de{' '}
              <span className="text-orange-500">Estándares</span>{' '}
              de Competencia
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Impulsa tu trayectoria profesional. Estamos avalados por la{' '}
              <strong>SEP</strong> y <strong>CONOCER</strong> para certificar
              tus competencias laborales con validez nacional.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
            <div className="text-5xl mb-3">📋</div>
            <p className="font-bold text-[#1a2744]">Cédula de Acreditación</p>
            <p className="text-gray-400 text-sm mt-1">CONOCER / SEP — Validez Nacional</p>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-6">← Arrastra o desliza para explorar →</p>

        <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4">
          {conocer.map(ec => (
            <div key={ec.id}
              className="flex-none w-64 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden">
              <div className="bg-orange-50 h-36 flex items-center justify-center">
                <div className="bg-[#1a2744] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  {ec.codigo}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#1a2744] text-sm mb-2 leading-snug">{ec.nombre}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">{ec.desc}</p>
                <a href={getWhatsAppLink(`Hola, quiero información sobre ${ec.codigo} - ${ec.nombre}`)}
                  target="_blank" rel="noopener noreferrer"
                  className="block w-full text-center border border-orange-200 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold text-xs py-2.5 rounded-xl transition-colors">
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
