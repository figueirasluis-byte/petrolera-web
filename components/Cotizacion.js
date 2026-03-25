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
    const text = `Hola GREEN PRO, quiero información. Soy ${nombre}${empresa ? ' de ' + empresa : ''}. Tel: ${telefono}. Interés: ${servicio}. ${mensaje}`
    window.open(getWhatsAppLink(text), '_blank')
  }

  return (
    <section className="py-20 px-6" style={{background: '#0d2b1a'}}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display font-black text-4xl text-white mb-2" style={{letterSpacing: '-1px'}}>
            Contáctanos — <span style={{color: '#22c55e'}}>GREEN PRO</span>
          </h2>
          <p style={{color: 'rgba(255,255,255,0.4)'}}>Completa el formulario y te contactamos en menos de 2 horas.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl p-8 flex flex-col gap-5"
          style={{background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(34,197,94,0.2)'}}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-bold uppercase tracking-wide block mb-2" style={{color: 'rgba(255,255,255,0.4)'}}>Nombre *</label>
              <input name="nombre" required placeholder="Tu nombre"
                className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-white/20"
                style={{background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(34,197,94,0.2)'}} />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wide block mb-2" style={{color: 'rgba(255,255,255,0.4)'}}>Teléfono *</label>
              <input name="telefono" required placeholder="+52 993..."
                className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-white/20"
                style={{background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(34,197,94,0.2)'}} />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wide block mb-2" style={{color: 'rgba(255,255,255,0.4)'}}>Empresa</label>
            <input name="empresa" placeholder="Nombre de tu empresa (opcional)"
              className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-white/20"
              style={{background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(34,197,94,0.2)'}} />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wide block mb-2" style={{color: 'rgba(255,255,255,0.4)'}}>Servicio de Interés *</label>
            <select name="servicio" required
              className="w-full rounded-xl px-4 py-3 text-sm outline-none"
              style={{background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(34,197,94,0.2)', color: 'rgba(255,255,255,0.6)'}}>
              <option value="">Selecciona...</option>
              <option>Cursos SSPA / Rig Pass / Wellsharp</option>
              <option>Capacitación en Protección Ambiental</option>
              <option>Cursos de Normas STPS</option>
              <option>Brigadas de Emergencia</option>
              <option>Cursos Especializados</option>
              <option>Consultoría ISO / Protección Civil</option>
              <option>Estándares CONOCER</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wide block mb-2" style={{color: 'rgba(255,255,255,0.4)'}}>Mensaje</label>
            <textarea name="mensaje" rows={3} placeholder="Cuéntanos qué necesitas..."
              className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none resize-none placeholder:text-white/20"
              style={{background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(34,197,94,0.2)'}} />
          </div>
          <button type="submit"
            className="w-full text-white font-bold py-4 rounded-xl transition-all mt-2 text-base hover:-translate-y-0.5"
            style={{background: '#f97316', boxShadow: '0 8px 24px rgba(249,115,22,0.3)'}}>
            Enviar Solicitud por WhatsApp →
          </button>
        </form>
      </div>
    </section>
  )
}
