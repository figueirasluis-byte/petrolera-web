'use client'
import { useState } from 'react'
import { getWhatsAppLink } from '../utils/whatsapp'

const grupos = [
  {
    id: 'sspa',
    titulo: 'Cursos de Capacitación en SSPA',
    icono: '🛡️',
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
      { nombre: 'Investigación y Análisis de Incidentes/Accidentes y Fallas mediante ACR', horas: 8 },
      { nombre: 'Manejo a la Defensiva', horas: 8 },
      { nombre: 'Manejo de Extintores', horas: 8 },
      { nombre: 'Manejo de Sustancias y Materiales Peligrosos', horas: 8 },
      { nombre: 'Mantenimiento u Operación de las Instalaciones Eléctricas', horas: 8 },
      { nombre: 'Mantenimiento, Cuidado y Almacenamiento de Herramientas y Equipos de Trabajo', horas: 8 },
      { nombre: 'Generalidades de los Primeros Auxilios, Hemorragias, RCP', horas: 8 },
      { nombre: 'Hojas de Datos de Seguridad de las Sustancias', horas: 8 },
      { nombre: 'Identificación de Áreas de Riesgo en el Área de Trabajo', horas: 8 },
      { nombre: 'Integración de la Comisión de Seguridad e Higiene (NOM-019-STPS-2011)', horas: 8 },
      { nombre: 'Integral Anexo SSPA (Número 3)', horas: 130 },
      { nombre: 'Equipo de Respiración Autónomo', horas: 8 },
    ],
  },
  {
    id: 'ambiental',
    titulo: 'Capacitación en Protección Ambiental',
    icono: '🌿',
    cursos: [
      { nombre: 'Ley General para la Prevención y Gestión Integral de los Residuos y su Reglamento', horas: 8 },
      { nombre: 'Administración Ambiental', horas: 8 },
      { nombre: 'Clasificación y Manejo de los Residuos Peligrosos (NOMs)', horas: 8 },
      { nombre: 'Manifestación de Impacto Ambiental', horas: 16 },
      { nombre: 'Gestión Integral de Residuos Sólidos Urbanos y Residuos de Manejo Especial', horas: 8 },
      { nombre: 'Plan de Contingencia Ambiental', horas: 16 },
      { nombre: 'Gestión y Auditoría Ambiental', horas: 8 },
      { nombre: 'Prevención y Control de Derrames', horas: 8 },
      { nombre: 'Ley de Aguas Nacionales y su Reglamento', horas: 20 },
      { nombre: 'Protección Ambiental', horas: 8 },
      { nombre: 'Ley de Vertimientos en las Zonas Marinas Mexicanas', horas: 8 },
      { nombre: 'SASISOPA — Sistema de Administración de Seguridad Industrial, Seguridad Operativa y Protección al Medio Ambiente', horas: 8 },
      { nombre: 'Ley General de Equilibrio Ecológico y la Protección al Ambiente y sus Reglamentos', horas: 24 },
    ],
  },
  {
    id: 'normas',
    titulo: 'Cursos de Normas STPS',
    icono: '📋',
    cursos: [
      { nombre: 'NOM-001-STPS-2008 — Edificios, Locales, Instalaciones y Áreas en los Centros de Trabajo', horas: 10 },
      { nombre: 'NOM-002-STPS-2010 — Prevención y Protección contra Incendios en los Centros de Trabajo', horas: 10 },
      { nombre: 'NOM-006-STPS-2014', horas: 8 },
      { nombre: 'NOM-009-STPS-2011 — Condiciones de Seguridad para Realizar Trabajos en Alturas', horas: 16 },
      { nombre: 'NOM-017-STPS-2008 — Equipo de Protección Personal, Uso y Manejo en los Centros de Trabajo', horas: 10 },
      { nombre: 'NOM-018-STPS-2015 — Sistema Globalmente Armonizado para la Identificación y Comunicación de Peligros', horas: 8 },
      { nombre: 'NOM-020-STPS-2011 — Recipientes Sujetos a Presión, Criogénicos y Generadores de Vapor', horas: 16 },
      { nombre: 'NOM-026-STPS-2008 — Colores y Señales de Seguridad e Higiene', horas: 16 },
      { nombre: 'NOM-028-STPS-2012 — Sistema para la Administración del Trabajo, Seguridad en los Procesos y Equipos Críticos', horas: 10 },
      { nombre: 'NOM-029-STPS-2011 — Mantenimiento de Instalaciones Eléctricas en los Centros de Trabajo', horas: 10 },
      { nombre: 'NOM-030-STPS-2009 — Servicios Preventivos de Seguridad y Salud en el Trabajo', horas: 16 },
    ],
  },
  {
    id: 'brigadas',
    titulo: 'Cursos de Brigadas de Emergencia',
    icono: '🚨',
    cursos: [
      { nombre: 'Brigada de Búsqueda y Rescate', horas: 4 },
      { nombre: 'Brigada de Evacuación', horas: 4 },
      { nombre: 'Brigada de Prevención y Combate de Incendios', horas: 8 },
      { nombre: 'Brigada de Primeros Auxilios', horas: 8 },
      { nombre: 'Brigadas Multifuncionales — Prevención y Combate de Incendios, Primeros Auxilios, Evacuación y Búsqueda y Rescate', horas: 16 },
    ],
  },
  {
    id: 'especializados',
    titulo: 'Cursos Especializados',
    icono: '⭐',
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

export default function CursosGreenPro() {
  const [abierto, setAbierto] = useState(null)

  const toggle = (id) => setAbierto(abierto === id ? null : id)

  return (
    <section id="cursos" className="bg-[#f8faff] py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse-dot" />
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">Catálogo Oficial</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a2744] mb-3">
            Catálogo de <span className="text-orange-500">Cursos SSPA</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Selecciona el grupo de tu interés y solicita información directa por WhatsApp.
          </p>
        </div>

        {/* Acordeón */}
        <div className="flex flex-col gap-4">
          {grupos.map((grupo) => {
            const isOpen = abierto === grupo.id
            return (
              <div key={grupo.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

                {/* Cabecera del grupo */}
                <button
                  onClick={() => toggle(grupo.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-orange-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{grupo.icono}</span>
                    <span className="font-black text-[#1a2744] text-lg">{grupo.titulo}</span>
                    <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2.5 py-1 rounded-full">
                      {grupo.cursos.length} cursos
                    </span>
                  </div>
                  <span className={`text-orange-500 text-xl font-black transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>

                {/* Lista de cursos */}
                {isOpen && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      {grupo.cursos.map((curso, i) => (
                        <div key={i}
                          className="flex items-center justify-between bg-[#f8faff] rounded-xl px-4 py-3 border border-gray-100 hover:border-orange-200 transition-colors group">
                          <div className="flex-1 mr-3">
                            <p className="text-sm font-semibold text-[#1a2744] leading-snug">{curso.nombre}</p>
                            <p className="text-xs text-orange-500 font-bold mt-0.5">{curso.horas} HRS</p>
                          </div>
                          <a
                            href={getWhatsAppLink(`Hola, quiero información sobre el curso: ${curso.nombre} (${curso.horas} hrs)`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-none bg-[#1a2744] hover:bg-orange-500 text-white text-xs font-semibold px-3 py-2 rounded-xl transition-colors whitespace-nowrap">
                            Info →
                          </a>
                        </div>
                      ))}
                    </div>

                    {/* Botón cotizar todo el grupo */}
                    <div className="mt-5 text-right">
                      <a
                        href={getWhatsAppLink(`Hola, quiero cotizar el grupo completo: ${grupo.titulo}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all">
                        Cotizar grupo completo →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
