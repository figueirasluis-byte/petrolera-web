'use client'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Cotizacion() {
  function handleSubmit(e) {
    e.preventDefault()
    const nombre   = e.target.nombre.value   || 'Sin nombre'
    const telefono = e.target.telefono.value || ''
    const empresa  = e.target.empresa.value  || ''
    const servicio = e.target.servicio.value || 'No especificado'
    const mensaje  = e.target.mensaje.value  || ''
    const text = `Hola, quiero cotizar un servicio. Soy ${nombre}${empresa ? ' de ' + empresa : ''}. Tel: ${telefono}. Servicio: ${servicio}. ${mensaje}`
    window.open(getWhatsAppLink(text), '_blank')
  }

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-[#1a2744]">Cotizar Inspección de Maquinaria</h2>
          <p className="text-gray-500 mt-2">Completa el formulario y te contactamos en menos de 2 horas.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#f8faff] rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">Nombre *</label>
              <input name="nombre" required placeholder="Tu nombre"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 bg-white" />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">Teléfono *</label>
              <input name="telefono" required placeholder="+52 993..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 bg-white" />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">Empresa</label>
            <input name="empresa" placeholder="Nombre de tu empresa (opcional)"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 bg-white" />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">Servicio de Interés *</label>
            <select name="servicio" required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 bg-white text-gray-600">
              <option value="">Selecciona...</option>
              <option>Cursos SSPA / Rig Pass / Wellsharp</option>
              <option>Libreta de Mar / STCW</option>
              <option>Inspección de Grúas y Maquinaria</option>
              <option>Renta de Equipo</option>
              <option>Consultoría ISO / Protección Civil</option>
              <option>Estándares CONOCER</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">Mensaje</label>
            <textarea name="mensaje" rows={3} placeholder="Cuéntanos qué necesitas..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 bg-white resize-none" />
          </div>
          <button type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors mt-2 text-base">
            Enviar Solicitud por WhatsApp →
          </button>
        </form>
      </div>
    </section>
  )
}
