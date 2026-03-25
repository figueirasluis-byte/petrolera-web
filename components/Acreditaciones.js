const logos = [
  { nombre: 'PEMEX SSPA',    img: '/logos/pemex.png'   },
  { nombre: 'CONOCER',       img: '/logos/conocer.jpg' },
  { nombre: 'IADC RigPass',  img: '/logos/iadc.png'    },
  { nombre: 'STPS',          img: '/logos/stps.png'    },
  { nombre: 'IPCET Tabasco', img: '/logos/ipcet.jpg'   },
]

export default function Acreditaciones() {
  const all = [...logos, ...logos, ...logos]
  return (
    <div className="bg-white overflow-hidden py-8" style={{borderTop: '1px solid #d1fae5', borderBottom: '1px solid #d1fae5'}}>
      <p className="text-center text-xs font-semibold tracking-widest uppercase mb-8" style={{color: '#4b7a5e'}}>
        Acreditaciones y Membresías
      </p>
      <div className="flex gap-20 animate-marquee w-max items-center">
        {all.map((item, i) => (
          <div key={i} className="flex-none flex items-center gap-3 opacity-60 hover:opacity-100 transition-all hover:scale-105">
            <div className="w-2 h-2 rounded-full bg-green-400 flex-none" />
            <img src={item.img} alt={item.nombre} className="h-12 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}
