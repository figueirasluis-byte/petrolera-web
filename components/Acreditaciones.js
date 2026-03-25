const logos = [
  { nombre: 'PEMEX SSPA',    img: '/logos/pemex.png'   },
  { nombre: 'CONOCER',       img: '/logos/conocer.jpg' },
  { nombre: 'IADC RigPass',  img: '/logos/iadc.png'    },
  { nombre: 'STPS',          img: '/logos/stps.png'    },
  { nombre: 'IPCET Tabasco', img: '/logos/ipcet.jpg'   },
]

export default function Acreditaciones() {
  // Triplicamos para que el loop nunca se vea cortado
  const all = [...logos, ...logos, ...logos]
  return (
    <div className="bg-white border-y border-gray-100 py-8 overflow-hidden">
      <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase mb-8">
        Acreditaciones y Membresías
      </p>
      <div className="flex gap-20 animate-marquee w-max items-center">
        {all.map((item, i) => (
          <div key={i} className="flex-none flex items-center justify-center opacity-70 hover:opacity-100 transition-all hover:scale-110">
            <img
              src={item.img}
              alt={item.nombre}
              className="h-14 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
