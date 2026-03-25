import { getWhatsAppLink } from '../utils/whatsapp'

const grupos = [
  {
    id: 'sspa', titulo: 'Cursos de Capacitación en SSPA', doble: true,
    cursos: [
      { nombre: 'Sistema de Permisos para Trabajo con Riesgo', horas: 8 },
      { nombre: 'Auditorías Efectivas', horas: 8 },
      { nombre: 'Rig Pass', horas: 8 },
      { nombre: 'Básico de Seguridad Industrial', horas: 8 },
      { nombre: 'Mejores Prácticas Internacionales de SSPA', horas: 8 },
      { nombre: 'Capacitación y Adiestramiento en Combate de Incendios', horas: 8 },
      { nombre: 'Ácido Sulfhídrico — Análisis de Riesgo en las Instalaciones', horas: 8 },
      { nombre: 'Clasificación y Uso de Equipos de Protección Respiratoria', horas: 8 },
      { nombre: 'Análisis de Seguridad en el Trabajo', horas: 8 },
      { nombre: 'Combate Contra Incendio', horas: 8 },
      { nombre: 'Disciplina Operativa', horas: 20 },
      { nombre: 'Anexo SSPA', horas: 8 },
      { nombre: 'Primeros Auxilios', horas: 8 },
      { nombre: 'Atlas de Riesgo', horas: 8 },
      { nombre: 'Atlas de Riesgo en la Instalación', horas: 8 },
      { nombre: 'Ejecución o Supervisión de los Programas de Seguridad e Higiene', horas: 8 },
      { nombre: 'Investigación y Análisis de Incidentes/Accidentes mediante ACR', horas: 8 },
      { nombre: 'Manejo a la Defensiva', horas: 8 },
      { nombre: 'Manejo de Extintores', horas: 8 },
      { nombre: 'Manejo de Sustancias y Materiales Peligrosos', horas: 8 },
      { nombre: 'Mantenimiento u Operación de las Instalaciones Eléctricas', horas: 8 },
      { nombre: 'Mantenimiento, Cuidado y Almacenamiento de Herramientas y Equipos', horas: 8 },
      { nombre: 'Generalidades de Primeros Auxilios, Hemorragias, RCP', horas: 8 },
      { nombre: 'Hojas de Datos de Seguridad de las Sustancias', horas: 8 },
      { nombre: 'Identificación de Áreas de Riesgo en el Área de Trabajo', horas: 8 },
      { nombre: 'Integración de la Comisión de Seguridad e Higiene NOM-019-STPS-2011', horas: 8 },
      { nombre: 'Integral Anexo SSPA (Número 3)', horas: 130 },
      { nombre: 'Equipo de Respiración Autónomo', horas: 8 },
    ],
  },
  {
    id: 'ambiental', titulo: 'Capacitación en Protección Ambiental', doble: true,
    cursos: [
      { nombre: 'Ley General para la Prevención y Gestión Integral de los Residuos', horas: 8 },
      { nombre: 'Administración Ambiental', horas: 8 },
      { nombre: 'Clasificación y Manejo de los Residuos Peligrosos (NOMs)', horas: 8 },
      { nombre: 'Manifestación de Impacto Ambiental', horas: 16 },
      { nombre: 'Gestión Integral de Residuos Sólidos Urbanos y de Manejo Especial', horas: 8 },
      { nombre: 'Plan de Contingencia Ambiental', horas: 16 },
      { nombre: 'Gestión y Auditoría Ambiental', horas: 8 },
      { nombre: 'Prevención y Control de Derrames', horas: 8 },
      { nombre: 'Ley de Aguas Nacionales y su Reglamento', horas: 20 },
      { nombre: 'Protección Ambiental', horas: 8 },
      { nombre: 'Ley de Vertimientos en las Zonas Marinas Mexicanas', horas: 8 },
      { nombre: 'SASISOPA — Seguridad Industrial, Operativa y Protección Ambiental', horas: 8 },
      { nombre: 'Ley General de Equilibrio Ecológico y la Protección al Ambiente', horas: 24 },
    ],
  },
  {
    id: 'normas', titulo: 'Cursos de Normas STPS', doble: true,
    cursos: [
      { nombre: 'NOM-001-STPS-2008 — Edificios, Locales e Instalaciones', horas: 10 },
      { nombre: 'NOM-002-STPS-2010 — Prevención y Protección contra Incendios', horas: 10 },
      { nombre: 'NOM-006-STPS-2014', horas: 8 },
      { nombre: 'NOM-009-STPS-2011 — Trabajos en Alturas', horas: 16 },
      { nombre: 'NOM-017-STPS-2008 — Equipo de Protección Personal', horas: 10 },
      { nombre: 'NOM-018-STPS-2015 — Sistema GHS para Identificación de Peligros', horas: 8 },
      { nombre: 'NOM-020-STPS-2011 — Recipientes a Presión y Generadores de Vapor', horas: 16 },
      { nombre: 'NOM-026-STPS-2008 — Colores y Señales de Seguridad e Higiene', horas: 16 },
      { nombre: 'NOM-028-STPS-2012 — Seguridad en Procesos y Equipos Críticos', horas: 10 },
      { nombre: 'NOM-029-STPS-2011 — Mantenimiento de Instalaciones Eléctricas', horas: 10 },
      { nombre: 'NOM-030-STPS-2009 — Servicios Preventivos de Seguridad y Salud', horas: 16 },
    ],
  },
  {
    id: 'brigadas', titulo: 'Cursos de Brigadas de Emergencia', doble: false,
    cursos: [
      { nombre: 'Brigada de Búsqueda y Rescate', horas: 4 },
      { nombre: 'Brigada de Evacuación', horas: 4 },
      { nombre: 'Brigada de Prevención y Combate de Incendios', horas: 8 },
      { nombre: 'Brigada de Primeros Auxilios', horas: 8 },
      { nombre: 'Brigadas Multifuncionales — Incendios, Primeros Auxilios, Evacuación y Rescate', horas: 16 },
    ],
  },
  {
    id: 'especializados', titulo: 'Cursos Especializados', doble: false,
    cursos: [
      { nombre: 'Armado y Desmantelado en Andamios Atlas', horas: 8 },
      { nombre: 'Bloqueo y Etiquetado — Lock Out, Tag Out', horas: 8 },
      { nombre: 'Contraincendio Avanzado', horas: 4 },
      { nombre: 'Formación de Instructores', horas: 16 },
      { nombre: 'Implementación de la Norma ISO 45001', horas: 16 },
      { nombre: 'Metodología para Elaborar Análisis de Riesgos de los Procesos', horas: 36 },
      { nombre: 'Operación de Maniobras e Izaje', horas: 8 },
      { nombre: 'Trabajo en Alturas Teórico Práctico', horas: 8 },
    ],
  },
]

function Card({ curso }) {
  return (
    <div className="w-52 flex-none bg-white rounded-2xl p-5 flex flex-col justify-between transition-all hover:-translate-y-1"
      style={{border: '1px solid #d1fae5', borderLeft: '4px solid #22c55e', boxShadow: '0 2px 8px rgba(34,197,94,0.06)'}}>
      <div>
        <div className="inline-block font-display font-black text-base px-3 py-1 rounded-lg mb-3"
          style={{background: '#dcfce7', color: '#1a4731'}}>
          {curso.horas} HRS
        </div>
        <h3 className="font-semibold text-sm leading-snug" style={{color: '#0d2b1a'}}>
          {curso.nombre}
        </h3>
      </div>
      <a href={getWhatsAppLink(`Hola, quiero información y cotización del curso: ${curso.nombre} (${curso.horas} hrs)`)}
        target="_blank" rel="noopener noreferrer"
        className="mt-4 block w-full text-center text-white font-bold text-xs py-2.5 rounded-xl transition-colors"
        style={{background: '#0d2b1a'}}
        onMouseOver={e => e.target.style.background='#f97316'}
        onMouseOut={e => e.target.style.background='#0d2b1a'}>
        Solicitar info →
      </a>
    </div>
  )
}

export default function CursosGreenPro() {
  return (
    <section id="cursos" className="py-20" style={{background: '#f0faf4'}}>
      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-16 px-6">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase"
            style={{background: '#dcfce7', color: '#1a4731'}}>
            📋 Catálogo Oficial GREEN PRO
          </div>
          <h2 className="font-display font-black text-5xl mb-3" style={{color: '#0d2b1a', letterSpacing: '-1px'}}>
            Cursos <span style={{color: '#22c55e'}}>GREEN PRO</span>
          </h2>
          <p style={{color: '#4b7a5e'}} className="max-w-xl mx-auto">
            Selecciona el curso de tu interés y solicita información directo por WhatsApp.
          </p>
        </div>

        {/* Grupos */}
        <div className="flex flex-col gap-20">
          {grupos.map((grupo, gi) => (
            <div key={grupo.id}>
              <div className="text-center px-6 mb-8">
                <h2 className="font-display font-black text-3xl md:text-5xl" style={{color: '#0d2b1a'}}>
                  {grupo.titulo}
                </h2>
                <div className="w-16 h-1 rounded-full mt-3 mx-auto" style={{background: '#22c55e'}} />
              </div>

              {grupo.doble ? (
                <div className="overflow-x-auto scrollbar-hide px-6 pb-4">
                  <div className="flex flex-col gap-4" style={{width: 'max-content'}}>
                    <div className="flex gap-4">
                      {grupo.cursos.filter((_, i) => i % 2 === 0).map((c, i) => <Card key={i} curso={c} />)}
                    </div>
                    <div className="flex gap-4">
                      {grupo.cursos.filter((_, i) => i % 2 !== 0).map((c, i) => <Card key={i} curso={c} />)}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex gap-4 overflow-x-auto scrollbar-hide px-6 pb-4">
                  {grupo.cursos.map((c, i) => <Card key={i} curso={c} />)}
                </div>
              )}

              <div className="text-center mt-6">
                <a href={getWhatsAppLink(`Hola, quiero cotizar el grupo completo de: ${grupo.titulo}`)}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full transition-all text-sm"
                  style={{border: '2px solid #22c55e', color: '#1a4731'}}>
                  Cotizar grupo completo →
                </a>
              </div>

              {gi < grupos.length - 1 && (
                <div className="mx-6 mt-16" style={{borderTop: '1px solid #d1fae5'}} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
